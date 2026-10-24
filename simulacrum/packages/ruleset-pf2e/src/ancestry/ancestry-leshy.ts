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
  Heritage,
  LeshyFeat,
  NephilimFeat,
  OrcFeat,
  VersatileHeritage,
} from '@simulacrum/ruleset-pf2e/archetype'
import { HitPoints, Speed } from '@simulacrum/ruleset-pf2e/characteristic'
import {
  ConstitutionAncestryBoost,
  IntelligenceAncestryFlaw,
  SelectAncestryBoost,
  WisdomAncestryBoost,
} from '@simulacrum/ruleset-pf2e/attribute-boost'
import { TrainedNature, TrainedStealth } from '@simulacrum/ruleset-pf2e/skill'
import { Reaction, SingleAction, TwoActions } from '@simulacrum/ruleset-pf2e/action-type'
import { Darkvision, LeshyHeritage, LowLightVision } from '@simulacrum/ruleset-pf2e/ancestry/ancestry-common'
import { AdditionalLore, CatFall, SteadyBalance } from '@simulacrum/ruleset-pf2e/feat/skill-feat'

export const CactusLeshy = Traits.defineTrait('heritage/cactus-leshy', {
  name: 'Cactus Leshy',
  description:
    'Spines cover your body. You gain a spine unarmed attack that deals 1d6 piercing damage. Your spines are in the brawling group and have the finesse and unarmed traits.',
  archetypes: [Heritage, LeshyHeritage],
  effects: [],
})

export const FruitLeshy = Traits.defineTrait('heritage/fruit-leshy', {
  name: 'Fruit Leshy',
  description:
    'Your body continually produces small fruits imbued with primal magic. At dawn each day, a new fruit ripens. You or an ally can remove this fruit as an Interact action. If a living creature that can derive sustenance from fruit consumes it as an Interact action within the next hour, they regain 1d8 Hit Points, plus an additional 1d8 Hit Points for every 2 of your levels beyond 1st. This effect has the healing and vitality traits.',
  archetypes: [Heritage, LeshyHeritage],
  effects: [],
})

export const FungusLeshy = Traits.defineTrait('heritage/fungus-leshy', {
  name: 'Fungus Leshy',
  description:
    'Your body was made from fungi that grows in the shade of caves and trees, and you are at home in dark caverns and warrens. You gain darkvision. You lose the plant trait and gain the fungus trait.',
  archetypes: [Heritage, LeshyHeritage],
  effects: [Effects.gainTrait(Darkvision)],
})

export const GourdLeshy = Traits.defineTrait('heritage/gourd-leshy', {
  name: 'Gourd Leshy',
  description:
    "You have a large gourd for a skull, and since you don't have a physical brain, you can use the space inside your head. You can store a collection of up to 1 Bulk of objects within your head. The DC of checks to Steal objects from inside your head increases by 4. Additionally, if you store only one object within your head, you can draw it effortlessly into your hand as part of another action to use the object. Drawing the item grants this other action the manipulate trait.",
  archetypes: [Heritage, LeshyHeritage],
  effects: [],
})

export const LeafLeshy = Traits.defineTrait('heritage/leaf-leshy', {
  name: 'Leaf Leshy',
  description:
    'Your body is made mostly from natural foliage, and like a leaf tumbling from a tree, you land from falls with particular grace. You take no damage from falling, regardless of the distance you fall.\n\n**Feats that require Leaf Leshy...**\n\nLeshy Glide',
  archetypes: [Heritage, LeshyHeritage],
  effects: [],
})

export const LotusLeshy = Traits.defineTrait('heritage/lotus-leshy', {
  name: 'Lotus Leshy',
  description:
    "You effortlessly float on the surface of water. You can walk on the surface of still water and other non-damaging liquids, moving at half your normal Speed. You can also attempt to Balance to move across the surface of flowing water, using the DC of a Swim check to move through the water. When you do this, you can't move faster than half your Speed, and if you fail or critically fail, you fall into the water rather than the normal effects.",
  archetypes: [Heritage, LeshyHeritage],
  effects: [],
})

