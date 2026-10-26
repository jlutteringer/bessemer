import { Abilities, Attributes, CharacterOptions, CharacterEffects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { ResourcePool } from '@simulacrum/ruleset/resource-pool'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { Expressions } from '@bessemer/cornerstone/expression'
import {
  ClassFeat,
  Feat,
  FeatLevel1,
  FeatLevel2,
  FeatLevel4,
  FeatLevel6,
  FeatLevel8,
  FeatLevel10,
  WitchFeat,
  WizardFeat,
} from '@simulacrum/ruleset-pf2e/tag'
import { FocusPoints } from '@simulacrum/ruleset-pf2e/spellcasting'
import * as WitchFocusSpells from '@simulacrum/ruleset-pf2e/class/witch-focus-spell'
import { SelectWitchBasicLesson, SelectWitchGreaterLesson, SelectWitchMajorLesson } from '@simulacrum/ruleset-pf2e/class/witch-lesson'
import {
  WitchArcaneSpellcasting,
  WitchDivineSpellcasting,
  WitchOccultSpellcasting,
  WitchPrimalSpellcasting,
} from '@simulacrum/ruleset-pf2e/class/witch-patron'
import { SelectFamiliarAbility } from '@simulacrum/ruleset-pf2e/companion/familiar'
import { EnhancedFamiliar } from '@simulacrum/ruleset-pf2e/class/druid-feat'

export const Cackle = Traits.defineTrait('feat/cackle', {
  name: 'Cackle',
  description:
    '*Witch*\n\nYour patron’s power fills you with confidence, letting you sustain a magical working even as a quick burst of laughter leaves your lips. You learn the [_cackle_](ability:spell/cackle) hex.',
  tags: [Feat, ClassFeat, WitchFeat, FeatLevel1],
  effects: [
    CharacterEffects.gainAbility(WitchFocusSpells.Cackle),
    CharacterEffects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
  ],
})

export const Cauldron = Traits.defineTrait('feat/cauldron', {
  name: 'Cauldron',
  description:
    '*Witch*\n\nYou can brew magic in your cauldron, creating useful magical concoctions. You can use the [Craft](content:skills/craft) activity to create oils and potions. You immediately gain the formulas for four common 1st-level oils or potions. At 4th level and every 2 levels beyond that, you gain the formula for a common oil or potion of that level or lower (a 4th-level potion if you’re 4th level, a 6th-level potion if you’re 6th level, and so on). If you have a familiar, you can have your familiar learn these formulas rather than storing them in a formula book. Your familiar can learn new formulas in the same way it learns new spells, and these formulas are transferred from a slain familiar to a new familiar in the same way spells are.\n\nDuring your daily preparations, you can create one temporary oil or potion using a formula you know. If you have master proficiency in [spell DC](characteristic:spell-dc), you can create a batch of two temporary oils or potions during your daily preparations, and if you have legendary proficiency, you can create a batch of three. Any items you create this way become inert bottles of liquid the next time you make your daily preparations, and any remaining effects of the temporary items end. A temporary oil or potion has no value.',
  tags: [Feat, ClassFeat, WitchFeat, FeatLevel1],
  effects: [],
})

export const Counterspell = Traits.defineTrait('feat/counterspell', {
  name: 'Counterspell',
  description:
    "*Witch, Wizard*\n\n**Trigger** A creature Casts a Spell that you have prepared\n\nWhen a foe Casts a Spell and you can see its manifestations, you can use your magic to disrupt it. You expend a prepared spell to counter the triggering creature's casting of that same spell. You lose your spell slot as if you had cast the triggering spell. You then attempt to [counteract](content:playing-the-game/counteracting) the triggering spell.\n\n**Special** This feat has the trait corresponding to the tradition of spells you cast (arcane, divine, primal, or occult).",
  tags: [Feat, ClassFeat, WitchFeat, WizardFeat, FeatLevel1],
  effects: [],
})

export const CounterspellAction = Abilities.defineAbility('feat/counterspell/action', {
  name: 'Counterspell',
  description: '*Witch, Wizard*',
  prerequisites: [Traits.traitPrerequisite(Counterspell)],
  actions: [
    {
      name: 'Counterspell',
      description:
        "**Trigger** A creature Casts a Spell that you have prepared\n\nWhen a foe Casts a Spell and you can see its manifestations, you can use your magic to disrupt it. You expend a prepared spell to counter the triggering creature's casting of that same spell. You lose your spell slot as if you had cast the triggering spell. You then attempt to [counteract](content:playing-the-game/counteracting) the triggering spell.\n\n**Special** This feat has the trait corresponding to the tradition of spells you cast (arcane, divine, primal, or occult).",
      action: ActionTypes.Reaction,
    },
  ],
})

export const WitchsArmamentsEldritchNails = Traits.defineTrait('feat/witchs-armaments/eldritch-nails', {
  name: "Witch's Armaments (Eldritch Nails)",
  description:
    'Your nails are supernaturally long and sharp. You gain a nails unarmed attack that deals 1d6 slashing damage, is in the brawling group, and has the agile and unarmed traits.',
  effects: [],
})

export const WitchsArmamentsIronTeeth = Traits.defineTrait('feat/witchs-armaments/iron-teeth', {
  name: "Witch's Armaments (Iron Teeth)",
  description:
    'With a click of your jaw, your teeth transform into long metallic points. You gain a jaws unarmed attack that deals 1d8 piercing damage and is in the brawling group.',
  effects: [],
})

export const WitchsArmamentsLivingHair = Traits.defineTrait('feat/witchs-armaments/living-hair', {
  name: "Witch's Armaments (Living Hair)",
  description:
    'You can instantly grow or shrink your hair, eyebrows, beard, or mustache by up to several feet and manipulate your hair for use as a weapon, though your control isn’t fine enough for more dexterous tasks. You gain a hair unarmed attack that deals 1d4 bludgeoning damage; is in the brawling group; and has the agile, disarm, finesse, trip, and unarmed traits.',
  effects: [],
})

export const SelectWitchsArmaments = CharacterOptions.selectTraitOption('feat/witchs-armaments/select', {
  name: "Witch's Armaments",
  filter: { specificOptions: [WitchsArmamentsEldritchNails, WitchsArmamentsIronTeeth, WitchsArmamentsLivingHair] },
})

export const WitchsArmaments = Traits.defineTrait('feat/witchs-armaments', {
  name: "Witch's Armaments",
  description:
    '*Witch*\n\nYour patron’s power changes your body to ensure you are never defenseless. You gain one of the following unarmed attacks.\n\n- **Eldritch Nails** Your nails are supernaturally long and sharp. You gain a nails unarmed attack that deals 1d6 slashing damage, is in the brawling group, and has the agile and unarmed traits.\n\n- **Iron Teeth** With a click of your jaw, your teeth transform into long metallic points. You gain a jaws unarmed attack that deals 1d8 piercing damage and is in the brawling group.\n\n- **Living Hair** You can instantly grow or shrink your hair, eyebrows, beard, or mustache by up to several feet and manipulate your hair for use as a weapon, though your control isn’t fine enough for more dexterous tasks. You gain a hair unarmed attack that deals 1d4 bludgeoning damage; is in the brawling group; and has the agile, disarm, finesse, trip, and unarmed traits.\n\n**Special** You can take this feat more than once, gaining a different unarmed attack each time.',
  tags: [Feat, ClassFeat, WitchFeat, FeatLevel1],
  repeatable: true,
  effects: [CharacterEffects.gainCharacterOption(SelectWitchsArmaments)],
})

export const BasicLesson = Traits.defineTrait('feat/basic-lesson', {
  name: 'Basic Lesson',
  description:
    '*Witch*\n\nYour patron grants you a special lesson, revealing a hidden facet of its nature. Choose a basic lesson from the list here. You gain its associated hex, and your familiar learns the associated spell.',
  tags: [Feat, ClassFeat, WitchFeat, FeatLevel2],
  effects: [CharacterEffects.gainCharacterOption(SelectWitchBasicLesson)],
})

export const ConcealSpell = Traits.defineTrait('feat/conceal-spell', {
  name: 'Conceal Spell',
  description:
    "*Animist, Concentrate, Necromancer, Spellshape, Witch, Wizard*\n\nThrough sheer mental effort, you can simplify the incantations and gestures needed to spellcast, leaving them barely noticeable. If the next action you use is to [Cast a Spell](content:spells/cast-a-spell), the spell gains the [subtle](content:traits/subtle) trait, hiding the shining runes, sparks of magic, and other manifestations that would usually give away your spellcasting. The trait hides only the spell's spellcasting actions and manifestations, not its effects, so an observer might still see a ray streak out from you or see you vanish into thin air.",
  tags: [Feat, ClassFeat, WitchFeat, WizardFeat, FeatLevel2],
  effects: [],
})

export const ConcealSpellAction = Abilities.defineAbility('feat/conceal-spell/action', {
  name: 'Conceal Spell',
  description: '*Animist, Concentrate, Necromancer, Spellshape, Witch, Wizard*',
  prerequisites: [Traits.traitPrerequisite(ConcealSpell)],
  actions: [
    {
      name: 'Conceal Spell',
      description:
        "Through sheer mental effort, you can simplify the incantations and gestures needed to spellcast, leaving them barely noticeable. If the next action you use is to [Cast a Spell](content:spells/cast-a-spell), the spell gains the [subtle](content:traits/subtle) trait, hiding the shining runes, sparks of magic, and other manifestations that would usually give away your spellcasting. The trait hides only the spell's spellcasting actions and manifestations, not its effects, so an observer might still see a ray streak out from you or see you vanish into thin air.",
      action: ActionTypes.SingleAction,
    },
  ],
})

export const FamiliarsLanguage = Traits.defineTrait('feat/familiars-language', {
  name: "Familiar's Language",
  description:
    '*Witch*\n\n**Prerequisites** a familiar\n\nYou’ve learned to speak with your familiar and other creatures like it. You can ask questions of, receive answers from, and use the [Diplomacy](characteristic:skill/diplomacy) skill with creatures of the same family of animals as your familiar. For example, if your familiar were a cat, you could gain the effects of speak with animals for any felines (including leopards, lions, and tigers, among others). This ability doesn’t make them more friendly than normal. If your familiar ever changes to a different creature, you can’t use this ability for 1 week while you absorb your new familiar’s language.\n\n**Special** This feat has the trait corresponding to the tradition of spells you cast (arcane, divine, occult, or primal).',
  tags: [Feat, ClassFeat, WitchFeat, FeatLevel2],
  effects: [],
})

export const RitesOfConvocation = Traits.defineTrait('feat/rites-of-convocation', {
  name: 'Rites of Convocation',
  description:
    '*Witch*\n\nYour patron grants you the power to summon other creatures to aid you. Choose one summon spell (such as summon animal, summon construct, and so forth) that appears on the spell list of your spellcasting tradition. You can spend 10 minutes in communion with your familiar to replace one spell you’ve prepared in one of your witch spell slots with the spell you chose, heightened to the same rank. The spell you replaced must be of at least the summon spell’s minimum spell rank.',
  tags: [Feat, ClassFeat, WitchFeat, FeatLevel4],
  effects: [],
})

export const SympatheticStrike = Traits.defineTrait('feat/sympathetic-strike', {
  name: 'Sympathetic Strike',
  description:
    "*Witch*\n\n**Frequency** once per round\n\n**Prerequisites** [Witch's Armaments](trait:feat/witchs-armaments)\n\nYou collect your patron’s magic into one of your witch armaments, causing them to shine with runes, light, or another signifier of your patron. Make an unarmed [Strike](content:playing-the-game/strike) with one with your witch’s armaments. If you hit, you establish a sympathetic link with the target, making it easier for your patron to affect them. Until the beginning of your next turn, the target takes a –1 circumstance penalty to its saves against your hexes, or a –2 penalty if the triggering Strike was a critical hit.",
  tags: [Feat, ClassFeat, WitchFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(WitchsArmaments)],
  effects: [],
})

export const SympatheticStrikeAction = Abilities.defineAbility('feat/sympathetic-strike/action', {
  name: 'Sympathetic Strike',
  description: '*Witch*',
  prerequisites: [Traits.traitPrerequisite(SympatheticStrike)],
  actions: [
    {
      name: 'Sympathetic Strike',
      description:
        "**Frequency** once per round\n\n**Prerequisites** [Witch's Armaments](trait:feat/witchs-armaments)\n\nYou collect your patron’s magic into one of your witch armaments, causing them to shine with runes, light, or another signifier of your patron. Make an unarmed [Strike](content:playing-the-game/strike) with one with your witch’s armaments. If you hit, you establish a sympathetic link with the target, making it easier for your patron to affect them. Until the beginning of your next turn, the target takes a –1 circumstance penalty to its saves against your hexes, or a –2 penalty if the triggering Strike was a critical hit.",
      action: ActionTypes.SingleAction,
    },
  ],
})

export const CeremonialKnife = Traits.defineTrait('feat/ceremonial-knife', {
  name: 'Ceremonial Knife',
  description:
    '*Witch*\n\nYou have prepared a special knife to direct energies when spellcasting. During your daily preparations, you and your familiar can perform a short ritual over a weapon in the knife group—typically a dagger. This causes the knife to function as a magic wand, containing any one 1st-rank spell your familiar knows. You, and only you, can Activate the knife to Cast the Spell within it, as normal for a wand. You can attempt to overcharge the knife, and this can break or destroy the knife as normal. You can have only one ceremonial knife at a time.\n\nAt 8th level, and every 2 levels thereafter, the maximum rank of spell your ceremonial knife can hold increases by 1.',
  tags: [Feat, ClassFeat, WitchFeat, FeatLevel6],
  effects: [],
})

export const GreaterLesson = Traits.defineTrait('feat/greater-lesson', {
  name: 'Greater Lesson',
  description:
    '*Witch*\n\nYour patron grants you greater knowledge. Choose a greater or basic lesson from the list here. You gain its associated hex, and your familiar learns the associated spell.',
  tags: [Feat, ClassFeat, WitchFeat, FeatLevel6],
  effects: [CharacterEffects.gainCharacterOption(SelectWitchGreaterLesson)],
})

export const WitchsCharge = Traits.defineTrait('feat/witchs-charge', {
  name: "Witch's Charge",
  description:
    '*Detection, Witch*\n\nYou forge a magical link with another creature, granting you awareness of that creature’s condition and creating a conduit for spellcasting. During your daily preparations, you can designate one willing creature as your charge. You are always aware of your charge’s direction from you, its distance from you, and any conditions affecting it. In addition, you can cast spells with a range of touch on your charge from a range of 30 feet. These effects persist until your next daily preparations.\n\n**Special** This feat has the trait corresponding to the tradition of spells you cast (arcane, divine, occult, or primal).',
  tags: [Feat, ClassFeat, WitchFeat, FeatLevel6],
  effects: [],
})

export const IncredibleFamiliar = Traits.defineTrait('feat/incredible-familiar', {
  name: 'Incredible Familiar',
  description:
    '*Thaumaturge, Witch*\n\n**Prerequisites** [Enhanced Familiar](trait:feat/enhanced-familiar)\n\nYour familiar is imbued with even more magic than other familiars. You can select a base of six familiar or master abilities each day, instead of four.\n\n**Special** Add the bonus familiar abilities you gain for being a witch to this amount.',
  tags: [Feat, ClassFeat, WitchFeat, FeatLevel8],
  prerequisites: [Traits.traitPrerequisite(EnhancedFamiliar)],
  effects: [CharacterEffects.gainCharacterOption(SelectFamiliarAbility), CharacterEffects.gainCharacterOption(SelectFamiliarAbility)],
})

export const Murksight = Traits.defineTrait('feat/murksight', {
  name: 'Murksight',
  description:
    '*Witch*\n\nYour vision pierces through non-magical fog, mist, rain, and snow. You don’t take circumstance penalties to ranged attacks or [Perception](characteristic:perception) checks caused by non-magical precipitation, and your targeted attacks don’t require a flat check to succeed against a target concealed only by such effects.',
  tags: [Feat, ClassFeat, WitchFeat, FeatLevel8],
  effects: [],
})

export const SpiritFamiliarWitch = Traits.defineTrait('feat/spirit-familiar-witch', {
  name: 'Spirit Familiar (Witch)',
  description:
    '*Witch*\n\n**Prerequisites** divine or occult patron\n\nYour familiar can subsume its body to become pure spirit. Your familiar gains the Shed Spirit activity.\n\n**Shed Spirit** ◆◆ (spirit) **Frequency** once per 10 minutes; **Effect** Your familiar’s spirit exits its body, leaving its empty shell behind, before flying at an enemy within 20 feet and dealing 6d6 spirit damage, with a basic [Will save](characteristic:will) against your [spell DC](characteristic:spell-dc). If the familiar dealt damage, it then flies to an ally within 30 feet of the enemy, restoring [Hit Points](characteristic:hit-points) equal to half the damage dealt. Your familiar then re-forms in its original square. At 9th level, and every 2 levels thereafter, the attack deals an additional 2d6 damage.',
  tags: [Feat, ClassFeat, WitchFeat, FeatLevel8],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(WitchDivineSpellcasting), Traits.traitPrerequisite(WitchOccultSpellcasting)])],
  effects: [],
})

