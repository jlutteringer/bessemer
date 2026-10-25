import { Attributes, CharacterOptions, CharacterValues, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions, NumericExpressions } from '@bessemer/cornerstone/expression'
import {
  Class,
  ClassFeature,
  DruidFeat,
  FeatLevel1,
  FeatLevel2,
  FeatLevel3,
  FeatLevel4,
  FeatLevel5,
  FeatLevel6,
  FeatLevel7,
  FeatLevel8,
  FeatLevel9,
  FeatLevel10,
} from '@simulacrum/ruleset-pf2e/tag'
import { WisdomKeyAttribute } from '@simulacrum/ruleset-pf2e/attribute-boost'
import { Proficiency } from '@simulacrum/ruleset-pf2e/bonus-type'
import {
  ClassDC,
  Constitution,
  Fortitude,
  HitPoints,
  LightArmor,
  MediumArmor,
  Perception,
  Reflex,
  SimpleWeapons,
  SpellAttack,
  SpellDC,
  UnarmedAttacks,
  UnarmoredDefense,
  Will,
  Wisdom,
} from '@simulacrum/ruleset-pf2e/characteristic'
import { ShieldBlock } from '@simulacrum/ruleset-pf2e/feat/general-feat'
import {
  CantripLoadout,
  SpellRank1Loadout,
  SpellRank2Loadout,
  SpellRank3Loadout,
  SpellRank4Loadout,
  SpellRank5Loadout,
} from '@simulacrum/ruleset-pf2e/loadout'
import { Expert, Trained } from '@simulacrum/ruleset-pf2e/proficiency'
import { SelectTrainedSkill, TrainedNature } from '@simulacrum/ruleset-pf2e/skill'
import { PrimalSpellList } from '@simulacrum/ruleset-pf2e/spellcasting'
import { AllDruidFeatEntities, AnimalEmpathyDruid, PlantEmpathy } from '@simulacrum/ruleset-pf2e/class/druid-feat'
import { AllDruidOrderEntities, SelectDruidicOrder } from '@simulacrum/ruleset-pf2e/class/druid-order'
import { AllDruidFocusSpellEntities } from '@simulacrum/ruleset-pf2e/class/druid-focus-spell'

export const SelectDruidFeat2 = CharacterOptions.selectTraitOption('druid/select-feat-2', {
  name: 'Druid Feat (Level 2)',
  filter: { tags: [DruidFeat, [FeatLevel1, FeatLevel2]] },
})

export const SelectDruidFeat4 = CharacterOptions.selectTraitOption('druid/select-feat-4', {
  name: 'Druid Feat (Level 4)',
  filter: { tags: [DruidFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4]] },
})

export const SelectDruidFeat6 = CharacterOptions.selectTraitOption('druid/select-feat-6', {
  name: 'Druid Feat (Level 6)',
  filter: { tags: [DruidFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4, FeatLevel5, FeatLevel6]] },
})

export const SelectDruidFeat8 = CharacterOptions.selectTraitOption('druid/select-feat-8', {
  name: 'Druid Feat (Level 8)',
  filter: { tags: [DruidFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4, FeatLevel5, FeatLevel6, FeatLevel7, FeatLevel8]] },
})

export const SelectDruidFeat10 = CharacterOptions.selectTraitOption('druid/select-feat-10', {
  name: 'Druid Feat (Level 10)',
  filter: {
    tags: [DruidFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4, FeatLevel5, FeatLevel6, FeatLevel7, FeatLevel8, FeatLevel9, FeatLevel10]],
  },
})

export const SelectVoiceOfNature = CharacterOptions.selectTraitOption('druid/select-voice-of-nature', {
  name: 'Voice of Nature',
  filter: { specificOptions: [AnimalEmpathyDruid, PlantEmpathy] },
})

