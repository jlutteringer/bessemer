import { Content } from '@simulacrum/ruleset'

export const TraitGlossarySection = Content.defineSection('traits', {
  content: {
    name: 'Trait Glossary',
    description:
      'Traits are keywords that convey information about a rules element. This glossary lists the traits used in this book, in alphabetical order.',
  },
})

export const AberrationSection = Content.defineSection('traits/aberration', {
  parent: TraitGlossarySection,
  content: { name: 'Aberration', description: 'Aberrations are creatures from beyond the planes or corruptions of the natural order.' },
})

export const AcidSection = Content.defineSection('traits/acid', {
  parent: TraitGlossarySection,
  content: { name: 'Acid', description: 'Effects with this trait deal acid damage. Creatures with this trait have a connection to magical acid.' },
})

export const AgileSection = Content.defineSection('traits/agile', {
  parent: TraitGlossarySection,
  content: {
    name: 'Agile',
    description:
      'The multiple attack penalty you take with this weapon on the second attack on your turn is –4 instead of –5, and –8 instead of –10 on the third and subsequent attacks in the turn.',
  },
})

export const AirSection = Content.defineSection('traits/air', {
  parent: TraitGlossarySection,
  content: {
    name: 'Air',
    description:
      'Effects with the air trait either manipulate or conjure air. Those that manipulate air have no effect in a vacuum or an area without air. Creatures with this trait consist primarily of air or have a connection to magical air.\n\nPlanes with this trait consist mostly of open spaces and air of various levels of turbulence, though they also contain rare islands of floating stone and other elements and energies. Air planes usually have breathable atmospheres, though they might include clouds of acidic or toxic gas. Earth creatures often find themselves at a disadvantage within air planes, as there’s little solid ground for them to gain their bearings, which tends to at least make them uncomfortable.',
  },
})

export const AiuvarinSection = Content.defineSection('traits/aiuvarin', {
  parent: TraitGlossarySection,
  content: {
    name: 'Aiuvarin',
    description:
      'A creature with this trait has the aiuvarin versatile heritage. Aiuvarins are of mixed ancestry, including elves or other aiuvarins. An ability with this trait can be used or selected only by aiuvarins.',
  },
})

export const AlchemicalSection = Content.defineSection('traits/alchemical', {
  parent: TraitGlossarySection,
  content: {
    name: 'Alchemical',
    description:
      'Alchemical items are powered by reactions of alchemical reagents. Unless otherwise noted, alchemical items aren’t [magical](content:traits/magical) and don’t radiate a magical aura.\n\nAlchemical creatures are partially powered by alchemical reactions.',
  },
})

export const AmphibiousSection = Content.defineSection('traits/amphibious', {
  parent: TraitGlossarySection,
  content: {
    name: 'Amphibious',
    description:
      'An amphibious creature can breathe in water and in air, even outside of its preferred environment, usually indefinitely but at least for hours. These creatures often have a swim [Speed](characteristic:speed). Their bludgeoning and slashing unarmed Strikes don’t take the usual –2 penalty for being underwater.',
  },
})

export const AngelSection = Content.defineSection('traits/angel', {
  parent: TraitGlossarySection,
  content: { name: 'Angel', description: 'This family of celestials is native to the plane of Nirvana.' },
})

export const AnimalSection = Content.defineSection('traits/animal', {
  parent: TraitGlossarySection,
  content: {
    name: 'Animal',
    description:
      'An animal is a creature with a relatively low intelligence. It typically doesn’t have an Intelligence attribute modifier over –4, can’t speak languages, and can’t be trained in Intelligence-based skills.',
  },
})

export const AquaticSection = Content.defineSection('traits/aquatic', {
  parent: TraitGlossarySection,
  content: {
    name: 'Aquatic',
    description:
      'Aquatic creatures are at home underwater. Their bludgeoning and slashing unarmed Strikes don’t take the usual –2 penalty for being underwater. Aquatic creatures can breathe water but not air.',
  },
})

export const ArcaneSection = Content.defineSection('traits/arcane', {
  parent: TraitGlossarySection,
  content: {
    name: 'Arcane',
    description:
      'This magic comes from the arcane tradition, which is built on logic and rationality. Anything with this trait is magical.\n\nA creature with this trait is primarily constituted of or has a strong connection to arcane magic.',
  },
})

export const ArchetypeSection = Content.defineSection('traits/archetype', {
  parent: TraitGlossarySection,
  content: { name: 'Archetype', description: 'This feat belongs to an archetype.' },
})

export const ArchonSection = Content.defineSection('traits/archon', {
  parent: TraitGlossarySection,
  content: { name: 'Archon', description: 'This family of celestials protect Heaven.' },
})

export const AttachedSection = Content.defineSection('traits/attached', {
  parent: TraitGlossarySection,
  content: {
    name: 'Attached',
    description:
      "An attached weapon must be combined with another piece of gear to be used. The trait lists what type of item the weapon must be attached to. You must be wielding or wearing the item the weapon is attached to in order to attack with it. For example, shield spikes are attached to a shield, allowing you to attack with the spikes instead of a shield bash. An attached weapon is usually bolted onto or built into the item it’s attached to, and typically an item can have only one weapon attached to it. An attached weapon can be affixed to an item with 10 minutes of work and a successful DC 10 [Crafting](characteristic:skill/crafting) check; this includes the time needed to remove the weapon from a previous item, if necessary. Typically the weapon can't be used if the item it's attached to is broken. If an item is destroyed, its attached weapon can usually be salvaged.",
  },
})

export const AttackSection = Content.defineSection('traits/attack', {
  parent: TraitGlossarySection,
  content: {
    name: 'Attack',
    description:
      'An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.',
  },
})

export const AuditorySection = Content.defineSection('traits/auditory', {
  parent: TraitGlossarySection,
  content: {
    name: 'Auditory',
    description:
      'Auditory actions and effects rely on sound. An action with the auditory trait can be successfully performed only if the creature using the action can speak or otherwise produce the required sounds. A spell or effect with the auditory trait has its effect only if the target can hear it. This applies only to sound-based parts of the effect, as determined by the GM. This is different from a sonic effect, which still affects targets who can’t hear it (such as deaf targets) as long as the effect itself makes sound.',
  },
})

export const AuraSection = Content.defineSection('traits/aura', {
  parent: TraitGlossarySection,
  content: {
    name: 'Aura',
    description:
      'An aura is an emanation that continually ebbs out from you, affecting creatures within a certain radius. Aura can also refer to the magical signature of an item.',
  },
})

export const AzataSection = Content.defineSection('traits/azata', {
  parent: TraitGlossarySection,
  content: { name: 'Azata', description: 'This family of celestials is native to Elysium.' },
})

export const BackstabberSection = Content.defineSection('traits/backstabber', {
  parent: TraitGlossarySection,
  content: {
    name: 'Backstabber',
    description:
      'When you hit an [off-guard](content:conditions/off-guard) creature, this weapon deals 1 precision damage in addition to its normal damage. The precision damage increases to 2 if the weapon is a _+3 weapon_.',
  },
})

export const BackswingSection = Content.defineSection('traits/backswing', {
  parent: TraitGlossarySection,
  content: {
    name: 'Backswing',
    description:
      'You can use the momentum from a missed attack with this weapon to lead into your next attack. After missing with this weapon on your turn, you gain a +1 circumstance bonus to your next attack with this weapon before the end of your turn.',
  },
})

export const BardSection = Content.defineSection('traits/bard', {
  parent: TraitGlossarySection,
  content: { name: 'Bard', description: 'This indicates abilities from the [bard](trait:bard) class.' },
})

export const BeastSection = Content.defineSection('traits/beast', {
  parent: TraitGlossarySection,
  content: {
    name: 'Beast',
    description:
      'A creature similar to an animal but with an [Intelligence modifier](characteristic:intelligence) of –3 or higher is usually a beast. Unlike an animal, a beast might be able to speak and reason.',
  },
})

export const BombSection = Content.defineSection('traits/bomb', {
  parent: TraitGlossarySection,
  content: {
    name: 'Bomb',
    description:
      'An alchemical bomb combines volatile alchemical components that explode when the bomb hits a creature or object. Most alchemical bombs deal damage, though some produce other effects.',
  },
})

export const BulwarkSection = Content.defineSection('traits/bulwark', {
  parent: TraitGlossarySection,
  content: {
    name: 'Bulwark',
    description:
      'The armor covers you so completely that it provides benefits against some damaging effects. On [Reflex](characteristic:reflex) saves to avoid a damaging effect, such as a fireball, you add a +3 modifier instead of your [Dexterity modifier](characteristic:dexterity)',
  },
})

export const CantripSection = Content.defineSection('traits/cantrip', {
  parent: TraitGlossarySection,
  content: { name: 'Cantrip', description: 'A spell you can cast at will that is automatically heightened to half your level rounded up.' },
})

