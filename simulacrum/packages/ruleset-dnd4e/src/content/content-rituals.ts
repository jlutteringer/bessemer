import { Content } from '@simulacrum/ruleset'
import { ContentSection } from '@simulacrum/ruleset/content'

export const RitualsSection = Content.defineSection('rituals', {
  content: {
    name: 'Rituals',
    description: `Rituals are complex ceremonies that create magic effects. You don’t memorize or prepare a ritual; a ritual is so long and complex that no one could ever commit the whole thing to memory. To perform a ritual, you need to read from a book or a scroll containing it.

A ritual book contains one or more rituals that you can use as often and as many times as you like, as long as you can spare the time and the components to perform the ritual.

A ritual scroll contains a single ritual, and you can perform the ritual from that scroll only once. After that, the magic contained in the scroll is expended, and the scroll turns to dust. Anyone can use a ritual scroll to perform the ritual it contains, as long as the appropriate components are expended.

This chapter explains the following:

- **[Acquiring and Mastering a Ritual](content:rituals/acquiring-and-mastering-a-ritual):** All about ritual books and scrolls, how you acquire them, and how you master a ritual.
- **[Performing a Ritual](content:rituals/performing-a-ritual):** How to perform a ritual, whether from a ritual book or scroll.
- **[How to Read a Ritual](content:rituals/how-to-read-a-ritual):** The specifics on how to understand a ritual’s description and effects.
- **[Ritual Descriptions](content:rituals/ritual-descriptions):** Descriptions of a wide variety of rituals, from binding rituals to warding rituals.`,
  },
})

export const AcquiringAndMasteringARitualSection = Content.defineSection('rituals/acquiring-and-mastering-a-ritual', {
  parent: RitualsSection,
  content: {
    name: 'Acquiring and Mastering a Ritual',
    description:
      'Before you can perform a ritual, you need to acquire a ritual book that contains it and master the ritual, or you need to acquire a ritual scroll.',
  },
})

export const AcquiringARitualBookSection = Content.defineSection('rituals/acquiring-a-ritual-book', {
  parent: AcquiringAndMasteringARitualSection,
  content: {
    name: 'Acquiring a Ritual Book',
    description: `You can buy ritual books or find them as treasure. You can also make a copy of an existing ritual book, and some classes give you free access to a number of rituals. [Wizards](trait:wizard) hold both their spells and their rituals in their [spellbooks](trait:wizard/spellbook).

**Buying a Ritual Book:** You can buy a ritual book for 50 gp. A ritual book is 128 pages long. Each ritual takes up a number of pages equal to its level. The description of each ritual gives its market price, which is the gold piece cost for a book containing that ritual or the cost to add the new ritual to your existing ritual book or spellbook (if there’s enough room in it).

**Finding a Ritual Book:** When you explore a ruined library, delve into a lost temple, or do away with a villainous wizard, you might discover tomes on arcane philosophy that contain rituals. Such ritual books are part of the treasure you acquire while adventuring.

**Creating a Ritual Book:** You can create a new ritual book by copying an existing one. You can’t make a ritual book for a ritual that’s higher level than you are, and you can’t make a book by copying a ritual scroll, because the scroll doesn’t contain the entire ritual.

When you create a ritual book or copy a ritual into an existing book, you don’t just write a series of words on each page; you bind some of the ritual’s magic into the book. Therefore, you need a book of the highest quality, exotic inks, and expensive components, with a total cost equal to the ritual’s market price. You don’t save any gold by creating a ritual book instead of buying it.

In addition to requiring gold, creating a ritual book or copying a ritual into an existing book takes time: 8 hours for a heroic tier ritual (1st–10th level), 16 hours for a paragon tier ritual (11th–20th level), and 24 hours for an epic tier ritual (21st–30th level).

If you copy a ritual that you haven’t already mastered, the time you spend copying it enables you to master the ritual.`,
  },
})

export const MasteringARitualSection = Content.defineSection('rituals/mastering-a-ritual', {
  parent: AcquiringAndMasteringARitualSection,
  content: {
    name: 'Mastering a Ritual',
    description: `Owning a ritual book isn’t enough to let you perform the ritual or rituals in it. You must first master a ritual by studying it for 8 uninterrupted hours. (If you gained a ritual by creating its book yourself or by obtaining it as a class feature, you have already mastered it.)

You must meet two requirements to master a ritual. You must have the [Ritual Caster](trait:feat/ritual-caster) feat ([clerics](trait:cleric/ritual-casting) and [wizards](trait:wizard/ritual-casting) get this feat at 1st level), and your level must equal or exceed the ritual’s level. If you meet those requirements and spend 8 hours studying a ritual, you can add it to your list of mastered rituals. As long as you have the ritual’s book handy, you can perform a mastered ritual whenever you want.

There’s no limit to the number of rituals you can master.`,
  },
})

