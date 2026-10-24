import { Abilities, Attributes, CharacterOptions, CharacterValues, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions } from '@bessemer/cornerstone/expression'
import {
  AiuvarinFeat,
  Ancestry,
  AncestryFeat,
  ChangelingFeat,
  DromaarFeat,
  DwarfFeat,
  ElfFeat,
  Feat,
  FeatLevel1,
  FeatLevel5,
  Heritage,
  NephilimFeat,
  OrcFeat,
  VersatileHeritage,
} from '@simulacrum/ruleset-pf2e/archetype'
import { HitPoints, Speed } from '@simulacrum/ruleset-pf2e/characteristic'
import { CharismaAncestryFlaw, ConstitutionAncestryBoost, SelectAncestryBoost, WisdomAncestryBoost } from '@simulacrum/ruleset-pf2e/attribute-boost'
import { ExpertCrafting, TrainedCrafting, TrainedReligion } from '@simulacrum/ruleset-pf2e/skill'
import { Reaction, TwoActions } from '@simulacrum/ruleset-pf2e/action-type'
import { Darkvision, DwarfHeritage } from '@simulacrum/ruleset-pf2e/ancestry/ancestry-common'
import { AdditionalLore } from '@simulacrum/ruleset-pf2e/feat/skill-feat'

export const DeathWardenDwarf = Traits.defineTrait('heritage/death-warden-dwarf', {
  name: 'Death Warden Dwarf',
  description:
    'Your ancestors were tomb guardians, and their power to ward off death passed on to you. If you roll a success on a saving throw against an effect that has the void trait or was created by an undead creature, you get a critical success instead.',
  archetypes: [Heritage, DwarfHeritage],
  effects: [],
})

export const ForgeDwarf = Traits.defineTrait('heritage/forge-dwarf', {
  name: 'Forge Dwarf',
  description:
    'You have a remarkable adaptation to hot environments. This grants you fire resistance equal to half your level (minimum 1), and you treat environmental heat effects as if they were one step less extreme (incredible heat becomes extreme, extreme heat becomes severe, and so on).',
  archetypes: [Heritage, DwarfHeritage],
  effects: [],
})

export const RockDwarf = Traits.defineTrait('heritage/rock-dwarf', {
  name: 'Rock Dwarf',
  description:
    'Your ancestors lived and worked among the ancient stones of the mountains or the depths of the earth. This makes you solid as a rock when you plant your feet. You gain a +2 circumstance bonus to your Fortitude or Reflex DC against attempts to Reposition, Shove, or Trip you. This bonus also applies to saving throws against spells or effects that attempt to force you to move or knock you prone. In addition, if any effect would force you to move 10 feet or more, you are moved only half the distance.',
  archetypes: [Heritage, DwarfHeritage],
  effects: [],
})

export const StrongBloodedDwarf = Traits.defineTrait('heritage/strong-blooded-dwarf', {
  name: 'Strong-Blooded Dwarf',
  description:
    'Your blood runs hearty and strong, and you can shake off toxins. You gain poison resistance equal to half your level (minimum 1), and each of your successful saving throws against a poison affliction reduces its stage by 2, or by 1 for a virulent poison. Each critical success against an ongoing poison reduces its stage by 3, or by 2 for a virulent poison.',
  archetypes: [Heritage, DwarfHeritage],
  effects: [],
})

export const AncientBloodedDwarf = Traits.defineTrait('heritage/ancient-blooded-dwarf', {
  name: 'Ancient-Blooded Dwarf',
  description:
    "Dwarven heroes of old could shrug off their enemies' magic, and some of that resistance manifests in you. You gain the Call on Ancient Blood reaction.\n\n**Call on Ancient Blood** ⟲\n\n**Trigger** You attempt a saving throw against a magical effect, but you haven't rolled yet.\n\nYour ancestors' innate resistance to magic surges, before slowly ebbing down. You gain a +1 circumstance bonus until the end of this turn. This bonus also applies to the triggering save.",
  archetypes: [Heritage, DwarfHeritage],
  effects: [],
})