export const CelestialSection = Content.defineSection('traits/celestial', {
  parent: TraitGlossarySection,
  content: {
    name: 'Celestial',
    description:
      'Creatures that hail from or have a strong connection to the holy planes are called celestials. Celestials can survive the basic environmental effects of planes in the Outer Sphere.',
  },
})

export const ChangelingSection = Content.defineSection('traits/changeling', {
  parent: TraitGlossarySection,
  content: {
    name: 'Changeling',
    description:
      'A creature with this trait has the changeling versatile heritage. Changelings are the children of hags and members of other humanoid ancestries. An ability with this trait can be used or selected only by changelings.',
  },
})

export const ClericSection = Content.defineSection('traits/cleric', {
  parent: TraitGlossarySection,
  content: { name: 'Cleric', description: 'This indicates abilities from the [cleric](trait:cleric) class.' },
})

export const ColdSection = Content.defineSection('traits/cold', {
  parent: TraitGlossarySection,
  content: { name: 'Cold', description: 'Effects with this trait deal cold damage. Creatures with this trait have a connection to magical cold.' },
})

export const ComfortSection = Content.defineSection('traits/comfort', {
  parent: TraitGlossarySection,
  content: { name: 'Comfort', description: 'The armor is so comfortable that you can rest normally while wearing it.' },
})

export const CommonSection = Content.defineSection('traits/common', {
  parent: TraitGlossarySection,
  content: {
    name: 'Common',
    description:
      "Anything that doesn't list another rarity trait ([uncommon](content:traits/uncommon), [rare](content:traits/rare), or [unique](content:traits/unique)) automatically has the common trait. This rarity indicates that an ability, item, or spell is available to all players who meet the prerequisites for it. A creature of this rarity is generally known and can be summoned with the appropriate _summon_ spell.",
  },
})

export const CompositionSection = Content.defineSection('traits/composition', {
  parent: TraitGlossarySection,
  content: {
    name: 'Composition',
    description:
      'To cast a composition cantrip or focus spell, you use a type of [Performance](characteristic:skill/performance). If the spell requires an auditory performance, you might recite a poem, sing a song, or perform a dramatic monologue. If the spell requires a visual performance, you might dance or pantomime. You can cast only one composition spell each turn, and you can have only one active at a time. If you cast a new composition spell, any ongoing effects from your previous composition spell end immediately.',
  },
})

export const ConcealableSection = Content.defineSection('traits/concealable', {
  parent: TraitGlossarySection,
  content: {
    name: 'Concealable',
    description:
      'This weapon is designed to be inconspicuous or easily concealed. You gain a +2 circumstance bonus to [Stealth](characteristic:skill/stealth) checks and DCs to hide or conceal a weapon with this trait.',
  },
})

export const ConcentrateSection = Content.defineSection('traits/concentrate', {
  parent: TraitGlossarySection,
  content: { name: 'Concentrate', description: 'An action with this trait requires a degree of mental concentration and discipline.' },
})

export const ConsecrationSection = Content.defineSection('traits/consecration', {
  parent: TraitGlossarySection,
  content: {
    name: 'Consecration',
    description:
      'A consecration spell enhances an area for an extended period of time. A given area can have only a single consecration effect at a time. The new effect attempts to counteract any existing one in areas of overlap.',
  },
})

export const ConstructSection = Content.defineSection('traits/construct', {
  parent: TraitGlossarySection,
  content: {
    name: 'Construct',
    description:
      'A construct is an artificial creature empowered by a force other than vitality or void. Constructs are often [mindless](content:traits/mindless); they’re immune to [bleed damage](content:conditions/persistent-damage), [death effects](content:playing-the-game/death-effects), [disease](content:traits/disease), [healing](content:traits/healing), [nonlethal attacks](content:playing-the-game/nonlethal-attacks), [poison](content:traits/poison), [vitality](content:traits/vitality), [void](content:traits/void), and the [doomed](content:conditions/doomed), [drained](content:conditions/drained), [fatigued](content:conditions/fatigued), [paralyzed](content:conditions/paralyzed), [sickened](content:conditions/sickened), and [unconscious](content:conditions/unconscious) conditions; and they might have Hardness based on the materials used to construct their bodies. Constructs are not living creatures, nor are they undead. When reduced to 0 [Hit Points](characteristic:hit-points), a construct creature is destroyed.',
  },
})

export const ConsumableSection = Content.defineSection('traits/consumable', {
  parent: TraitGlossarySection,
  content: {
    name: 'Consumable',
    description:
      'An item with this trait can be used only once. Unless stated otherwise, it’s destroyed after activation. Consumable items include alchemical items and magical consumables such as scrolls and talismans. A character can [Craft](content:skills/craft) consumable items in batches of four.',
  },
})

export const CurseSection = Content.defineSection('traits/curse', {
  parent: TraitGlossarySection,
  content: {
    name: 'Curse',
    description:
      'A curse is an effect that places some long-term affliction on a creature. Curses are always magical and are typically the result of a spell or trap. Effects with this trait can be removed only by effects that specifically target curses.',
  },
})

export const DaemonSection = Content.defineSection('traits/daemon', {
  parent: TraitGlossarySection,
  content: { name: 'Daemon', description: 'A family of fiends from Abaddon.' },
})

export const DarknessSection = Content.defineSection('traits/darkness', {
  parent: TraitGlossarySection,
  content: {
    name: 'Darkness',
    description:
      'Darkness effects extinguish non-magical light in the area and can counteract less powerful magical light. You must usually target light magic with your darkness magic directly to counteract it, but some darkness spells automatically attempt to counteract light.',
  },
})

export const DeadlySection = Content.defineSection('traits/deadly', {
  parent: TraitGlossarySection,
  content: {
    name: 'Deadly',
    description:
      'On a critical hit, the weapon adds a weapon damage die of the listed size. Roll this after doubling the weapon’s damage. This increases to two dice if the weapon has a _greater striking rune_ and three dice if the weapon has a _major striking rune_. For instance, a rapier with a _greater striking rune_ deals 2d8 extra piercing damage on a critical hit. An ability that changes the size of the weapon’s normal damage dice doesn’t change the size of its deadly die.',
  },
})

export const DeathSection = Content.defineSection('traits/death', {
  parent: TraitGlossarySection,
  content: {
    name: 'Death',
    description:
      'An effect with the death trait kills you immediately if it reduces you to 0 HP. Some death effects can bring you closer to death or slay you outright without reducing you to 0 HP.',
  },
})

export const DedicationSection = Content.defineSection('traits/dedication', {
  parent: TraitGlossarySection,
  content: {
    name: 'Dedication',
    description:
      'Each archetype’s dedication feat represents your character’s dedicated effort learning a new set of abilities, making it impossible to split your focus and pursue another archetype at the same time. Once you take a dedication feat, you can’t select a different dedication feat until you complete your dedication by taking two other feats from your current archetype. You can’t retrain a dedication feat as long as you have any other feats from that archetype.',
  },
})

export const DemonSection = Content.defineSection('traits/demon', {
  parent: TraitGlossarySection,
  content: { name: 'Demon', description: 'A family of sinful fiends from the Outer Rifts.' },
})

export const DetectionSection = Content.defineSection('traits/detection', {
  parent: TraitGlossarySection,
  content: { name: 'Detection', description: 'Effects with this trait attempt to determine the presence or location of a person, object, or aura.' },
})

export const DevilSection = Content.defineSection('traits/devil', {
  parent: TraitGlossarySection,
  content: { name: 'Devil', description: 'A family of regimented fiends from Hell.' },
})

export const DinosaurSection = Content.defineSection('traits/dinosaur', {
  parent: TraitGlossarySection,
  content: { name: 'Dinosaur', description: 'These reptiles have survived from prehistoric times.' },
})

export const DisarmSection = Content.defineSection('traits/disarm', {
  parent: TraitGlossarySection,
  content: {
    name: 'Disarm',
    description:
      'You can use this weapon to [Disarm](content:skills/disarm) with the [Athletics](characteristic:skill/athletics) skill even if you don’t have a free hand. This uses the weapon’s reach (if different from your own) and adds the weapon’s item bonus to attack rolls (if any) as an item bonus to the Athletics check. If you critically fail a check to Disarm using the weapon, you can drop the weapon to take the effects of a failure instead of a critical failure. On a critical success, you still need a free hand if you want to take the item.',
  },
})

export const DiseaseSection = Content.defineSection('traits/disease', {
  parent: TraitGlossarySection,
  content: { name: 'Disease', description: 'An effect with this trait applies one or more diseases. A disease is typically an affliction.' },
})

export const DivineSection = Content.defineSection('traits/divine', {
  parent: TraitGlossarySection,
  content: {
    name: 'Divine',
    description:
      'This magic comes from the divine tradition, drawing power from deities or similar sources. Anything with this trait is magical.\n\nA creature with this trait is primarily constituted of or has a strong connection to divine magic.',
  },
})

export const DowntimeSection = Content.defineSection('traits/downtime', {
  parent: TraitGlossarySection,
  content: {
    name: 'Downtime',
    description:
      'A mode of play in which characters are not adventuring. Days pass quickly at the table, and characters engage in longterm activities.',
  },
})

