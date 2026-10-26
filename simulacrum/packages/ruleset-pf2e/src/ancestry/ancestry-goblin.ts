import { Abilities, Attributes, CharacterOptions, CharacterValues, CharacterEffects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions } from '@bessemer/cornerstone/expression'
import {
  AiuvarinFeat,
  Ancestry,
  AncestryFeat,
  ChangelingFeat,
  DromaarFeat,
  ElfFeat,
  Feat,
  FeatLevel1,
  FeatLevel5,
  FeatLevel9,
  GoblinFeat,
  Heritage,
  NephilimFeat,
  OrcFeat,
  VersatileHeritage,
} from '@simulacrum/ruleset-pf2e/tag'
import { Charisma, Dexterity, HitPoints, Speed, Wisdom } from '@simulacrum/ruleset-pf2e/characteristic'
import {
  ConstitutionAncestryBoost,
  IntelligenceAncestryBoost,
  StrengthAncestryBoost,
  WisdomAncestryBoost,
} from '@simulacrum/ruleset-pf2e/attribute-boost'
import { TrainedNature, TrainedStealth, TrainedThievery } from '@simulacrum/ruleset-pf2e/skill'
import { Reaction, SingleAction } from '@simulacrum/ruleset-pf2e/action-type'
import { Darkvision, GoblinHeritage } from '@simulacrum/ruleset-pf2e/ancestry/ancestry-common'
import { Ride } from '@simulacrum/ruleset-pf2e/feat/general-feat'
import { AdditionalLore } from '@simulacrum/ruleset-pf2e/feat/skill-feat'

export const CharhideGoblin = Traits.defineTrait('heritage/charhide-goblin', {
  name: 'Charhide Goblin',
  description:
    'Your ancestors have always had a connection to fire and a thicker skin, which allows you to resist burning. You gain fire resistance equal to half your level minimum 1). You can also recover from being on fire more easily. Your flat check to remove [persistent fire damage](content:conditions/persistent-damage) is DC 10 instead of DC 15, which is reduced to DC 5 if another creature uses a particularly appropriate action to help.',
  tags: [Heritage, GoblinHeritage],
  effects: [],
})

export const IrongutGoblin = Traits.defineTrait('heritage/irongut-goblin', {
  name: 'Irongut Goblin',
  description:
    'You can subsist on food that most folks would consider spoiled. You can keep yourself fed with poor meals in a settlement as long as garbage is readily available, without using the [Subsist](content:skills/subsist) downtime activity. You can eat and drink things when you are [sickened](content:conditions/sickened).\n\nYou gain a +2 circumstance bonus to saving throws against afflictions, against gaining the sickened condition, and to remove the sickened condition. When you roll a success on a [Fortitude](characteristic:fortitude) save affected by this bonus, you get a critical success instead. All these benefits apply only when the affliction or condition resulted from something you ingested.',
  tags: [Heritage, GoblinHeritage],
  effects: [],
})

export const RazortoothGoblin = Traits.defineTrait('heritage/razortooth-goblin', {
  name: 'Razortooth Goblin',
  description:
    "Your family's teeth are formidable weapons. You gain a jaws [unarmed](content:traits/unarmed) attack that deals 1d6 piercing damage. Your jaws are in the brawling group and have the [finesse](content:traits/finesse) and unarmed traits.",
  tags: [Heritage, GoblinHeritage],
  effects: [],
})

export const SnowGoblin = Traits.defineTrait('heritage/snow-goblin', {
  name: 'Snow Goblin',
  description:
    'You are acclimated to living in frigid lands and have skin ranging from sky blue to navy in color, as well as blue fur. You gain cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on).',
  tags: [Heritage, GoblinHeritage],
  effects: [],
})

