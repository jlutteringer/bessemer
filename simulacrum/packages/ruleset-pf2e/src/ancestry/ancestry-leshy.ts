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
  Heritage,
  LeshyFeat,
  NephilimFeat,
  OrcFeat,
  VersatileHeritage,
} from '@simulacrum/ruleset-pf2e/tag'
import { Constitution, HitPoints, Intelligence, Speed, Wisdom } from '@simulacrum/ruleset-pf2e/characteristic'
import {
  CharismaAncestryBoost,
  DexterityAncestryBoost,
  IntelligenceAncestryBoost,
  StrengthAncestryBoost,
} from '@simulacrum/ruleset-pf2e/attribute-boost'
import { TrainedNature, TrainedStealth } from '@simulacrum/ruleset-pf2e/skill'
import { Reaction, SingleAction, TwoActions } from '@simulacrum/ruleset-pf2e/action-type'
import { Darkvision, LeshyHeritage, LowLightVision } from '@simulacrum/ruleset-pf2e/ancestry/ancestry-common'
import { AdditionalLore, CatFall, SteadyBalance } from '@simulacrum/ruleset-pf2e/feat/skill-feat'

export const CactusLeshy = Traits.defineTrait('heritage/cactus-leshy', {
  name: 'Cactus Leshy',
  description:
    'Spines cover your body. You gain a spine [unarmed](content:traits/unarmed) attack that deals 1d6 piercing damage. Your spines are in the brawling group and have the [finesse](content:traits/finesse) and unarmed traits.',
  tags: [Heritage, LeshyHeritage],
  effects: [],
})

export const FruitLeshy = Traits.defineTrait('heritage/fruit-leshy', {
  name: 'Fruit Leshy',
  description:
    'Your body continually produces small fruits imbued with primal magic. At dawn each day, a new fruit ripens. You or an ally can remove this fruit as an [Interact](content:playing-the-game/interact) action. If a living creature that can derive sustenance from fruit consumes it as an Interact action within the next hour, they regain 1d8 [Hit Points](characteristic:hit-points), plus an additional 1d8 Hit Points for every 2 of your levels beyond 1st. This effect has the [healing](content:traits/healing) and [vitality](content:traits/vitality) traits.',
  tags: [Heritage, LeshyHeritage],
  effects: [],
})

export const FungusLeshy = Traits.defineTrait('heritage/fungus-leshy', {
  name: 'Fungus Leshy',
  description:
    'Your body was made from fungi that grows in the shade of caves and trees, and you are at home in dark caverns and warrens. You gain [darkvision](content:playing-the-game/darkvision-and-greater-darkvision). You lose the [plant](content:traits/plant) trait and gain the [fungus](content:traits/fungus) trait.',
  tags: [Heritage, LeshyHeritage],
  effects: [CharacterEffects.gainTrait(Darkvision)],
})

export const GourdLeshy = Traits.defineTrait('heritage/gourd-leshy', {
  name: 'Gourd Leshy',
  description:
    "You have a large gourd for a skull, and since you don't have a physical brain, you can use the space inside your head. You can store a collection of up to 1 Bulk of objects within your head. The DC of checks to [Steal](content:skills/steal) objects from inside your head increases by 4. Additionally, if you store only one object within your head, you can draw it effortlessly into your hand as part of another action to use the object. Drawing the item grants this other action the [manipulate](content:traits/manipulate) trait.",
  tags: [Heritage, LeshyHeritage],
  effects: [],
})

export const LeafLeshy = Traits.defineTrait('heritage/leaf-leshy', {
  name: 'Leaf Leshy',
  description:
    'Your body is made mostly from natural foliage, and like a leaf tumbling from a tree, you land from falls with particular grace. You take no damage from [falling](content:playing-the-game/falling), regardless of the distance you fall.\n\n**Feats that require Leaf Leshy...**\n\n[Leshy Glide](trait:ancestry/leshy/leshy-glide)',
  tags: [Heritage, LeshyHeritage],
  effects: [],
})

