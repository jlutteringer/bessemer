import { Attributes, CharacterOptions, CharacterValues, CharacterEffects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions, NumericExpressions } from '@bessemer/cornerstone/expression'
import { Class, ClassFeature, Feat } from '@simulacrum/ruleset-dnd4e/tag'
import { HealingSurges, HitPoints, Will, Wisdom } from '@simulacrum/ruleset-dnd4e/characteristic'
import * as Skills from '@simulacrum/ruleset-dnd4e/skill'
import * as Powers from '@simulacrum/ruleset-dnd4e/power'
import {
  PreparedDailySpell1Loadout,
  PreparedDailySpell5Loadout,
  PreparedDailySpell9Loadout,
  PreparedUtilitySpell2Loadout,
  PreparedUtilitySpell6Loadout,
  PreparedUtilitySpell10Loadout,
} from '@simulacrum/ruleset-dnd4e/loadout'
import { RitualCaster } from '@simulacrum/ruleset-dnd4e/feat'
import { Human } from '@simulacrum/ruleset-dnd4e/race'

export const OrbOfImposition = Traits.defineTrait('wizard/implement-mastery/orb-of-imposition', {
  name: 'Orb of Imposition',
  description:
    'Once per encounter as a free action, you can use your orb to gain one of the following two effects.\n\nYou can designate one creature you have cast a wizard spell upon that has an effect that lasts until the subject succeeds on a saving throw. That creature takes a penalty to its saving throws against that effect equal to your [Wisdom](characteristic:wisdom) modifier.\n\nAlternatively, you can choose to extend the duration of an effect created by a wizard at-will spell (such as *[cloud of daggers](ability:wizard/power/cloud-of-daggers)* or *[ray of frost](ability:wizard/power/ray-of-frost)*) that would otherwise end at the end of your current turn. The effect instead ends at the end of your next turn.\n\nYou must wield an orb to use this ability. Control wizards select this form of mastery because it helps extend the duration of their control effects.',
  tags: [ClassFeature],
  effects: [],
})

export const StaffOfDefense = Traits.defineTrait('wizard/implement-mastery/staff-of-defense', {
  name: 'Staff of Defense',
  description:
    'A staff of defense grants you a +1 bonus to AC. In addition, once per encounter as an immediate interrupt, you gain a bonus to defense against one attack equal to your [Constitution](characteristic:constitution) modifier. You can declare the bonus after the Dungeon Master has already told you the damage total. You must wield your staff to benefit from these features. This form of mastery is useful for all wizards, particularly if you dabble in both control and damage-dealing spells.',
  tags: [ClassFeature],
  effects: [],
})

export const WandOfAccuracy = Traits.defineTrait('wizard/implement-mastery/wand-of-accuracy', {
  name: 'Wand of Accuracy',
  description:
    'Once per encounter as a free action, you gain a bonus to a single attack roll equal to your [Dexterity](characteristic:dexterity) modifier. You must wield your wand to benefit from this feature. This form of mastery is good for war wizards because it helps increase their accuracy with damaging powers.',
  tags: [ClassFeature],
  effects: [],
})

export const SelectImplementMastery = CharacterOptions.selectTraitOption('wizard/select-implement-mastery', {
  name: 'Arcane Implement Mastery',
  description:
    'You specialize in the use of one kind of implement to gain additional abilities when you wield it. Choose one of the following forms of implement mastery.',
  filter: { specificOptions: [OrbOfImposition, StaffOfDefense, WandOfAccuracy] },
})

// Unlocks the cantrips (see wizard-power.ts)
export const WizardCantrips = Traits.defineTrait('wizard/cantrips', {
  name: 'Cantrips',
  description:
    'Cantrips are minor spells you gain at 1st level. You can use the *[ghost sound](ability:wizard/power/ghost-sound)*, *[light](ability:wizard/power/light)*, *[mage hand](ability:wizard/power/mage-hand)*, and *[prestidigitation](ability:wizard/power/prestidigitation)* cantrips as at-will powers.',
  tags: [ClassFeature],
  effects: [],
})

