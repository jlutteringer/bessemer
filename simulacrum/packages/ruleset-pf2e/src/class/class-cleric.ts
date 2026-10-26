import { Attributes, CharacterValues, CharacterEffects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions, NumericExpressions } from '@bessemer/cornerstone/expression'
import { Class, ClassFeature } from '@simulacrum/ruleset-pf2e/tag'
import {
  ClassDC,
  Constitution,
  Fortitude,
  HitPoints,
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
import { Proficiency } from '@simulacrum/ruleset-pf2e/bonus-type'
import { Expert, Master, Trained } from '@simulacrum/ruleset-pf2e/proficiency'
import { WisdomKeyAttribute } from '@simulacrum/ruleset-pf2e/attribute-boost'
import { SelectTrainedSkill, TrainedReligion } from '@simulacrum/ruleset-pf2e/skill'
import {
  CantripLoadout,
  SpellRank1Loadout,
  SpellRank2Loadout,
  SpellRank3Loadout,
  SpellRank4Loadout,
  SpellRank5Loadout,
} from '@simulacrum/ruleset-pf2e/loadout'
import { DivineSpellList } from '@simulacrum/ruleset-pf2e/spellcasting'
import { AllClericFocusSpellEntities } from '@simulacrum/ruleset-pf2e/class/cleric-focus-spell'
import { AllClericDomainEntities } from '@simulacrum/ruleset-pf2e/class/cleric-domain'
import {
  AllClericDoctrineEntities,
  SelectClericDivineFont,
  SelectClericDoctrine,
  SelectClericSanctification,
} from '@simulacrum/ruleset-pf2e/class/cleric-doctrine'
import {
  AllClericFeatEntities,
  SelectClericFeat2,
  SelectClericFeat4,
  SelectClericFeat6,
  SelectClericFeat8,
  SelectClericFeat10,
} from '@simulacrum/ruleset-pf2e/class/cleric-feat'

export const Deity = Traits.defineTrait('cleric/deity', {
  name: 'Deity',
  description:
    "As a cleric, you are a mortal servitor of a deity you revere above all others. The most common deities in Pathfinder have edicts, areas of concern, and the benefits you get for being a cleric of that deity. Your deity grants you the trained proficiency rank in one skill and with the deity's favored weapon. If the favored weapon is uncommon, you also get access to that weapon. Your deity also adds spells to your spell list. You can prepare these just like you can any spell on the divine spell list once you can prepare spells of their rank as a cleric. Any of these spells that aren't normally on the divine list are still divine spells if you prepare them this way.\n\n**Sanctification**\n\nDepending on your deity, their sanctification can make you holy or unholy. This gives you the [holy](content:traits/holy) or [unholy](content:traits/unholy) trait, which commits you to one side of a struggle over the souls of the planes and may be referenced in other abilities. If you “can be” holy or unholy according to your deity, you make that choice, and if you “must be” holy or unholy you gain the trait automatically. If you gain the opposing trait in some way, you lose the previous trait until you complete an _atone_ ritual.\n\n**Anathema**\n\nActs fundamentally opposed to your deity's ideals are anathema to your faith. Learning or casting spells, committing acts, and using items that are anathema to your deity remove you from your deity's good graces.\n\nCasting spells with the [unholy](content:traits/unholy) trait is almost always anathema to deities who don't allow unholy sanctification, and casting [holy](content:traits/holy) spells is likewise anathema to those who don't allow holy sanctification. Similarly, casting spells that are anathema to the tenets or goals of your faith could interfere with your connection to your deity. For example, casting a spell to create [undead](content:traits/undead) would be anathema to Pharasma, the goddess of death. Many actions that are anathema don't appear in any deity's formal list. For borderline cases, you and your GM determine which acts are anathema.\n\nIf you perform enough acts that are anathema to your deity, you lose the magical abilities that come from your connection to your deity. The class features that you lose are determined by the GM, but they likely include your divine font and all cleric spellcasting. These abilities can be regained only if you repent by conducting an _atone_ ritual.\n\n**Deities** Deities are Paizo Reserved Material and are not included. Instead of choosing a deity, you choose what it would grant directly: the skill it trains you in, your divine font (healing or harmful), your sanctification and, with Domain Initiate, one domain from all domains. You are trained in your deity's favored weapon, which is not modelled.",
  tags: [ClassFeature],
  effects: [CharacterEffects.gainCharacterOption(SelectTrainedSkill), CharacterEffects.gainCharacterOption(SelectClericSanctification)],
})

export const ClericSpellcasting = Traits.defineTrait('cleric/cleric-spellcasting', {
  name: 'Cleric Spellcasting',
  description:
    "Your deity bestows on you the power to cast divine spells. You are a spellcaster, and you can cast spells of the divine tradition using the [Cast a Spell](content:spells/cast-a-spell) activity. As a cleric, your chants generally invoke your deity and their powerful servants by name or title, while your gestures are followed by sacred symbols or other representations of your deity\n\nAt 1st level, you can prepare two 1st-rank spells and five cantrips each morning from the common spells on the [divine](trait:spellcasting/divine-spell-list) spell list or from other divine spells to which you gain access and learn via [Learn a Spell](content:skills/learn-a-spell). Prepared spells remain available to you until you cast them or until you prepare your spells again. The number of spells you can prepare each day is called your spell slots.\n\nAs you increase in level as a cleric, the number of spells you can prepare each day increases, as does the highest rank of spell you can cast, as shown in Cleric Spells per Day table above.\n\nSome of your spells require you to attempt a spell attack to see how effective they are or for your enemies to roll against your [spell DC](characteristic:spell-dc) (typically by attempting a saving throw). Since your key attribute is Wisdom, your [spell attack modifier](characteristic:spell-attack) and spell DC use your [Wisdom modifier](characteristic:wisdom).\n\n**Heightening Spells**\n\nWhen you get spell slots of 2nd rank and higher, you can fill those slots with stronger versions of lower-rank spells. This increases the spell's rank, heightening it to match the spell slot. Many spells have specific improvements when they are heightened to certain ranks.\n\n**Cantrips**\n\nSome of your spells are cantrips. A cantrip is a special type of spell that doesn't use spell slots. You can cast a cantrip at will, any number of times per day. A cantrip is always automatically heightened to half your level rounded up—this is usually equal to the highest rank of cleric spell slot you have. For example, as a 1st-level cleric, your cantrips are 1st-rank spells, and as a 5th-level cleric, your cantrips are 3rd-rank spells.",
  tags: [ClassFeature],
  effects: [
    CharacterEffects.gainTrait(DivineSpellList),
    CharacterEffects.modifyCharacteristic(SpellAttack, Attributes.modifier(Patches.sum(Wisdom.variable))),
    CharacterEffects.modifyCharacteristic(SpellAttack, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    CharacterEffects.modifyCharacteristic(SpellDC, Attributes.modifier(Patches.sum(Wisdom.variable))),
    CharacterEffects.modifyCharacteristic(SpellDC, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    CharacterEffects.gainLoadoutSlot(CantripLoadout),
    CharacterEffects.gainLoadoutSlot(CantripLoadout),
    CharacterEffects.gainLoadoutSlot(CantripLoadout),
    CharacterEffects.gainLoadoutSlot(CantripLoadout),
    CharacterEffects.gainLoadoutSlot(CantripLoadout),
    CharacterEffects.gainLoadoutSlot(SpellRank1Loadout),
    CharacterEffects.gainLoadoutSlot(SpellRank1Loadout),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 2), [CharacterEffects.gainLoadoutSlot(SpellRank1Loadout)]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [
      CharacterEffects.gainLoadoutSlot(SpellRank2Loadout),
      CharacterEffects.gainLoadoutSlot(SpellRank2Loadout),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 4), [CharacterEffects.gainLoadoutSlot(SpellRank2Loadout)]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [
      CharacterEffects.gainLoadoutSlot(SpellRank3Loadout),
      CharacterEffects.gainLoadoutSlot(SpellRank3Loadout),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 6), [CharacterEffects.gainLoadoutSlot(SpellRank3Loadout)]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 7), [
      CharacterEffects.gainLoadoutSlot(SpellRank4Loadout),
      CharacterEffects.gainLoadoutSlot(SpellRank4Loadout),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 8), [CharacterEffects.gainLoadoutSlot(SpellRank4Loadout)]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 9), [
      CharacterEffects.gainLoadoutSlot(SpellRank5Loadout),
      CharacterEffects.gainLoadoutSlot(SpellRank5Loadout),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 10), [CharacterEffects.gainLoadoutSlot(SpellRank5Loadout)]),
  ],
})