export const LotusLeshy = Traits.defineTrait('heritage/lotus-leshy', {
  name: 'Lotus Leshy',
  description:
    "You effortlessly float on the surface of water. You can walk on the surface of still water and other non-damaging liquids, moving at half your normal [Speed](characteristic:speed). You can also attempt to [Balance](content:skills/balance) to move across the surface of flowing water, using the DC of a [Swim](content:skills/swim) check to move through the water. When you do this, you can't move faster than half your Speed, and if you fail or critically fail, you fall into the water rather than the normal effects.",
  tags: [Heritage, LeshyHeritage],
  effects: [],
})

export const RootLeshy = Traits.defineTrait('heritage/root-leshy', {
  name: 'Root Leshy',
  description:
    'Your body is made from hardy roots that attach you firmly to the ground. You gain 10 [Hit Points](characteristic:hit-points) from your ancestry instead of 8. You can go without sunlight for 2 weeks before you begin to starve. You gain a +2 circumstance bonus to your [Fortitude](characteristic:fortitude) or [Reflex](characteristic:reflex) DC against attempts to [Reposition](content:skills/reposition), [Shove](content:skills/shove), or [Trip](content:skills/trip) you. This bonus also applies to saving throws against spells or effects that attempt to [move](content:playing-the-game/forced-movement) you or knock you [prone](content:conditions/prone).',
  tags: [Heritage, LeshyHeritage],
  effects: [CharacterEffects.modifyCharacteristic(HitPoints, Attributes.modifier(Patches.sum(2)))],
})

export const SeaweedLeshy = Traits.defineTrait('heritage/seaweed-leshy', {
  name: 'Seaweed Leshy',
  description:
    "Your body is made from woven seaweed, and you're just as comfortable underwater as on land. You gain a swim [Speed](characteristic:speed) of 20 feet, and you can always breathe underwater. However, your land Speed is reduced by 5 feet (to 20 feet for most seaweed leshies).",
  tags: [Heritage, LeshyHeritage],
  effects: [CharacterEffects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(-5)))],
})

export const VineLeshy = Traits.defineTrait('heritage/vine-leshy', {
  name: 'Vine Leshy',
  description:
    'Your prehensile vines grant you unmatched skill at climbing. You do not need to have any hands free to [Climb](content:skills/climb). Additionally, if you roll a success on an [Athletics](characteristic:skill/athletics) check to Climb, you get a critical success instead.',
  tags: [Heritage, LeshyHeritage],
  effects: [],
})

export const SelectLeshyHeritage = CharacterOptions.selectTraitOption('ancestry/leshy/select-heritage', {
  name: 'Leshy Heritage',
  filter: { tags: [[LeshyHeritage, VersatileHeritage]] },
})

export const SelectLeshyFeat1 = CharacterOptions.selectTraitOption('ancestry/leshy/select-feat-1', {
  name: 'Ancestry Feat (Level 1)',
  filter: { tags: [AncestryFeat, [LeshyFeat, ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], FeatLevel1] },
})

export const SelectLeshyFeat5 = CharacterOptions.selectTraitOption('ancestry/leshy/select-feat-5', {
  name: 'Ancestry Feat (Level 5)',
  filter: {
    tags: [AncestryFeat, [LeshyFeat, ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat], [FeatLevel1, FeatLevel5]],
  },
})

export const SelectLeshyFeat9 = CharacterOptions.selectTraitOption('ancestry/leshy/select-feat-9', {
  name: 'Ancestry Feat (Level 9)',
  filter: {
    tags: [
      AncestryFeat,
      [LeshyFeat, ElfFeat, OrcFeat, ChangelingFeat, NephilimFeat, AiuvarinFeat, DromaarFeat],
      [FeatLevel1, FeatLevel5, FeatLevel9],
    ],
  },
})

export const SelectLeshyAncestryBoost = CharacterOptions.selectTraitOption('ancestry/leshy/select-boost', {
  name: 'Ancestry Boost',
  filter: { specificOptions: [StrengthAncestryBoost, DexterityAncestryBoost, IntelligenceAncestryBoost, CharismaAncestryBoost] },
})