export const RootLeshy = Traits.defineTrait('heritage/root-leshy', {
  name: 'Root Leshy',
  description:
    'Your body is made from hardy roots that attach you firmly to the ground. You gain 10 Hit Points from your ancestry instead of 8. You can go without sunlight for 2 weeks before you begin to starve. You gain a +2 circumstance bonus to your Fortitude or Reflex DC against attempts to Reposition, Shove, or Trip you. This bonus also applies to saving throws against spells or effects that attempt to move you or knock you prone.',
  archetypes: [Heritage, LeshyHeritage],
  effects: [Effects.modifyCharacteristic(HitPoints, Attributes.modifier(Patches.sum(2)))],
})

export const SeaweedLeshy = Traits.defineTrait('heritage/seaweed-leshy', {
  name: 'Seaweed Leshy',
  description:
    "Your body is made from woven seaweed, and you're just as comfortable underwater as on land. You gain a swim Speed of 20 feet, and you can always breathe underwater. However, your land Speed is reduced by 5 feet (to 20 feet for most seaweed leshies).",
  archetypes: [Heritage, LeshyHeritage],
  effects: [Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(-5)))],
})

export const VineLeshy = Traits.defineTrait('heritage/vine-leshy', {
  name: 'Vine Leshy',
  description:
    'Your prehensile vines grant you unmatched skill at climbing. You do not need to have any hands free to Climb. Additionally, if you roll a success on an Athletics check to Climb, you get a critical success instead.',
  archetypes: [Heritage, LeshyHeritage],
  effects: [],
})

export const SelectLeshyHeritage = CharacterOptions.selectTraitOption('ancestry/leshy/select-heritage', {
  name: 'Leshy Heritage',
  filter: { archetypes: [[LeshyHeritage, VersatileHeritage]] },
})

export const SelectLeshyFeat1 = CharacterOptions.selectTraitOption('ancestry/leshy/select-feat-1', {
  name: 'Ancestry Feat (Level 1)',
  filter: { archetypes: [AncestryFeat, [LeshyFeat, ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], FeatLevel1] },
})

export const SelectLeshyFeat5 = CharacterOptions.selectTraitOption('ancestry/leshy/select-feat-5', {
  name: 'Ancestry Feat (Level 5)',
  filter: {
    archetypes: [AncestryFeat, [LeshyFeat, ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], [FeatLevel1, FeatLevel5]],
  },
})