export const DivineFont = Traits.defineTrait('cleric/divine-font', {
  name: 'Divine Font',
  description:
    "Through your deity's blessing, you gain additional spells that channel either the life force called vitality or its counterforce, the void. When you prepare your spells each day, you can prepare additional [_heal_](ability:spell/heal) or [_harm_](ability:spell/harm) spells, depending on your deity. The divine font spell your deity provides is listed in the Divine Font entry for your deity; if both are listed, you can choose between heal or harm. Once you choose, you can't change your choice short of divine intervention.\n\n**Healing Font**: You gain 4 additional spell slots each day at your highest rank of cleric spell slots. You can prepare only [_heal_](ability:spell/heal) spells in these slots. At 5th level, the number of additional slots increases to 5, and at 15th level, the total number of additional slots increases to 6.\n\n**Harmful Font**: You gain 4 additional spell slots each day at your highest rank of cleric spell slots. You can prepare only [_harm_](ability:spell/harm) spells in these slots. At 5th level, the number of additional slots increases to 5, and at 15th level, the total number of additional slots increases to 6.",
  tags: [ClassFeature],
  effects: [CharacterEffects.gainCharacterOption(SelectClericDivineFont)],
})

export const Doctrine = Traits.defineTrait('cleric/doctrine', {
  name: 'Doctrine',
  description:
    'Even among followers of the same deity, approaches vary. At 1st level, you select cloistered cleric or warpriest and gain the benefits of its first doctrine. At 3rd level and every four levels thereafter, you gain another benefit from your doctrine.',
  tags: [ClassFeature],
  effects: [CharacterEffects.gainCharacterOption(SelectClericDoctrine)],
})

