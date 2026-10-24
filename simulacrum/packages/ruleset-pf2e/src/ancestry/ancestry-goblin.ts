import { Abilities, Attributes, CharacterOptions, CharacterValues, Effects, Traits } from '@simulacrum/ruleset'
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
  GoblinFeat,
  Heritage,
  NephilimFeat,
  OrcFeat,
  VersatileHeritage,
} from '@simulacrum/ruleset-pf2e/archetype'
import { HitPoints, Speed } from '@simulacrum/ruleset-pf2e/characteristic'
import { CharismaAncestryBoost, DexterityAncestryBoost, SelectAncestryBoost, WisdomAncestryFlaw } from '@simulacrum/ruleset-pf2e/attribute-boost'
import { TrainedNature, TrainedStealth, TrainedThievery } from '@simulacrum/ruleset-pf2e/skill'
import { Reaction, SingleAction } from '@simulacrum/ruleset-pf2e/action-type'
import { Darkvision, GoblinHeritage } from '@simulacrum/ruleset-pf2e/ancestry/ancestry-common'
import { Ride } from '@simulacrum/ruleset-pf2e/feat/general-feat'
import { AdditionalLore } from '@simulacrum/ruleset-pf2e/feat/skill-feat'

export const CharhideGoblin = Traits.defineTrait('heritage/charhide-goblin', {
  name: 'Charhide Goblin',
  description:
    'Your ancestors have always had a connection to fire and a thicker skin, which allows you to resist burning. You gain fire resistance equal to half your level minimum 1). You can also recover from being on fire more easily. Your flat check to remove persistent fire damage is DC 10 instead of DC 15, which is reduced to DC 5 if another creature uses a particularly appropriate action to help.',
  archetypes: [Heritage, GoblinHeritage],
  effects: [],
})

export const IrongutGoblin = Traits.defineTrait('heritage/irongut-goblin', {
  name: 'Irongut Goblin',
  description:
    'You can subsist on food that most folks would consider spoiled. You can keep yourself fed with poor meals in a settlement as long as garbage is readily available, without using the Subsist downtime activity. You can eat and drink things when you are sickened.\n\nYou gain a +2 circumstance bonus to saving throws against afflictions, against gaining the sickened condition, and to remove the sickened condition. When you roll a success on a Fortitude save affected by this bonus, you get a critical success instead. All these benefits apply only when the affliction or condition resulted from something you ingested.',
  archetypes: [Heritage, GoblinHeritage],
  effects: [],
})

export const RazortoothGoblin = Traits.defineTrait('heritage/razortooth-goblin', {
  name: 'Razortooth Goblin',
  description:
    "Your family's teeth are formidable weapons. You gain a jaws unarmed attack that deals 1d6 piercing damage. Your jaws are in the brawling group and have the finesse and unarmed traits.",
  archetypes: [Heritage, GoblinHeritage],
  effects: [],
})

export const SnowGoblin = Traits.defineTrait('heritage/snow-goblin', {
  name: 'Snow Goblin',
  description:
    'You are acclimated to living in frigid lands and have skin ranging from sky blue to navy in color, as well as blue fur. You gain cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on).',
  archetypes: [Heritage, GoblinHeritage],
  effects: [],
})

export const UnbreakableGoblin = Traits.defineTrait('heritage/unbreakable-goblin', {
  name: 'Unbreakable Goblin',
  description:
    "You're able to bounce back from injuries easily due to an exceptionally thick skull, cartilaginous bones, or some other mixed blessing. You gain 10 Hit Points from your ancestry instead of 6. When you fall, reduce the falling damage you take as though you had fallen half the distance.",
  archetypes: [Heritage, GoblinHeritage],
  effects: [Effects.modifyCharacteristic(HitPoints, Attributes.modifier(Patches.sum(4)))],
})

export const SelectGoblinHeritage = CharacterOptions.selectTraitOption('ancestry/goblin/select-heritage', {
  name: 'Goblin Heritage',
  filter: { archetypes: [[GoblinHeritage, VersatileHeritage]] },
})