export const UnbreakableGoblin = Traits.defineTrait('heritage/unbreakable-goblin', {
  name: 'Unbreakable Goblin',
  description:
    "You're able to bounce back from injuries easily due to an exceptionally thick skull, cartilaginous bones, or some other mixed blessing. You gain 10 [Hit Points](characteristic:hit-points) from your ancestry instead of 6. When you fall, reduce the [falling damage](content:playing-the-game/falling) you take as though you had fallen half the distance.",
  tags: [Heritage, GoblinHeritage],
  effects: [CharacterEffects.modifyCharacteristic(HitPoints, Attributes.modifier(Patches.sum(4)))],
})

export const SelectGoblinHeritage = CharacterOptions.selectTraitOption('ancestry/goblin/select-heritage', {
  name: 'Goblin Heritage',
  filter: { tags: [[GoblinHeritage, VersatileHeritage]] },
})

export const SelectGoblinFeat1 = CharacterOptions.selectTraitOption('ancestry/goblin/select-feat-1', {
  name: 'Ancestry Feat (Level 1)',
  filter: { tags: [AncestryFeat, [GoblinFeat, ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], FeatLevel1] },
})

export const SelectGoblinFeat5 = CharacterOptions.selectTraitOption('ancestry/goblin/select-feat-5', {
  name: 'Ancestry Feat (Level 5)',
  filter: {
    tags: [AncestryFeat, [GoblinFeat, ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], [FeatLevel1, FeatLevel5]],
  },
})

export const SelectGoblinFeat9 = CharacterOptions.selectTraitOption('ancestry/goblin/select-feat-9', {
  name: 'Ancestry Feat (Level 9)',
  filter: {
    tags: [
      AncestryFeat,
      [GoblinFeat, ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat],
      [FeatLevel1, FeatLevel5, FeatLevel9],
    ],
  },
})

export const SelectGoblinAncestryBoost = CharacterOptions.selectTraitOption('ancestry/goblin/select-boost', {
  name: 'Ancestry Boost',
  filter: { specificOptions: [StrengthAncestryBoost, ConstitutionAncestryBoost, IntelligenceAncestryBoost, WisdomAncestryBoost] },
})

export const Goblin = Traits.defineTrait('ancestry/goblin', {
  name: 'Goblin',
  description:
    "*Goblin, Humanoid*\n\n_Goblins are a short, scrappy, energetic people who have spent millennia maligned and feared._\n\nIf you want a character who is eccentric, enthusiastic, and fun-loving, you should play a goblin.\n\nRead the full entry in [Goblins](content:ancestries-and-backgrounds/goblins).\n\n**Hit Points** 6\n\n**Size** Small\n\n**Speed** 25 feet\n\n**Attribute Boosts** Dexterity, Charisma, Free\n\n**Attribute Flaws** Wisdom\n\n**Languages** [Common](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages) [Goblin](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages) Additional languages equal to your [Intelligence modifier](characteristic:intelligence) (if it's positive). Choose from [Draconic](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Dwarven](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Gnomish](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Halfling](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Kholo](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Orcish](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), and any other languages to which you have access (such as the languages prevalent in your region).\n\n**Darkvision** You can see in darkness and dim light just as well as you can see in bright light, though your vision in darkness is in black and white.",
  tags: [Ancestry],
  effects: [
    CharacterEffects.modifyCharacteristic(HitPoints, Attributes.modifier(Patches.sum(6))),
    CharacterEffects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(25))),
    CharacterEffects.modifyCharacteristic(Dexterity, Attributes.modifier(Patches.sum(1))),
    CharacterEffects.modifyCharacteristic(Charisma, Attributes.modifier(Patches.sum(1))),
    CharacterEffects.modifyCharacteristic(Wisdom, Attributes.modifier(Patches.sum(-1))),
    CharacterEffects.gainCharacterOption(SelectGoblinAncestryBoost),
    CharacterEffects.gainTrait(Darkvision),
    CharacterEffects.gainCharacterOption(SelectGoblinHeritage),
    CharacterEffects.gainCharacterOption(SelectGoblinFeat1),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [CharacterEffects.gainCharacterOption(SelectGoblinFeat5)]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 9), [CharacterEffects.gainCharacterOption(SelectGoblinFeat9)]),
  ],
})