export const Leshy = Traits.defineTrait('ancestry/leshy', {
  name: 'Leshy',
  description:
    "*Leshy, Plant*\n\n_Leshies are immortal nature spirits placed in small plant bodies, seeking to experience the world._\n\nIf you want to play a character who is curious and connected to nature, you should play a leshy.\n\nRead the full entry in [Leshies](content:ancestries-and-backgrounds/leshies).\n\n**Hit Points** 8\n\n**Size** Small\n\n**Speed** 25 feet\n\n**Attribute Boosts** Constitution, Wisdom, Free\n\n**Attribute Flaws** Intelligence\n\n**Languages** [Common](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages) [Fey](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages) Additional languages equal to your [Intelligence modifier](characteristic:intelligence) (if it's positive). Choose from [Draconic](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Elven](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Gnomish](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Goblin](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Halfling](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), [Sakvroth](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), and any other languages to which you have access (such as the languages prevalent in your region).\n\n**Low-Light Vision** You can see in dim light as though it were bright light, so you ignore the [concealed](content:conditions/concealed) condition due to dim light.\n\n**Plant Nourishment** You gain nourishment in the same way that the plants or fungi that match your body type normally do, through some combination of photosynthesis, absorbing minerals with your roots, or scavenging decaying matter. You typically do not need to pay for food. If you normally rely on photosynthesis and go without sunlight for 1 week, you begin to starve. You can derive nourishment from specially formulated bottles of sunlight instead of natural sunlight, but these bottles cost 10 times as much as standard rations (or 40 sp).",
  tags: [Ancestry],
  effects: [
    CharacterEffects.modifyCharacteristic(HitPoints, Attributes.modifier(Patches.sum(8))),
    CharacterEffects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(25))),
    CharacterEffects.modifyCharacteristic(Constitution, Attributes.modifier(Patches.sum(1))),
    CharacterEffects.modifyCharacteristic(Wisdom, Attributes.modifier(Patches.sum(1))),
    CharacterEffects.modifyCharacteristic(Intelligence, Attributes.modifier(Patches.sum(-1))),
    CharacterEffects.gainCharacterOption(SelectLeshyAncestryBoost),
    CharacterEffects.gainTrait(LowLightVision),
    CharacterEffects.gainCharacterOption(SelectLeshyHeritage),
    CharacterEffects.gainCharacterOption(SelectLeshyFeat1),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [CharacterEffects.gainCharacterOption(SelectLeshyFeat5)]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 9), [CharacterEffects.gainCharacterOption(SelectLeshyFeat9)]),
  ],
})

export const GraspingReach = Traits.defineTrait('ancestry/leshy/grasping-reach', {
  name: 'Grasping Reach',
  description:
    '*Leshy*\n\nYou can extend a tangle of vines or tendrils to support your arms and extend your reach. When you wield a melee weapon that requires two hands, doesn’t have [reach](content:traits/reach), and deals at least 1d6 damage, you can change between a typical two-handed grip and an extended two-handed grasp using an [Interact](content:playing-the-game/interact) action. Weapons wielded in your extended grasp gain reach of 10 feet. This grasp is less stable and powerful than a typical grip, reducing the weapon’s damage die by 1 step.',
  tags: [Feat, AncestryFeat, LeshyFeat, FeatLevel1],
  effects: [],
})

export const HarmlesslyCute = Traits.defineTrait('ancestry/leshy/harmlessly-cute', {
  name: 'Harmlessly Cute',
  description:
    '*Leshy*\n\nYour size and demeanor make it easy for you to convince others that you mean no harm. You gain the Shameless [Request](content:skills/request) skill feat. Additionally, you gain a +1 circumstance bonus to initiative checks when you roll [Deception](characteristic:skill/deception) for initiative.',
  tags: [Feat, AncestryFeat, LeshyFeat, FeatLevel1],
  effects: [],
})