export const CallOnAncientBlood = Abilities.defineAbility('heritage/ancient-blooded-dwarf/call-on-ancient-blood', {
  name: 'Call on Ancient Blood',
  description:
    "**Trigger** You attempt a saving throw against a magical effect, but you haven't rolled yet.\n\nYour ancestors' innate resistance to magic surges, before slowly ebbing down. You gain a +1 circumstance bonus until the end of this turn. This bonus also applies to the triggering save.",
  prerequisites: [Traits.traitPrerequisite(AncientBloodedDwarf)],
  actions: [{ name: 'Call on Ancient Blood', action: Reaction }],
})

export const SelectDwarfHeritage = CharacterOptions.selectTraitOption('ancestry/dwarf/select-heritage', {
  name: 'Dwarf Heritage',
  filter: { archetypes: [[DwarfHeritage, VersatileHeritage]] },
})

export const SelectDwarfFeat1 = CharacterOptions.selectTraitOption('ancestry/dwarf/select-feat-1', {
  name: 'Ancestry Feat (Level 1)',
  filter: { archetypes: [AncestryFeat, [DwarfFeat, ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], FeatLevel1] },
})

export const SelectDwarfFeat5 = CharacterOptions.selectTraitOption('ancestry/dwarf/select-feat-5', {
  name: 'Ancestry Feat (Level 5)',
  filter: {
    archetypes: [AncestryFeat, [DwarfFeat, ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], [FeatLevel1, FeatLevel5]],
  },
})

export const Dwarf = Traits.defineTrait('ancestry/dwarf', {
  name: 'Dwarf',
  description:
    "*Dwarf, Humanoid*\n\n_Dwarves are a short, stocky people who are often stubborn, fierce, and devoted._\n\nDwarves have a well-earned reputation as a stoic and stern people, but they also have an unbridled zeal and deeply value artisanship. To a stranger, they can seem untrusting and clannish, but to their friends and family, they are warm and caring. While trust from a dwarf is hard-won, once gained it is as strong as iron.\n\nIf you want to play a character who is as hard as nails, a stubborn and unrelenting adventurer, with a mix of rugged toughness and deep wisdom, you should play a dwarf.\n\n**You Might...**\n\n- Strive to uphold your personal honor and refuse to back down\n\n- Appreciate quality craftsmanship in all forms and insist upon it for all your gear.\n\n**Others Probably...**\n\n- See you as stubborn, though whether this is an asset or a detriment changes from moment to moment.\n\n- Recognize the deep connection you have with your family, heritage, and friends.\n\n**Physical Description**\n\nDwarves are short and stocky, standing about a foot shorter than most humans. They have wide, compact bodies and burly frames. Dwarves of all genders pride themselves on the length of their hair and beards, which they often braid into intricate patterns, some of which represent specific clans. A long beard is a sign of maturity and honor among many dwarf clans.\n\nDwarves typically reach physical adulthood around the age of 25, though their traditionalist culture places more value on completing coming-of-age ceremonies unique to each clan than reaching a certain age. A typical dwarf can live to around 350 years old.\n\n**Society**\n\nThough the ancient dwarven empire fell long ago, overwhelmed by orc and goblinoid enemies, dwarves today retain many of the qualities that once propelled them to greatness: fierceness, gumption, and stubbornness in their endeavors. Dwarves live within mountain Sky Citadels dotted over the surface, which can create vast cultural divides between dwarf clans. Yet nearly all dwarven peoples share a passion for stonework, metalwork, and family.\n\nFew dwarves are seen without their clan dagger strapped to their belt. This dagger is forged just before a dwarf's birth and is distinctive to their clan. Dwarves honor their children with names of ancestors or dwarven heroes. When introducing themselves, dwarves tend to list their family and clan, plus any number of other familial connections and honorifics.\n\n**Alignment and Religion**\n\nDwarves tend to value honor and closely follow the traditions of their clans and kingdoms. They have a strong sense of friendship and justice, though they are often very particular about who they consider a friend. They work hard and play harder—especially when strong ale is involved. Torag, god of dwarvenkind, is dwarves' primary deity, though worship of Torag's family members is also common.\n\n**Popular Edicts** create art with utility, guard your community against those who would harm it, keep your clan dagger close\n**Popular Anathema** leave an activity or promise uncompleted, forsake your family\n\n**Names**\n\nAgna, Bodill, Edrukk, Grunyar, Ingra, Kotri, Morgrym, Rogar, Torra, Yangrit\n\n**Dwarf Mechanics**\n\n**Hit Points**\n\n10\n\n**Size**\n\nMedium\n\n**Speed**\n\n20 feet\n\n**Attribute Boosts**\n\nConstitution, Wisdom, Free\n\n**Attribute Flaws**\n\nCharisma\n\n**Languages**\n\nCommon\n\nDwarven\n\nAdditional languages equal to your Intelligence modifier (if it's positive). Choose from Gnomish, Goblin, Jotun, Orcish, Petran, Sakvroth, and any other languages to which you have access (such as the languages prevalent in your region).\n\n**Darkvision**\n\nYou can see in darkness and dim light just as well as you can see in bright light, though your vision in darkness is in black and white.\n\n**Clan Dagger**\n\nYou get one clan dagger for free, as it was given to you at birth. Selling this clan dagger is a terrible taboo and earns you the disdain of other dwarves.",
  archetypes: [Ancestry],
  effects: [
    Effects.modifyCharacteristic(HitPoints, Attributes.modifier(Patches.sum(10))),
    Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(20))),
    Effects.gainTrait(ConstitutionAncestryBoost),
    Effects.gainTrait(WisdomAncestryBoost),
    Effects.gainTrait(CharismaAncestryFlaw),
    Effects.gainCharacterOption(SelectAncestryBoost),
    Effects.gainTrait(Darkvision),
    Effects.gainCharacterOption(SelectDwarfHeritage),
    Effects.gainCharacterOption(SelectDwarfFeat1),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [Effects.gainCharacterOption(SelectDwarfFeat5)]),
  ],
})

