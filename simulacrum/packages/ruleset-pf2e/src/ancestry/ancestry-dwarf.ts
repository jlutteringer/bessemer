import { Abilities, Attributes, CharacterOptions, CharacterValues, CharacterEffects, Traits } from '@simulacrum/ruleset'
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
  FeatLevel9,
  Heritage,
  NephilimFeat,
  OrcFeat,
  VersatileHeritage,
} from '@simulacrum/ruleset-pf2e/tag'
import { Charisma, Constitution, HitPoints, Speed, Wisdom } from '@simulacrum/ruleset-pf2e/characteristic'
import {
  CharismaAncestryBoost,
  DexterityAncestryBoost,
  IntelligenceAncestryBoost,
  StrengthAncestryBoost,
} from '@simulacrum/ruleset-pf2e/attribute-boost'
import { ExpertCrafting, TrainedCrafting, TrainedReligion } from '@simulacrum/ruleset-pf2e/skill'
import { Reaction, SingleAction, TwoActions } from '@simulacrum/ruleset-pf2e/action-type'
import { Darkvision, DwarfHeritage } from '@simulacrum/ruleset-pf2e/ancestry/ancestry-common'
import { AdditionalLore } from '@simulacrum/ruleset-pf2e/feat/skill-feat'

export const DeathWardenDwarf = Traits.defineTrait('heritage/death-warden-dwarf', {
  name: 'Death Warden Dwarf',
  description:
    'Your ancestors were tomb guardians, and their power to ward off death passed on to you. If you roll a success on a saving throw against an effect that has the [void](content:traits/void) trait or was created by an [undead](content:traits/undead) creature, you get a critical success instead.',
  tags: [Heritage, DwarfHeritage],
  effects: [],
})

export const ForgeDwarf = Traits.defineTrait('heritage/forge-dwarf', {
  name: 'Forge Dwarf',
  description:
    'You have a remarkable adaptation to hot environments. This grants you fire resistance equal to half your level (minimum 1), and you treat environmental heat effects as if they were one step less extreme (incredible heat becomes extreme, extreme heat becomes severe, and so on).',
  tags: [Heritage, DwarfHeritage],
  effects: [],
})

export const RockDwarf = Traits.defineTrait('heritage/rock-dwarf', {
  name: 'Rock Dwarf',
  description:
    'Your ancestors lived and worked among the ancient stones of the mountains or the depths of the earth. This makes you solid as a rock when you plant your feet. You gain a +2 circumstance bonus to your [Fortitude](characteristic:fortitude) or [Reflex](characteristic:reflex) DC against attempts to [Reposition](content:skills/reposition), [Shove](content:skills/shove), or [Trip](content:skills/trip) you. This bonus also applies to saving throws against spells or effects that attempt to force you to move or knock you [prone](content:conditions/prone). In addition, if any effect would force you to [move](content:playing-the-game/forced-movement) 10 feet or more, you are moved only half the distance.',
  tags: [Heritage, DwarfHeritage],
  effects: [],
})

export const StrongBloodedDwarf = Traits.defineTrait('heritage/strong-blooded-dwarf', {
  name: 'Strong-Blooded Dwarf',
  description:
    'Your blood runs hearty and strong, and you can shake off toxins. You gain poison resistance equal to half your level (minimum 1), and each of your successful saving throws against a [poison](content:traits/poison) affliction reduces its stage by 2, or by 1 for a virulent poison. Each critical success against an ongoing poison reduces its stage by 3, or by 2 for a virulent poison.',
  tags: [Heritage, DwarfHeritage],
  effects: [],
})

export const AncientBloodedDwarf = Traits.defineTrait('heritage/ancient-blooded-dwarf', {
  name: 'Ancient-Blooded Dwarf',
  description:
    "Dwarven heroes of old could shrug off their enemies' magic, and some of that resistance manifests in you. You gain the Call on Ancient Blood reaction.\n\n**Call on Ancient Blood** ⟲\n\n**Trigger** You attempt a saving throw against a magical effect, but you haven't rolled yet.\n\nYour ancestors' innate resistance to magic surges, before slowly ebbing down. You gain a +1 circumstance bonus until the end of this turn. This bonus also applies to the triggering save.",
  tags: [Heritage, DwarfHeritage],
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
  filter: { tags: [[DwarfHeritage, VersatileHeritage]] },
})