export const SelectGoblinFeat1 = CharacterOptions.selectTraitOption('ancestry/goblin/select-feat-1', {
  name: 'Ancestry Feat (Level 1)',
  filter: { archetypes: [AncestryFeat, [GoblinFeat, ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], FeatLevel1] },
})

export const SelectGoblinFeat5 = CharacterOptions.selectTraitOption('ancestry/goblin/select-feat-5', {
  name: 'Ancestry Feat (Level 5)',
  filter: {
    archetypes: [AncestryFeat, [GoblinFeat, ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], [FeatLevel1, FeatLevel5]],
  },
})

export const Goblin = Traits.defineTrait('ancestry/goblin', {
  name: 'Goblin',
  description:
    "*Goblin, Humanoid*\n\n_Goblins are a short, scrappy, energetic people who have spent millennia maligned and feared._\n\nThe convoluted histories other people cling to don't interest goblins. These small folk live in the moment, and they prefer tall tales over factual records. Goblin virtues are about being present, creative, and honest. They strive to lead fulfilled lives, rather than worrying about how their journeys will end. To tell stories, not nitpick the facts. To be small, but dream big. Many goblins enjoy simpler delights like songs, fire, and eating, and hate reading, dogs, and horses. Other goblins might have more complex pursuits, though, such as tinkering with scraps or concocting snacks and explosives from most anything.\n\nIf you want a character who is eccentric, enthusiastic, and fun-loving, you should play a goblin.\n\n**You Might...**\n\n- Strive to prove that you have a place among other civilized peoples, perhaps even to yourself.\n\n- Lighten the heavy emotional burdens others carry (and amuse yourself) with antics and pranks.\n\n**Others Probably...**\n\n- Work to ensure you don't accidentally (or intentionally) set too many things on fire.\n\n- Wonder how you survive given your ancestry's typical gastronomic choices, reckless behavior, and love of fire.\n\n**Physical Description**\n\nGoblins are stumpy humanoids with large bodies, scrawny limbs, and massively oversized heads with large ears and beady red eyes. Their skin ranges from green to gray to blue, and they often bear scars, boils, and rashes. Goblins average 3 feet tall. Most are bald, with little or no body hair. Their jagged teeth fall out and regrow constantly, and their fast metabolism means they eat constantly and nap frequently. Mutations are also more common among goblins than other peoples, and goblins usually view particularly salient mutations as a sign of power or fortune.\n\nGoblins reach adolescence by the age of 3 and adulthood 4 or 5 years later. Goblins can live 50 years or more, but without anyone to protect them from each other or themselves, few live past 20 years of age.\n\n**Society**\n\nGoblins tend to flock to strong leaders, forming small tribes. These tribes rarely number more than a hundred, though the larger a tribe is, the more diligent the leader must be to keep order—a notoriously difficult task. Play and creativity matter more to goblins than productivity or study, and their encampments erupt with songs and laughter.\n\nGoblins bond closely with their allies, fiercely protecting those companions who have protected them or offered a sympathetic ear. Goblins tend to assume for their own protection that members of taller ancestries, which goblins often refer to colloquially as “longshanks,” won't treat them kindly. Learning to trust longshanks is difficult for a goblin, and it's been only in recent years that such a partnership has even been an option. Goblins keep their names simple. A good name should be easy to pronounce, short enough to shout without getting winded, and taste good to say. The namer often picks a word that rhymes with something they like so that writing songs is easier.\n\n**Alignment and Religion**\n\nEven the most well-intentioned goblins have trouble following the rules, meaning goblin adventurers are often unsure whether they're on the right side of the law. Organized worship likewise confounds goblins, and most of them would rather pick their own deities, choosing powerful monsters, natural wonders, or anything else they find fascinating— sometimes even attributing deific status to fellow goblins of note. Goblins who spend time around people of other ancestries might adopt some of their beliefs, though, and many goblin adventurers adopt the worship of Cayden Cailean.\n\n**Popular Edicts** invent songs for every occasion, turn trash into your treasures, solve problems with fire\n**Popular Anathema** trust a dog or horse, learn to read\n\n**Names**\n\nAk, Bokker, Frum, Guzmuk, Krobby, Loohi, Mazmord, Neeka, Omgot, Ranzak, Rickle, Tup, Wakla, Yonk, Zibini\n\n**Goblin Mechanics**\n\n**Hit Points**\n\n6\n\n**Size**\n\nSmall\n\n**Speed**\n\n25 feet\n\n**Attribute Boosts**\n\nDexterity, Charisma, Free\n\n**Attribute Flaws**\n\nWisdom\n\n**Languages**\n\nCommon\n\nGoblin\n\nAdditional languages equal to your Intelligence modifier (if it's positive). Choose from Draconic, Dwarven, Gnomish, Halfling, Kholo, Orcish, and any other languages to which you have access (such as the languages prevalent in your region).\n\n**Darkvision**\n\nYou can see in darkness and dim light just as well as you can see in bright light, though your vision in darkness is in black and white.",
  archetypes: [Ancestry],
  effects: [
    Effects.modifyCharacteristic(HitPoints, Attributes.modifier(Patches.sum(6))),
    Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(25))),
    Effects.gainTrait(DexterityAncestryBoost),
    Effects.gainTrait(CharismaAncestryBoost),
    Effects.gainTrait(WisdomAncestryFlaw),
    Effects.gainCharacterOption(SelectAncestryBoost),
    Effects.gainTrait(Darkvision),
    Effects.gainCharacterOption(SelectGoblinHeritage),
    Effects.gainCharacterOption(SelectGoblinFeat1),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [Effects.gainCharacterOption(SelectGoblinFeat5)]),
  ],
})