export const BurnIt = Traits.defineTrait('ancestry/goblin/burn-it', {
  name: 'Burn It!',
  description:
    "*Goblin*\n\nFire fascinates you. Your spells and alchemical items that deal fire damage gain a status bonus to damage equal to half the spell's rank or one-quarter the item's level (minimum bonus +1). You also gain a +1 status bonus to any persistent fire damage you deal.",
  tags: [Feat, AncestryFeat, GoblinFeat, FeatLevel1],
  effects: [],
})

export const CityScavenger = Traits.defineTrait('ancestry/goblin/city-scavenger', {
  name: 'City Scavenger',
  description:
    '*Goblin*\n\nYou know that the greatest treasures often look like refuse. You gain a +1 circumstance bonus to checks to [Subsist](content:skills/subsist), and you can use [Society](characteristic:skill/society) or [Survival](characteristic:skill/survival) when you Subsist in a settlement.\n\nWhen you Subsist in a city, you also gather valuable junk that silly longshanks threw away. You can [Earn Income](content:skills/earn-income) using Society or Survival at the same time while you Subsist, without spending any additional days of downtime. You also gain a +1 circumstance bonus to this check.\n\n**Special** If you have the irongut goblin heritage, increase the bonuses to +2.',
  tags: [Feat, AncestryFeat, GoblinFeat, FeatLevel1],
  effects: [],
})

export const GoblinLore = Traits.defineTrait('ancestry/goblin/goblin-lore', {
  name: 'Goblin Lore',
  description:
    "*Goblin*\n\nYou've picked up skills and tales from your goblin community. You gain the trained proficiency rank in [Nature](characteristic:skill/nature) and [Stealth](characteristic:skill/stealth). If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice.\n\nYou also gain the [Additional Lore](trait:feat/additional-lore) general feat for Goblin [Lore](content:skills/lore).",
  tags: [Feat, AncestryFeat, GoblinFeat, FeatLevel1],
  effects: [CharacterEffects.gainTrait(TrainedNature), CharacterEffects.gainTrait(TrainedStealth), CharacterEffects.gainTrait(AdditionalLore)],
})

export const GoblinScuttle = Traits.defineTrait('ancestry/goblin/goblin-scuttle', {
  name: 'Goblin Scuttle',
  description:
    "*Goblin*\n\n**Trigger** An ally ends a move action adjacent to you\n\nYou take advantage of your ally's movement to adjust your position. You [Step](content:playing-the-game/step).",
  tags: [Feat, AncestryFeat, GoblinFeat, FeatLevel1],
  effects: [],
})

export const GoblinSong = Traits.defineTrait('ancestry/goblin/goblin-song', {
  name: 'Goblin Song',
  description:
    '*Goblin*\n\nYou sing annoying goblin songs, distracting your foes with silly and repetitive lyrics. Attempt a [Performance](characteristic:skill/performance) check against the [Will DC](characteristic:will) of a single enemy within 30 feet. This has all the usual traits and restrictions of a [Performance](characteristic:skill/performance) check to sing.\n\nYou can affect up to two targets within range if you have expert proficiency in Performance, four if you have master proficiency, and eight if you have legendary proficiency.\n\n**Critical Success** The target takes a –1 status penalty to [Perception](characteristic:perception) checks and Will saves for 1 minute.\n\n**Success** The target takes a –1 status penalty to Perception checks and Will saves for 1 round.\n\n**Critical Failure** The target is temporarily immune to attempts to use Goblin Song for 1 hour.',
  tags: [Feat, AncestryFeat, GoblinFeat, FeatLevel1],
  effects: [],
})