export const AcquiringARitualScrollSection = Content.defineSection('rituals/acquiring-a-ritual-scroll', {
  parent: AcquiringAndMasteringARitualSection,
  content: {
    name: 'Acquiring a Ritual Scroll',
    description: `A ritual scroll is a single page of parchment, vellum, or paper.

**Buying a Ritual Scroll:** Like a ritual book, a ritual scroll can be purchased for the given market price.

**Finding a Ritual Scroll:** Ritual scrolls can also be found as treasure.

**Creating a Ritual Scroll:** You can create a ritual scroll by transcribing a ritual you have mastered. Creating a ritual scroll takes twice the amount of time as creating a ritual book but costs the same price.

**Limitation:** Even though a ritual scroll lets you perform a ritual, you can neither master a ritual from a scroll nor copy a scroll into a ritual book. A scroll is a condensed version of a ritual, partially cast and primed so that it only takes up a single page.`,
  },
})

export const PerformingARitualSection = Content.defineSection('rituals/performing-a-ritual', {
  parent: RitualsSection,
  content: {
    name: 'Performing a Ritual',
    description: `To perform a ritual that you have mastered, you spend a certain amount of time (specified in the ritual description) performing various actions appropriate to the ritual. The actions might include reading long passages out of the ritual book, scribing complex diagrams on the ground, burning special incense or sprinkling mystic reagents at appropriate times, or performing a long set of meticulous gestures. The specific activities required aren’t described in most ritual descriptions; they’re left to your imagination.

A ritual requires certain esoteric components, which you purchase before you perform the ritual and which are expended when the ritual is complete. Each ritual specifies the cost of the components you need.

If a ritual requires a skill check, the check usually determines the ritual’s effectiveness. Even if the check result is low, a ritual usually succeeds, but if the result is high, you can usually achieve better effects.`,
  },
})

export const AssistingInARitualSection = Content.defineSection('rituals/assisting-in-a-ritual', {
  parent: PerformingARitualSection,
  content: {
    name: 'Assisting in a Ritual',
    description: `Unless a ritual specifies otherwise, up to four of your allies can help you perform a ritual. Everyone assisting you must be within 5 squares of you, and each assistant must actively participate in the ritual for the entire time required to complete it. Your assistants need neither the [Ritual Caster](trait:feat/ritual-caster) feat nor knowledge of the specific ritual.

Your allies can assist you in two ways. First, if the ritual requires spending [healing surges](characteristic:healing-surges) or some other resource, willing allies can contribute those resources. (Certain rituals might allow unwilling participants to pay those costs as well, but such rituals involve sacrifices to malevolent gods or demon lords and are not found in the ritual books of most player characters.)

Second, your allies can assist with the skill check you make to complete a ritual, using the normal rules for cooperating on another character’s skill check ([page 179](content:skills/cooperation)).`,
  },
})

export const InterruptingARitualSection = Content.defineSection('rituals/interrupting-a-ritual', {
  parent: PerformingARitualSection,
  content: {
    name: 'Interrupting a Ritual',
    description:
      'At any time before a ritual is completed, you can stop it and suffer no ill effect. You don’t expend any components or pay any costs until a ritual is completed. You can’t resume a ritual that was interrupted, however, so you do lose the time you spent on an interrupted ritual.',
  },
})

export const UsingARitualScrollSection = Content.defineSection('rituals/using-a-ritual-scroll', {
  parent: PerformingARitualSection,
  content: {
    name: 'Using a Ritual Scroll',
    description: `A ritual scroll holds one use of a particular ritual. You can perform a scroll’s ritual even if you don’t have the [Ritual Caster](trait:feat/ritual-caster) feat, regardless of the level of the ritual. You still have to expend the components and supply any focus required by the ritual, and you can enlist your allies’ assistance. Once you have finished performing the ritual on a scroll, the scroll turns to dust. If the ritual is interrupted, the scroll remains intact.

**Time:** Casting a ritual from a scroll takes half the time indicated in a ritual’s description, since the creation of the scroll has primed the magic.`,
  },
})

export const SellingRitualBooksOrScrollsSection = Content.defineSection('rituals/selling-ritual-books-or-scrolls', {
  parent: RitualsSection,
  content: {
    name: 'Selling Ritual Books or Scrolls',
    description:
      'You can sell ritual books or ritual scrolls for half the market price of the rituals they contain, assuming that the DM agrees that demand for a particular ritual exists. Although you can try to sell copies of a ritual you know, doing so offers no financial gain, and there is limited demand for ritual books or scrolls. You pay the full cost to create a scroll and can typically sell it for only half value. In addition, the number of people in the world who can afford to perform an expensive ritual and who can succeed on the necessary skill checks is small, and many of the NPCs who are skilled enough and wealthy enough to be potential customers already have collections of ritual books available to them.',
  },
})

export const HowToReadARitualSection = Content.defineSection('rituals/how-to-read-a-ritual', {
  parent: RitualsSection,
  content: {
    name: 'How to Read a Ritual',
    description: 'Rituals are described in a consistent format, the elements of which are outlined below.',
  },
})

export const NameAndFlavorTextSection = Content.defineSection('rituals/name-and-flavor-text', {
  parent: HowToReadARitualSection,
  content: {
    name: 'Name and Flavor Text',
    description:
      'Beneath a ritual’s name is a short passage of flavor text that tells what a ritual accomplishes, sometimes expressing that information in terms of what the ritual looks like or sounds like as it’s being performed.',
  },
})

export const LevelSection = Content.defineSection('rituals/level', {
  parent: HowToReadARitualSection,
  content: {
    name: 'Level',
    description: 'Each ritual has a level. You have to be that level or higher to perform the ritual from a book or to copy it.',
  },
})