export const BurnIt = Traits.defineTrait('ancestry/goblin/burn-it', {
  name: 'Burn It!',
  description:
    "*Goblin*\n\nFire fascinates you. Your spells and alchemical items that deal fire damage gain a status bonus to damage equal to half the spell's rank or one-quarter the item's level (minimum bonus +1). You also gain a +1 status bonus to any persistent fire damage you deal.",
  archetypes: [Feat, AncestryFeat, GoblinFeat, FeatLevel1],
  effects: [],
})

export const CityScavenger = Traits.defineTrait('ancestry/goblin/city-scavenger', {
  name: 'City Scavenger',
  description:
    '*Goblin*\n\nYou know that the greatest treasures often look like refuse. You gain a +1 circumstance bonus to checks to Subsist, and you can use Society or Survival when you Subsist in a settlement.\n\nWhen you Subsist in a city, you also gather valuable junk that silly longshanks threw away. You can Earn Income using Society or Survival at the same time while you Subsist, without spending any additional days of downtime. You also gain a +1 circumstance bonus to this check.\n\n**Special** If you have the irongut goblin heritage, increase the bonuses to +2.',
  archetypes: [Feat, AncestryFeat, GoblinFeat, FeatLevel1],
  effects: [],
})

export const GoblinLore = Traits.defineTrait('ancestry/goblin/goblin-lore', {
  name: 'Goblin Lore',
  description:
    "*Goblin*\n\nYou've picked up skills and tales from your goblin community. You gain the trained proficiency rank in Nature and Stealth. If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice.\n\nYou also gain the Additional Lore general feat for Goblin Lore.",
  archetypes: [Feat, AncestryFeat, GoblinFeat, FeatLevel1],
  effects: [Effects.gainTrait(TrainedNature), Effects.gainTrait(TrainedStealth), Effects.gainTrait(AdditionalLore)],
})

export const GoblinScuttle = Traits.defineTrait('ancestry/goblin/goblin-scuttle', {
  name: 'Goblin Scuttle',
  description:
    "*Goblin*\n\n**Trigger** An ally ends a move action adjacent to you\n\nYou take advantage of your ally's movement to adjust your position. You Step.",
  archetypes: [Feat, AncestryFeat, GoblinFeat, FeatLevel1],
  effects: [],
})