export const SelectDwarfFeat1 = CharacterOptions.selectTraitOption('ancestry/dwarf/select-feat-1', {
  name: 'Ancestry Feat (Level 1)',
  filter: { tags: [AncestryFeat, [DwarfFeat, ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], FeatLevel1] },
})

export const SelectDwarfFeat5 = CharacterOptions.selectTraitOption('ancestry/dwarf/select-feat-5', {
  name: 'Ancestry Feat (Level 5)',
  filter: {
    tags: [AncestryFeat, [DwarfFeat, ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], [FeatLevel1, FeatLevel5]],
  },
})

export const SelectDwarfFeat9 = CharacterOptions.selectTraitOption('ancestry/dwarf/select-feat-9', {
  name: 'Ancestry Feat (Level 9)',
  filter: {
    tags: [
      AncestryFeat,
      [DwarfFeat, ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat],
      [FeatLevel1, FeatLevel5, FeatLevel9],
    ],
  },
})

export const SelectDwarfAncestryBoost = CharacterOptions.selectTraitOption('ancestry/dwarf/select-boost', {
  name: 'Ancestry Boost',
  filter: { specificOptions: [StrengthAncestryBoost, DexterityAncestryBoost, IntelligenceAncestryBoost, CharismaAncestryBoost] },
})

export const Dwarf = Traits.defineTrait('ancestry/dwarf', {
  name: 'Dwarf',
  description:
    "*Dwarf, Humanoid*\n\n_Dwarves are a short, stocky people who are often stubborn, fierce, and devoted._\n\nIf you want to play a character who is as hard as nails, a stubborn and unrelenting adventurer, with a mix of rugged toughness and deep wisdom, you should play a dwarf.\n\nRead the full entry in [Dwarves](content:ancestries-and-backgrounds/dwarves).\n\n**Hit Points** 10\n\n**Size** Medium\n\n**Speed** 20 feet\n\n**Attribute Boosts** Constitution, Wisdom, Free\n\n**Attribute Flaws** Charisma\n\n**Languages** [Common](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages) [Dwarven](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages) Additional languages equal to your [Intelligence modifier](characteristic:intelligence) (if it's positive). Choose from [Gnomish](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Goblin](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Jotun](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Orcish](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Petran](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Sakvroth](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), and any other languages to which you have access (such as the languages prevalent in your region).\n\n**Darkvision** You can see in darkness and dim light just as well as you can see in bright light, though your vision in darkness is in black and white.\n\n**Clan Dagger** You get one clan dagger for free, as it was given to you at birth. Selling this clan dagger is a terrible taboo and earns you the disdain of other dwarves.",
  tags: [Ancestry],
  effects: [
    CharacterEffects.modifyCharacteristic(HitPoints, Attributes.modifier(Patches.sum(10))),
    CharacterEffects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(20))),
    CharacterEffects.modifyCharacteristic(Constitution, Attributes.modifier(Patches.sum(1))),
    CharacterEffects.modifyCharacteristic(Wisdom, Attributes.modifier(Patches.sum(1))),
    CharacterEffects.modifyCharacteristic(Charisma, Attributes.modifier(Patches.sum(-1))),
    CharacterEffects.gainCharacterOption(SelectDwarfAncestryBoost),
    CharacterEffects.gainTrait(Darkvision),
    CharacterEffects.gainCharacterOption(SelectDwarfHeritage),
    CharacterEffects.gainCharacterOption(SelectDwarfFeat1),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [CharacterEffects.gainCharacterOption(SelectDwarfFeat5)]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 9), [CharacterEffects.gainCharacterOption(SelectDwarfFeat9)]),
  ],
})

export const DwarvenDoughtiness = Traits.defineTrait('ancestry/dwarf/dwarven-doughtiness', {
  name: 'Dwarven Doughtiness',
  description:
    '*Dwarf*\n\nYou are naturally calm and collected in the face of imminent danger. At the end of your turn, reduce your [frightened](content:conditions/frightened) condition by 2 instead of 1.',
  tags: [Feat, AncestryFeat, DwarfFeat, FeatLevel1],
  effects: [],
})