export const DragonSection = Content.defineSection('traits/dragon', {
  parent: TraitGlossarySection,
  content: {
    name: 'Dragon',
    description:
      'Dragons are reptilian creatures, often winged or with the power of flight. Most can exhale magical energy and are immune to sleep and paralysis.',
  },
})

export const DromaarSection = Content.defineSection('traits/dromaar', {
  parent: TraitGlossarySection,
  content: {
    name: 'Dromaar',
    description:
      'A creature with this trait has the dromaar versatile heritage. Dromaars are of mixed ancestry, including orcs or other dromaars. An ability with this trait can be used or selected only by dromaars.',
  },
})

export const DruidSection = Content.defineSection('traits/druid', {
  parent: TraitGlossarySection,
  content: { name: 'Druid', description: 'This indicates abilities from the [druid](trait:druid) class.' },
})

export const DwarfSection = Content.defineSection('traits/dwarf', {
  parent: TraitGlossarySection,
  content: {
    name: 'Dwarf',
    description:
      'A creature with this trait is a member of the dwarf ancestry. Dwarves are stout folk who often live underground and typically have darkvision. An ability with this trait can be used or selected only by dwarves. An item with this trait is created and used by dwarves.',
  },
})

export const EarthSection = Content.defineSection('traits/earth', {
  parent: TraitGlossarySection,
  content: {
    name: 'Earth',
    description:
      'Effects with the earth trait either manipulate or conjure earth. Those that manipulate earth have no effect in an area without earth. Creatures with this trait consist primarily of earth or have a connection to magical earth.\n\nThese planes are mostly solid. Travelers arriving upon an earth plane risk suffocation if they don’t reach a cavern or some other air pocket within the plane’s solid matter. Creatures who can’t burrow are entombed in the plane’s substance and must attempt to dig their way toward an air pocket. Air creatures are ill at ease, as they rarely have the space to move freely through even the loftiest warrens.',
  },
})

export const ElectricitySection = Content.defineSection('traits/electricity', {
  parent: TraitGlossarySection,
  content: {
    name: 'Electricity',
    description: 'Effects with this trait deal electricity damage. A creature with this trait has a connection to magical electricity.',
  },
})

export const ElementalSection = Content.defineSection('traits/elemental', {
  parent: TraitGlossarySection,
  content: {
    name: 'Elemental',
    description: 'Elementals are creatures directly tied to an element and native to the elemental planes. Elementals don’t need to breathe.',
  },
})

export const ElfSection = Content.defineSection('traits/elf', {
  parent: TraitGlossarySection,
  content: {
    name: 'Elf',
    description:
      'A creature with this trait is a member of the elf ancestry. Elves are mysterious people with rich traditions of magic and scholarship who typically have low-light vision. An ability with this trait can be used or selected only by elves. A weapon with this trait is created and used by elves.',
  },
})

export const ElixirSection = Content.defineSection('traits/elixir', {
  parent: TraitGlossarySection,
  content: { name: 'Elixir', description: 'Elixirs are alchemical liquids that are used by drinking them.' },
})

export const EmotionSection = Content.defineSection('traits/emotion', {
  parent: TraitGlossarySection,
  content: {
    name: 'Emotion',
    description:
      'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
  },
})

export const EtherealSection = Content.defineSection('traits/ethereal', {
  parent: TraitGlossarySection,
  content: {
    name: 'Ethereal',
    description: 'Ethereal creatures are natives of the Ethereal Plane. They can survive the basic environmental effects of the Ethereal Plane.',
  },
})

export const ExplorationSection = Content.defineSection('traits/exploration', {
  parent: TraitGlossarySection,
  content: {
    name: 'Exploration',
    description: 'An activity with this trait takes more than a turn to use, and can usually be used only during exploration mode.',
  },
})

export const ExtradimensionalSection = Content.defineSection('traits/extradimensional', {
  parent: TraitGlossarySection,
  content: {
    name: 'Extradimensional',
    description:
      'This effect or item creates an extradimensional space. An extradimensional effect placed inside another extradimensional space ceases to function until it is removed.',
  },
})

export const FatalSection = Content.defineSection('traits/fatal', {
  parent: TraitGlossarySection,
  content: {
    name: 'Fatal',
    description:
      'The fatal trait includes a die size. On a critical hit, the weapon’s damage die increases to that die size instead of the normal die size, and the weapon adds one additional damage die of the listed size.',
  },
})

export const FearSection = Content.defineSection('traits/fear', {
  parent: TraitGlossarySection,
  content: {
    name: 'Fear',
    description: 'Fear effects evoke the emotion of fear. Effects with this trait always have the mental and emotion traits as well.',
  },
})

export const FeySection = Content.defineSection('traits/fey', {
  parent: TraitGlossarySection,
  content: { name: 'Fey', description: 'Creatures of the First World are called the fey' },
})

export const FiendSection = Content.defineSection('traits/fiend', {
  parent: TraitGlossarySection,
  content: {
    name: 'Fiend',
    description:
      'Creatures that hail from or have a strong connection to the unholy planes are called fiends. Fiends can survive the basic environmental effects of planes in the Outer Sphere.',
  },
})

export const FighterSection = Content.defineSection('traits/fighter', {
  parent: TraitGlossarySection,
  content: { name: 'Fighter', description: 'This indicates abilities from the [fighter](trait:fighter) class.' },
})

export const FinesseSection = Content.defineSection('traits/finesse', {
  parent: TraitGlossarySection,
  content: {
    name: 'Finesse',
    description:
      'You can use your [Dexterity modifier](characteristic:dexterity) instead of your [Strength modifier](characteristic:strength) on attack rolls using this melee weapon. You still calculate damage using Strength.',
  },
})

export const FireSection = Content.defineSection('traits/fire', {
  parent: TraitGlossarySection,
  content: {
    name: 'Fire',
    description:
      'Effects with the fire trait deal fire damage or either conjure or manipulate fire. Those that manipulate fire have no effect in an area without fire. Creatures with this trait consist primarily of fire or have a connection to magical fire.\n\nPlanes with this trait are composed of flames that continually burn with no fuel source. Fire planes are extremely hostile to non-fire creatures. Unprotected wood, paper, cloth, and other flammable materials catch fire almost immediately, and creatures wearing unprotected flammable clothing catch fire, typically taking 1d6 persistent fire damage. Extraplanar creatures take moderate environmental fire damage at the end of each round (sometimes minor environmental damage in safer areas, or major or massive damage in even more fiery areas). Ice creatures are extremely uncomfortable on a fire plane, assuming they don’t outright melt in the heat.',
  },
})

export const FlexibleSection = Content.defineSection('traits/flexible', {
  parent: TraitGlossarySection,
  content: {
    name: 'Flexible',
    description:
      'The armor is pliable and doesn’t hinder most actions. You don’t apply its check penalty to [Acrobatics](characteristic:skill/acrobatics) or [Athletics](characteristic:skill/athletics) checks.',
  },
})

export const FlourishSection = Content.defineSection('traits/flourish', {
  parent: TraitGlossarySection,
  content: {
    name: 'Flourish',
    description:
      'Actions with the flourish trait are special techniques that require too much exertion for you to perform frequently. You can use only one action with the flourish trait per round.',
  },
})

export const FocusSection = Content.defineSection('traits/focus', {
  parent: TraitGlossarySection,
  content: {
    name: 'Focus',
    description: 'A spell you can cast by spending a Focus Point, and that is automatically heightened to half your level rounded up.',
  },
})

export const ForceSection = Content.defineSection('traits/force', {
  parent: TraitGlossarySection,
  content: { name: 'Force', description: 'Effects with this trait deal force damage or create objects made of pure magical force.' },
})

export const ForcefulSection = Content.defineSection('traits/forceful', {
  parent: TraitGlossarySection,
  content: {
    name: 'Forceful',
    description:
      'This weapon becomes more dangerous as you build momentum. When you attack with it more than once on your turn, the second attack gains a circumstance bonus to damage equal to the number of weapon damage dice, and each later attack gains a circumstance bonus to damage equal to double the number of damage dice.',
  },
})

export const FortuneSection = Content.defineSection('traits/fortune', {
  parent: TraitGlossarySection,
  content: {
    name: 'Fortune',
    description:
      'A fortune effect beneficially alters how you roll your dice. You can never have more than one fortune effect alter a single roll. If multiple fortune effects would apply, you have to pick which to use. If a fortune effect and a [misfortune](content:traits/misfortune) effect would apply to the same roll, the two cancel each other out, and you roll normally.',
  },
})

export const FreeHandSection = Content.defineSection('traits/free-hand', {
  parent: TraitGlossarySection,
  content: {
    name: 'Free-Hand',
    description:
      'This weapon doesn’t take up your hand, usually because it is built into your armor. A free-hand weapon can’t be Disarmed. You can use the hand covered by your free-hand weapon to wield other items, perform manipulate actions, and so on. You can’t attack with a free-hand weapon if you’re wielding anything in that hand or otherwise using that hand. When you’re not wielding anything and not otherwise using the hand, you can use abilities that require you to have a hand free as well as those that require you to be wielding a weapon in that hand. Each of your hands can have only one free-hand weapon on it.',
  },
})