export const CategorySection = Content.defineSection('rituals/category', {
  parent: HowToReadARitualSection,
  content: {
    name: 'Category',
    description: `A ritual is classified in one or more categories, which describe the ritual’s general nature and function. Each of the nine ritual categories is associated with one or more skills (given in parentheses in the following list).

**Binding ([Arcana](characteristic:skill/arcana) or [Religion](characteristic:skill/religion)):** These rituals seek to lure, ensnare, control, or protect you from other beings, sometimes from other planes.

**Creation (Arcana or Religion):** These rituals are used to craft magic items and other special objects.

**Deception (Arcana):** Deception rituals cloak reality behind various facades.

**Divination (Arcana, [Nature](characteristic:skill/nature), or Religion):** These rituals provide advice, information, or guidance.

**Exploration (Arcana, Nature, or Religion):** A catch-all category, exploration rituals include a variety of effects useful in everyday adventuring.

**Restoration ([Heal](characteristic:skill/heal)):** These rituals remove ill effects from the living or bring back the dead.

**Scrying (Arcana):** Scrying rituals let the caster spy on locations, objects, or creatures.

**Travel (Arcana):** Travel rituals transport characters from one place, or plane, to another.

**Warding (Arcana):** These rituals provide various forms of protection.`,
  },
})

export const TimeSection = Content.defineSection('rituals/time', {
  parent: HowToReadARitualSection,
  content: {
    name: 'Time',
    description: 'Performing a ritual takes the specified amount of time. Using a scroll cuts that time in half.',
  },
})

export const DurationSection = Content.defineSection('rituals/duration', {
  parent: HowToReadARitualSection,
  content: {
    name: 'Duration',
    description:
      'This entry shows how long a ritual’s effects last after the completion of the ritual. The effects of a ritual usually last longer than those of a power.',
  },
})

export const ComponentCostSection = Content.defineSection('rituals/component-cost', {
  parent: HowToReadARitualSection,
  content: {
    name: 'Component Cost',
    description: `This is the value of the components that must be expended to perform a ritual. A ritual’s key skill determines the kind of components required.

- **Alchemical Reagents ([Arcana](characteristic:skill/arcana)):** Typically these are small vials full of powdered metals, rare earths, acids, salts, or extracts from creatures such as dragons or basilisks.
- **Mystic Salves ([Heal](characteristic:skill/heal)):** Restoration rituals use mystic salves, dabbed or painted on the creatures to be healed. These salves come in small jars and include blessed oils and unguents made from rare spices.
- **Rare Herbs ([Nature](characteristic:skill/nature)):** Rare herbs are usually collected and preserved during certain times of year, such as when the moon is full.
- **Sanctified Incense ([Religion](characteristic:skill/religion)):** Sanctified incense is prepared during certain religious rites and is burned as a powder or a stick.
- **Residuum (Any):** The concentrated magical substance that results from performing the Disenchant Magic Item ritual, _residuum_ can be used as a component for any ritual. You can’t usually buy it on the open market; you acquire it by draining it out of magic items.

You can use the components associated with a key skill for any ritual that uses that skill. For example, if you stock up on alchemical reagents, you can use them when you perform any Arcana-based ritual. Ritual components are not interchangeable; you can’t use alchemical reagents to perform a ritual requiring sanctified incense, for example. But you can use _residuum_ for any ritual.

You can buy ritual components at some shops, your allies can provide them (sharing the cost of a ritual with you), or you might find them as treasure. However you acquire components, record their value on your character sheet. When you perform a ritual, mark off the ritual’s cost from the appropriate components.

Some rituals’ descriptions note other costs, including [healing surges](characteristic:healing-surges) or a focus item (such as a mirror or a crystal ball for a scrying ritual). A focus item is not expended when you perform a ritual.`,
  },
})

export const MarketPriceSection = Content.defineSection('rituals/market-price', {
  parent: HowToReadARitualSection,
  content: {
    name: 'Market Price',
    description:
      'This entry is the cost to purchase a ritual book containing the ritual or to copy a ritual into an existing ritual book. A scroll containing a ritual costs the same amount.',
  },
})

export const KeySkillSection = Content.defineSection('rituals/key-skill', {
  parent: HowToReadARitualSection,
  content: {
    name: 'Key Skill',
    description: `A ritual’s key skill determines the type of components required to perform the ritual, and if a ritual requires a skill check, the key skill is used for the check. If this entry ends with “(no check),” then the ritual does not require a skill check.

If a ritual has more than one key skill, you choose which skill to use. Your choice determines both the components you use and the skill you use for any checks required by the ritual.

Unless a ritual’s description says otherwise, you make your skill check when you finish performing a ritual. You can’t take 10 on one of these skill checks.`,
  },
})

export const EffectsSection = Content.defineSection('rituals/effects', {
  parent: HowToReadARitualSection,
  content: {
    name: 'Effects',
    description: 'The text that follows the foregoing information describes what happens when you finish performing a ritual.',
  },
})

export const RitualDescriptionsSection = Content.defineSection('rituals/ritual-descriptions', {
  parent: RitualsSection,
  content: {
    name: 'Ritual Descriptions',
    description: 'The ritual descriptions use the words “character” and “creature” interchangeably.',
  },
})