export const PerceptionExpertise = Traits.defineTrait('cleric/perception-expertise', {
  name: 'Perception Expertise',
  description: 'You remain alert to threats around you. Your proficiency rank for [Perception](characteristic:perception) increases to expert.',
  tags: [ClassFeature],
  effects: [CharacterEffects.modifyCharacteristic(Perception, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const ResoluteFaith = Traits.defineTrait('cleric/resolute-faith', {
  name: 'Resolute Faith',
  description:
    'Belief provides a bulwark against insidious thoughts. Your proficiency rank for [Will saves](characteristic:will) increases to master. When you roll a success at a Will save, you get a critical success instead.',
  tags: [ClassFeature],
  effects: [CharacterEffects.modifyCharacteristic(Will, Attributes.modifier(Patches.sum(Master), { combinability: Proficiency }))],
})

export const Cleric = Traits.defineTrait('cleric', {
  name: 'Cleric',
  description:
    "_Deities work their will upon the world in infinite ways, and you serve as one of their most stalwart mortal servants. Blessed with divine magic, you live the ideals of your faith, adorn yourself with the symbols of your church, and train diligently to wield your deity’s favored weapon. Your spells might protect and heal your allies, or they might punish foes and enemies of your faith, as your deity wills. Yours is a life of devotion, spreading the teachings of your faith through both word and deed._\n\n**Key Attribute: Wisdom**\n\nAt 1st level, your class gives you an attribute boost to Wisdom.\n\n**Hit Points: 8 plus your Constitution modifier**\n\nYou increase your maximum number of HP by this number at 1st level and every level thereafter.\n\n**Key Terms**\n\nYou'll see the following term in many cleric class features.\n\n**[Holy](content:traits/holy) and [Unholy](content:traits/unholy):** These traits mark something, like your character or a spell, that belongs to one side of the battle between [celestials](content:traits/celestial) and [fiends](content:traits/fiend). Generally, fiends and [undead](content:traits/undead) are susceptible to holy abilities and celestials to unholy ones.\n\n**[Sanctified](content:traits/sanctified):** If you are holy or unholy, your sanctified actions and spells gain the same trait.\n\n**[Spellshape](content:traits/spellshape):** These actions tweak your spells. You must use a spellshape action directly before Casting the Spell you want to alter. If you use any action (including free actions and reactions) other than Cast a Spell directly after, you waste the benefits of the spellshape action. Effects added by a spellshape action are part of the spell's effect, not of the spellshape action.\n\n**Initial Proficiencies**\n\nAt 1st level, you gain the listed proficiency ranks in the following statistics. You are untrained in anything not listed unless you gain a better proficiency rank in some other way.\n\n**Perception**\n\nTrained in [Perception](characteristic:perception)\n\n**Saving Throws**\n\nTrained in [Fortitude](characteristic:fortitude)\n\nTrained in [Reflex](characteristic:reflex)\n\nExpert in Will\n\n**Skills**\n\nTrained in [Religion](characteristic:skill/religion)\n\nTrained in one skill determined by your choice of deity\n\nTrained in a number of additional skills equal to 2 plus your [Intelligence modifier](characteristic:intelligence)\n\n**Attacks**\n\nTrained in simple weapons\n\nTrained in the favored weapon of your deity. If your deity's favored weapon is uncommon, you also gain access to that weapon.\n\nTrained in unarmed attacks\n\n**Defenses**\n\nUntrained in all armor, though your doctrine might alter this\n\nTrained in unarmored defense\n\n**Class DC**\n\nTrained in cleric [class DC](characteristic:class-dc)\n\n**Spells**\n\nTrained in [spell attack modifier](characteristic:spell-attack)\n\nTrained in [spell DC](characteristic:spell-dc)\n\n**Deities** Deities are Paizo Reserved Material and are not included. Instead of choosing a deity, you choose what it would grant directly: the skill it trains you in, your divine font (healing or harmful), your sanctification and, with Domain Initiate, one domain from all domains. You are trained in your deity's favored weapon, which is not modelled.",
  tags: [Class],
  effects: [
    CharacterEffects.modifyCharacteristic(
      HitPoints,
      Attributes.modifier(Patches.sum(NumericExpressions.multiply([NumericExpressions.sum([8, Constitution.variable]), CharacterValues.Level])))
    ),
    CharacterEffects.gainTrait(WisdomKeyAttribute),
    CharacterEffects.modifyCharacteristic(Perception, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    CharacterEffects.modifyCharacteristic(Fortitude, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    CharacterEffects.modifyCharacteristic(Reflex, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    CharacterEffects.modifyCharacteristic(Will, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    CharacterEffects.modifyCharacteristic(UnarmedAttacks, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    CharacterEffects.modifyCharacteristic(SimpleWeapons, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    CharacterEffects.modifyCharacteristic(UnarmoredDefense, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    CharacterEffects.modifyCharacteristic(ClassDC, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    CharacterEffects.gainTrait(TrainedReligion),
    CharacterEffects.gainCharacterOption(SelectTrainedSkill),
    CharacterEffects.gainCharacterOption(SelectTrainedSkill),
    CharacterEffects.gainTrait(Deity),
    CharacterEffects.gainTrait(ClericSpellcasting),
    CharacterEffects.gainTrait(DivineFont),
    CharacterEffects.gainTrait(Doctrine),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 2), [CharacterEffects.gainCharacterOption(SelectClericFeat2)]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 4), [CharacterEffects.gainCharacterOption(SelectClericFeat4)]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [CharacterEffects.gainTrait(PerceptionExpertise)]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 6), [CharacterEffects.gainCharacterOption(SelectClericFeat6)]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 8), [CharacterEffects.gainCharacterOption(SelectClericFeat8)]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 9), [CharacterEffects.gainTrait(ResoluteFaith)]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 10), [
      CharacterEffects.gainCharacterOption(SelectClericFeat10),
    ]),
  ],
})

export const AllClericEntities = [
  Cleric,
  Deity,
  ClericSpellcasting,
  DivineFont,
  Doctrine,
  PerceptionExpertise,
  ResoluteFaith,
  ...AllClericDoctrineEntities,
  ...AllClericDomainEntities,
  ...AllClericFeatEntities,
  ...AllClericFocusSpellEntities,
]