export const GoblinSong = Traits.defineTrait('ancestry/goblin/goblin-song', {
  name: 'Goblin Song',
  description:
    '*Goblin*\n\nYou sing annoying goblin songs, distracting your foes with silly and repetitive lyrics. Attempt a Performance check against the Will DC of a single enemy within 30 feet. This has all the usual traits and restrictions of a Performance check to sing.\n\nYou can affect up to two targets within range if you have expert proficiency in Performance, four if you have master proficiency, and eight if you have legendary proficiency.\n\n**Critical Success** The target takes a –1 status penalty to Perception checks and Will saves for 1 minute.\n\n**Success** The target takes a –1 status penalty to Perception checks and Will saves for 1 round.\n\n**Critical Failure** The target is temporarily immune to attempts to use Goblin Song for 1 hour.',
  archetypes: [Feat, AncestryFeat, GoblinFeat, FeatLevel1],
  effects: [],
})

export const GoblinWeaponFamiliarity = Traits.defineTrait('ancestry/goblin/goblin-weapon-familiarity', {
  name: 'Goblin Weapon Familiarity',
  description:
    '*Goblin*\n\nOthers might look upon them with disdain, but you know that the weapons of your people are as effective as they are sharp. You gain access to all uncommon weapons with the goblin trait. You have familiarity with weapons with the goblin trait—for the purposes of proficiency, you treat any of these that are martial weapons as simple weapons and any that are advanced weapons as martial weapons.\n\nAt 5th level, whenever you get a critical hit with one of these weapons, you get its critical specialization effect.',
  archetypes: [Feat, AncestryFeat, GoblinFeat, FeatLevel1],
  effects: [],
})

export const JunkTinker = Traits.defineTrait('ancestry/goblin/junk-tinker', {
  name: 'Junk Tinker',
  description:
    "*Goblin*\n\nYou can make useful tools out of even twisted or rusted scraps. When using the Crafting skill to Craft, you can make level 0 items, including weapons and armor, out of junk. This reduces the Price to one-quarter the usual amount but always results in a shoddy item. Shoddy items normally give a penalty, but you don't take this penalty when using shoddy items you made (nor does the worse check penalty of shoddy armor you made apply to you).\n\nYou can also incorporate junk to save money while you Craft any item. This grants you a discount on the item as if you had spent 1 additional day working to reduce the cost, but the item is obviously made of junk. At the GM's discretion, this might affect the item's resale value depending on the buyer's tastes.",
  archetypes: [Feat, AncestryFeat, GoblinFeat, FeatLevel1],
  effects: [],
})

export const RoughRider = Traits.defineTrait('ancestry/goblin/rough-rider', {
  name: 'Rough Rider',
  description:
    "*Goblin*\n\nYou are especially good at riding traditional goblin mounts. You gain the Ride feat, even if you don't meet the prerequisites. You gain a +1 circumstance bonus to Nature checks to use Command an Animal on a goblin dog or wolf mount.\n\nIf you gain a wolf as an animal companion, it gains the mount special ability (and if you gain an ability that grants you an animal companion with the mount special ability, you can choose a wolf).",
  archetypes: [Feat, AncestryFeat, GoblinFeat, FeatLevel1],
  effects: [Effects.gainTrait(Ride)],
})

export const VerySneaky = Traits.defineTrait('ancestry/goblin/very-sneaky', {
  name: 'Very Sneaky',
  description:
    "*Goblin*\n\nTaller folk rarely pay attention to the shadows at their feet, and you take full advantage of this. You can move 5 feet farther when you take the Sneak action, up to your Speed.\n\nIn addition, as long as you continue to use Sneak actions and succeed at your Stealth check, you don't become observed if you don't have cover or greater cover and aren't concealed at the end of the Sneak action, as long as you have cover or greater cover or are concealed at the end of your turn.",
  archetypes: [Feat, AncestryFeat, GoblinFeat, FeatLevel1],
  effects: [],
})