export const DruidSpellcasting = Traits.defineTrait('druid/druid-spellcasting', {
  name: 'Druid Spellcasting',
  description:
    "The power of the wild world flows through you. You are a spellcaster and can cast spells of the primal tradition using the [Cast a Spell](content:spells/cast-a-spell) activity (see [Casting Spells](content:spells/casting-spells)). As a druid, your spellcasting incantations might be pleas to the environment around you or the invocation of ancient vows; your hands might sway like willows or curl into clawlike shapes as your gestures direct your magic.\n\nAt 1st level, you can prepare two 1st-rank spells and five cantrips each morning from the common spells on the [primal](trait:spellcasting/primal-spell-list) spell list, or from other primal spells to which you gain access and learn via [Learn a Spell](content:skills/learn-a-spell). Prepared spells remain available to you until you cast them or until you prepare your spells again. The number of spells you can prepare each day is called your spell slots.\n\nAs you increase in level as a druid, the number of spells you can prepare each day increases, as does the highest rank of spell you can cast, as shown in the Druid Spells per Day table.\n\nSome of your spells require you to attempt a spell attack to see how effective they are, or have your enemies roll against your [spell DC](characteristic:spell-dc) (typically by attempting a saving throw). Since your key attribute is Wisdom, your [spell attack modifier](characteristic:spell-attack) and spell DC use your [Wisdom modifier](characteristic:wisdom).\n\n**Heightening Spells**\n\nWhen you get spell slots of 2nd rank and higher, you can fill those slots with stronger versions of lower-rank spells. This increases the spell's rank, heightening it to match the spell slot. Many spells have specific improvements when they are heightened to certain ranks.\n\n**Cantrips**\n\nSome of your spells are cantrips. A cantrip is a special type of spell that doesn't use spell slots. You can cast a cantrip at will, any number of times per day. A cantrip is always automatically heightened to half your level rounded up— this is usually equal to the highest rank of druid spell slot you have. For example, as a 1st-level druid, your cantrips are 1st-rank spells, and a 5th-level druid's are 3rd rank.",
  tags: [ClassFeature],
  effects: [
    Effects.gainTrait(PrimalSpellList),
    Effects.gainLoadoutSlot(CantripLoadout),
    Effects.gainLoadoutSlot(CantripLoadout),
    Effects.gainLoadoutSlot(CantripLoadout),
    Effects.gainLoadoutSlot(CantripLoadout),
    Effects.gainLoadoutSlot(CantripLoadout),
    Effects.gainLoadoutSlot(SpellRank1Loadout),
    Effects.gainLoadoutSlot(SpellRank1Loadout),
  ],
})

export const DruidAnathema = Traits.defineTrait('druid/anathema', {
  name: 'Anathema',
  description:
    "As stewards of the natural order, druids find affronts to nature anathema. If you repeatedly perform these acts, you lose your magical abilities from the druid class, including your druid spellcasting and the benefits of your order. These abilities can be regained only if you demonstrate your repentance with an _atone_ ritual. The following acts are anathema to all druids.\n\n**Anathema** despoil natural places, consume more natural resources than you require to live comfortably, teach the [Wildsong](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages) to non-druids.\n\nYour choice of druidic order adds further anathema, as detailed in the order's entry",
  tags: [ClassFeature],
  effects: [],
})

export const DruidicOrderFeature = Traits.defineTrait('druid/druidic-order', {
  name: 'Druidic Order',
  description:
    "Upon becoming a druid, you align yourself with a druidic order, which grants you a class feat, an order spell (see below), and an additional trained skill tied to your order. While you'll always be a member of your initial order, it's not unheard of for a druid to request to study with other orders in search of greater understanding of the natural world, and PC druids are among the most likely to blend the powers of different orders.\n\nOrder spells are a type of focus spell. It costs 1 Focus Point to cast a focus spell, and you start with a focus pool of 1 Focus Point. You refill your focus pool during your daily preparations, and you can regain 1 Focus Point by spending 10 minutes using the [Refocus](content:spells/refocus) activity to commune with local nature spirits or otherwise tend to the wilderness in a way befitting your order.\n\nFocus spells are automatically heightened to half your level rounded up, much like cantrips. Focus spells don't require spell slots, and you can't cast them using spell slots. Certain feats give you more focus spells. The maximum Focus Points your focus pool can hold is equal to the number of focus spells you have, but can never be more than 3 points. The full rules for focus spells appear [here](content:spells/focus-spells).",
  tags: [ClassFeature],
  effects: [Effects.gainCharacterOption(SelectDruidicOrder)],
})