export const Leshy = Traits.defineTrait('ancestry/leshy', {
  name: 'Leshy',
  description:
    "*Leshy, Plant*\n\n_Leshies are immortal nature spirits placed in small plant bodies, seeking to experience the world._\n\nLeshies are immortal spirits of nature temporarily granted physical forms. As guardians and emissaries of the environment, leshies are “born” when a skilled druid or other master of primal magic conducts a ritual to create a suitable vessel, and then a spirit chooses that vessel to be their temporary home. Leshies are self-sufficient from the moment the ritual ends, though it isn't uncommon for leshies to maintain lifelong bonds with their creators. Many leshies relish the opportunity to interact with the physical world. While most leshy spirits are ancient, they rarely recall past lifetimes and see their new life as a chance to experience the wonders of the world once more.\n\nIf you want to play a character who is curious and connected to nature, you should play a leshy.\n\n**You Might...**\n\n- Act as a traveling agent for natural guardians who are unable to leave their territories.\n\n- Encourage civilizations to cooperate with nature and build their cities in ecologically friendly ways.\n\n**Others Probably...**\n\n- Think you are a curiosity due to your spiritual origins.\n\n- Assume you know only about nature and are unfamiliar with civilization and society.\n\n**Physical Description**\n\nLeshies are as varied as the material used to create their vessels, usually appearing as a bizarre mishmash of various plants or fungi. Their bodies are vaguely humanoid in shape, with numerous characteristics of the plant or fungus from which they were made. A typical leshy is about 3 feet tall. Leshies begin their lives as adults and don't age.\n\n**Society**\n\nTo most leshies, the concept of family is not a matter of birth, but rather determined by bonds of loyalty and friendship. Leshies are dedicated allies, but they have little tolerance for those who would despoil nature. As much as they are happy to accept someone who earns their trust into their family, they expect family members to look out for them and their natural wards in return.\n\nLeshies are grouped into categories akin to ethnicities, but these are not connected to physical features; rather, they represent broad categories of characteristics of their spirits. Certain spirits are more likely to gravitate toward particular physical bodies, though this predisposition is far from absolute. Leshies' genders are determined by the spirits that inhabit their bodies. Some leshies are exclusively male or female, while many consider themselves both. Others, particularly fungus leshies, tend toward far more complex expressions of gender, or eschew the concept entirely. Leshies choose and change their names multiple times throughout their lives.\n\n**Alignment and Religion**\n\nLeshies' beliefs generally focus on the natural world. Those with a philosophical bent lean toward the Green Faith, and Gozreh is the most popular deity among faithful leshies. Some leshies also venerate green men, powerful spirits of nature.\n\n**Popular Edicts** experience the physical world, form a family through loyalty and trust, protect parts of nature you embody\n**Popular Anathema** embrace unnatural magic or influences\n\n**Names**\n\nScarlet in Summer, Verdant Taleweaver, Lurking Hunter, Masterful Sun Drinker, Noon Sky Evening Song, Snowy Pine Branch, Cascading Rapids\n\n**Leshy Mechanics**\n\n**Hit Points**\n\n8\n\n**Size**\n\nSmall\n\n**Speed**\n\n25 feet\n\n**Attribute Boosts**\n\nConstitution, Wisdom, Free\n\n**Attribute Flaws**\n\nIntelligence\n\n**Languages**\n\nCommon\n\nFey\n\nAdditional languages equal to your Intelligence modifier (if it's positive). Choose from Draconic, Elven, Gnomish, Goblin, Halfling, Sakvroth, and any other languages to which you have access (such as the languages prevalent in your region).\n\n**Low-Light Vision**\n\nYou can see in dim light as though it were bright light, so you ignore the concealed condition due to dim light.\n\n**Plant Nourishment**\n\nYou gain nourishment in the same way that the plants or fungi that match your body type normally do, through some combination of photosynthesis, absorbing minerals with your roots, or scavenging decaying matter. You typically do not need to pay for food. If you normally rely on photosynthesis and go without sunlight for 1 week, you begin to starve. You can derive nourishment from specially formulated bottles of sunlight instead of natural sunlight, but these bottles cost 10 times as much as standard rations (or 40 sp).",
  archetypes: [Ancestry],
  effects: [
    Effects.modifyCharacteristic(HitPoints, Attributes.modifier(Patches.sum(8))),
    Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(25))),
    Effects.gainTrait(ConstitutionAncestryBoost),
    Effects.gainTrait(WisdomAncestryBoost),
    Effects.gainTrait(IntelligenceAncestryFlaw),
    Effects.gainCharacterOption(SelectAncestryBoost),
    Effects.gainTrait(LowLightVision),
    Effects.gainCharacterOption(SelectLeshyHeritage),
    Effects.gainCharacterOption(SelectLeshyFeat1),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [Effects.gainCharacterOption(SelectLeshyFeat5)]),
  ],
})

export const GraspingReach = Traits.defineTrait('ancestry/leshy/grasping-reach', {
  name: 'Grasping Reach',
  description:
    '*Leshy*\n\nYou can extend a tangle of vines or tendrils to support your arms and extend your reach. When you wield a melee weapon that requires two hands, doesn’t have reach, and deals at least 1d6 damage, you can change between a typical two-handed grip and an extended two-handed grasp using an Interact action. Weapons wielded in your extended grasp gain reach of 10 feet. This grasp is less stable and powerful than a typical grip, reducing the weapon’s damage die by 1 step.',
  archetypes: [Feat, AncestryFeat, LeshyFeat, FeatLevel1],
  effects: [],
})

export const HarmlesslyCute = Traits.defineTrait('ancestry/leshy/harmlessly-cute', {
  name: 'Harmlessly Cute',
  description:
    '*Leshy*\n\nYour size and demeanor make it easy for you to convince others that you mean no harm. You gain the Shameless Request skill feat. Additionally, you gain a +1 circumstance bonus to initiative checks when you roll Deception for initiative.',
  archetypes: [Feat, AncestryFeat, LeshyFeat, FeatLevel1],
  effects: [],
})

export const LeshyLore = Traits.defineTrait('ancestry/leshy/leshy-lore', {
  name: 'Leshy Lore',
  description:
    '*Leshy*\n\nYou deeply understand your people’s cultural traditions and innate strengths. You gain the trained proficiency rank in Nature and Stealth. If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice.\n\nYou also gain the Additional Lore general feat for Leshy Lore.',
  archetypes: [Feat, AncestryFeat, LeshyFeat, FeatLevel1],
  effects: [Effects.gainTrait(TrainedNature), Effects.gainTrait(TrainedStealth), Effects.gainTrait(AdditionalLore)],
})