export const RitualsByLevelSection = Content.defineSection('rituals/rituals-by-level', {
  parent: RitualDescriptionsSection,
  content: {
    name: 'Rituals by Level',
    description: `| Lvl | Ritual | Key Skill |
| :--- | :--- | :--- |
| 1 | [Animal Messenger](content:rituals/animal-messenger) | Nature |
| 1 | [Comprehend Language](content:rituals/comprehend-language) | Arcana |
| 1 | [Gentle Repose](content:rituals/gentle-repose) | Heal |
| 1 | [Magic Mouth](content:rituals/magic-mouth) | Arcana |
| 1 | [Make Whole](content:rituals/make-whole) | Arcana |
| 1 | [Secret Page](content:rituals/secret-page) | Arcana |
| 1 | [Silence](content:rituals/silence) | Arcana |
| 1 | [Tenser’s Floating Disk](content:rituals/tensers-floating-disk) | Arcana |
| 2 | [Endure Elements](content:rituals/endure-elements) | Arcana or Nature |
| 2 | [Eye of Alarm](content:rituals/eye-of-alarm) | Arcana |
| 2 | [Water Walk](content:rituals/water-walk) | Nature |
| 3 | [Detect Secret Doors](content:rituals/detect-secret-doors) | Arcana |
| 4 | [Arcane Lock](content:rituals/arcane-lock) | Arcana |
| 4 | [Enchant Magic Item](content:rituals/enchant-magic-item) | Arcana |
| 4 | [Hand of Fate](content:rituals/hand-of-fate) | Religion |
| 4 | [Knock](content:rituals/knock) | Arcana |
| 4 | [Travelers’ Feast](content:rituals/travelers-feast) | Nature |
| 5 | [Brew Potion](content:rituals/brew-potion) | Arcana or Religion |
| 5 | [Hallucinatory Item](content:rituals/hallucinatory-item) | Arcana |
| 5 | [Magic Circle](content:rituals/magic-circle) | Arcana |`,
  },
})

export const AnimalMessengerSection = Content.defineSection('rituals/animal-messenger', {
  parent: RitualDescriptionsSection,
  content: {
    name: 'Animal Messenger',
    description: `_You whisper to the animal before you, and it bounds off in the direction you point to carry your message._

**Level:** 1

**Category:** Exploration

**Time:** 10 minutes

**Duration:** Special

**Component Cost:** 10 gp

**Market Price:** 50 gp

**Key Skill:** [Nature](characteristic:skill/nature)

You target a nonhostile Tiny animal, such as a sparrow, a raven, a fox, or a carp. The animal must remain within 5 squares of you for the time necessary to perform the ritual. Once the ritual is complete, you whisper a message of up to 25 words to the animal and name a recipient and a location. The animal bounds off toward the location, in search of the recipient. The animal avoids danger along its path. Upon finding the recipient, the animal approaches until it is adjacent to the recipient, and then your whisper issues from the animal’s mouth, conveying the message. When the animal delivers its message or the ritual’s duration ends, your influence ends and the animal reverts to its natural behavior.

Your Nature check determines how long the animal is affected by the ritual.

| Nature Check Result | Duration |
| :--- | :--- |
| 19 or lower | 6 hours |
| 20–29 | 12 hours |
| 30–39 | 18 hours |
| 40 or higher | 24 hours |`,
  },
})

export const ArcaneLockSection = Content.defineSection('rituals/arcane-lock', {
  parent: RitualDescriptionsSection,
  content: {
    name: 'Arcane Lock',
    description: `_You bind a door so that intruders can’t easily pass. The door is limned with amber light, which fades to a soft glow, marking it as impassible to anyone other than you and your allies._

**Level:** 4

**Category:** Warding

**Time:** 10 minutes

**Duration:** Permanent

**Component Cost:** 25 gp

**Market Price:** 150 gp

**Key Skill:** [Arcana](characteristic:skill/arcana)

You lock a door, a window, a gate, a portcullis, or some other means of ingress. You can open the door normally, but those who don’t have your permission to use it find it locked.

Your Arcana check, with a +5 bonus, sets the DC for [Thievery](characteristic:skill/thievery) checks or [Strength](characteristic:strength) checks made to open the door.

When you perform the ritual, you can allow for certain other creatures or types of creatures to pass through the door normally, ignoring the ward’s effect. You can choose any or all (or none) of the following options:

**Password:** You can set a verbal password. If uttered within 5 squares of the portal, the speaker can ignore the ward for the next minute.

**Individuals:** You can designate up to ten other specific individuals who can ignore the ward at all times.

**Descriptions:** You can describe one or more categories of creatures who can ignore the ward at all times, using specific, observable characteristics such as species, type, size, or equipment carried or worn.

The Arcane Lock remains until you dismiss it, the door is destroyed, or until the ward is defeated, such as by the [Knock](content:rituals/knock) ritual or a successful Strength or Thievery check. Wherever you are, you instantly know if your Arcane Lock is defeated by one of these methods.`,
  },
})