export const Kneecap = Traits.defineTrait('ancestry/goblin/kneecap', {
  name: 'Kneecap',
  description:
    "*Goblin*\n\nYou deliver a punishing blow to an enemy's knee, shin, or other vulnerable anatomy within your reach. Make a melee Strike with a melee weapons or melee unarmed attack. This attack doesn't deal damage. On a hit, the target takes a –10-foot status penalty to its Speed (or a –15-foot status penalty on a critical hit). The penalty lasts for 1 round. This penalty applies only if the target has a land Speed and depends on legs or other targetable appendages to use its land Speed. As with all penalties to Speed, this can't reduce a creature's Speed below 5 feet.",
  archetypes: [Feat, AncestryFeat, GoblinFeat, FeatLevel5],
  effects: [],
})

export const LoudSinger = Traits.defineTrait('ancestry/goblin/loud-singer', {
  name: 'Loud Singer',
  description:
    '*Goblin*\n\n**Prerequisites** Goblin Song\n\nStaying on pitch, proper breath control, and remembering the words are all less important than the real measure of a good singer: volume! The range of your Goblin Song is increased to 60 feet, and you can target one additional enemy when you use it.',
  archetypes: [Feat, AncestryFeat, GoblinFeat, FeatLevel5],
  prerequisites: [Traits.traitPrerequisite(GoblinSong)],
  effects: [],
})

export const Vandal = Traits.defineTrait('ancestry/goblin/vandal', {
  name: 'Vandal',
  description:
    "*Goblin*\n\nYou have a knack for breaking and dismantling things. Putting them back together is the boring part, so you largely don't bother with that. You become trained in Thievery. If you would automatically become trained in Thievery (from your background or class, for example), you instead become trained in a skill of your choice.\n\nIn addition, whenever you hit with a Strike against a trap or an unattended object, you ignore the first 5 points of the object's Hardness.",
  archetypes: [Feat, AncestryFeat, GoblinFeat, FeatLevel5],
  effects: [Effects.gainTrait(TrainedThievery)],
})

export const GoblinScuttleAction = Abilities.defineAbility('ancestry/goblin/goblin-scuttle/action', {
  name: 'Goblin Scuttle',
  description:
    "*Goblin*\n\n**Trigger** An ally ends a move action adjacent to you\n\nYou take advantage of your ally's movement to adjust your position. You Step.",
  prerequisites: [Traits.traitPrerequisite(GoblinScuttle)],
  actions: [{ name: 'Goblin Scuttle', action: Reaction }],
})

export const GoblinSongAction = Abilities.defineAbility('ancestry/goblin/goblin-song/action', {
  name: 'Goblin Song',
  description:
    '*Goblin*\n\nYou sing annoying goblin songs, distracting your foes with silly and repetitive lyrics. Attempt a Performance check against the Will DC of a single enemy within 30 feet. This has all the usual traits and restrictions of a Performance check to sing.\n\nYou can affect up to two targets within range if you have expert proficiency in Performance, four if you have master proficiency, and eight if you have legendary proficiency.\n\n**Critical Success** The target takes a –1 status penalty to Perception checks and Will saves for 1 minute.\n\n**Success** The target takes a –1 status penalty to Perception checks and Will saves for 1 round.\n\n**Critical Failure** The target is temporarily immune to attempts to use Goblin Song for 1 hour.',
  prerequisites: [Traits.traitPrerequisite(GoblinSong)],
  actions: [{ name: 'Goblin Song', action: SingleAction }],
})

export const KneecapAction = Abilities.defineAbility('ancestry/goblin/kneecap/action', {
  name: 'Kneecap',
  description:
    "*Goblin*\n\nYou deliver a punishing blow to an enemy's knee, shin, or other vulnerable anatomy within your reach. Make a melee Strike with a melee weapons or melee unarmed attack. This attack doesn't deal damage. On a hit, the target takes a –10-foot status penalty to its Speed (or a –15-foot status penalty on a critical hit). The penalty lasts for 1 round. This penalty applies only if the target has a land Speed and depends on legs or other targetable appendages to use its land Speed. As with all penalties to Speed, this can't reduce a creature's Speed below 5 feet.",
  prerequisites: [Traits.traitPrerequisite(Kneecap)],
  actions: [{ name: 'Kneecap', action: SingleAction }],
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
]