export const FungusSection = Content.defineSection('traits/fungus', {
  parent: TraitGlossarySection,
  content: { name: 'Fungus', description: 'Fungal creatures have the fungus trait. They are distinct from normal fungi.' },
})

export const GeneralSection = Content.defineSection('traits/general', {
  parent: TraitGlossarySection,
  content: {
    name: 'General',
    description:
      'A type of feat that any character can select, regardless of ancestry and class, as long as they meet the prerequisites. You can select a feat with this trait when your class grants a general feat.',
  },
})

export const GiantSection = Content.defineSection('traits/giant', {
  parent: TraitGlossarySection,
  content: { name: 'Giant', description: 'Giants are massive humanoid creatures.' },
})

export const GnomeSection = Content.defineSection('traits/gnome', {
  parent: TraitGlossarySection,
  content: {
    name: 'Gnome',
    description:
      'A creature with this trait is a member of the gnome ancestry. Gnomes are small people skilled at magic who seek out new experiences and usually have low-light vision. An ability with this trait can be used or selected only by gnomes. A weapon with this trait is created and used by gnomes.',
  },
})

export const GoblinSection = Content.defineSection('traits/goblin', {
  parent: TraitGlossarySection,
  content: {
    name: 'Goblin',
    description:
      'A creature with this trait is a small, frantic goblinoid. Goblins tend to have darkvision. An ability with this trait can be used or chosen only by goblins. A weapon with this trait is created and used by goblins.',
  },
})

export const GrappleSection = Content.defineSection('traits/grapple', {
  parent: TraitGlossarySection,
  content: {
    name: 'Grapple',
    description:
      "You can use this weapon to [Grapple](content:skills/grapple) with the [Athletics](characteristic:skill/athletics) skill even if you don't have a free hand. This uses the weapon's reach (if different from your own) and adds the weapon's item bonus to attack rolls as an item bonus to the Athletics check. If you critically fail a check to Grapple using the weapon, you can drop the weapon to take the effects of a failure instead of a critical failure.",
  },
})

export const HagSection = Content.defineSection('traits/hag', {
  parent: TraitGlossarySection,
  content: { name: 'Hag', description: 'These malevolent spellcasters form covens.' },
})

export const HalflingSection = Content.defineSection('traits/halfling', {
  parent: TraitGlossarySection,
  content: {
    name: 'Halfling',
    description:
      'A creature with this trait is a member of the halfling ancestry. These small people are friendly wanderers considered to be lucky. An ability with this trait can be used or selected only by halflings. A weapon with this trait is created and used by halflings.',
  },
})

export const HealingSection = Content.defineSection('traits/healing', {
  parent: TraitGlossarySection,
  content: {
    name: 'Healing',
    description:
      'A healing effect restores a creature’s body, typically by restoring [Hit Points](characteristic:hit-points), but sometimes by removing diseases or other debilitating effects.',
  },
})

export const HexSection = Content.defineSection('traits/hex', {
  parent: TraitGlossarySection,
  content: {
    name: 'Hex',
    description:
      'A hex is a spell caused by your patron’s direct attention and intervention. Your patron does not take well to being disturbed repeatedly, so you can cast only one spell that has the hex trait each turn; attempts to use a second automatically fail and usually cause your familiar to hiss in displeasure as your patron rejects your call.',
  },
})

export const HolySection = Content.defineSection('traits/holy', {
  parent: TraitGlossarySection,
  content: {
    name: 'Holy',
    description:
      'Effects with the holy trait are tied to powerful magical forces of benevolence and virtue. They often have stronger effects on unholy creatures. Creatures with this trait are strongly devoted to holy causes and often have weakness to [unholy](content:traits/unholy). If a creature with weakness to holy uses a holy item or effect, it takes damage from its weakness.',
  },
})

export const HryngarSection = Content.defineSection('traits/hryngar', {
  parent: TraitGlossarySection,
  content: {
    name: 'Hryngar',
    description: 'Subterranean kin of the dwarves, hryngars typically have darkvision, resist poison, and recoil from bright light.',
  },
})

export const HumanSection = Content.defineSection('traits/human', {
  parent: TraitGlossarySection,
  content: {
    name: 'Human',
    description:
      'A creature with this trait is a member of the human ancestry. Humans are a diverse array of people known for their adaptability. An ability with this trait can be used or selected only by humans.',
  },
})

export const HumanoidSection = Content.defineSection('traits/humanoid', {
  parent: TraitGlossarySection,
  content: {
    name: 'Humanoid',
    description: 'Humanoid creatures reason and act much like humans. They typically stand upright and have two arms and two legs.',
  },
})

export const IllusionSection = Content.defineSection('traits/illusion', {
  parent: TraitGlossarySection,
  content: {
    name: 'Illusion',
    description:
      "Effects and magic items with this trait involve false sensory stimuli. Magic with the illusion trait creates false sensory stimuli. Sometimes illusions allow creatures a chance to disbelieve the spell, which lets the creature ignore the spell if it succeeds at doing so. This usually happens when a creature Seeks, Interacts, or otherwise spends actions to engage with the illusion, comparing the result of its [Perception](characteristic:perception) check (or another check or save the GM chooses) to the caster's [spell DC](characteristic:spell-dc). Mental illusions typically provide rules in the spell's description for disbelieving the effect (usually via a [Will save](characteristic:will)).\n\nIf a creature engages with an illusion in a way that would prove it's not what it seems, the creature might know that an illusion is present, but it still can't ignore the illusion without successfully disbelieving it. Disbelieving a visual illusion makes it and those things it blocks seem hazy and indistinct, which might block vision enough to leave the other side [concealed](content:conditions/concealed).",
  },
})

export const IncapacitationSection = Content.defineSection('traits/incapacitation', {
  parent: TraitGlossarySection,
  content: {
    name: 'Incapacitation',
    description:
      'An ability with this trait can take a character completely out of the fight or even kill them, and it’s harder to use on a more powerful character. If a spell has the incapacitation trait, any creature of more than twice the spell’s rank treats the result of their check to prevent being incapacitated by the spell as one degree of success better, or the result of any check the spellcaster made to incapacitate them as one degree of success worse. If any other effect has the incapacitation trait, a creature of higher level than the item, creature, or hazard generating the effect gains the same benefits.',
  },
})

export const JoustingSection = Content.defineSection('traits/jousting', {
  parent: TraitGlossarySection,
  content: {
    name: 'Jousting',
    description:
      "The weapon is suited for mounted combat with a harness or similar means. When mounted, if you moved at least 10 feet on the action before your attack, add a circumstance bonus to damage for that attack equal to the number of damage dice for the weapon. In addition, while mounted, you can wield the weapon in one hand, changing the damage die to the listed value. As a part of your action to Mount a creature, you can switch your grip on a jousting weapon to one-handed. After that, [changing your grip takes the same actions](content:equipment/interact). If you dismount while wielding a jousting weapon onehanded, you can switch to using two hands as part of that action if you have a hand free at that point. If not, you'll still be holding the weapon in one hand, but not wielding it.",
  },
})

export const LeshySection = Content.defineSection('traits/leshy', {
  parent: TraitGlossarySection,
  content: {
    name: 'Leshy',
    description:
      'A creature with this trait is a member of the leshy ancestry. These small plant or fungus creatures are humanoid in form. An ability with this trait can be used or selected only by leshies. A weapon with this trait is created and used by leshies.',
  },
})

export const LightSection = Content.defineSection('traits/light', {
  parent: TraitGlossarySection,
  content: {
    name: 'Light',
    description:
      'Light effects overcome non-magical darkness in the area and can counteract magical darkness. You must usually target darkness magic with your light magic directly to counteract the darkness, but some light spells automatically attempt to counteract darkness.',
  },
})

export const LineageSection = Content.defineSection('traits/lineage', {
  parent: TraitGlossarySection,
  content: {
    name: 'Lineage',
    description:
      'A feat with this trait indicates a character’s descendance from a particular type of creature. You can have only one lineage feat. You can select a lineage feat only at 1st level, and you can’t retrain into or out of these feats.',
  },
})

export const LinguisticSection = Content.defineSection('traits/linguistic', {
  parent: TraitGlossarySection,
  content: {
    name: 'Linguistic',
    description:
      'An effect with this trait depends on language comprehension. A linguistic effect that targets a creature works only if the target understands the language you are using.',
  },
})

export const MagicalSection = Content.defineSection('traits/magical', {
  parent: TraitGlossarySection,
  content: {
    name: 'Magical',
    description:
      'Something with the magical trait is imbued with magical energies not tied to a specific tradition of magic. Some items or effects are closely tied to a particular tradition of magic. In these cases, the item has the arcane, divine, occult, or primal trait instead of the magical trait. Any of these traits indicate that the item is magical.',
  },
})