export const DwarvenLore = Traits.defineTrait('ancestry/dwarf/dwarven-lore', {
  name: 'Dwarven Lore',
  description:
    '*Dwarf*\n\nYou eagerly absorbed the old stories and traditions of your ancestors, your gods, and your people, studying subjects and techniques passed down for generation upon generation. You gain the trained proficiency rank in [Crafting](characteristic:skill/crafting) and [Religion](characteristic:skill/religion). If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice. You also gain the [Additional Lore](trait:feat/additional-lore) general feat for [Dwarf Lore](content:skills/lore).',
  tags: [Feat, AncestryFeat, DwarfFeat, FeatLevel1],
  effects: [CharacterEffects.gainTrait(TrainedCrafting), CharacterEffects.gainTrait(TrainedReligion), CharacterEffects.gainTrait(AdditionalLore)],
})

export const DwarvenWeaponFamiliarity = Traits.defineTrait('ancestry/dwarf/dwarven-weapon-familiarity', {
  name: 'Dwarven Weapon Familiarity',
  description:
    '*Dwarf*\n\nYour kin have instilled in you an affinity for hard-hitting weapons, and you prefer these to more elegant arms. You gain access to all uncommon weapons with the [dwarf](content:traits/dwarf) trait. You have familiarity with weapons with the dwarf trait plus the battle axe, pick, and warhammer—for the purposes of proficiency, you treat any of these that are martial weapons as simple weapons and any that are advanced weapons as martial weapons.\n\nAt 5th level, whenever you get a critical hit with one of these weapons, you get its critical specialization effect.',
  tags: [Feat, AncestryFeat, DwarfFeat, FeatLevel1],
  effects: [],
})

export const MountainStrategy = Traits.defineTrait('ancestry/dwarf/mountain-strategy', {
  name: 'Mountain Strategy',
  description:
    "*Dwarf*\n\nDwarves have a long history fighting common foes, and you've mastered the ancient tactics to better face these enemies. You gain a +1 circumstance bonus to damage with weapons and unarmed attacks against creatures with the [giant](content:traits/giant), [goblin](content:traits/goblin), [hryngar](content:traits/hryngar), or [orc](content:traits/orc) trait. If your attack would deal more than one weapon die of damage (as is common at higher levels than 1st), the bonus is equal to the number of weapon dice or unarmed attack dice.\n\nIn addition, if any creature critically succeeds at an attack against you and deals damage to you, you gain your bonus to damage against that creature for 1 minute regardless of whether it has one of the listed traits\n\n**Special** Your GM can add appropriate creature traits to the ancestral foes list if your character is from a community that commonly fights other types of enemies.",
  tags: [Feat, AncestryFeat, DwarfFeat, FeatLevel1],
  effects: [],
})

export const RockRunner = Traits.defineTrait('ancestry/dwarf/rock-runner', {
  name: 'Rock Runner',
  description:
    "*Dwarf*\n\nYour innate connection to stone makes you adept at moving across uneven surfaces. You can ignore difficult terrain caused by stone (such as rubble or gravel) and uneven ground made of stone and earth. In addition, when you use the [Acrobatics](characteristic:skill/acrobatics) skill to [Balance](content:skills/balance) on narrow surfaces or uneven ground made of stone or earth, you aren't [off-guard](content:conditions/off-guard), and when you roll a success at one of these Acrobatics checks, you get a critical success instead.",
  tags: [Feat, AncestryFeat, DwarfFeat, FeatLevel1],
  effects: [],
})

export const StonemasonsEye = Traits.defineTrait('ancestry/dwarf/stonemasons-eye', {
  name: "Stonemason's Eye",
  description:
    "*Dwarf*\n\nYou understand the intricacies of stonework. You become trained in [Crafting](characteristic:skill/crafting). If you're already trained in Crafting, you instead gain the [Specialty Crafting](trait:feat/specialty-crafting) skill feat for stonemasonry.\n\nYou also gain a +2 circumstance bonus to [Perception](characteristic:perception) checks to notice unusual stonework. This bonus applies to checks to discover mechanical traps made of stone or hidden within stone.\n\nIf you aren't using the [Seek](content:playing-the-game/seek) action or searching, the GM automatically rolls a secret check for you to notice unusual stonework anyway. This check doesn't gain your normal circumstance bonus.",
  tags: [Feat, AncestryFeat, DwarfFeat, FeatLevel1],
  effects: [CharacterEffects.gainTrait(TrainedCrafting)],
})