export const GoblinWeaponFamiliarity = Traits.defineTrait('ancestry/goblin/goblin-weapon-familiarity', {
  name: 'Goblin Weapon Familiarity',
  description:
    '*Goblin*\n\nOthers might look upon them with disdain, but you know that the weapons of your people are as effective as they are sharp. You gain access to all [uncommon](content:traits/uncommon) weapons with the [goblin](content:traits/goblin) trait. You have familiarity with weapons with the goblin trait—for the purposes of proficiency, you treat any of these that are martial weapons as simple weapons and any that are advanced weapons as martial weapons.\n\nAt 5th level, whenever you get a critical hit with one of these weapons, you get its critical specialization effect.',
  tags: [Feat, AncestryFeat, GoblinFeat, FeatLevel1],
  effects: [],
})

export const JunkTinker = Traits.defineTrait('ancestry/goblin/junk-tinker', {
  name: 'Junk Tinker',
  description:
    "*Goblin*\n\nYou can make useful tools out of even twisted or rusted scraps. When using the [Crafting](characteristic:skill/crafting) skill to [Craft](content:skills/craft), you can make level 0 items, including weapons and armor, out of junk. This reduces the Price to one-quarter the usual amount but always results in a [shoddy item](content:equipment/shoddy-items). Shoddy items normally give a penalty, but you don't take this penalty when using shoddy items you made (nor does the worse check penalty of shoddy armor you made apply to you).\n\nYou can also incorporate junk to save money while you Craft any item. This grants you a discount on the item as if you had spent 1 additional day working to reduce the cost, but the item is obviously made of junk. At the GM's discretion, this might affect the item's resale value depending on the buyer's tastes.",
  tags: [Feat, AncestryFeat, GoblinFeat, FeatLevel1],
  effects: [],
})

export const RoughRider = Traits.defineTrait('ancestry/goblin/rough-rider', {
  name: 'Rough Rider',
  description:
    "*Goblin*\n\nYou are especially good at riding traditional goblin mounts. You gain the [Ride](trait:feat/ride) feat, even if you don't meet the prerequisites. You gain a +1 circumstance bonus to [Nature](characteristic:skill/nature) checks to use [Command an Animal](content:skills/command-an-animal) on a goblin dog or wolf mount.\n\nIf you gain a [wolf](trait:companion/animal-companion/wolf) as an animal companion, it gains the mount special ability (and if you gain an ability that grants you an animal companion with the mount special ability, you can choose a wolf).",
  tags: [Feat, AncestryFeat, GoblinFeat, FeatLevel1],
  effects: [CharacterEffects.gainTrait(Ride)],
})

export const VerySneaky = Traits.defineTrait('ancestry/goblin/very-sneaky', {
  name: 'Very Sneaky',
  description:
    "*Goblin*\n\nTaller folk rarely pay attention to the shadows at their feet, and you take full advantage of this. You can move 5 feet farther when you take the [Sneak](content:skills/sneak) action, up to your [Speed](characteristic:speed).\n\nIn addition, as long as you continue to use Sneak actions and succeed at your [Stealth](characteristic:skill/stealth) check, you don't become observed if you don't have cover or greater cover and aren't concealed at the end of the Sneak action, as long as you have cover or greater cover or are concealed at the end of your turn.",
  tags: [Feat, AncestryFeat, GoblinFeat, FeatLevel1],
  effects: [],
})

export const Kneecap = Traits.defineTrait('ancestry/goblin/kneecap', {
  name: 'Kneecap',
  description:
    "*Goblin*\n\nYou deliver a punishing blow to an enemy's knee, shin, or other vulnerable anatomy within your reach. Make a melee [Strike](content:playing-the-game/strike) with a melee weapons or melee unarmed attack. This attack doesn't deal damage. On a hit, the target takes a –10-foot status penalty to its [Speed](characteristic:speed) (or a –15-foot status penalty on a critical hit). The penalty lasts for 1 round. This penalty applies only if the target has a land Speed and depends on legs or other targetable appendages to use its land Speed. As with all penalties to Speed, this can't reduce a creature's Speed below 5 feet.",
  tags: [Feat, AncestryFeat, GoblinFeat, FeatLevel5],
  effects: [],
})