export const RitualCasting = Traits.defineTrait('wizard/ritual-casting', {
  name: 'Ritual Casting',
  description:
    'You gain the [Ritual Caster](trait:feat/ritual-caster) feat (page 200) as a bonus feat, allowing you to use magical rituals (see [Chapter 10](content:rituals)).',
  tags: [ClassFeature],
  effects: [CharacterEffects.gainTrait(RitualCaster)],
})

export const Spellbook = Traits.defineTrait('wizard/spellbook', {
  name: 'Spellbook',
  description:
    "You possess a spellbook, a book full of mystic lore in which you store your rituals and your daily and utility spells.\n\n**Rituals:** Your book contains three 1st-level rituals of your choice that you have mastered.\n\nAt 5th level, and again at 11th, 15th, 21st, and 25th level, you master two more rituals of your choice and add them to your spellbook. Any ritual you add must be your level or lower.\n\n**Daily and Utility Spells:** Your spellbook also holds your daily and utility spells. You begin knowing two daily spells, one of which you can use on any given day. Each time you gain a level that lets you select a daily spell or a utility spell, choose two different daily spells or utility spells of that level to add to your book. After an extended rest, you can prepare a number of daily and utility spells according to what you can cast per day for your level. You can't prepare the same spell twice.\n\nIf you replace a spell because of gaining a level or through retraining, the previous spell vanishes from your spellbook and is replaced by the new spell.\n\n**Capacity:** A typical spellbook has 128 pages. Each spell takes up 1 page. A ritual takes up a number of pages equal to its level.",
  tags: [ClassFeature],
  effects: [],
})

export const SelectSkill = CharacterOptions.selectTraitOption('wizard/select-skill', {
  name: 'Trained Skill',
  filter: {
    specificOptions: [
      Skills.TrainedArcana,
      Skills.TrainedDiplomacy,
      Skills.TrainedDungeoneering,
      Skills.TrainedHistory,
      Skills.TrainedInsight,
      Skills.TrainedNature,
      Skills.TrainedReligion,
    ],
  },
})