export const DruidShieldBlock = Traits.defineTrait('druid/shield-block', {
  name: 'Shield Block',
  description: 'You gain the [Shield Block](trait:feat/shield-block) general feat, a reaction that lets you reduce damage with your shield.',
  tags: [ClassFeature],
  effects: [Effects.gainTrait(ShieldBlock)],
})

export const VoiceOfNature = Traits.defineTrait('druid/voice-of-nature', {
  name: 'Voice of Nature',
  description:
    'You gain your choice of the [Animal Empathy](trait:feat/animal-empathy-druid) or [Plant Empathy](trait:feat/plant-empathy) druid feat.',
  tags: [ClassFeature],
  effects: [Effects.gainCharacterOption(SelectVoiceOfNature)],
})

export const Wildsong = Traits.defineTrait('druid/wildsong', {
  name: 'Wildsong',
  description:
    "You know the [Wildsong](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), a secret language known only within druid orders, in addition to any languages you know through your ancestry. The Wildsong is a melodic and tonal language sounding more like animal calls than a spoken tongue, and its alphabet involves fractals and spirals, like the arrangement of a seashell's chambers, a snowflake's crystals, or a fern's fronds. Teaching the Wildsong to non-druids is anathema.",
  tags: [ClassFeature],
  effects: [],
})

