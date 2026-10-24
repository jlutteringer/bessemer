import { Attributes, CharacterOptions, CharacterValues, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions, NumericExpressions } from '@bessemer/cornerstone/expression'
import { Class, ClassFeature, FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4, WitchFeat } from '@simulacrum/ruleset-pf2e/archetype'
import {
  ClassDC,
  Constitution,
  Fortitude,
  HitPoints,
  Intelligence,
  Perception,
  Reflex,
  SimpleWeapons,
  SpellAttack,
  SpellDC,
  UnarmedAttacks,
  UnarmoredDefense,
  Will,
} from '@simulacrum/ruleset-pf2e/characteristic'
import { Proficiency } from '@simulacrum/ruleset-pf2e/bonus-type'
import { Expert, Trained } from '@simulacrum/ruleset-pf2e/proficiency'
import { IntelligenceKeyAttribute } from '@simulacrum/ruleset-pf2e/attribute-boost'
import { SelectTrainedSkill } from '@simulacrum/ruleset-pf2e/skill'
import { CantripLoadout, SpellRank1Loadout, SpellRank2Loadout, SpellRank3Loadout } from '@simulacrum/ruleset-pf2e/loadout'
import { FocusPoints } from '@simulacrum/ruleset-pf2e/spellcasting'
import { SelectFamiliarAbility } from '@simulacrum/ruleset-pf2e/companion/familiar'
import * as WitchFocusSpells from '@simulacrum/ruleset-pf2e/class/witch-focus-spell'
import { AllWitchFocusSpells } from '@simulacrum/ruleset-pf2e/class/witch-focus-spell'
import { AllWitchLessonEntities } from '@simulacrum/ruleset-pf2e/class/witch-lesson'
import { AllWitchPatronEntities, SelectWitchPatron } from '@simulacrum/ruleset-pf2e/class/witch-patron'
import { AllWitchFeatEntities } from '@simulacrum/ruleset-pf2e/class/witch-feat'

export const SelectWitchHex = CharacterOptions.selectAbilityOption('witch/select-hex', {
  name: 'Hex',
  filter: { specificOptions: [WitchFocusSpells.PatronsPuppet, WitchFocusSpells.PhaseFamiliar] },
})

export const SelectWitchFeat2 = CharacterOptions.selectTraitOption('witch/select-feat-2', {
  name: 'Witch Feat (Level 2)',
  filter: { archetypes: [WitchFeat, [FeatLevel1, FeatLevel2]] },
})

export const SelectWitchFeat4 = CharacterOptions.selectTraitOption('witch/select-feat-4', {
  name: 'Witch Feat (Level 4)',
  filter: { archetypes: [WitchFeat, [FeatLevel1, FeatLevel2, FeatLevel3, FeatLevel4]] },
})

export const WitchPatron = Traits.defineTrait('witch/patron', {
  name: 'Patron',
  description:
    "You weren't born with the power to cast spells, nor have you spent years dedicated to worship, study, or uncovering mystical secrets. Your magic instead has been gifted to you by a potent being, one who knows that by empowering you so, you'll further the being's agenda in the world, whatever it may be. This entity is typically mysterious and distant, revealing little of their identity and motivations. They make their will known to you in abstract signs such as omens, dreams, or similar subtleties rather than words.\n\nRather than interacting with you directly, your patron works through a familiar—a mystical creature that teaches you, serves as the conduit for your patron's magic, and maybe even keeps an eye on you to ensure you're furthering your patron's nebulous ends.\n\nAt 1st level, choose your patron, which determines your spellcasting tradition and grants you the skill for that tradition of magic, your first witch's lesson and a unique familiar ability.",
  archetypes: [ClassFeature],
  effects: [Effects.gainCharacterOption(SelectWitchPatron)],
})