export const BrewPotionSection = Content.defineSection('rituals/brew-potion', {
  parent: RitualDescriptionsSection,
  content: {
    name: 'Brew Potion',
    description: `_Liquids brew and bubble, coalescing the raw substance of magic into a form you can drink._

**Level:** 5

**Category:** Creation

**Time:** 1 hour

**Duration:** Permanent until consumed

**Component Cost:** Special

**Market Price:** 75 gp

**Key Skill:** [Arcana](characteristic:skill/arcana) or [Religion](characteristic:skill/religion) (no check)

You create a potion or an elixir (see [page 255](content:equipment/potions)) of your level or lower. The ritual’s component cost is equal to the price of the potion or the elixir you create.`,
  },
})

export const ComprehendLanguageSection = Content.defineSection('rituals/comprehend-language', {
  parent: RitualDescriptionsSection,
  content: {
    name: 'Comprehend Language',
    description: `_As you finish the ritual, the guttural language of the creatures before you clarifies into something you understand._

**Level:** 1

**Category:** Exploration

**Time:** 10 minutes

**Duration:** 24 hours

**Component Cost:** 10 gp

**Market Price:** 50 gp

**Key Skill:** [Arcana](characteristic:skill/arcana)

When beginning the ritual, choose a language you have heard or a piece of writing you have seen within the past 24 hours.

Using this ritual on a language you have heard allows you to understand it when spoken for the next 24 hours and, if your Arcana check result is 35 or higher, to speak the language fluently for the duration.

Using this ritual on a language you have seen as a piece of writing allows you to read the language for the next 24 hours and, if your Arcana check result is 35 or higher, to write the language in its native script or in any other script you know for the duration.

Using this ritual on a language you have both heard and seen as a piece of writing within the past 24 hours allows you to understand it in both forms for the next 24 hours, and an Arcana check result of 35 or higher allows you to speak and write the language.`,
  },
})

export const DetectSecretDoorsSection = Content.defineSection('rituals/detect-secret-doors', {
  parent: RitualDescriptionsSection,
  content: {
    name: 'Detect Secret Doors',
    description: `_With a smile and a wink, you show Soveliss the outline of the trapdoor he missed._

**Level:** 3

**Category:** Exploration

**Time:** 10 minutes

**Duration:** Instantaneous

**Component Cost:** 25 gp

**Market Price:** 125 gp

**Key Skill:** [Arcana](characteristic:skill/arcana)

Make an Arcana check. Use the result as a bonus to a [Perception](characteristic:skill/perception) check you immediately make to find any secret or hidden doors in your line of sight. If anyone aided you while performing this ritual, they can’t help you make the resulting Perception check.`,
  },
})

export const EnchantMagicItemSection = Content.defineSection('rituals/enchant-magic-item', {
  parent: RitualDescriptionsSection,
  content: {
    name: 'Enchant Magic Item',
    description: `_Magic drawn from the warp and weft of the universe infuses the item you hold in your hands._

**Level:** 4

**Category:** Creation

**Time:** 1 hour

**Duration:** Permanent

**Component Cost:** Special

**Market Price:** 175 gp

**Key Skill:** [Arcana](characteristic:skill/arcana) (no check)

You touch a normal item and turn it into a magic item of your level or lower. The ritual’s component cost is equal to the price of the magic item you create.

You can also use this ritual to resize magic armor (for example, shrink a fire giant’s magic armor to fit a halfling). There is no component cost for this use.`,
  },
})

export const EndureElementsSection = Content.defineSection('rituals/endure-elements', {
  parent: RitualDescriptionsSection,
  content: {
    name: 'Endure Elements',
    description: `_Neither the biting cold nor the searing heat troubles you anymore. You travel in arctic or desert wastes as comfortably as in temperate climes._

**Level:** 2

**Category:** Exploration

**Time:** 10 minutes

**Duration:** 24 hours

**Component Cost:** 20 gp

**Market Price:** 100 gp

**Key Skill:** [Arcana](characteristic:skill/arcana) or [Nature](characteristic:skill/nature) (no check)

The Endure Elements ritual lets you designate up to five ritual participants, including yourself, who ignore penalties associated with extremes of nonmagical weather.

An affected creature suffers no ill effects from ambient temperatures between –50 and 140 degrees Fahrenheit, and the creature’s equipment is likewise protected from the ravages of these temperatures and of precipitation.`,
  },
})