export const StitchedFamiliar = Traits.defineTrait('feat/stitched-familiar', {
  name: 'Stitched Familiar',
  description:
    '*Witch*\n\n**Prerequisites** arcane or primal patron\n\nYour familiar can shed its material form, becoming a mass of animated magic. Your familiar gains the Stitching Strike activity.\n\n**Stitching Strike** ◆◆ **Frequency** once per 10 minutes; **Effect** Your familiar unravels into magical fibers that encompass an enemy within 30 feet and deal 6d6 slashing damage, with a basic [Reflex](characteristic:reflex) save against your [spell DC](characteristic:spell-dc). On a failure, the target is also [immobilized](content:conditions/immobilized) for 1 round or until it Escapes against your spell DC. Your familiar then re-forms in its original square. At 9th level, and every 2 levels thereafter, the attack deals an additional 2d6 damage.',
  tags: [Feat, ClassFeat, WitchFeat, FeatLevel8],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(WitchArcaneSpellcasting), Traits.traitPrerequisite(WitchPrimalSpellcasting)])],
  effects: [],
})

export const WitchsBottle = Traits.defineTrait('feat/witchs-bottle', {
  name: "Witch's Bottle",
  description:
    "*Witch*\n\n**Prerequisites** [Cauldron](trait:feat/cauldron)\n\nYou spend 10 minutes and 1 Focus Point brewing a special potion containing the power of one of your hexes that targets a creature. A creature that consumes this potion is targeted by the hex. If the hex has a sustained duration and you have [_cackle_](ability:spell/cackle), you can cast cackle into the bottle just before you seal it. If you do, the hex's duration is extended as if you had cast cackle the round after the hex was cast (typically this extends the duration by 1 round). Your cackling laugh sounds out when the potion is unsealed.\n\nAny potion you create this way loses its power the next time you make your daily preparations. While the potion is in your possession, you can render it inert using a single action that has the concentrate trait. You can't regain the Focus Point you spent to create the potion (or the Focus Point you spent to cast cackle) until the potion is consumed or loses its magic.",
  tags: [Feat, ClassFeat, WitchFeat, FeatLevel8],
  prerequisites: [Traits.traitPrerequisite(Cauldron)],
  effects: [],
})