export const WitchSpellcasting = Traits.defineTrait('witch/spellcasting', {
  name: 'Witch Spellcasting',
  description:
    "Using your familiar as a conduit, your patron provides you the power to cast spells. You are a spellcaster, and you can cast spells of your patron's tradition using the Cast a Spell activity. As a witch, when you cast spells, your incantations might rhyme, your gestures might be as simple as an ominous pointing finger or a complex folk sign, and your familiar might even echo your words or movements slightly as your patron's magic surges.\n\nAt 1st level, you can prepare up to two 1st-rank spells and five cantrips each morning from the spells your familiar knows. Prepared spells remain available to you until you cast them or until you prepare your spells again. The number of spells you can prepare each day is called your spell slots.\n\nAs you increase in level as a witch, the number of spells you can prepare each day increases, as does the highest rank of spell you can cast, as shown in the Witch Spells per Day table.\n\nSome of your spells require you to attempt a spell attack to see how effective they are, or have your enemies roll against your spell DC (typically by attempting a saving throw). Since your key attribute is Intelligence, your spell attack modifier and spell DC use your Intelligence modifier.\n\n**Heightening Spells**\n\nWhen you get spell slots of 2nd-rank and higher, you can fill those slots with stronger versions of lower-rank spells. This increases the spell's rank, heightening it to match the spell slot. Many spells have specific improvements when they are heightened to certain ranks.\n\n**Cantrips**\n\nSome of your spells are cantrips. A cantrip is a special type of spell that doesn't use spell slots. You can cast a cantrip at will, any number of times per day. A cantrip is always automatically heightened to half your level rounded up—this is usually equal to the highest rank of witch spell slot you have. For example, as a 1st-level witch, your cantrips are 1st-rank spells, and as a 5th-level witch, your cantrips are 3rd-rank spells.",
  archetypes: [ClassFeature],
  effects: [
    Effects.gainLoadoutSlot(CantripLoadout),
    Effects.gainLoadoutSlot(CantripLoadout),
    Effects.gainLoadoutSlot(CantripLoadout),
    Effects.gainLoadoutSlot(CantripLoadout),
    Effects.gainLoadoutSlot(CantripLoadout),
    Effects.gainLoadoutSlot(SpellRank1Loadout),
    Effects.gainLoadoutSlot(SpellRank1Loadout),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 2), [Effects.gainLoadoutSlot(SpellRank1Loadout)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [
      Effects.gainLoadoutSlot(SpellRank2Loadout),
      Effects.gainLoadoutSlot(SpellRank2Loadout),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 4), [Effects.gainLoadoutSlot(SpellRank2Loadout)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [
      Effects.gainLoadoutSlot(SpellRank3Loadout),
      Effects.gainLoadoutSlot(SpellRank3Loadout),
    ]),
  ],
})

export const WitchFamiliar = Traits.defineTrait('witch/familiar', {
  name: 'Familiar',
  description:
    "Your patron has sent you a familiar, a mystical creature that teaches you magic and facilitates your spells. This familiar follows the familiar rules, though as it's a direct conduit between you and your patron, it's more powerful than typical familiars. Your familiar gains two additional familiar abilities: one of these is a unique ability based on your patron and is always selected, and the other is an additional familiar ability that can be selected daily as normal. Your familiar gains another extra ability at 6th, 12th, and 18th levels.\n\n**Spells**: Your familiar is the source and repository of the spells your patron has bestowed upon you, and you must commune with your familiar to prepare your spells each day using your witch spellcasting. Your familiar starts off knowing 10 cantrips, five 1st-rank spells, and one additional spell determined by your patron's initial lesson. You choose these spells from the common spells of the tradition determined by your patron or from other spells of that tradition you gain access to.\n\nEach time you gain a level, your patron teaches your familiar two new spells of any rank for which you have spell slots, chosen from common spells of your tradition or others you gain access to. Feats can also grant your familiar additional spells.\n\n**Learning Spells**: Your familiar can learn new spells independently of your patron. It can learn any spell on your tradition's spell list by physically consuming a written version of that spell over the course of 1 hour. This can be a scroll of that spell, or you can prepare a written version using the Learn a Spell exploration activity. You and your familiar can use the Learn a Spell activity to teach your familiar a spell from another witch's familiar. Both familiars must be present for the entirety of the activity, the spell must be on your spellcasting tradition's spell list, and you must pay the usual cost for that activity, typically in the form of an offering to the other familiar's patron. You can't prepare spells from another witch's familiar.\n\n**Undying**: If your familiar dies, your patron replaces it during your next daily preparations. The new familiar might be a duplicate or reincarnation of your former familiar or a new entity altogether, but it knows the same spells your former familiar knew regardless. Your familiar's death doesn't affect any spells you have already prepared.",
  archetypes: [ClassFeature],
  effects: [
    Effects.gainCharacterOption(SelectFamiliarAbility),
    Effects.gainCharacterOption(SelectFamiliarAbility),
    Effects.gainCharacterOption(SelectFamiliarAbility),
  ],
})

export const WitchHexSpells = Traits.defineTrait('witch/hex-spells', {
  name: 'Hex Spells',
  description:
    "As a favored agent of your patron, you can invoke their power for a more direct magical intervention. A hex is a spell shaped by your patron and sent to you through your familiar, rather than an ability you use directly. Your patron expects you to advance its interests and does not take kindly to repeated requests for aid; as such, you can use only one hex each turn, and any attempts to use a second hex on that turn fail and the actions are lost.\n\nHex spells are a type of focus spell. It costs 1 Focus Point to cast a focus spell, and you start with a focus pool of 1 Focus Point. You refill your focus pool during your daily preparations, and you can regain 1 Focus Point by spending 10 minutes using the Refocus activity to commune with your familiar.\n\nFocus spells are automatically heightened to half your level rounded up, much like cantrips. Focus spells don't require spell slots, and you can't cast them using spell slots. Certain feats give you more focus spells. The maximum Focus Points your focus pool can hold is equal to the number of focus spells you have, but it can never be more than 3 points. You learn your choice of the _patron's puppet_ hex or _phase familiar_ hex, which let you command your familiar or defend it from harm, respectively. You learn most other hexes from witch lessons.\n\n**Hex Cantrips**\n\nHex cantrips are special hexes that don't cost Focus Points, so you can cast them as often as you like, though you can still use only one hex each turn. Hex cantrips are in addition to the cantrips you choose with witch spellcasting and aren't counted toward your prepared cantrips.\n\nYou gain a hex cantrip determined by your choice of patron.",
  archetypes: [ClassFeature],
  effects: [Effects.gainResourcePool(FocusPoints), Effects.gainCharacterOption(SelectWitchHex)],
})