export const LeshyLore = Traits.defineTrait('ancestry/leshy/leshy-lore', {
  name: 'Leshy Lore',
  description:
    '*Leshy*\n\nYou deeply understand your people’s cultural traditions and innate strengths. You gain the trained proficiency rank in [Nature](characteristic:skill/nature) and [Stealth](characteristic:skill/stealth). If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice.\n\nYou also gain the [Additional Lore](trait:feat/additional-lore) general feat for Leshy [Lore](content:skills/lore).',
  tags: [Feat, AncestryFeat, LeshyFeat, FeatLevel1],
  effects: [CharacterEffects.gainTrait(TrainedNature), CharacterEffects.gainTrait(TrainedStealth), CharacterEffects.gainTrait(AdditionalLore)],
})

export const LeshySuperstition = Traits.defineTrait('ancestry/leshy/leshy-superstition', {
  name: 'Leshy Superstition',
  description:
    '*Leshy*\n\n**Trigger** You attempt a saving throw against a spell or magical effect, but haven’t rolled yet\n\nYou notice spirits that inhabit objects, learning which bring good fortune and which are unlucky. You focus on the power of a lucky object, granting you a +1 circumstance bonus to your saving throw against the triggering effect.',
  tags: [Feat, AncestryFeat, LeshyFeat, FeatLevel1],
  effects: [],
})

export const Seedpod = Traits.defineTrait('ancestry/leshy/seedpod', {
  name: 'Seedpod',
  description:
    '*Leshy*\n\nYour body produces a nearly endless supply of hard seedpods. You gain a seedpod ranged unarmed attack with a [range increment](content:equipment/range) of 30 feet that deals 1d4 bludgeoning damage. On a critical hit, a seedpod bursts, issuing forth a tangle of vegetation that imposes a –10-foot circumstance penalty on the target’s [Speed](characteristic:speed) until the start of your next turn. Seedpods do not add critical specialization effects.',
  tags: [Feat, AncestryFeat, LeshyFeat, FeatLevel1],
  effects: [],
})

export const ShadowOfTheWilds = Traits.defineTrait('ancestry/leshy/shadow-of-the-wilds', {
  name: 'Shadow of the Wilds',
  description:
    '*Leshy*\n\nIt’s difficult to notice your passage through wild areas. As long as you’re not in an urban environment, you’re always considered to be [Covering Tracks](content:skills/cover-tracks), even if you chose a different activity in [exploration mode](content:playing-the-game/exploration-mode).',
  tags: [Feat, AncestryFeat, LeshyFeat, FeatLevel1],
  effects: [],
})

export const Undaunted = Traits.defineTrait('ancestry/leshy/undaunted', {
  name: 'Undaunted',
  description:
    '*Leshy*\n\nYour spirit has endured many challenges over its long existence. You gain a +1 circumstance bonus to saves against [emotion](content:traits/emotion) effects. If you roll a success on a saving throw against an emotion effect, you get a critical success instead.',
  tags: [Feat, AncestryFeat, LeshyFeat, FeatLevel1],
  effects: [],
})

export const AnchoringRoots = Traits.defineTrait('ancestry/leshy/anchoring-roots', {
  name: 'Anchoring Roots',
  description:
    '*Leshy*\n\nSmall roots sprout from your feet, steadying you as you move. You gain the [Steady Balance](trait:feat/steady-balance) skill feat, even if you aren’t trained in [Acrobatics](characteristic:skill/acrobatics), and you can use the Anchor action.\n\n**Anchor** ◆ **Requirements** You’re on a solid surface; **Effect** You send your roots into or across the ground, making it harder for you to stumble. Until you move, you gain a +2 circumstance bonus to your [Fortitude](characteristic:fortitude) or [Reflex](characteristic:reflex) DC against attempts to [Reposition](content:skills/reposition), [Shove](content:skills/shove), or [Trip](content:skills/trip) you (or a +4 circumstance bonus if you’re a [root leshy](trait:heritage/root-leshy)). This bonus also applies to saving throws against spells or effects that attempt to move you or knock you [prone](content:conditions/prone). If an effect forces you to move, you move only half the normal distance, as some of the effort goes to tearing loose the roots.',
  tags: [Feat, AncestryFeat, LeshyFeat, FeatLevel5],
  effects: [CharacterEffects.gainTrait(SteadyBalance)],
})