export const LeshySuperstition = Traits.defineTrait('ancestry/leshy/leshy-superstition', {
  name: 'Leshy Superstition',
  description:
    '*Leshy*\n\n**Trigger** You attempt a saving throw against a spell or magical effect, but haven’t rolled yet\n\nYou notice spirits that inhabit objects, learning which bring good fortune and which are unlucky. You focus on the power of a lucky object, granting you a +1 circumstance bonus to your saving throw against the triggering effect.',
  archetypes: [Feat, AncestryFeat, LeshyFeat, FeatLevel1],
  effects: [],
})

export const Seedpod = Traits.defineTrait('ancestry/leshy/seedpod', {
  name: 'Seedpod',
  description:
    '*Leshy*\n\nYour body produces a nearly endless supply of hard seedpods. You gain a seedpod ranged unarmed attack with a range increment of 30 feet that deals 1d4 bludgeoning damage. On a critical hit, a seedpod bursts, issuing forth a tangle of vegetation that imposes a –10-foot circumstance penalty on the target’s Speed until the start of your next turn. Seedpods do not add critical specialization effects.',
  archetypes: [Feat, AncestryFeat, LeshyFeat, FeatLevel1],
  effects: [],
})

export const ShadowOfTheWilds = Traits.defineTrait('ancestry/leshy/shadow-of-the-wilds', {
  name: 'Shadow of the Wilds',
  description:
    '*Leshy*\n\nIt’s difficult to notice your passage through wild areas. As long as you’re not in an urban environment, you’re always considered to be Covering Tracks, even if you chose a different activity in exploration mode.',
  archetypes: [Feat, AncestryFeat, LeshyFeat, FeatLevel1],
  effects: [],
})

export const Undaunted = Traits.defineTrait('ancestry/leshy/undaunted', {
  name: 'Undaunted',
  description:
    '*Leshy*\n\nYour spirit has endured many challenges over its long existence. You gain a +1 circumstance bonus to saves against emotion effects. If you roll a success on a saving throw against an emotion effect, you get a critical success instead.',
  archetypes: [Feat, AncestryFeat, LeshyFeat, FeatLevel1],
  effects: [],
})

export const AnchoringRoots = Traits.defineTrait('ancestry/leshy/anchoring-roots', {
  name: 'Anchoring Roots',
  description:
    '*Leshy*\n\nSmall roots sprout from your feet, steadying you as you move. You gain the Steady Balance skill feat, even if you aren’t trained in Acrobatics, and you can use the Anchor action.\n\n**Anchor** ◆ **Requirements** You’re on a solid surface; **Effect** You send your roots into or across the ground, making it harder for you to stumble. Until you move, you gain a +2 circumstance bonus to your Fortitude or Reflex DC against attempts to Reposition, Shove, or Trip you (or a +4 circumstance bonus if you’re a root leshy). This bonus also applies to saving throws against spells or effects that attempt to move you or knock you prone. If an effect forces you to move, you move only half the normal distance, as some of the effort goes to tearing loose the roots.',
  archetypes: [Feat, AncestryFeat, LeshyFeat, FeatLevel5],
  effects: [Effects.gainTrait(SteadyBalance)],
})

export const LeshyGlide = Traits.defineTrait('ancestry/leshy/leshy-glide', {
  name: 'Leshy Glide',
  description:
    '*Leshy*\n\n**Prerequisites** Leaf Leshy heritage or Cat Fall\n\nUsing your own leaves, you can control your descent. You glide slowly toward the ground, 5 feet down and up to 25 feet forward through the air. As long as you spend at least 1 action gliding each round and have not yet reached the ground, you remain in the air at the end of your turn.',
  archetypes: [Feat, AncestryFeat, LeshyFeat, FeatLevel5],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(LeafLeshy), Traits.traitPrerequisite(CatFall)])],
  effects: [],
})

export const RitualReversion = Traits.defineTrait('ancestry/leshy/ritual-reversion', {
  name: 'Ritual Reversion',
  description:
    '*Leshy, Polymorph, Primal*\n\nYou can temporarily revert to a less conspicuous form without diminishing your senses. You take the form of an ordinary specimen of the type of plant or fungus that most closely resembles you, reverting to your body’s appearance just before your spirit joined with it. This otherwise has the effects of one with plants, except that your size remains Small.',
  archetypes: [Feat, AncestryFeat, LeshyFeat, FeatLevel5],
  effects: [],
})