export const Wizard = Traits.defineTrait('wizard', {
  name: 'Wizard',
  description:
    '**Role:** Controller. You exert control through magical effects that cover large areas—sometimes hindering foes, sometimes consuming them with fire.\n\n**Power Source:** Arcane. You channel arcane forces through extensive study, hidden knowledge, and intricate preparation. To you, magic is an art form, an expressive and powerful method by which you seek to control the world around you.\n\n**Key Abilities:** [Intelligence](characteristic:intelligence), [Wisdom](characteristic:wisdom), [Dexterity](characteristic:dexterity)\n\n**Armor Proficiencies:** [Cloth](ability:armor/cloth)\n\n**Weapon Proficiencies:** Dagger, quarterstaff\n\n**Implements:** Orbs, staffs, wands\n\n**Bonus to Defense:** +2 [Will](characteristic:will)\n\n**Hit Points at 1st Level:** 10 + [Constitution](characteristic:constitution) score\n\n**Hit Points per Level Gained:** 4\n\n**Healing Surges per Day:** 6 + Constitution modifier\n\n**Trained Skills:** [Arcana](characteristic:skill/arcana). From the class skills list below, choose three more trained skills at 1st level.\n\n**Class Skills:** Arcana (Int), [Diplomacy](characteristic:skill/diplomacy) (Cha), [Dungeoneering](characteristic:skill/dungeoneering) (Wis), [History](characteristic:skill/history) (Int), [Insight](characteristic:skill/insight) (Wis), [Nature](characteristic:skill/nature) (Int), [Religion](characteristic:skill/religion) (Int)\n\n**Build Options:** [Control wizard](content:classes/control-wizard), [war wizard](content:classes/war-wizard)\n\n**Class Features:** [Arcane Implement Mastery](content:classes/arcane-implement-mastery), [cantrips](trait:wizard/cantrips), [Ritual Casting](trait:wizard/ritual-casting), [spellbook](trait:wizard/spellbook)',
  tags: [Class],
  effects: [
    // 10 at 1st level and 4 per level after: 6 + 4 per level
    CharacterEffects.modifyCharacteristic(
      HitPoints,
      Attributes.modifier(Patches.sum(NumericExpressions.sum([6, NumericExpressions.multiply([CharacterValues.Level, 4])])))
    ),
    CharacterEffects.modifyCharacteristic(HealingSurges, Attributes.modifier(Patches.sum(6))),
    CharacterEffects.modifyCharacteristic(Will, Attributes.modifier(Patches.sum(2))),
    CharacterEffects.gainTrait(Skills.TrainedArcana),
    CharacterEffects.gainCharacterOption(SelectSkill),
    CharacterEffects.gainCharacterOption(SelectSkill),
    CharacterEffects.gainCharacterOption(SelectSkill),
    CharacterEffects.gainCharacterOption(SelectImplementMastery),
    CharacterEffects.gainTrait(WizardCantrips),
    CharacterEffects.gainTrait(RitualCasting),
    CharacterEffects.gainTrait(Spellbook),
    CharacterEffects.gainCharacterOption(Powers.SelectAtWillAttack),
    CharacterEffects.gainCharacterOption(Powers.SelectAtWillAttack),
    CharacterEffects.gainCharacterOption(Powers.SelectEncounterAttack1),
    CharacterEffects.gainCharacterOption(Powers.SelectSpellbookDaily1),
    CharacterEffects.gainCharacterOption(Powers.SelectSpellbookDaily1),
    CharacterEffects.gainLoadoutSlot(PreparedDailySpell1Loadout),
    // A human gains training in one additional skill from its class skill list
    CharacterEffects.conditional(Traits.traitPrerequisite(Human), [CharacterEffects.gainCharacterOption(SelectSkill)]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 2), [
      CharacterEffects.gainCharacterOption(Powers.SelectSpellbookUtility2),
      CharacterEffects.gainCharacterOption(Powers.SelectSpellbookUtility2),
      CharacterEffects.gainLoadoutSlot(PreparedUtilitySpell2Loadout),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [
      CharacterEffects.gainCharacterOption(Powers.SelectEncounterAttack3),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [
      CharacterEffects.gainCharacterOption(Powers.SelectSpellbookDaily5),
      CharacterEffects.gainCharacterOption(Powers.SelectSpellbookDaily5),
      CharacterEffects.gainLoadoutSlot(PreparedDailySpell5Loadout),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 6), [
      CharacterEffects.gainCharacterOption(Powers.SelectSpellbookUtility6),
      CharacterEffects.gainCharacterOption(Powers.SelectSpellbookUtility6),
      CharacterEffects.gainLoadoutSlot(PreparedUtilitySpell6Loadout),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 7), [
      CharacterEffects.gainCharacterOption(Powers.SelectEncounterAttack7),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 9), [
      CharacterEffects.gainCharacterOption(Powers.SelectSpellbookDaily9),
      CharacterEffects.gainCharacterOption(Powers.SelectSpellbookDaily9),
      CharacterEffects.gainLoadoutSlot(PreparedDailySpell9Loadout),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 10), [
      CharacterEffects.gainCharacterOption(Powers.SelectSpellbookUtility10),
      CharacterEffects.gainCharacterOption(Powers.SelectSpellbookUtility10),
      CharacterEffects.gainLoadoutSlot(PreparedUtilitySpell10Loadout),
    ]),
  ],
})

export const ExpandedSpellbook = Traits.defineTrait('feat/expanded-spellbook', {
  name: 'Expanded Spellbook',
  description:
    "**Prerequisites:** Wis 13, wizard\n\nChoose one daily wizard attack spell of every level you know. Add this spell to your spellbook.\n\nEach time you gain a new level of daily wizard attack spells, you learn one extra spell of that level (in other words, add three spells to your spellbook instead of only two).\n\nThis feat doesn't change the number of daily attack spells you can prepare each day.",
  tags: [Feat],
  prerequisites: [Expressions.greaterThanOrEqual(Wisdom.variable, 13), Traits.traitPrerequisite(Wizard)],
  effects: [
    CharacterEffects.gainCharacterOption(Powers.SelectSpellbookDaily1),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [
      CharacterEffects.gainCharacterOption(Powers.SelectSpellbookDaily5),
    ]),
    CharacterEffects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 9), [
      CharacterEffects.gainCharacterOption(Powers.SelectSpellbookDaily9),
    ]),
  ],
})

export const AllWizardTraits = [Wizard, OrbOfImposition, StaffOfDefense, WandOfAccuracy, WizardCantrips, RitualCasting, Spellbook, ExpandedSpellbook]