export const DwarvenDoughtiness = Traits.defineTrait('ancestry/dwarf/dwarven-doughtiness', {
  name: 'Dwarven Doughtiness',
  description:
    '*Dwarf*\n\nYou are naturally calm and collected in the face of imminent danger. At the end of your turn, reduce your frightened condition by 2 instead of 1.',
  archetypes: [Feat, AncestryFeat, DwarfFeat, FeatLevel1],
  effects: [],
})

export const DwarvenLore = Traits.defineTrait('ancestry/dwarf/dwarven-lore', {
  name: 'Dwarven Lore',
  description:
    '*Dwarf*\n\nYou eagerly absorbed the old stories and traditions of your ancestors, your gods, and your people, studying subjects and techniques passed down for generation upon generation. You gain the trained proficiency rank in Crafting and Religion. If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice. You also gain the Additional Lore general feat for Dwarf Lore.',
  archetypes: [Feat, AncestryFeat, DwarfFeat, FeatLevel1],
  effects: [Effects.gainTrait(TrainedCrafting), Effects.gainTrait(TrainedReligion), Effects.gainTrait(AdditionalLore)],
})

export const DwarvenWeaponFamiliarity = Traits.defineTrait('ancestry/dwarf/dwarven-weapon-familiarity', {
  name: 'Dwarven Weapon Familiarity',
  description:
    '*Dwarf*\n\nYour kin have instilled in you an affinity for hard-hitting weapons, and you prefer these to more elegant arms. You gain access to all uncommon weapons with the dwarf trait. You have familiarity with weapons with the dwarf trait plus the battle axe, pick, and warhammer—for the purposes of proficiency, you treat any of these that are martial weapons as simple weapons and any that are advanced weapons as martial weapons.\n\nAt 5th level, whenever you get a critical hit with one of these weapons, you get its critical specialization effect.',
  archetypes: [Feat, AncestryFeat, DwarfFeat, FeatLevel1],
  effects: [],
})