export const LoudSinger = Traits.defineTrait('ancestry/goblin/loud-singer', {
  name: 'Loud Singer',
  description:
    '*Goblin*\n\n**Prerequisites** [Goblin Song](trait:ancestry/goblin/goblin-song)\n\nStaying on pitch, proper breath control, and remembering the words are all less important than the real measure of a good singer: volume! The range of your [Goblin Song](trait:ancestry/goblin/goblin-song) is increased to 60 feet, and you can target one additional enemy when you use it.',
  tags: [Feat, AncestryFeat, GoblinFeat, FeatLevel5],
  prerequisites: [Traits.traitPrerequisite(GoblinSong)],
  effects: [],
})

export const Vandal = Traits.defineTrait('ancestry/goblin/vandal', {
  name: 'Vandal',
  description:
    "*Goblin*\n\nYou have a knack for breaking and dismantling things. Putting them back together is the boring part, so you largely don't bother with that. You become trained in [Thievery](characteristic:skill/thievery). If you would automatically become trained in Thievery (from your background or class, for example), you instead become trained in a skill of your choice.\n\nIn addition, whenever you hit with a [Strike](content:playing-the-game/strike) against a trap or an unattended object, you ignore the first 5 points of the object's [Hardness](content:equipment/item-damage).",
  tags: [Feat, AncestryFeat, GoblinFeat, FeatLevel5],
  effects: [CharacterEffects.gainTrait(TrainedThievery)],
})

export const GoblinScuttleAction = Abilities.defineAbility('ancestry/goblin/goblin-scuttle/action', {
  name: 'Goblin Scuttle',
  description: '*Goblin*',
  prerequisites: [Traits.traitPrerequisite(GoblinScuttle)],
  actions: [
    {
      name: 'Goblin Scuttle',
      description:
        "**Trigger** An ally ends a move action adjacent to you\n\nYou take advantage of your ally's movement to adjust your position. You [Step](content:playing-the-game/step).",
      action: Reaction,
    },
  ],
})

export const GoblinSongAction = Abilities.defineAbility('ancestry/goblin/goblin-song/action', {
  name: 'Goblin Song',
  description: '*Goblin*',
  prerequisites: [Traits.traitPrerequisite(GoblinSong)],
  actions: [
    {
      name: 'Goblin Song',
      description:
        'You sing annoying goblin songs, distracting your foes with silly and repetitive lyrics. Attempt a [Performance](characteristic:skill/performance) check against the [Will DC](characteristic:will) of a single enemy within 30 feet. This has all the usual traits and restrictions of a [Performance](characteristic:skill/performance) check to sing.\n\nYou can affect up to two targets within range if you have expert proficiency in Performance, four if you have master proficiency, and eight if you have legendary proficiency.\n\n**Critical Success** The target takes a –1 status penalty to [Perception](characteristic:perception) checks and Will saves for 1 minute.\n\n**Success** The target takes a –1 status penalty to Perception checks and Will saves for 1 round.\n\n**Critical Failure** The target is temporarily immune to attempts to use Goblin Song for 1 hour.',
      action: SingleAction,
    },
  ],
})

export const KneecapAction = Abilities.defineAbility('ancestry/goblin/kneecap/action', {
  name: 'Kneecap',
  description: '*Goblin*',
  prerequisites: [Traits.traitPrerequisite(Kneecap)],
  actions: [
    {
      name: 'Kneecap',
      description:
        "You deliver a punishing blow to an enemy's knee, shin, or other vulnerable anatomy within your reach. Make a melee [Strike](content:playing-the-game/strike) with a melee weapons or melee unarmed attack. This attack doesn't deal damage. On a hit, the target takes a –10-foot status penalty to its [Speed](characteristic:speed) (or a –15-foot status penalty on a critical hit). The penalty lasts for 1 round. This penalty applies only if the target has a land Speed and depends on legs or other targetable appendages to use its land Speed. As with all penalties to Speed, this can't reduce a creature's Speed below 5 feet.",
      action: SingleAction,
    },
  ],
})