export const ManipulateSection = Content.defineSection('traits/manipulate', {
  parent: TraitGlossarySection,
  content: {
    name: 'Manipulate',
    description:
      'You must physically manipulate an item or make gestures to use an action with this trait. Creatures without a suitable appendage can’t perform actions with this trait. Manipulate actions often trigger reactions.',
  },
})

export const MechanicalSection = Content.defineSection('traits/mechanical', {
  parent: TraitGlossarySection,
  content: { name: 'Mechanical', description: 'A hazard with this trait is a constructed physical object.' },
})

export const MentalSection = Content.defineSection('traits/mental', {
  parent: TraitGlossarySection,
  content: { name: 'Mental', description: 'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.' },
})

export const MetalSection = Content.defineSection('traits/metal', {
  parent: TraitGlossarySection,
  content: {
    name: 'Metal',
    description:
      'Effects with the metal trait conjure or manipulate metal. Those that manipulate metal have no effect in an area without metal. Creatures with this trait consist primarily of metal or have a connection to magical metal.\n\nThese planes consist of chaotic and shifting structures and oceans of metal. Metal planes tend to exist in a state of change and decay, leaving plentiful pockets of air for visitors to breathe or move within. Creatures unlucky enough to be entombed in the plane’s substance risk suffocation if they can’t phase through metal. Wood creatures find the lack of stability and soil on a metal plane disconcerting and often fail to thrive in such environments.',
  },
})

export const MindlessSection = Content.defineSection('traits/mindless', {
  parent: TraitGlossarySection,
  content: {
    name: 'Mindless',
    description:
      'A mindless creature has either programmed or rudimentary mental attributes. Most, if not all, of their mental attribute modifiers are –5. They are immune to all mental effects.',
  },
})

export const MinionSection = Content.defineSection('traits/minion', {
  parent: TraitGlossarySection,
  content: {
    name: 'Minion',
    description:
      "Minions are creatures that directly serve another creature. Your minion acts on your turn in combat, once per turn, when you spend an action to issue it commands. For an animal companion, you [Command an Animal](content:skills/command-an-animal); for a minion that's a spell or magic item effect, like a summoned minion, you [Sustain](content:playing-the-game/sustain) the effect; if not otherwise specified, you issue a verbal command as a single action with the [auditory](content:traits/auditory) and [concentrate](content:traits/concentrate) traits. If given no commands, minions use no actions except to defend themselves or to escape obvious harm. If left unattended for long enough, typically 1 minute, [mindless](content:traits/mindless) minions usually don't act, animals follow their instincts, and sapient minions act how they please. You can have a maximum of four minions under your control.\n\nA minion has only 2 actions and 0 reactions per turn, though certain conditions (such as [slowed](content:conditions/slowed) or [quickened](content:conditions/quickened)) or abilities might give them additional actions or a reaction. Alterations to a minion's actions occur when they gain their actions for the round. A minion can't control other creatures.",
  },
})

export const MisfortuneSection = Content.defineSection('traits/misfortune', {
  parent: TraitGlossarySection,
  content: {
    name: 'Misfortune',
    description:
      'A misfortune effect detrimentally alters how you roll your dice. You can never have more than one misfortune effect alter a single roll. If multiple misfortune effects would apply, the GM decides which is worse and applies it. If a [fortune](content:traits/fortune) effect and a misfortune effect would apply to the same roll, the two cancel each other out, and you roll normally.',
  },
})

export const MonitorSection = Content.defineSection('traits/monitor', {
  parent: TraitGlossarySection,
  content: {
    name: 'Monitor',
    description:
      'Creatures that hail from or have a strong connection to Axis, the Boneyard, or the Maelstrom are called monitors. Monitors can survive the basic environmental effects of planes in the Outer Sphere.',
  },
})

export const MonkSection = Content.defineSection('traits/monk', {
  parent: TraitGlossarySection,
  content: { name: 'Monk', description: 'Abilities with this trait are from the monk class. A weapon with this trait is primarily used by monks.' },
})

export const MorphSection = Content.defineSection('traits/morph', {
  parent: TraitGlossarySection,
  content: {
    name: 'Morph',
    description:
      "Effects that slightly alter a creature's form have the morph trait. Any Strikes specifically granted by a morph effect are magical. You can be affected by multiple morph spells at once, but if you morph the same body part more than once, the second morph effect attempts to [counteract](content:playing-the-game/counteracting) the first (in the same manner as two [polymorph](content:traits/polymorph) effects, described in that trait).\n\nYour morph effects might also end if you are polymorphed and the polymorph effect invalidates or overrides your morph effect. The GM determines which morph effects can be used together and which can't.",
  },
})

export const MoveSection = Content.defineSection('traits/move', {
  parent: TraitGlossarySection,
  content: { name: 'Move', description: 'An action with this trait involves moving from one space to another.' },
})

export const MulticlassSection = Content.defineSection('traits/multiclass', {
  parent: TraitGlossarySection,
  content: {
    name: 'Multiclass',
    description:
      'Archetypes with the multiclass trait represent diversifying your training into another class’s specialties. You can’t select a multiclass archetype’s dedication feat if you are a member of the class of the same name.',
  },
})

export const NephilimSection = Content.defineSection('traits/nephilim', {
  parent: TraitGlossarySection,
  content: {
    name: 'Nephilim',
    description:
      'A creature with this trait has the nephilim versatile heritage. Nephilim are planar scions descended from immortal beings from other planes. An ability with this trait can be used or selected only by nephilim.',
  },
})

export const NoisySection = Content.defineSection('traits/noisy', {
  parent: TraitGlossarySection,
  content: {
    name: 'Noisy',
    description:
      'This armor is loud and likely to alert others to your presence. The armor’s check penalty applies to [Stealth](characteristic:skill/stealth) checks even if you have the required [Strength modifier](characteristic:strength).',
  },
})

export const NonlethalSection = Content.defineSection('traits/nonlethal', {
  parent: TraitGlossarySection,
  content: {
    name: 'Nonlethal',
    description:
      'Attacks with this weapon are [nonlethal](content:playing-the-game/nonlethal-attacks), and are used to knock creatures [unconscious](content:conditions/unconscious) instead of kill them. You can use a nonlethal weapon to make a lethal attack with a –2 circumstance penalty.',
  },
})

export const OccultSection = Content.defineSection('traits/occult', {
  parent: TraitGlossarySection,
  content: {
    name: 'Occult',
    description:
      'This magic comes from the occult tradition, calling upon bizarre and ephemeral mysteries. Anything with this trait is magical.\n\nA creature with this trait is primarily constituted of or has a strong connection to occult magic.',
  },
})

export const OlfactorySection = Content.defineSection('traits/olfactory', {
  parent: TraitGlossarySection,
  content: {
    name: 'Olfactory',
    description:
      'An olfactory effect can affect only creatures that can smell it. This applies only to olfactory parts of the effect, as determined by the GM.',
  },
})

export const OozeSection = Content.defineSection('traits/ooze', {
  parent: TraitGlossarySection,
  content: {
    name: 'Ooze',
    description:
      'Oozes are creatures with simple anatomies. They tend to have low mental attribute modifiers and immunity to mental effects and precision damage.',
  },
})

export const OrcSection = Content.defineSection('traits/orc', {
  parent: TraitGlossarySection,
  content: {
    name: 'Orc',
    description:
      'A creature with this trait is a member of the orc ancestry. These green-skinned people tend to have darkvision. An ability with this trait can be used or selected only by orcs. An item with this trait is created and used by orcs.',
  },
})

export const ParrySection = Content.defineSection('traits/parry', {
  parent: TraitGlossarySection,
  content: {
    name: 'Parry',
    description:
      'This weapon can be used defensively to block attacks. While wielding this weapon, if your proficiency with it is trained or better, you can spend a single action to position your weapon defensively, gaining a +1 circumstance bonus to [AC](characteristic:armor-class) until the start of your next turn.',
  },
})

export const PlantSection = Content.defineSection('traits/plant', {
  parent: TraitGlossarySection,
  content: {
    name: 'Plant',
    description:
      'Vegetable creatures have the plant trait. They are distinct from normal plants. Magical effects with this trait manipulate or conjure plants or plant matter in some way. Effects that manipulate plants have no effect in an area with no plants.',
  },
})

export const PoisonSection = Content.defineSection('traits/poison', {
  parent: TraitGlossarySection,
  content: {
    name: 'Poison',
    description:
      'An effect with this trait delivers a poison or deals poison damage. An item with this trait is poisonous and might cause an affliction.',
  },
})

