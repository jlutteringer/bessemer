import { Abilities, Attributes, CharacterOptions, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { ResourcePool } from '@simulacrum/ruleset/resource-pool'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { ClassFeat, Feat, FeatLevel1, FeatLevel2, FeatLevel4, WitchFeat, WizardFeat } from '@simulacrum/ruleset-pf2e/archetype'
import { FocusPoints } from '@simulacrum/ruleset-pf2e/spellcasting'
import * as WitchFocusSpells from '@simulacrum/ruleset-pf2e/class/witch-focus-spell'
import { SelectWitchBasicLesson } from '@simulacrum/ruleset-pf2e/class/witch-lesson'

export const Cackle = Traits.defineTrait('feat/cackle', {
  name: 'Cackle',
  description:
    '*Witch*\n\nYour patron’s power fills you with confidence, letting you sustain a magical working even as a quick burst of laughter leaves your lips. You learn the _cackle_ hex.',
  archetypes: [Feat, ClassFeat, WitchFeat, FeatLevel1],
  effects: [
    Effects.gainAbility(WitchFocusSpells.Cackle),
    Effects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
  ],
})

export const Cauldron = Traits.defineTrait('feat/cauldron', {
  name: 'Cauldron',
  description:
    '*Witch*\n\nYou can brew magic in your cauldron, creating useful magical concoctions. You can use the Craft activity to create oils and potions. You immediately gain the formulas for four common 1st-level oils or potions. At 4th level and every 2 levels beyond that, you gain the formula for a common oil or potion of that level or lower (a 4th-level potion if you’re 4th level, a 6th-level potion if you’re 6th level, and so on). If you have a familiar, you can have your familiar learn these formulas rather than storing them in a formula book. Your familiar can learn new formulas in the same way it learns new spells, and these formulas are transferred from a slain familiar to a new familiar in the same way spells are.\n\nDuring your daily preparations, you can create one temporary oil or potion using a formula you know. If you have master proficiency in spell DC, you can create a batch of two temporary oils or potions during your daily preparations, and if you have legendary proficiency, you can create a batch of three. Any items you create this way become inert bottles of liquid the next time you make your daily preparations, and any remaining effects of the temporary items end. A temporary oil or potion has no value.',
  archetypes: [Feat, ClassFeat, WitchFeat, FeatLevel1],
  effects: [],
})

export const Counterspell = Traits.defineTrait('feat/counterspell', {
  name: 'Counterspell',
  description:
    "*Witch, Wizard*\n\n**Trigger** A creature Casts a Spell that you have prepared\n\nWhen a foe Casts a Spell and you can see its manifestations, you can use your magic to disrupt it. You expend a prepared spell to counter the triggering creature's casting of that same spell. You lose your spell slot as if you had cast the triggering spell. You then attempt to counteract the triggering spell.\n\n**Special** This feat has the trait corresponding to the tradition of spells you cast (arcane, divine, primal, or occult).",
  archetypes: [Feat, ClassFeat, WitchFeat, WizardFeat, FeatLevel1],
  effects: [],
})

export const CounterspellAction = Abilities.defineAbility('feat/counterspell/action', {
  name: 'Counterspell',
  description:
    "*Witch, Wizard*\n\n**Trigger** A creature Casts a Spell that you have prepared\n\nWhen a foe Casts a Spell and you can see its manifestations, you can use your magic to disrupt it. You expend a prepared spell to counter the triggering creature's casting of that same spell. You lose your spell slot as if you had cast the triggering spell. You then attempt to counteract the triggering spell.\n\n**Special** This feat has the trait corresponding to the tradition of spells you cast (arcane, divine, primal, or occult).",
  prerequisites: [Traits.traitPrerequisite(Counterspell)],
  actions: [{ name: 'Counterspell', action: ActionTypes.Reaction }],
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
  archetypes: [Feat, ClassFeat, WitchFeat, FeatLevel1],
  repeatable: true,
  effects: [Effects.gainCharacterOption(SelectWitchsArmaments)],
})

export const BasicLesson = Traits.defineTrait('feat/basic-lesson', {
  name: 'Basic Lesson',
  description:
    '*Witch*\n\nYour patron grants you a special lesson, revealing a hidden facet of its nature. Choose a basic lesson from the list here. You gain its associated hex, and your familiar learns the associated spell.',
  archetypes: [Feat, ClassFeat, WitchFeat, FeatLevel2],
  effects: [Effects.gainCharacterOption(SelectWitchBasicLesson)],
})

export const ConcealSpell = Traits.defineTrait('feat/conceal-spell', {
  name: 'Conceal Spell',
  description:
    "*Animist, Concentrate, Necromancer, Spellshape, Witch, Wizard*\n\nThrough sheer mental effort, you can simplify the incantations and gestures needed to spellcast, leaving them barely noticeable. If the next action you use is to Cast a Spell, the spell gains the subtle trait, hiding the shining runes, sparks of magic, and other manifestations that would usually give away your spellcasting. The trait hides only the spell's spellcasting actions and manifestations, not its effects, so an observer might still see a ray streak out from you or see you vanish into thin air.",
  archetypes: [Feat, ClassFeat, WitchFeat, WizardFeat, FeatLevel2],
  effects: [],
})

export const ConcealSpellAction = Abilities.defineAbility('feat/conceal-spell/action', {
  name: 'Conceal Spell',
  description:
    "*Animist, Concentrate, Necromancer, Spellshape, Witch, Wizard*\n\nThrough sheer mental effort, you can simplify the incantations and gestures needed to spellcast, leaving them barely noticeable. If the next action you use is to Cast a Spell, the spell gains the subtle trait, hiding the shining runes, sparks of magic, and other manifestations that would usually give away your spellcasting. The trait hides only the spell's spellcasting actions and manifestations, not its effects, so an observer might still see a ray streak out from you or see you vanish into thin air.",
  prerequisites: [Traits.traitPrerequisite(ConcealSpell)],
  actions: [{ name: 'Conceal Spell', action: ActionTypes.SingleAction }],
})

export const FamiliarsLanguage = Traits.defineTrait('feat/familiars-language', {
  name: "Familiar's Language",
  description:
    '*Witch*\n\n**Prerequisites** a familiar\n\nYou’ve learned to speak with your familiar and other creatures like it. You can ask questions of, receive answers from, and use the Diplomacy skill with creatures of the same family of animals as your familiar. For example, if your familiar were a cat, you could gain the effects of speak with animals for any felines (including leopards, lions, and tigers, among others). This ability doesn’t make them more friendly than normal. If your familiar ever changes to a different creature, you can’t use this ability for 1 week while you absorb your new familiar’s language.\n\n**Special** This feat has the trait corresponding to the tradition of spells you cast (arcane, divine, occult, or primal).',
  archetypes: [Feat, ClassFeat, WitchFeat, FeatLevel2],
  effects: [],
})

export const RitesOfConvocation = Traits.defineTrait('feat/rites-of-convocation', {
  name: 'Rites of Convocation',
  description:
    '*Witch*\n\nYour patron grants you the power to summon other creatures to aid you. Choose one summon spell (such as summon animal, summon construct, and so forth) that appears on the spell list of your spellcasting tradition. You can spend 10 minutes in communion with your familiar to replace one spell you’ve prepared in one of your witch spell slots with the spell you chose, heightened to the same rank. The spell you replaced must be of at least the summon spell’s minimum spell rank.',
  archetypes: [Feat, ClassFeat, WitchFeat, FeatLevel4],
  effects: [],
})

export const SympatheticStrike = Traits.defineTrait('feat/sympathetic-strike', {
  name: 'Sympathetic Strike',
  description:
    "*Witch*\n\n**Frequency** once per round\n\n**Prerequisites** Witch's Armaments\n\nYou collect your patron’s magic into one of your witch armaments, causing them to shine with runes, light, or another signifier of your patron. Make an unarmed Strike with one with your witch’s armaments. If you hit, you establish a sympathetic link with the target, making it easier for your patron to affect them. Until the beginning of your next turn, the target takes a –1 circumstance penalty to its saves against your hexes, or a –2 penalty if the triggering Strike was a critical hit.",
  archetypes: [Feat, ClassFeat, WitchFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(WitchsArmaments)],
  effects: [],
})

export const SympatheticStrikeAction = Abilities.defineAbility('feat/sympathetic-strike/action', {
  name: 'Sympathetic Strike',
  description:
    "*Witch*\n\n**Frequency** once per round\n\n**Prerequisites** Witch's Armaments\n\nYou collect your patron’s magic into one of your witch armaments, causing them to shine with runes, light, or another signifier of your patron. Make an unarmed Strike with one with your witch’s armaments. If you hit, you establish a sympathetic link with the target, making it easier for your patron to affect them. Until the beginning of your next turn, the target takes a –1 circumstance penalty to its saves against your hexes, or a –2 penalty if the triggering Strike was a critical hit.",
  prerequisites: [Traits.traitPrerequisite(SympatheticStrike)],
  actions: [{ name: 'Sympathetic Strike', action: ActionTypes.SingleAction }],
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
]