export const CaveClimber = Traits.defineTrait('ancestry/goblin/cave-climber', {
  name: 'Cave Climber',
  description:
    '*Goblin*\n\nAfter years of clambering through caverns, you can climb easily anywhere you go. You gain a climb [Speed](characteristic:speed) of 10 feet.',
  tags: [Feat, AncestryFeat, GoblinFeat, FeatLevel9],
  effects: [],
})

export const Cling = Traits.defineTrait('ancestry/goblin/cling', {
  name: 'Cling',
  description:
    "*Goblin*\n\n**Requirements** Your last action was a successful [Strike](content:playing-the-game/strike) and you have a free hand\n\nYou hang onto a foe to harry them into submission. If your target moves while you're hanging onto it, you can choose to move with the target. The target is released if you choose not to move with it, at the start of your next turn, or if the target [Escapes](content:playing-the-game/escape). Attempts to Escape from a Cling are made against your [Acrobatics](characteristic:skill/acrobatics) DC and follow the rules on page 416, but they end the Cling instead of the conditions normally ended by the Escape action.\n\n**Special** You can use this action without a free hand if your preceding Strike was made with your jaws or a similar unarmed attack you could use to hang on. The GM determines which unarmed attacks apply. Hanging on in this way prevents you from using that unarmed attack.",
  tags: [Feat, AncestryFeat, GoblinFeat, FeatLevel9],
  effects: [],
})

export const SkitteringScuttle = Traits.defineTrait('ancestry/goblin/skittering-scuttle', {
  name: 'Skittering Scuttle',
  description:
    '*Goblin*\n\n**Prerequisites** [Goblin Scuttle](trait:ancestry/goblin/goblin-scuttle)\n\nYou can scuttle farther and faster when maneuvering alongside allies. When you use Goblin Scuttle, you can [Stride](content:playing-the-game/stride) up to half your [Speed](characteristic:speed) instead of [Stepping](content:playing-the-game/step).',
  tags: [Feat, AncestryFeat, GoblinFeat, FeatLevel9],
  prerequisites: [Traits.traitPrerequisite(GoblinScuttle)],
  effects: [],
})

export const ClingAction = Abilities.defineAbility('ancestry/goblin/cling/action', {
  name: 'Cling',
  description: '*Goblin*',
  prerequisites: [Traits.traitPrerequisite(Cling)],
  actions: [
    {
      name: 'Cling',
      description:
        "**Requirements** Your last action was a successful [Strike](content:playing-the-game/strike) and you have a free hand\n\nYou hang onto a foe to harry them into submission. If your target moves while you're hanging onto it, you can choose to move with the target. The target is released if you choose not to move with it, at the start of your next turn, or if the target [Escapes](content:playing-the-game/escape). Attempts to Escape from a Cling are made against your [Acrobatics](characteristic:skill/acrobatics) DC and follow the rules on page 416, but they end the Cling instead of the conditions normally ended by the Escape action.\n\n**Special** You can use this action without a free hand if your preceding Strike was made with your jaws or a similar unarmed attack you could use to hang on. The GM determines which unarmed attacks apply. Hanging on in this way prevents you from using that unarmed attack.",
      action: SingleAction,
    },
  ],
})

export const AllGoblinEntities = [
  CharhideGoblin,
  IrongutGoblin,
  RazortoothGoblin,
  SnowGoblin,
  UnbreakableGoblin,
  SelectGoblinHeritage,
  SelectGoblinFeat1,
  SelectGoblinFeat5,
  SelectGoblinFeat9,
  SelectGoblinAncestryBoost,
  Goblin,
  BurnIt,
  CityScavenger,
  GoblinLore,
  GoblinScuttle,
  GoblinScuttleAction,
  GoblinSong,
  GoblinSongAction,
  GoblinWeaponFamiliarity,
  JunkTinker,
  RoughRider,
  VerySneaky,
  Kneecap,
  KneecapAction,
  LoudSinger,
  Vandal,
  CaveClimber,
  Cling,
  SkitteringScuttle,
  ClingAction,
]