export const MountainStrategy = Traits.defineTrait('ancestry/dwarf/mountain-strategy', {
  name: 'Mountain Strategy',
  description:
    "*Dwarf*\n\nDwarves have a long history fighting common foes, and you've mastered the ancient tactics to better face these enemies. You gain a +1 circumstance bonus to damage with weapons and unarmed attacks against creatures with the giant, goblin, hryngar, or orc trait. If your attack would deal more than one weapon die of damage (as is common at higher levels than 1st), the bonus is equal to the number of weapon dice or unarmed attack dice.\n\nIn addition, if any creature critically succeeds at an attack against you and deals damage to you, you gain your bonus to damage against that creature for 1 minute regardless of whether it has one of the listed traits\n\n**Special** Your GM can add appropriate creature traits to the ancestral foes list if your character is from a community that commonly fights other types of enemies.",
  archetypes: [Feat, AncestryFeat, DwarfFeat, FeatLevel1],
  effects: [],
})

export const RockRunner = Traits.defineTrait('ancestry/dwarf/rock-runner', {
  name: 'Rock Runner',
  description:
    "*Dwarf*\n\nYour innate connection to stone makes you adept at moving across uneven surfaces. You can ignore difficult terrain caused by stone (such as rubble or gravel) and uneven ground made of stone and earth. In addition, when you use the Acrobatics skill to Balance on narrow surfaces or uneven ground made of stone or earth, you aren't off-guard, and when you roll a success at one of these Acrobatics checks, you get a critical success instead.",
  archetypes: [Feat, AncestryFeat, DwarfFeat, FeatLevel1],
  effects: [],
})

export const StonemasonsEye = Traits.defineTrait('ancestry/dwarf/stonemasons-eye', {
  name: "Stonemason's Eye",
  description:
    "*Dwarf*\n\nYou understand the intricacies of stonework. You become trained in Crafting. If you're already trained in Crafting, you instead gain the Specialty Crafting skill feat for stonemasonry.\n\nYou also gain a +2 circumstance bonus to Perception checks to notice unusual stonework. This bonus applies to checks to discover mechanical traps made of stone or hidden within stone.\n\nIf you aren't using the Seek action or searching, the GM automatically rolls a secret check for you to notice unusual stonework anyway. This check doesn't gain your normal circumstance bonus.",
  archetypes: [Feat, AncestryFeat, DwarfFeat, FeatLevel1],
  effects: [Effects.gainTrait(TrainedCrafting)],
})

export const UnburdenedIron = Traits.defineTrait('ancestry/dwarf/unburdened-iron', {
  name: 'Unburdened Iron',
  description:
    "*Dwarf*\n\nYou've learned techniques first devised by your ancestors during their ancient wars, allowing you to comfortably wear massive suits of armor. Ignore the reduction to your Speed from any armor you wear.\n\nIn addition, any time you're taking a penalty to your Speed for some other reason (such as from the encumbered condition or from a spell), deduct 5 feet from the penalty. For example, the encumbered condition normally gives a –10-foot penalty to Speed, but this feat would reduce it to a –5-foot penalty. If your Speed is taking multiple penalties, pick only one penalty to reduce.",
  archetypes: [Feat, AncestryFeat, DwarfFeat, FeatLevel1],
  effects: [],
})