export const UnburdenedIron = Traits.defineTrait('ancestry/dwarf/unburdened-iron', {
  name: 'Unburdened Iron',
  description:
    "*Dwarf*\n\nYou've learned techniques first devised by your ancestors during their ancient wars, allowing you to comfortably wear massive suits of armor. Ignore the reduction to your [Speed](characteristic:speed) from any armor you wear.\n\nIn addition, any time you're taking a penalty to your Speed for some other reason (such as from the encumbered condition or from a spell), deduct 5 feet from the penalty. For example, the [encumbered](content:conditions/encumbered) condition normally gives a –10-foot penalty to Speed, but this feat would reduce it to a –5-foot penalty. If your Speed is taking multiple penalties, pick only one penalty to reduce.",
  tags: [Feat, AncestryFeat, DwarfFeat, FeatLevel1],
  effects: [],
})

export const BoulderRoll = Traits.defineTrait('ancestry/dwarf/boulder-roll', {
  name: 'Boulder Roll',
  description:
    "*Dwarf*\n\n**Prerequisites** [Rock Runner](trait:ancestry/dwarf/rock-runner)\n\nYour dwarven build allows you to push foes around, just like a mighty boulder tumbles through a subterranean cavern. Take a [Step](content:playing-the-game/step) into the square of a foe that is your size or smaller, and the foe must move into the empty space directly behind it. The foe must move even if doing so places it in harm's way. The foe can attempt a [Fortitude](characteristic:fortitude) saving throw against your [Athletics](characteristic:skill/athletics) DC to block your Step. If the foe attempts this saving throw, it takes bludgeoning damage equal to your level plus your [Strength modifier](characteristic:strength) unless it critically succeeds.\n\nIf the foe can't move into an empty space (if it is surrounded by solid objects or other creatures, for example), your Boulder Roll has no effect.",
  tags: [Feat, AncestryFeat, DwarfFeat, FeatLevel5],
  prerequisites: [Traits.traitPrerequisite(RockRunner)],
  effects: [],
})

export const DefyTheDarkness = Traits.defineTrait('ancestry/dwarf/defy-the-darkness', {
  name: 'Defy the Darkness',
  description:
    "*Dwarf*\n\n**Prerequisites** [darkvision](content:playing-the-game/darkvision-and-greater-darkvision)\n\nUsing ancient dwarven methods developed to fight enemies wielding magical darkness, you've honed your darkvision and sworn not to use such magic yourself. You gain greater darkvision, enabling you to see through magical darkness even if it normally hampers darkvision (such as the darkness created by a 4th-rank [_darkness_](ability:spell/darkness) spell). You can't cast spells with the [darkness](content:traits/darkness) trait, use item activations with the darkness trait, or use any other ability with the darkness trait.",
  tags: [Feat, AncestryFeat, DwarfFeat, FeatLevel5],
  prerequisites: [Traits.traitPrerequisite(Darkvision)],
  effects: [],
})

export const DwarvenReinforcement = Traits.defineTrait('ancestry/dwarf/dwarven-reinforcement', {
  name: 'Dwarven Reinforcement',
  description:
    "*Dwarf*\n\n**Prerequisites** Expert in [Crafting](characteristic:skill/crafting)\n\nYou can use your knowledge of engineering and metalwork to temporarily strengthen thick objects and structures. By spending 1 hour working on an item, you can give it a +1 circumstance bonus to its Hardness for 24 hours. If you're a master in [Crafting](characteristic:skill/crafting), the bonus is +2, and if you're legendary, the bonus is +3. You can reinforce a portion of a structure, though 1 hour usually reinforces only a door, a few windows, or another section that fits within a 10-foot cube.",
  tags: [Feat, AncestryFeat, DwarfFeat, FeatLevel5],
  prerequisites: [Traits.traitPrerequisite(ExpertCrafting)],
  effects: [],
})

export const BoulderRollAction = Abilities.defineAbility('ancestry/dwarf/boulder-roll/action', {
  name: 'Boulder Roll',
  description: '*Dwarf*',
  prerequisites: [Traits.traitPrerequisite(BoulderRoll)],
  actions: [
    {
      name: 'Boulder Roll',
      description:
        "**Prerequisites** [Rock Runner](trait:ancestry/dwarf/rock-runner)\n\nYour dwarven build allows you to push foes around, just like a mighty boulder tumbles through a subterranean cavern. Take a [Step](content:playing-the-game/step) into the square of a foe that is your size or smaller, and the foe must move into the empty space directly behind it. The foe must move even if doing so places it in harm's way. The foe can attempt a [Fortitude](characteristic:fortitude) saving throw against your [Athletics](characteristic:skill/athletics) DC to block your Step. If the foe attempts this saving throw, it takes bludgeoning damage equal to your level plus your [Strength modifier](characteristic:strength) unless it critically succeeds.\n\nIf the foe can't move into an empty space (if it is surrounded by solid objects or other creatures, for example), your Boulder Roll has no effect.",
      action: TwoActions,
    },
  ],
})