export const WitchMagicalFortitude = Traits.defineTrait('witch/magical-fortitude', {
  name: 'Magical Fortitude',
  description: "Your patron's power boosts your physical resiliency. Your proficiency rank for Fortitude saves increases to expert.",
  archetypes: [ClassFeature],
  effects: [Effects.modifyCharacteristic(Fortitude, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const Witch = Traits.defineTrait('witch', {
  name: 'Witch',
  description:
    "_You command powerful magic, not through study or devotion to any ideal, but as a vessel or agent for a mysterious, otherworldly patron that even you don't entirely understand. This entity might be a covert divinity, a powerful fey, a manifestation of natural energies, an ancient spirit, or any other mighty supernatural being—but its nature is likely as much a mystery to you as it is to anyone else. Through a special familiar, your patron grants you versatile spells and powerful hexes to use as you see fit, though you're never certain if these gifts will end up serving your patron's larger plan._\n\n**Key Attribute: Intelligence**\n\nAt 1st level, your class gives you an attribute boost to Intelligence.\n\n**Hit Points: 6 plus your Constitution modifier**\n\nYou increase your maximum number of HP by this number at 1st level and every level thereafter.\n\n**Key Terms**\n\nYou'll see these key terms in many witch class features.\n\n**Hex:** A hex is a spell caused by your patron's direct attention and intervention. Your patron does not take well to being disturbed repeatedly, so you can cast only one spell that has the hex trait each turn; attempts to use a second automatically fail and usually cause your familiar to hiss in displeasure as your patron rejects your call.\n\n**Spellshape:** Actions with the spellshape trait tweak the properties of your spells. These actions usually come from spellshape feats. You must use a spellshape action directly before Casting the Spell you want to alter. If you use any action (including free actions and reactions) other than Cast a Spell directly after, you waste the benefits of the spellshape action. Any additional effects added by a spellshape action are part of the spell's effect, not of the spellshape action itself.\n\n**Initial Proficiencies**\n\nAt 1st level, you gain the listed proficiency ranks in the following statistics. You are untrained in anything not listed unless you gain a better proficiency rank in some other way.\n\n**Perception**\n\nTrained in Perception\n\n**Saving Throws**\n\nTrained in Fortitude\n\nTrained in Reflex\n\nExpert in Will\n\n**Skills**\n\nTrained in one skill determined by your patron\n\nTrained in a number of additional skills equal to 3 plus your Intelligence modifier\n\n**Attacks**\n\nTrained in simple weapons\n\nTrained in unarmed attacks\n\n**Defenses**\n\nUntrained in all armor\n\nTrained in unarmored defense\n\n**Class DC**\n\nTrained in witch class DC\n\n**Spells**\n\nTrained in spell attack modifier\n\nTrained in spell DC",
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(
      HitPoints,
      Attributes.modifier(Patches.sum(NumericExpressions.multiply([NumericExpressions.sum([6, Constitution.variable]), CharacterValues.Level])))
    ),
    Effects.gainTrait(IntelligenceKeyAttribute),
    Effects.modifyCharacteristic(Perception, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(Fortitude, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(Reflex, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(Will, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    Effects.modifyCharacteristic(UnarmedAttacks, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(SimpleWeapons, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(UnarmoredDefense, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(ClassDC, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(SpellAttack, Attributes.modifier(Patches.sum(Intelligence.variable))),
    Effects.modifyCharacteristic(SpellAttack, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(SpellDC, Attributes.modifier(Patches.sum(Intelligence.variable))),
    Effects.modifyCharacteristic(SpellDC, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.gainCharacterOption(SelectTrainedSkill),
    Effects.gainCharacterOption(SelectTrainedSkill),
    Effects.gainCharacterOption(SelectTrainedSkill),
    Effects.gainTrait(WitchPatron),
    Effects.gainTrait(WitchSpellcasting),
    Effects.gainTrait(WitchFamiliar),
    Effects.gainTrait(WitchHexSpells),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 2), [Effects.gainCharacterOption(SelectWitchFeat2)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 4), [Effects.gainCharacterOption(SelectWitchFeat4)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [Effects.gainTrait(WitchMagicalFortitude)]),
  ],
})

export const AllWitchEntities = [
  WitchPatron,
  WitchSpellcasting,
  WitchFamiliar,
  WitchHexSpells,
  WitchMagicalFortitude,
  Witch,
  ...AllWitchFocusSpells,
  ...AllWitchLessonEntities,
  ...AllWitchPatronEntities,
  ...AllWitchFeatEntities,
]