export const PolymorphSection = Content.defineSection('traits/polymorph', {
  parent: TraitGlossarySection,
  content: {
    name: 'Polymorph',
    description:
      "These effects transform the target into a new form. A target can't be under the effect of more than one polymorph effect at a time. If it comes under the effect of a second polymorph effect, the second polymorph effect attempts to [counteract](content:playing-the-game/counteracting) the first. If it succeeds, it takes effect, and if it fails, the spell has no effect on that target. Any Strikes specifically granted by a polymorph effect are [magical](content:traits/magical). Unless otherwise stated, polymorph spells don't allow the target to take on the appearance of a specific individual creature.\n\nIf you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties. Unless otherwise noted, the battle form prevents you from casting spells, speaking, and using most [manipulate](content:traits/manipulate) actions that require hands. (If there's doubt about whether you can use an action, the GM decides.) Your gear is absorbed into you; the constant abilities of your gear still function, but you can't activate any items. You lose your Speeds and gain those of the battle form. If a polymorph effect causes you to increase in size, you must have space to expand into or the effect is disrupted.",
  },
})

export const PossessionSection = Content.defineSection('traits/possession', {
  parent: TraitGlossarySection,
  content: {
    name: 'Possession',
    description:
      'Effects with this trait allow a creature to project its mind and spirit into a target. A creature immune to mental effects can’t use a possession effect. While possessing a target, a possessor’s true body is [unconscious](content:conditions/unconscious) (and can’t wake up normally), unless the possession effect allows the creature to physically enter the target. Whenever the target takes damage, the possessor takes half that amount of damage as mental damage.\n\nA possessor loses the benefits of any of its active spells or abilities that affect its physical body, though it gains the benefits of the target’s active spells and abilities that affect their body. A possessor can use any of the target’s abilities that are purely physical, and it can’t use any of its own abilities except spells and purely mental abilities. The GM decides whether an ability is purely physical or purely mental. A possessor uses the target’s attack modifier, [AC](characteristic:armor-class), [Fortitude](characteristic:fortitude) save, [Reflex](characteristic:reflex) save, [Perception](characteristic:perception), and physical skills, and its own [Will save](characteristic:will), mental skills, [spell attack modifier](characteristic:spell-attack), and [spell DC](characteristic:spell-dc); benefits of invested items apply where relevant (the possessor’s invested items apply when using its own values, and the target’s invested items apply when using the target’s values). A possessor gains no benefit from casting spells that normally affect only the caster, since it isn’t in its own body. The possessor must use its own actions to make the possessed creature act.\n\nIf a possessor reaches 0 [Hit Points](characteristic:hit-points) through any combination of damage to its true body and mental damage from the possession, it is knocked out as normal and the possession immediately ends. If the target reaches 0 Hit Points first, the possessor can either fall unconscious with the body and continue the possession or end the effect as a free action and return to its body. If the target dies, the possession ends immediately, and the possessor is [stunned](content:conditions/stunned) for 1 minute.',
  },
})

export const PotionSection = Content.defineSection('traits/potion', {
  parent: TraitGlossarySection,
  content: { name: 'Potion', description: 'A potion is a consumable magical liquid activated when you drink it.' },
})

export const PredictionSection = Content.defineSection('traits/prediction', {
  parent: TraitGlossarySection,
  content: { name: 'Prediction', description: 'Effects with this trait determine what is likely to happen in the near future.' },
})

export const PressSection = Content.defineSection('traits/press', {
  parent: TraitGlossarySection,
  content: {
    name: 'Press',
    description:
      'Actions with this trait allow you to follow up earlier attacks. An action with the press trait can be used only if you are currently affected by a multiple attack penalty. You can’t use a press action when it’s not your turn, even if you use the [Ready](content:playing-the-game/ready) activity.\n\nSome actions with the press trait also grant an effect on a failure. The effects that are added on a failure don’t apply on a critical failure. If your press action succeeds, you can choose to apply the failure effect instead. (For example, you may wish to do this when an attack deals no damage due to resistance.)',
  },
})

export const PrimalSection = Content.defineSection('traits/primal', {
  parent: TraitGlossarySection,
  content: {
    name: 'Primal',
    description:
      'This magic comes from the primal tradition, connecting to the natural world and instinct. Anything with this trait is magical.\n\nA creature with this trait is primarily constituted of or has a strong connection to primal magic.',
  },
})

export const PropulsiveSection = Content.defineSection('traits/propulsive', {
  parent: TraitGlossarySection,
  content: {
    name: 'Propulsive',
    description:
      'You add half your [Strength modifier](characteristic:strength) (if positive) to damage rolls with a propulsive ranged weapon. If you have a negative Strength modifier, you add your full Strength modifier instead.',
  },
})

export const RangedTripSection = Content.defineSection('traits/ranged-trip', {
  parent: TraitGlossarySection,
  content: {
    name: 'Ranged Trip',
    description:
      'The weapon can be used to [Trip](content:skills/trip) with the [Athletics](characteristic:skill/athletics) skill within the weapon’s first range increment. The skill check takes a –2 circumstance penalty. You can add the weapon’s item bonus to attack rolls as a bonus to the check. A ranged trip weapon doesn’t deal any damage when used to Trip. These weapons are usually thrown.',
  },
})

export const RangerSection = Content.defineSection('traits/ranger', {
  parent: TraitGlossarySection,
  content: { name: 'Ranger', description: 'This indicates abilities from the [ranger](trait:ranger) class.' },
})

export const RareSection = Content.defineSection('traits/rare', {
  parent: TraitGlossarySection,
  content: {
    name: 'Rare',
    description:
      "This rarity indicates that a rules element is very difficult to find in the game world. A rare feat, spell, item or the like is available to players only if the GM decides to include it in the game, typically through discovery during play. Creatures with this trait are rare. They typically can't be summoned. The DC of [Recall Knowledge](content:skills/recall-knowledge) checks related to these creatures is increased by 5.",
  },
})

export const ReachSection = Content.defineSection('traits/reach', {
  parent: TraitGlossarySection,
  content: {
    name: 'Reach',
    description:
      'This weapon can be used to attack enemies up to 10 feet away instead of only adjacent enemies. For creatures with reach, the weapon increases their reach by 5 feet.',
  },
})

export const RevelationSection = Content.defineSection('traits/revelation', {
  parent: TraitGlossarySection,
  content: { name: 'Revelation', description: 'Effects with this trait see things as they truly are.' },
})

export const RogueSection = Content.defineSection('traits/rogue', {
  parent: TraitGlossarySection,
  content: { name: 'Rogue', description: 'This indicates abilities from the [rogue](trait:rogue) class.' },
})

export const SanctifiedSection = Content.defineSection('traits/sanctified', {
  parent: TraitGlossarySection,
  content: {
    name: 'Sanctified',
    description: 'If you are [holy](content:traits/holy) or [unholy](content:traits/unholy), your sanctified actions and spells gain the same trait.',
  },
})

export const ScryingSection = Content.defineSection('traits/scrying', {
  parent: TraitGlossarySection,
  content: {
    name: 'Scrying',
    description:
      'A scrying effect lets you see, hear, or otherwise get sensory information from a distance using a sensor or apparatus, rather than your own eyes and ears.',
  },
})

export const SecretSection = Content.defineSection('traits/secret', {
  parent: TraitGlossarySection,
  content: { name: 'Secret', description: 'The GM rolls the check for this ability in secret.' },
})

export const ShadowSection = Content.defineSection('traits/shadow', {
  parent: TraitGlossarySection,
  content: {
    name: 'Shadow',
    description:
      'Magic with this trait involves shadows or the energy of the Netherworld.\n\nPlanes with this trait are umbral with murky light. In the Netherworld, the radius of all light from light sources and the areas of light spells are halved.',
  },
})

export const ShoveSection = Content.defineSection('traits/shove', {
  parent: TraitGlossarySection,
  content: {
    name: 'Shove',
    description:
      "You can use this weapon to [Shove](content:skills/shove) with the [Athletics](characteristic:skill/athletics) skill even if you don't have a free hand. This uses the weapon's reach (if different from your own) and adds the weapon's item bonus to attack rolls as an item bonus to the Athletics check. If you critically fail a check to Shove using the weapon, you can drop the weapon to take the effects of a failure instead of a critical failure.",
  },
})

export const SkillSection = Content.defineSection('traits/skill', {
  parent: TraitGlossarySection,
  content: {
    name: 'Skill',
    description:
      'A general feat with the skill trait improves your skills and their actions or gives you new actions for a skill. A feat with this trait can be selected when a class grants a skill feat or general feat. Archetype feats with the skill trait can be selected in place of a skill feat if you have that archetype’s dedication feat.',
  },
})

export const SleepSection = Content.defineSection('traits/sleep', {
  parent: TraitGlossarySection,
  content: { name: 'Sleep', description: 'This effect makes a creature fall asleep or get drowsy' },
})

export const SonicSection = Content.defineSection('traits/sonic', {
  parent: TraitGlossarySection,
  content: {
    name: 'Sonic',
    description:
      'An effect with the sonic trait functions only if it makes sound, meaning it has no effect in an area of silence or in a vacuum. This is different from an auditory spell, which is effective only if the target can hear it. A sonic effect might deal sonic damage.',
  },
})