export const EchoesInStone = Traits.defineTrait('ancestry/dwarf/echoes-in-stone', {
  name: 'Echoes in Stone',
  description:
    '*Concentrate, Dwarf*\n\n**Requirements** You are standing on a stone or earthen surface\n\nYou pause a moment to attune your senses to the stone around you. Until the start of your next turn, you gain imprecise tremorsense with a range of 20 feet.',
  tags: [Feat, AncestryFeat, DwarfFeat, FeatLevel9],
  effects: [],
})

export const MountainsStoutness = Traits.defineTrait('ancestry/dwarf/mountains-stoutness', {
  name: "Mountain's Stoutness",
  description:
    '*Dwarf*\n\nYour hardiness lets you withstand more punishment than most. Increase your maximum [Hit Points](characteristic:hit-points) by your level. When you have the [dying](content:conditions/dying) condition, the DC of your recovery checks is equal to 9 + your dying value (instead of 10 + your dying value).\n\nIf you also have the [Toughness](trait:feat/toughness) feat, the Hit Points gained from it and this feat are cumulative, and the DC of your recovery checks is equal to 6 + your dying value.',
  tags: [Feat, AncestryFeat, DwarfFeat, FeatLevel9],
  effects: [CharacterEffects.modifyCharacteristic(HitPoints, Attributes.modifier(Patches.sum(CharacterValues.Level)))],
})

export const StoneBones = Traits.defineTrait('ancestry/dwarf/stone-bones', {
  name: 'Stone Bones',
  description:
    '*Dwarf*\n\n**Trigger** You are struck by a critical hit that deals physical damage\n\nYour intractable nature can help you shrug off even the most grievous injuries. Attempt a DC 17 flat check. If you are successful, the attack becomes a normal hit.',
  tags: [Feat, AncestryFeat, DwarfFeat, FeatLevel9],
  effects: [],
})

export const Stonewalker = Traits.defineTrait('ancestry/dwarf/stonewalker', {
  name: 'Stonewalker',
  description:
    "*Dwarf*\n\nYou have a deep reverence for and connection to stone. You can cast [_one with stone_](ability:spell/one-with-stone) as a 3rd-rank divine innate spell once per day.\n\nIf you have the [Stonemason's Eye](trait:ancestry/dwarf/stonemasons-eye) feat, you can attempt to find unusual stonework and stonework traps that require legendary proficiency in [Perception](characteristic:perception).\n\nIf you have both Stonemason's Eye and legendary proficiency in Perception, when the GM rolls a secret check for you to notice unusual stonework, you keep your bonus from Stonemason's Eye.",
  tags: [Feat, AncestryFeat, DwarfFeat, FeatLevel9],
  effects: [],
})

export const EchoesInStoneAction = Abilities.defineAbility('ancestry/dwarf/echoes-in-stone/action', {
  name: 'Echoes in Stone',
  description: '*Concentrate, Dwarf*',
  prerequisites: [Traits.traitPrerequisite(EchoesInStone)],
  actions: [
    {
      name: 'Echoes in Stone',
      description:
        '**Requirements** You are standing on a stone or earthen surface\n\nYou pause a moment to attune your senses to the stone around you. Until the start of your next turn, you gain imprecise tremorsense with a range of 20 feet.',
      action: SingleAction,
    },
  ],
})

export const StoneBonesAction = Abilities.defineAbility('ancestry/dwarf/stone-bones/action', {
  name: 'Stone Bones',
  description: '*Dwarf*',
  prerequisites: [Traits.traitPrerequisite(StoneBones)],
  actions: [
    {
      name: 'Stone Bones',
      description:
        '**Trigger** You are struck by a critical hit that deals physical damage\n\nYour intractable nature can help you shrug off even the most grievous injuries. Attempt a DC 17 flat check. If you are successful, the attack becomes a normal hit.',
      action: Reaction,
    },
  ],
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
  SelectDwarfFeat9,
  SelectDwarfAncestryBoost,
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
  EchoesInStone,
  MountainsStoutness,
  StoneBones,
  Stonewalker,
  EchoesInStoneAction,
  StoneBonesAction,
]