export const LeshyGlide = Traits.defineTrait('ancestry/leshy/leshy-glide', {
  name: 'Leshy Glide',
  description:
    '*Leshy*\n\n**Prerequisites** [Leaf Leshy](trait:heritage/leaf-leshy) heritage or [Cat Fall](trait:feat/cat-fall)\n\nUsing your own leaves, you can control your descent. You glide slowly toward the ground, 5 feet down and up to 25 feet forward through the air. As long as you spend at least 1 action gliding each round and have not yet reached the ground, you remain in the air at the end of your turn.',
  tags: [Feat, AncestryFeat, LeshyFeat, FeatLevel5],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(LeafLeshy), Traits.traitPrerequisite(CatFall)])],
  effects: [],
})

export const RitualReversion = Traits.defineTrait('ancestry/leshy/ritual-reversion', {
  name: 'Ritual Reversion',
  description:
    '*Leshy, Polymorph, Primal*\n\nYou can temporarily revert to a less conspicuous form without diminishing your senses. You take the form of an ordinary specimen of the type of plant or fungus that most closely resembles you, reverting to your body’s appearance just before your spirit joined with it. This otherwise has the effects of [one with plants](ability:spell/one-with-plants), except that your size remains [Small](content:playing-the-game/size-space-and-reach).',
  tags: [Feat, AncestryFeat, LeshyFeat, FeatLevel5],
  effects: [],
})

export const SpeakWithKindred = Traits.defineTrait('ancestry/leshy/speak-with-kindred', {
  name: 'Speak with Kindred',
  description:
    '*Leshy*\n\nYou have a connection with creatures that share your physiology. You can ask questions of, receive answers from, and use the [Diplomacy](characteristic:skill/diplomacy) skill with plants and fungi. You gain a +2 circumstance bonus to Diplomacy checks with plants or fungi of your kind. Generally, fungus leshies get this bonus with mushrooms and fungi; gourd leshies with gourds, melons, and similar fruiting plants; leaf leshies with deciduous trees; and vine leshies with vines and climbing plants.',
  tags: [Feat, AncestryFeat, LeshyFeat, FeatLevel5],
  effects: [],
})

export const LeshySuperstitionAction = Abilities.defineAbility('ancestry/leshy/leshy-superstition/action', {
  name: 'Leshy Superstition',
  description: '*Leshy*',
  prerequisites: [Traits.traitPrerequisite(LeshySuperstition)],
  actions: [
    {
      name: 'Leshy Superstition',
      description:
        '**Trigger** You attempt a saving throw against a spell or magical effect, but haven’t rolled yet\n\nYou notice spirits that inhabit objects, learning which bring good fortune and which are unlucky. You focus on the power of a lucky object, granting you a +1 circumstance bonus to your saving throw against the triggering effect.',
      action: Reaction,
    },
  ],
})

export const Anchor = Abilities.defineAbility('ancestry/leshy/anchoring-roots/anchor', {
  name: 'Anchor',
  description:
    '**Requirements** You’re on a solid surface; **Effect** You send your roots into or across the ground, making it harder for you to stumble. Until you move, you gain a +2 circumstance bonus to your [Fortitude](characteristic:fortitude) or [Reflex](characteristic:reflex) DC against attempts to [Reposition](content:skills/reposition), [Shove](content:skills/shove), or [Trip](content:skills/trip) you (or a +4 circumstance bonus if you’re a [root leshy](trait:heritage/root-leshy)). This bonus also applies to saving throws against spells or effects that attempt to move you or knock you [prone](content:conditions/prone). If an effect forces you to move, you move only half the normal distance, as some of the effort goes to tearing loose the roots.',
  prerequisites: [Traits.traitPrerequisite(AnchoringRoots)],
  actions: [{ name: 'Anchor', action: SingleAction }],
})