export const EyeOfAlarmSection = Content.defineSection('rituals/eye-of-alarm', {
  parent: RitualDescriptionsSection,
  content: {
    name: 'Eye of Alarm',
    description: `_You conjure forth a phantasmal sentry—a slender pillar 6 feet tall, topped with a floating, unblinking eye. The eye watches over your camp as you sleep and cries out an alert if danger approaches._

**Level:** 2

**Category:** Warding

**Time:** 30 minutes

**Duration:** 24 hours (special)

**Component Cost:** 25 gp

**Market Price:** 100 gp

**Key Skill:** [Arcana](characteristic:skill/arcana)

This ritual creates watchful eyes that you place in any square within 10 squares of where you perform the ritual. Each eye is located in a particular square; it is intangible and can’t be interacted with physically. The eyes are nearly invisible and have a [Stealth](characteristic:skill/stealth) check result of 20 + your level to avoid detection.

Your Arcana check determines how many eyes you can place and what type of vision or sensory ability they possess.

| Arcana Check Result | Eyes Created | Vision or Ability |
| :--- | :--- | :--- |
| 19 or lower | One | Normal |
| 20–39 | Three | Darkvision |
| 40 or higher | Five | Darkvision and tremorsense 12 squares |

The eyes do not hear, but they see well. Each uses your [Perception](characteristic:skill/perception) modifier, with a +5 bonus.

If an eye sees an intruder, it emits a loud warning sound defined by you during the ritual. This sound could be anything from a stentorian “Enemies approach!” to an owl’s screech to a fanfare of trumpets. The Perception DC to hear the eye’s sound is 0 (modified by distance as normal).

The eyes never consider you an intruder. In addition, you can designate any number of other ritual participants as nonintruders. When you perform the ritual, you can also designate one or more categories of creatures that the eyes will ignore. You can define these categories by obvious physical characteristics (such as height, weight, or body shape), creature type (such as humanoid), creature race (such as hill giant), or obvious equipment (such as a creature carrying a shield with a flame emblazoned upon it).

The ritual’s effects last for 24 hours or until you move more than 20 squares from all the eyes.

**Optional Focus:** You can extend the duration of this ritual indefinitely by using a focus of a small, jeweled eye made of silver and ruby, worth 100 gp. The ritual’s effects last as long as the focus remains within 20 squares of any of the eyes. You can hide or protect the ritual’s focus in any way you like, as long as it remains within 20 squares of the eyes.`,
  },
})

export const GentleReposeSection = Content.defineSection('rituals/gentle-repose', {
  parent: RitualDescriptionsSection,
  content: {
    name: 'Gentle Repose',
    description: `_Your practiced hands perform the ritual fast enough to preserve the body for a later casting of Raise Dead._

**Level:** 1

**Category:** Restoration

**Time:** 1 hour

**Duration:** Special

**Component Cost:** 10 gp

**Market Price:** 50 gp

**Key Skill:** [Heal](characteristic:skill/heal) (no check)

This ritual is performed on an adjacent corpse. It quintuples the time the corpse can lie dead and still be affected by Raise Dead or a similar ritual. Gentle Repose also protects the corpse from being raised as an undead creature for 150 days.`,
  },
})

export const HallucinatoryItemSection = Content.defineSection('rituals/hallucinatory-item', {
  parent: RitualDescriptionsSection,
  content: {
    name: 'Hallucinatory Item',
    description: `_At your command, a phantasm of the item you’ve pictured in your mind shimmers into being before you. It wavers once, twice, and then seems to take on solid form._

**Level:** 5

**Type:** Deception

**Time:** 10 minutes

**Duration:** 24 hours

**Component Cost:** 25 gp

**Market Price:** 250 gp

**Key Skill:** [Arcana](characteristic:skill/arcana)

You create the illusion of a single inanimate object that appears, to all intents and purposes, to be real. You can use this ritual to create an illusory wall, door, weapon, or other object.

Your Arcana check result determines the illusion’s maximum size.

| Arcana Check Result | Maximum Size |
| :--- | :--- |
| 19 or lower | Small |
| 20–29 | Medium |
| 30–39 | Large |
| 40 or higher | Huge |

Once you create the illusion, you cannot move it, and it can’t include moving parts.

Creatures that view or interact with the illusion are entitled to [Insight](characteristic:skill/insight) checks to detect the fact that it is false. This check’s DC equals your Arcana check result. A creature is allowed a check the first time it sees the illusion and each time it interacts with it. A creature that touches an illusion automatically determines that the image is a fake.`,
  },
})

export const HandOfFateSection = Content.defineSection('rituals/hand-of-fate', {
  parent: RitualDescriptionsSection,
  content: {
    name: 'Hand of Fate',
    description: `_A ghostly apparition appears to give you basic guidance about a course of action._

**Level:** 4

**Category:** Divination

**Time:** 10 minutes

**Duration:** 10 minutes

**Component Cost:** 70 gp

**Market Price:** 175 gp

**Key Skill:** [Religion](characteristic:skill/religion) (no check)

When you perform the ritual, ask up to three questions about possible courses of action. A translucent blue hand appears and indicates with a gesture what the most rewarding course of action is.

If you describe courses of action that refer to directions or specific objects, then the hand points toward the choice that bears the greatest reward. If you ask the hand, “Should we head down the stairs or through the doors?” then the hand responds by pointing either to the stairs or the doors. If you ask the hand, “Which of these three levers should we pull first?” then the hand responds by pointing to a lever.

If you describe only a single course of action, the ritual assumes that inaction is your other option. The hand either beckons you (to indicate that you should proceed) or gestures for you to halt. For example, the question “Should we explore the ruins of Solitronia?” results in the hand either beckoning you or gesturing for you to halt.

The hand can’t assess events in the far future; its judgment extends only to likely events in the next hour. If the hand can’t indicate a preference, the ritual has no effect and expends no components.

There are two drawbacks to using the ritual to aid your decisions. First, fate values rewards over risk, and this ritual provides guidance accordingly. It points you toward a high risk, high reward option before pointing you toward a low risk, low reward alternative. For example, if one tunnel leads to a dragon and great wealth and the other tunnel leads back to town, then the hand points toward the dragon. However, a high risk, low reward alternative is considered less rewarding than a low risk, low reward option.

Second, the hand can choose only the most rewarding course of action relative to the alternatives provided. That doesn’t mean that the indicated choice is necessarily a good idea, only that it’s a better idea than the other options you’ve indicated. In the example above, if all three levers activate traps, then the hand points toward the lever that triggers a trap less lethal than the others.`,
  },
})