export const SpellshapeSection = Content.defineSection('traits/spellshape', {
  parent: TraitGlossarySection,
  content: {
    name: 'Spellshape',
    description:
      "Actions with the spellshape trait tweak the properties of your spells. You must use a spellshape action directly before casting the spell you want to alter. If you use any action (including free actions and reactions) other than casting a spell directly after, you waste the benefits of the spellshape action. The benefit is also lost if your turn ends before you cast the spell. Any additional effects added by a spellshape action are part of the spell's effect, not of the spellshape action itself.",
  },
})

export const SpiritSection = Content.defineSection('traits/spirit', {
  parent: TraitGlossarySection,
  content: {
    name: 'Spirit',
    description:
      'Effects with this trait can affect creatures with spiritual essence and might deal spirit damage. A creature with this trait is defined by its spiritual essence. Spirit creatures often lack a material form.',
  },
})

export const StanceSection = Content.defineSection('traits/stance', {
  parent: TraitGlossarySection,
  content: {
    name: 'Stance',
    description:
      'A stance is a general combat strategy that you enter by using an action with the stance trait, and you remain in for some time. A stance lasts until you get knocked out, until its requirements (if any) are violated, until the encounter ends, or until you use a stance action again, whichever comes first. After you take an action with the stance trait, you can’t take another one for 1 round. You can enter or be in a stance only in encounter mode. You can Dismiss a stance.',
  },
})

export const StructureSection = Content.defineSection('traits/structure', {
  parent: TraitGlossarySection,
  content: {
    name: 'Structure',
    description:
      "A spell, item activation, or ability with the structure trait creates a magical building or other structure. The structure must be created on a plot of land free of other structures. The structure adapts to the natural terrain, adopting the structural requirements for being built there. The structure adjusts around small features such as ponds or spires of rock, but it can't be created on water or other nonsolid surfaces. If created on snow, sand dunes, or other soft surfaces with a solid surface underneath, the structure's foundation (if any) reaches the solid ground. If the structure is on a solid but unstable surface, such as a swamp or an area plagued by tremors, roll a DC 3 flat check each day; on a failure, the structure begins to sink or collapse.\n\nThe structure doesn't harm creatures within the area when it appears, and it can't be created within a crowd or in a densely populated area. Any creature inadvertently caught inside the structure when it's created ends up unharmed inside the complete structure and always has a clear path of escape. A creature inside the structure when the effect ends isn't harmed, and it lands harmlessly on the ground if it was on an upper level of the structure.",
  },
})

export const SubtleSection = Content.defineSection('traits/subtle', {
  parent: TraitGlossarySection,
  content: { name: 'Subtle', description: "A spell with the subtle trait can be cast without incantations and doesn't have obvious manifestations." },
})

export const SummonSection = Content.defineSection('traits/summon', {
  parent: TraitGlossarySection,
  content: {
    name: 'Summon',
    description:
      "Spells with the summon trait can conjure creatures, typically ones with a particular trait. Such creatures can be found in _Monster Core_ and similar books. Unless noted otherwise, the creature must be common, it gains the [summoned](content:traits/summoned) trait, and it must appear in an unoccupied space in range large enough to contain it. The highest level of creature the spell can summon depends on the rank of the spell, as listed below. The spell can still summon a creature of a lower level if you so choose. These rules apply only to spells that have the summon trait; other spells that call or conjure items or beings but that don't have the trait, like [_summon instrument_](ability:spell/summon-instrument), work as explained in the spell.\n\n##\n\n| **Spell Rank** | **Maximum Creature Level** |\n|---|---|\n| 1st | –1 |\n| 2nd | 1 |\n| 3rd | 2 |\n| 4th | 3 |\n| 5th | 5 |\n| 6th | 7 |\n| 7th | 9 |\n| 8th | 11 |\n| 9th | 13 |\n| 10th | 15 |",
  },
})

export const SummonedSection = Content.defineSection('traits/summoned', {
  parent: TraitGlossarySection,
  content: {
    name: 'Summoned',
    description:
      "A creature called by a spell or effect gains the summoned trait. A summoned creature can't summon other creatures, create things of value, or cast spells that require a cost. It has the [minion](content:traits/minion) trait. If it tries to [Cast a Spell](content:spells/cast-a-spell) of equal or higher rank than the spell that summoned it, it overpowers the summoning magic, causing its own spell to fail and the summon spell to end. Otherwise, the summoned creature uses the standard abilities for a creature of its kind. It generally attacks your enemies to the best of its ability. If you can communicate with it, you can attempt to command it, but the GM determines the degree to which it follows your commands.\n\nImmediately when you finish Casting the Spell, the summoned creature uses its 2 actions for that turn. A spawn or other creature generated from a summoned creature returns to its unaltered state (usually a corpse in the case of spawn) once the summoned creature is gone. If it's unclear what this state would be, the GM decides. Summoned creatures can be banished by various spells and effects. They are automatically banished if reduced to 0 [Hit Points](characteristic:hit-points) or if the spell that called them ends.",
  },
})

export const SweepSection = Content.defineSection('traits/sweep', {
  parent: TraitGlossarySection,
  content: {
    name: 'Sweep',
    description:
      'This weapon makes wide swinging attacks. When you attack with this weapon, you gain a +1 circumstance bonus to your attack roll if you already attempted to attack a different target this turn using this weapon.',
  },
})

export const TeleportationSection = Content.defineSection('traits/teleportation', {
  parent: TraitGlossarySection,
  content: {
    name: 'Teleportation',
    description:
      'Teleportation effects instantaneously move something from one point in space to another. Teleportation does not usually trigger reactions based on movement.',
  },
})

export const ThrownSection = Content.defineSection('traits/thrown', {
  parent: TraitGlossarySection,
  content: {
    name: 'Thrown',
    description:
      "You can throw this weapon as a ranged attack; it is a ranged weapon when thrown. You add your [Strength modifier](characteristic:strength) to damage as you would for a melee weapon. When this trait appears on a melee weapon, it also includes the range increment. Ranged weapons with this trait use the range increment in the weapon's Range entry.",
  },
})

export const TrapSection = Content.defineSection('traits/trap', {
  parent: TraitGlossarySection,
  content: { name: 'Trap', description: 'A hazard constructed to hinder interlopers.' },
})

export const TripSection = Content.defineSection('traits/trip', {
  parent: TraitGlossarySection,
  content: {
    name: 'Trip',
    description:
      "You can use this weapon to [Trip](content:skills/trip) with the [Athletics](characteristic:skill/athletics) skill even if you don't have a free hand. This uses the weapon's reach (if different from your own) and adds the weapon's item bonus to attack rolls as an item bonus to the Athletics check. If you critically fail a check to Trip using the weapon, you can drop the weapon to take the effects of a failure instead of a critical failure.",
  },
})

export const TwinSection = Content.defineSection('traits/twin', {
  parent: TraitGlossarySection,
  content: {
    name: 'Twin',
    description:
      'These weapons are used as a pair. When you attack with a twin weapon, you add a circumstance bonus to the damage roll equal to the weapon’s number of damage dice if you have previously attacked with a different weapon of the same type this turn. The weapons must be of the same type, but they don’t need to have the same runes.',
  },
})

export const TwoHandSection = Content.defineSection('traits/two-hand', {
  parent: TraitGlossarySection,
  content: {
    name: 'Two-Hand',
    description:
      'This weapon can be wielded with two hands to change its weapon damage die to the indicated value. This change applies to all the weapon’s damage dice.',
  },
})

export const UnarmedSection = Content.defineSection('traits/unarmed', {
  parent: TraitGlossarySection,
  content: {
    name: 'Unarmed',
    description:
      'An unarmed attack uses your body rather than a manufactured weapon. An unarmed attack isn’t a weapon, though has a weapon group and might have weapon traits. An unarmed attack can’t be Disarmed. It also doesn’t take up a hand, though a fist or other grasping appendage generally works like a free-hand weapon.',
  },
})

export const UncommonSection = Content.defineSection('traits/uncommon', {
  parent: TraitGlossarySection,
  content: {
    name: 'Uncommon',
    description:
      "Something of uncommon rarity requires special training or comes from a particular culture or part of the world. Some character choices give access to uncommon options, and the GM can choose to allow access for anyone. Less is known about uncommon creatures than common creatures. They typically can't be summoned. The DC of [Recall Knowledge](content:skills/recall-knowledge) checks related to these creature is increased by 2.",
  },
})

export const UndeadSection = Content.defineSection('traits/undead', {
  parent: TraitGlossarySection,
  content: {
    name: 'Undead',
    description:
      'Once living, these creatures were infused after death with void energy and soul-corrupting unholy magic. When reduced to 0 [Hit Points](characteristic:hit-points), an undead creature is destroyed. Undead creatures are damaged by vitality energy and are healed by void energy, and don’t benefit from healing vitality effects.',
  },
})