export const LeshyGlideAction = Abilities.defineAbility('ancestry/leshy/leshy-glide/action', {
  name: 'Leshy Glide',
  description: '*Leshy*',
  prerequisites: [Traits.traitPrerequisite(LeshyGlide)],
  actions: [
    {
      name: 'Leshy Glide',
      description:
        '**Prerequisites** [Leaf Leshy](trait:heritage/leaf-leshy) heritage or [Cat Fall](trait:feat/cat-fall)\n\nUsing your own leaves, you can control your descent. You glide slowly toward the ground, 5 feet down and up to 25 feet forward through the air. As long as you spend at least 1 action gliding each round and have not yet reached the ground, you remain in the air at the end of your turn.',
      action: SingleAction,
    },
  ],
})

export const RitualReversionAction = Abilities.defineAbility('ancestry/leshy/ritual-reversion/action', {
  name: 'Ritual Reversion',
  description: '*Leshy, Polymorph, Primal*',
  prerequisites: [Traits.traitPrerequisite(RitualReversion)],
  actions: [
    {
      name: 'Ritual Reversion',
      description:
        'You can temporarily revert to a less conspicuous form without diminishing your senses. You take the form of an ordinary specimen of the type of plant or fungus that most closely resembles you, reverting to your body’s appearance just before your spirit joined with it. This otherwise has the effects of [one with plants](ability:spell/one-with-plants), except that your size remains [Small](content:playing-the-game/size-space-and-reach).',
      action: TwoActions,
    },
  ],
})

export const BarkAndTendril = Traits.defineTrait('ancestry/leshy/bark-and-tendril', {
  name: 'Bark and Tendril',
  description:
    '*Leshy*\n\nYou wield primal magic. You can cast [entangling flora](ability:spell/entangling-flora) and [oaken resilience](ability:spell/oaken-resilience) as 2nd-rank primal [innate spells](content:spells/innate-spells) once per day each.',
  tags: [Feat, AncestryFeat, LeshyFeat, FeatLevel9],
  effects: [],
})

export const LuckyKeepsake = Traits.defineTrait('ancestry/leshy/lucky-keepsake', {
  name: 'Lucky Keepsake',
  description:
    '*Leshy*\n\n**Prerequisites** [Leshy Superstition](trait:ancestry/leshy/leshy-superstition)\n\nYou have a keepsake that grants you luck. You gain a +1 circumstance bonus to saves against spells and magical effects at all times, not just when you use [Leshy Superstition](trait:ancestry/leshy/leshy-superstition). If you lose the keepsake, you lose the bonus until you designate a new keepsake, typically over the course of a week.',
  tags: [Feat, AncestryFeat, LeshyFeat, FeatLevel9],
  prerequisites: [Traits.traitPrerequisite(LeshySuperstition)],
  effects: [],
})

export const SolarRejuvenation = Traits.defineTrait('ancestry/leshy/solar-rejuvenation', {
  name: 'Solar Rejuvenation',
  description:
    '*Leshy*\n\nIf you rest outdoors for 10 minutes during the day, you regain [Hit Points](characteristic:hit-points) equal to your [Constitution modifier](characteristic:constitution) × half your level. You gain this benefit in addition to any healing from [Treat Wounds](content:skills/treat-wounds). Leshies whose plant nourishment does not rely on photosynthesis require a similarly suitable environment. For example, fungus leshies need dark, damp environments and a pile of decaying plant matter.',
  tags: [Feat, AncestryFeat, LeshyFeat, FeatLevel9],
  effects: [],
})

export const ThornedSeedpod = Traits.defineTrait('ancestry/leshy/thorned-seedpod', {
  name: 'Thorned Seedpod',
  description:
    '*Leshy*\n\n**Prerequisites** [Seedpod](trait:ancestry/leshy/seedpod)\n\nWhen your seedpods [strike](content:playing-the-game/strike) a felling blow, they burst into viciously thorny vines. When you critically succeed at a seedpod Strike, vines twist and stab your foe, dealing 1d4 [persistent](content:conditions/persistent-damage) piercing damage.',
  tags: [Feat, AncestryFeat, LeshyFeat, FeatLevel9],
  prerequisites: [Traits.traitPrerequisite(Seedpod)],
  effects: [],
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
  SelectLeshyFeat9,
  SelectLeshyAncestryBoost,
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
  BarkAndTendril,
  LuckyKeepsake,
  SolarRejuvenation,
  ThornedSeedpod,
]