export const DruidPerceptionExpertise = Traits.defineTrait('druid/perception-expertise', {
  name: 'Perception Expertise',
  description: 'You remain alert to threats around you. Your proficiency rank for [Perception](characteristic:perception) increases to expert.',
  tags: [ClassFeature],
  effects: [Effects.modifyCharacteristic(Perception, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const DruidFortitudeExpertise = Traits.defineTrait('druid/fortitude-expertise', {
  name: 'Fortitude Expertise',
  description:
    'Adventures have made your physique more hardy. Your proficiency rank for [Fortitude](characteristic:fortitude) saves increases to expert.',
  tags: [ClassFeature],
  effects: [Effects.modifyCharacteristic(Fortitude, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const DruidReflexExpertise = Traits.defineTrait('druid/reflex-expertise', {
  name: 'Reflex Expertise',
  description: "You've honed your ability to dodge dangers. Your proficiency rank for [Reflex](characteristic:reflex) saves increases to expert.",
  tags: [ClassFeature],
  effects: [Effects.modifyCharacteristic(Reflex, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const DruidExpertSpellcaster = Traits.defineTrait('druid/expert-spellcaster', {
  name: 'Expert Spellcaster',
  description:
    'Your command of primal forces has deepened, empowering your spells. Your proficiency ranks for [spell attack modifier](characteristic:spell-attack) and [spell DC](characteristic:spell-dc) increase to expert.',
  tags: [ClassFeature],
  effects: [
    Effects.modifyCharacteristic(SpellAttack, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    Effects.modifyCharacteristic(SpellDC, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
  ],
})

export const Druid = Traits.defineTrait('druid', {
  name: 'Druid',
  description:
    "_The power of nature is impossible to resist. It can bring ruin to the stoutest fortress in minutes, reducing even the mightiest works to rubble, burning them to ash, burying them beneath an avalanche of snow, or drowning them beneath the waves. It can provide endless bounty and breathtaking splendor to those who respect it— and an agonizing death to those who take it too lightly. You are one of those who hear nature’s call. You stand in awe of the majesty of its power and give yourself over to its service._\n\n**Key Attribute** Wisdom. At 1st level, your class gives you an attribute boost to Wisdom.\n\n**Hit Points** 8 plus your Constitution modifier. You increase your maximum number of HP by this number at 1st level and every level thereafter.\n\n**Initial Proficiencies**\n\n- **Perception** Trained in Perception\n- **Saving Throws** Trained in Fortitude, Trained in Reflex, Expert in Will\n- **Skills** Trained in Nature; Trained in one skill determined by your druidic order; Trained in a number of additional skills equal to 2 plus your Intelligence modifier\n- **Attacks** Trained in simple weapons; Trained in unarmed attacks\n- **Defenses** Trained in light armor; Trained in medium armor; Trained in unarmored defense\n- **Class DC** Trained in druid class DC\n- **Spells** Trained in spell attack modifier; Trained in spell DC\n\n**Key Terms**\n\n**Spellshape** Actions with the spellshape trait tweak the properties of your spells. These actions usually come from spellshape feats. You must use a spellshape action directly before Casting the Spell you want to alter. If you use any action (including free actions and reactions) other than Cast a Spell directly after, you waste the benefits of the spellshape action. Any additional effects added by a spellshape action are part of the spell's effect, not of the spellshape action itself.",
  tags: [Class],
  effects: [
    Effects.modifyCharacteristic(
      HitPoints,
      Attributes.modifier(Patches.sum(NumericExpressions.multiply([NumericExpressions.sum([8, Constitution.variable]), CharacterValues.Level])))
    ),
    Effects.gainTrait(WisdomKeyAttribute),
    Effects.modifyCharacteristic(Perception, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(Fortitude, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(Reflex, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(Will, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    Effects.gainTrait(TrainedNature),
    Effects.gainCharacterOption(SelectTrainedSkill),
    Effects.gainCharacterOption(SelectTrainedSkill),
    Effects.modifyCharacteristic(SimpleWeapons, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(UnarmedAttacks, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(LightArmor, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(MediumArmor, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(UnarmoredDefense, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(ClassDC, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(SpellAttack, Attributes.modifier(Patches.sum(Wisdom.variable))),
    Effects.modifyCharacteristic(SpellAttack, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(SpellDC, Attributes.modifier(Patches.sum(Wisdom.variable))),
    Effects.modifyCharacteristic(SpellDC, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.gainTrait(DruidSpellcasting),
    Effects.gainTrait(DruidAnathema),
    Effects.gainTrait(DruidicOrderFeature),
    Effects.gainTrait(DruidShieldBlock),
    Effects.gainTrait(VoiceOfNature),
    Effects.gainTrait(Wildsong),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 2), [
      Effects.gainCharacterOption(SelectDruidFeat2),
      Effects.gainLoadoutSlot(SpellRank1Loadout),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [
      Effects.gainTrait(DruidPerceptionExpertise),
      Effects.gainTrait(DruidFortitudeExpertise),
      Effects.gainLoadoutSlot(SpellRank2Loadout),
      Effects.gainLoadoutSlot(SpellRank2Loadout),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 4), [
      Effects.gainCharacterOption(SelectDruidFeat4),
      Effects.gainLoadoutSlot(SpellRank2Loadout),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [
      Effects.gainTrait(DruidReflexExpertise),
      Effects.gainLoadoutSlot(SpellRank3Loadout),
      Effects.gainLoadoutSlot(SpellRank3Loadout),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 6), [
      Effects.gainCharacterOption(SelectDruidFeat6),
      Effects.gainLoadoutSlot(SpellRank3Loadout),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 7), [
      Effects.gainTrait(DruidExpertSpellcaster),
      Effects.gainLoadoutSlot(SpellRank4Loadout),
      Effects.gainLoadoutSlot(SpellRank4Loadout),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 8), [
      Effects.gainCharacterOption(SelectDruidFeat8),
      Effects.gainLoadoutSlot(SpellRank4Loadout),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 9), [
      Effects.gainLoadoutSlot(SpellRank5Loadout),
      Effects.gainLoadoutSlot(SpellRank5Loadout),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 10), [
      Effects.gainCharacterOption(SelectDruidFeat10),
      Effects.gainLoadoutSlot(SpellRank5Loadout),
    ]),
  ],
})

export const AllDruidEntities = [
  ...AllDruidFocusSpellEntities,
  ...AllDruidFeatEntities,
  ...AllDruidOrderEntities,
  SelectDruidFeat2,
  SelectDruidFeat4,
  SelectDruidFeat6,
  SelectDruidFeat8,
  SelectDruidFeat10,
  SelectVoiceOfNature,
  DruidSpellcasting,
  DruidAnathema,
  DruidicOrderFeature,
  DruidShieldBlock,
  VoiceOfNature,
  Wildsong,
  DruidPerceptionExpertise,
  DruidFortitudeExpertise,
  DruidReflexExpertise,
  DruidExpertSpellcaster,
  Druid,
]