export const KnockSection = Content.defineSection('rituals/knock', {
  parent: RitualDescriptionsSection,
  content: {
    name: 'Knock',
    description: `_A blue, glowing key appears in front of the door and disappears into it. The door glows amber for a moment and then unlocks._

**Level:** 4

**Category:** Exploration

**Time:** 10 minutes

**Duration:** Instantaneous

**Component Cost:** 35 gp, plus 1 [healing surge](characteristic:healing-surges)

**Market Price:** 175 gp

**Key Skill:** [Arcana](characteristic:skill/arcana)

The Knock ritual allows you to open a single locked door, chest, gate, or other object. It even works against portals sealed with the [Arcane Lock](content:rituals/arcane-lock) ritual or doors secured with bolts or bars that are on the far side, out of reach. You must defeat all the closures on a locked object to unlock it. You make one Arcana check per lock, bar, Arcane Lock, or similar closure. The object you unlock does not open automatically; you still must open it yourself after the ritual unlocks it.

Make an Arcana check with a +5 bonus in place of a [Thievery](characteristic:skill/thievery) check to open each lock or closure. (See the Thievery skill description, [page 189](characteristic:skill/thievery), for example DCs.) To undo bolts or bars you normally couldn’t reach, you must succeed on a DC 20 Arcana check.

If you use this ritual successfully against a portal protected by Arcane Lock, you destroy the Arcane Lock and its effects end.`,
  },
})

export const MagicCircleSection = Content.defineSection('rituals/magic-circle', {
  parent: RitualDescriptionsSection,
  content: {
    name: 'Magic Circle',
    description: `_The circle of symbols scratched into the ground glows and sparks briefly as the demon tests the boundary. “This will not save you for long!” it hisses._

**Level:** 5

**Category:** Binding

**Time:** 1 hour

**Duration:** Until broken

**Component Cost:** 100 gp

**Market Price:** 250 gp

**Key Skill:** [Arcana](characteristic:skill/arcana)

You inscribe a circle on the ground, a circle emblazoned with arcane symbols of protection. If drawn correctly, these symbols make it difficult for creatures of a particular origin to enter or pass. When performing the ritual, you choose aberrant, elemental, fey, immortal, natural, shadow, or all. The last option applies a –5 penalty to your check. The circle requires 1 minute to inscribe per square inside the circle (and it must be a circle).

An affected creature whose level is lower than your Arcana check result minus 10 cannot pass through the circle, affect creatures through the circle’s boundary, or affect the boundary in any way. Other creatures of an affected origin take force damage equal to your Arcana check result when passing through the boundary, but doing so breaks the circle. Unaffected creatures can take a [standard action](action-type:standard-action) to obscure the inscription and break the circle.`,
  },
})

export const MagicMouthSection = Content.defineSection('rituals/magic-mouth', {
  parent: RitualDescriptionsSection,
  content: {
    name: 'Magic Mouth',
    description: `_The stone wall grinds as it reshapes into the semblance of dry, cracked lips framing teeth like canting tombstones. “Beware!” it says._

**Level:** 1

**Category:** Exploration

**Time:** 10 minutes

**Duration:** Until discharged

**Component Cost:** 10 gp

**Market Price:** 50 gp

**Key Skill:** [Arcana](characteristic:skill/arcana) (no check)

You bind a message into a surface you touch. When conditions you set are met, the surface manifests a mouth and conveys your message, discharging the ritual. The mouth appears to be made out of the same material as the surface, but you otherwise decide the mouth’s appearance.`,
  },
})

export const MakeWholeSection = Content.defineSection('rituals/make-whole', {
  parent: RitualDescriptionsSection,
  content: {
    name: 'Make Whole',
    description: `_As you finish the ritual, the oaken door stands whole and unblemished as if Orten the Rager hadn’t just burst through it with murder in his eyes. It’s the least you can do after using the inn to ambush the infamous barbarian._

**Level:** 1

**Category:** Exploration

**Time:** 10 minutes

**Duration:** Permanent

**Component Cost:** Special

**Market Price:** 50 gp

**Key Skill:** [Arcana](characteristic:skill/arcana) (no check)

A single object that can fit in a 10-foot cube is completely repaired. The component cost is 20 percent of the item’s cost. In cases where you attempt to repair an item not on any price list, the DM determines the cost.`,
  },
})

export const SecretPageSection = Content.defineSection('rituals/secret-page', {
  parent: RitualDescriptionsSection,
  content: {
    name: 'Secret Page',
    description: `_You laugh through your broken teeth. The duke’s impersonator might have found your journal, but he’ll never see what you wrote there._

**Level:** 1

**Category:** Warding

**Time:** 10 minutes

**Duration:** Permanent

**Component Cost:** 10 gp

**Market Price:** 50 gp

**Key Skill:** [Arcana](characteristic:skill/arcana)

You ward writings so others cannot read them. Use of this ritual protects one page (maximum 250 words). You make the page appear not to exist, causing anyone other than you to ignore it; the page’s presence is blocked from a reader’s mind. You can choose instead to obscure the page with false writings, which you produce before performing the ritual. Other readers see the false text rather than the real text.

When you perform the ritual, make an Arcana check, with a +5 bonus. The result is the DC for a [Perception](characteristic:skill/perception) check to notice the concealed writing (readers use passive Perception unless they are specifically looking for concealed text).`,
  },
})