export const BoulderRoll = Traits.defineTrait('ancestry/dwarf/boulder-roll', {
  name: 'Boulder Roll',
  description:
    "*Dwarf*\n\n**Prerequisites** Rock Runner\n\nYour dwarven build allows you to push foes around, just like a mighty boulder tumbles through a subterranean cavern. Take a Step into the square of a foe that is your size or smaller, and the foe must move into the empty space directly behind it. The foe must move even if doing so places it in harm's way. The foe can attempt a Fortitude saving throw against your Athletics DC to block your Step. If the foe attempts this saving throw, it takes bludgeoning damage equal to your level plus your Strength modifier unless it critically succeeds.\n\nIf the foe can't move into an empty space (if it is surrounded by solid objects or other creatures, for example), your Boulder Roll has no effect.",
  archetypes: [Feat, AncestryFeat, DwarfFeat, FeatLevel5],
  prerequisites: [Traits.traitPrerequisite(RockRunner)],
  effects: [],
})

export const DefyTheDarkness = Traits.defineTrait('ancestry/dwarf/defy-the-darkness', {
  name: 'Defy the Darkness',
  description:
    "*Dwarf*\n\n**Prerequisites** darkvision\n\nUsing ancient dwarven methods developed to fight enemies wielding magical darkness, you've honed your darkvision and sworn not to use such magic yourself. You gain greater darkvision, enabling you to see through magical darkness even if it normally hampers darkvision (such as the darkness created by a 4th-rank _darkness_ spell). You can't cast spells with the darkness trait, use item activations with the darkness trait, or use any other ability with the darkness trait.",
  archetypes: [Feat, AncestryFeat, DwarfFeat, FeatLevel5],
  prerequisites: [Traits.traitPrerequisite(Darkvision)],
  effects: [],
})

export const DwarvenReinforcement = Traits.defineTrait('ancestry/dwarf/dwarven-reinforcement', {
  name: 'Dwarven Reinforcement',
  description:
    "*Dwarf*\n\n**Prerequisites** Expert in Crafting\n\nYou can use your knowledge of engineering and metalwork to temporarily strengthen thick objects and structures. By spending 1 hour working on an item, you can give it a +1 circumstance bonus to its Hardness for 24 hours. If you're a master in Crafting, the bonus is +2, and if you're legendary, the bonus is +3. You can reinforce a portion of a structure, though 1 hour usually reinforces only a door, a few windows, or another section that fits within a 10-foot cube.",
  archetypes: [Feat, AncestryFeat, DwarfFeat, FeatLevel5],
  prerequisites: [Traits.traitPrerequisite(ExpertCrafting)],
  effects: [],
})

export const BoulderRollAction = Abilities.defineAbility('ancestry/dwarf/boulder-roll/action', {
  name: 'Boulder Roll',
  description:
    "*Dwarf*\n\n**Prerequisites** Rock Runner\n\nYour dwarven build allows you to push foes around, just like a mighty boulder tumbles through a subterranean cavern. Take a Step into the square of a foe that is your size or smaller, and the foe must move into the empty space directly behind it. The foe must move even if doing so places it in harm's way. The foe can attempt a Fortitude saving throw against your Athletics DC to block your Step. If the foe attempts this saving throw, it takes bludgeoning damage equal to your level plus your Strength modifier unless it critically succeeds.\n\nIf the foe can't move into an empty space (if it is surrounded by solid objects or other creatures, for example), your Boulder Roll has no effect.",
  prerequisites: [Traits.traitPrerequisite(BoulderRoll)],
  actions: [{ name: 'Boulder Roll', action: TwoActions }],
})

export const AllDwarfEntities = [
  DeathWardenDwarf,
  ForgeDwarf,
  RockDwarf,
  StrongBloodedDwarf,
  AncientBloodedDwarf,
  CallOnAncientBlood,
  SelectDwarfHeritage,
  SelectDwarfFeat1,
  SelectDwarfFeat5,
  Dwarf,
  DwarvenDoughtiness,
  DwarvenLore,
  DwarvenWeaponFamiliarity,
  MountainStrategy,
  RockRunner,
  StonemasonsEye,
  UnburdenedIron,
  BoulderRoll,
  BoulderRollAction,
  DefyTheDarkness,
  DwarvenReinforcement,
]