export const SpeakWithKindred = Traits.defineTrait('ancestry/leshy/speak-with-kindred', {
  name: 'Speak with Kindred',
  description:
    '*Leshy*\n\nYou have a connection with creatures that share your physiology. You can ask questions of, receive answers from, and use the Diplomacy skill with plants and fungi. You gain a +2 circumstance bonus to Diplomacy checks with plants or fungi of your kind. Generally, fungus leshies get this bonus with mushrooms and fungi; gourd leshies with gourds, melons, and similar fruiting plants; leaf leshies with deciduous trees; and vine leshies with vines and climbing plants.',
  archetypes: [Feat, AncestryFeat, LeshyFeat, FeatLevel5],
  effects: [],
})

export const LeshySuperstitionAction = Abilities.defineAbility('ancestry/leshy/leshy-superstition/action', {
  name: 'Leshy Superstition',
  description:
    '*Leshy*\n\n**Trigger** You attempt a saving throw against a spell or magical effect, but haven’t rolled yet\n\nYou notice spirits that inhabit objects, learning which bring good fortune and which are unlucky. You focus on the power of a lucky object, granting you a +1 circumstance bonus to your saving throw against the triggering effect.',
  prerequisites: [Traits.traitPrerequisite(LeshySuperstition)],
  actions: [{ name: 'Leshy Superstition', action: Reaction }],
})

export const Anchor = Abilities.defineAbility('ancestry/leshy/anchoring-roots/anchor', {
  name: 'Anchor',
  description:
    '**Requirements** You’re on a solid surface; **Effect** You send your roots into or across the ground, making it harder for you to stumble. Until you move, you gain a +2 circumstance bonus to your Fortitude or Reflex DC against attempts to Reposition, Shove, or Trip you (or a +4 circumstance bonus if you’re a root leshy). This bonus also applies to saving throws against spells or effects that attempt to move you or knock you prone. If an effect forces you to move, you move only half the normal distance, as some of the effort goes to tearing loose the roots.',
  prerequisites: [Traits.traitPrerequisite(AnchoringRoots)],
  actions: [{ name: 'Anchor', action: SingleAction }],
})

export const LeshyGlideAction = Abilities.defineAbility('ancestry/leshy/leshy-glide/action', {
  name: 'Leshy Glide',
  description:
    '*Leshy*\n\n**Prerequisites** Leaf Leshy heritage or Cat Fall\n\nUsing your own leaves, you can control your descent. You glide slowly toward the ground, 5 feet down and up to 25 feet forward through the air. As long as you spend at least 1 action gliding each round and have not yet reached the ground, you remain in the air at the end of your turn.',
  prerequisites: [Traits.traitPrerequisite(LeshyGlide)],
  actions: [{ name: 'Leshy Glide', action: SingleAction }],
})

export const RitualReversionAction = Abilities.defineAbility('ancestry/leshy/ritual-reversion/action', {
  name: 'Ritual Reversion',
  description:
    '*Leshy, Polymorph, Primal*\n\nYou can temporarily revert to a less conspicuous form without diminishing your senses. You take the form of an ordinary specimen of the type of plant or fungus that most closely resembles you, reverting to your body’s appearance just before your spirit joined with it. This otherwise has the effects of one with plants, except that your size remains Small.',
  prerequisites: [Traits.traitPrerequisite(RitualReversion)],
  actions: [{ name: 'Ritual Reversion', action: TwoActions }],
})

export const AllLeshyEntities = [
  CactusLeshy,
  FruitLeshy,
  FungusLeshy,
  GourdLeshy,
  LeafLeshy,
  LotusLeshy,
  RootLeshy,
  SeaweedLeshy,
  VineLeshy,
  SelectLeshyHeritage,
  SelectLeshyFeat1,
  SelectLeshyFeat5,
  Leshy,
  GraspingReach,
  HarmlesslyCute,
  LeshyLore,
  LeshySuperstition,
  LeshySuperstitionAction,
  Seedpod,
  ShadowOfTheWilds,
  Undaunted,
  AnchoringRoots,
  Anchor,
  LeshyGlide,
  LeshyGlideAction,
  RitualReversion,
  RitualReversionAction,
  SpeakWithKindred,
]