export const DoubleDouble = Traits.defineTrait('feat/double-double', {
  name: 'Double, Double',
  description:
    '*Witch*\n\n**Prerequisites** [Cauldron](trait:feat/cauldron)\n\nFor each temporary oil or potion you brew during your daily preparations, you brew two copies of it. This allows you to brew two temporary oils or potions each day, four if you have master proficiency in [spell DC](characteristic:spell-dc), or six if you have legendary proficiency.',
  tags: [Feat, ClassFeat, WitchFeat, FeatLevel10],
  prerequisites: [Traits.traitPrerequisite(Cauldron)],
  effects: [],
})

export const MajorLesson = Traits.defineTrait('feat/major-lesson', {
  name: 'Major Lesson',
  description:
    '*Witch*\n\nYour patron grants you even greater secrets. Choose a major, greater, or basic lesson from the list here. You gain its associated hex, and your familiar learns the associated spell.\n\n**Special** You can select this feat a second time if you’re 14th level or higher, and a third time if you’re 18th level or higher. Choose a different lesson each time.',
  tags: [Feat, ClassFeat, WitchFeat, FeatLevel10],
  effects: [CharacterEffects.gainCharacterOption(SelectWitchMajorLesson)],
})

export const WitchsCommunion = Traits.defineTrait('feat/witchs-communion', {
  name: "Witch's Communion",
  description:
    "*Witch*\n\n**Prerequisites** [Witch's Charge](trait:feat/witchs-charge)\n\nYou can keep watch over multiple charges. Each day during your preparations, you can designate a number of charges equal to your [Intelligence modifier](characteristic:intelligence) instead of just one.",
  tags: [Feat, ClassFeat, WitchFeat, FeatLevel10],
  prerequisites: [Traits.traitPrerequisite(WitchsCharge)],
  effects: [],
})

export const AllWitchFeatEntities = [
  Cackle,
  Cauldron,
  Counterspell,
  CounterspellAction,
  WitchsArmamentsEldritchNails,
  WitchsArmamentsIronTeeth,
  WitchsArmamentsLivingHair,
  WitchsArmaments,
  BasicLesson,
  ConcealSpell,
  ConcealSpellAction,
  FamiliarsLanguage,
  RitesOfConvocation,
  SympatheticStrike,
  SympatheticStrikeAction,
  CeremonialKnife,
  GreaterLesson,
  WitchsCharge,
  IncredibleFamiliar,
  Murksight,
  SpiritFamiliarWitch,
  StitchedFamiliar,
  WitchsBottle,
  DoubleDouble,
  MajorLesson,
  WitchsCommunion,
]