export const SilenceSection = Content.defineSection('rituals/silence', {
  parent: RitualDescriptionsSection,
  content: {
    name: 'Silence',
    description: `_Straining both your patience and your keen ears, you hear nothing in the duke’s private chamber. That’s why you’re so surprised to see the duke when you boldly enter._

**Level:** 1

**Category:** Warding

**Time:** 10 minutes

**Duration:** 24 hours

**Component Cost:** 30 gp

**Market Price:** 75 gp

**Key Skill:** [Arcana](characteristic:skill/arcana) (no check)

You ward a single room (or a burst 4 area), against eavesdropping. Creatures attempting to listen to something in the warded area from outside the area take a –10 penalty to their [Perception](characteristic:skill/perception) checks.`,
  },
})

export const TensersFloatingDiskSection = Content.defineSection('rituals/tensers-floating-disk', {
  parent: RitualDescriptionsSection,
  content: {
    name: 'Tenser’s Floating Disk',
    description: `_“Oh, this? It follows me everywhere, like a porter that never needs to rest.”_

**Level:** 1

**Category:** Exploration

**Time:** 10 minutes

**Duration:** 24 hours

**Component Cost:** 10 gp

**Market Price:** 50 gp

**Key Skill:** [Arcana](characteristic:skill/arcana)

| Arcana Check Result | Maximum Load |
| :--- | :--- |
| 9 or lower | 250 pounds |
| 10–24 | 500 pounds |
| 25–39 | 1,000 pounds |
| 40 or higher | 2,000 pounds |

You create a slightly concave, circular plane of force that floats a foot off the ground and can carry what you lay upon it. The disk is 3 feet in diameter and 1 inch deep at its center. It remains stationary unless you move more than 5 squares away from it, in which case it moves with your base [speed](characteristic:speed) once per round until it is within 5 squares of you. You can command the disk to move up to your speed as a [move action](action-type:move-action). If you are more than 5 squares from the disk for 2 consecutive rounds, the disk disappears, dropping whatever it was carrying.

Your Arcana check result determines the maximum load the disk can carry.`,
  },
})

export const TravelersFeastSection = Content.defineSection('rituals/travelers-feast', {
  parent: RitualDescriptionsSection,
  content: {
    name: 'Travelers’ Feast',
    description: `_Food for your entire group materializes out of the air, enough to sustain you through a long day’s march._

**Level:** 4

**Category:** Exploration

**Time:** 1 hour

**Duration:** 24 hours

**Component Cost:** 35 gp

**Market Price:** 175 gp

**Key Skill:** [Nature](characteristic:skill/nature) (no check)

You create food and water, enough to feed five Medium or Small creatures or two Large creatures for 24 hours. You designate the type of eaters when performing the ritual, and the ritual creates appropriate food (trail rations for people, grain for horses, and so on).

Any food or water created but uneaten disappears at the end of the duration.`,
  },
})

export const WaterWalkSection = Content.defineSection('rituals/water-walk', {
  parent: RitualDescriptionsSection,
  content: {
    name: 'Water Walk',
    description: `_You walk on the water as if it were dry land._

**Level:** 2

**Category:** Exploration

**Time:** 10 minutes

**Duration:** 1 hour

**Component Cost:** 20 gp

**Market Price:** 100 gp

**Key Skill:** [Nature](characteristic:skill/nature) (no check)

You or an ally can move on water as if it were solid ground. Rapids or choppy seas are considered difficult terrain. The target of this ritual can end its benefits as a [free action](action-type:free-action). The target can immerse itself in water or swim underwater if desired without needing to end the ritual.`,
  },
})

export const RitualsContent: Array<ContentSection> = [
  RitualsSection,
  AcquiringAndMasteringARitualSection,
  AcquiringARitualBookSection,
  MasteringARitualSection,
  AcquiringARitualScrollSection,
  PerformingARitualSection,
  AssistingInARitualSection,
  InterruptingARitualSection,
  UsingARitualScrollSection,
  SellingRitualBooksOrScrollsSection,
  HowToReadARitualSection,
  NameAndFlavorTextSection,
  LevelSection,
  CategorySection,
  TimeSection,
  DurationSection,
  ComponentCostSection,
  MarketPriceSection,
  KeySkillSection,
  EffectsSection,
  RitualDescriptionsSection,
  RitualsByLevelSection,
  AnimalMessengerSection,
  ArcaneLockSection,
  BrewPotionSection,
  ComprehendLanguageSection,
  DetectSecretDoorsSection,
  EnchantMagicItemSection,
  EndureElementsSection,
  EyeOfAlarmSection,
  GentleReposeSection,
  HallucinatoryItemSection,
  HandOfFateSection,
  KnockSection,
  MagicCircleSection,
  MagicMouthSection,
  MakeWholeSection,
  SecretPageSection,
  SilenceSection,
  TensersFloatingDiskSection,
  TravelersFeastSection,
  WaterWalkSection,
]