export const UnholySection = Content.defineSection('traits/unholy', {
  parent: TraitGlossarySection,
  content: {
    name: 'Unholy',
    description:
      'Effects with the unholy trait are tied to powerful magical forces of cruelty and sin. They often have stronger effects on holy creatures. Creatures with this trait are strongly devoted to unholy causes, and often have weakness to [holy](content:traits/holy). If a creature with weakness to unholy uses an unholy item or effect, it takes damage from its weakness.',
  },
})

export const UniqueSection = Content.defineSection('traits/unique', {
  parent: TraitGlossarySection,
  content: {
    name: 'Unique',
    description:
      'A rules element with this trait is one-of-a-kind. The DC of [Recall Knowledge](content:skills/recall-knowledge) checks related to creatures with this trait is increased by 10.',
  },
})

export const VersatileSection = Content.defineSection('traits/versatile', {
  parent: TraitGlossarySection,
  content: {
    name: 'Versatile',
    description:
      'A versatile weapon can be used to deal a different type of damage than its listed type. This trait indicates the alternate damage type. For instance, a piercing weapon with versatile S can deal piercing or slashing damage. You choose the damage type each time you attack.',
  },
})

export const VisualSection = Content.defineSection('traits/visual', {
  parent: TraitGlossarySection,
  content: {
    name: 'Visual',
    description:
      'A visual effect can affect only creatures that can see it. This applies only to visible parts of the effect, as determined by the GM.',
  },
})

export const VitalitySection = Content.defineSection('traits/vitality', {
  parent: TraitGlossarySection,
  content: {
    name: 'Vitality',
    description:
      'Effects with this trait heal living creatures with energy from the Forge of Creation, deal vitality energy damage to [undead](content:traits/undead), or manipulate vitality energy.\n\nThese planes are awash with life energy. Colors are brighter, fires are hotter, noises are louder, and sensations are more intense. At the end of each round, an undead creature takes at least minor vitality environmental damage. In the strongest areas of a vitality plane, they could take moderate or even major vitality damage instead. While this might seem safe for living creatures, vitality planes present a different danger. Living creatures regain an amount of HP each round equal to the environmental damage undead take in the same area. If this would bring the living creature above their maximum HP, any excess becomes temporary HP. Unlike normal, these temporary HP combine with each other, and they last until the creature leaves the plane. If a creature’s temporary HP from a vitality plane ever exceeds its maximum HP, it explodes in a burst of overloaded vitality energy, spreading across the area to birth new souls.',
  },
})

export const VoidSection = Content.defineSection('traits/void', {
  parent: TraitGlossarySection,
  content: {
    name: 'Void',
    description:
      'Effects with this trait heal [undead](content:traits/undead) creatures with void energy, deal void damage to living creatures, or manipulate void energy.\n\nPlanes with this trait are vast, empty reaches that suck the life from the living. They tend to be lonely, haunted planes, [drained](content:conditions/drained) of color and filled with winds carrying the moans of the dead At the end of each round, a living creature takes at least minor void environmental damage. In the strongest areas of a void plane, they could take moderate or even major void damage at the end of each round. This damage has the death trait, and if a living creature is reduced to 0 [Hit Points](characteristic:hit-points) by this void damage and killed, it crumbles into ash and can become a wraith (see Monster Core).',
  },
})

export const VolleySection = Content.defineSection('traits/volley', {
  parent: TraitGlossarySection,
  content: {
    name: 'Volley',
    description:
      'This ranged weapon is less effective at close distances. Your attacks against targets that are at a distance within the range listed take a –2 penalty.',
  },
})

export const WandSection = Content.defineSection('traits/wand', {
  parent: TraitGlossarySection,
  content: { name: 'Wand', description: 'A wand contains a single spell which you can cast once per day.' },
})

export const WaterSection = Content.defineSection('traits/water', {
  parent: TraitGlossarySection,
  content: {
    name: 'Water',
    description:
      'Effects with the water trait either manipulate or conjure water. Those that manipulate water have no effect in an area without water. Creatures with this trait consist primarily of water or have a connection to magical water.\n\nPlanes with this trait are mostly liquid. Visitors who can’t breathe water or reach an air pocket likely drown. The rules for aquatic combat [aquatic combat](content:playing-the-game/aquatic-combat) usually apply, including the inability to cast fire spells or use actions with the fire trait. Creatures with a weakness to water take damage equal to double their weakness at the end of each round.',
  },
})

export const WitchSection = Content.defineSection('traits/witch', {
  parent: TraitGlossarySection,
  content: { name: 'Witch', description: 'This trait indicates abilities from the [witch](trait:witch) class.' },
})

export const WizardSection = Content.defineSection('traits/wizard', {
  parent: TraitGlossarySection,
  content: { name: 'Wizard', description: 'This indicates abilities from the [wizard](trait:wizard) class.' },
})

export const WoodSection = Content.defineSection('traits/wood', {
  parent: TraitGlossarySection,
  content: {
    name: 'Wood',
    description:
      'Effects with the wood trait conjure or manipulate wood. Those that manipulate wood have no effect in an area without wood. Creatures with this trait consist primarily of wood or have a connection to magical wood.\n\nThese planes consist of trees and other flora latticed in organic patterns. Wood planes are often perfectly constructed to match their desired purpose or environment but aren’t usually outright hostile to visitors.',
  },
})

export const TraitsContent = [
  TraitGlossarySection,
  AberrationSection,
  AcidSection,
  AgileSection,
  AirSection,
  AiuvarinSection,
  AlchemicalSection,
  AmphibiousSection,
  AngelSection,
  AnimalSection,
  AquaticSection,
  ArcaneSection,
  ArchetypeSection,
  ArchonSection,
  AttachedSection,
  AttackSection,
  AuditorySection,
  AuraSection,
  AzataSection,
  BackstabberSection,
  BackswingSection,
  BardSection,
  BeastSection,
  BombSection,
  BulwarkSection,
  CantripSection,
  CelestialSection,
  ChangelingSection,
  ClericSection,
  ColdSection,
  ComfortSection,
  CommonSection,
  CompositionSection,
  ConcealableSection,
  ConcentrateSection,
  ConsecrationSection,
  ConstructSection,
  ConsumableSection,
  CurseSection,
  DaemonSection,
  DarknessSection,
  DeadlySection,
  DeathSection,
  DedicationSection,
  DemonSection,
  DetectionSection,
  DevilSection,
  DinosaurSection,
  DisarmSection,
  DiseaseSection,
  DivineSection,
  DowntimeSection,
  DragonSection,
  DromaarSection,
  DruidSection,
  DwarfSection,
  EarthSection,
  ElectricitySection,
  ElementalSection,
  ElfSection,
  ElixirSection,
  EmotionSection,
  EtherealSection,
  ExplorationSection,
  ExtradimensionalSection,
  FatalSection,
  FearSection,
  FeySection,
  FiendSection,
  FighterSection,
  FinesseSection,
  FireSection,
  FlexibleSection,
  FlourishSection,
  FocusSection,
  ForceSection,
  ForcefulSection,
  FortuneSection,
  FreeHandSection,
  FungusSection,
  GeneralSection,
  GiantSection,
  GnomeSection,
  GoblinSection,
  GrappleSection,
  HagSection,
  HalflingSection,
  HealingSection,
  HexSection,
  HolySection,
  HryngarSection,
  HumanSection,
  HumanoidSection,
  IllusionSection,
  IncapacitationSection,
  JoustingSection,
  LeshySection,
  LightSection,
  LineageSection,
  LinguisticSection,
  MagicalSection,
  ManipulateSection,
  MechanicalSection,
  MentalSection,
  MetalSection,
  MindlessSection,
  MinionSection,
  MisfortuneSection,
  MonitorSection,
  MonkSection,
  MorphSection,
  MoveSection,
  MulticlassSection,
  NephilimSection,
  NoisySection,
  NonlethalSection,
  OccultSection,
  OlfactorySection,
  OozeSection,
  OrcSection,
  ParrySection,
  PlantSection,
  PoisonSection,
  PolymorphSection,
  PossessionSection,
  PotionSection,
  PredictionSection,
  PressSection,
  PrimalSection,
  PropulsiveSection,
  RangedTripSection,
  RangerSection,
  RareSection,
  ReachSection,
  RevelationSection,
  RogueSection,
  SanctifiedSection,
  ScryingSection,
  SecretSection,
  ShadowSection,
  ShoveSection,
  SkillSection,
  SleepSection,
  SonicSection,
  SpellshapeSection,
  SpiritSection,
  StanceSection,
  StructureSection,
  SubtleSection,
  SummonSection,
  SummonedSection,
  SweepSection,
  TeleportationSection,
  ThrownSection,
  TrapSection,
  TripSection,
  TwinSection,
  TwoHandSection,
  UnarmedSection,
  UncommonSection,
  UndeadSection,
  UnholySection,
  UniqueSection,
  VersatileSection,
  VisualSection,
  VitalitySection,
  VoidSection,
  VolleySection,
  WandSection,
  WaterSection,
  WitchSection,
  WizardSection,
  WoodSection,
]
