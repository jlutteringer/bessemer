import { Attributes, CharacterOptions, CharacterValues, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions, NumericExpressions } from '@bessemer/cornerstone/expression'
import { Class, ClassFeature, Feat } from '@simulacrum/ruleset-dnd4e/archetype'
import { HealingSurges, HitPoints, Will, Wisdom } from '@simulacrum/ruleset-dnd4e/characteristic'
import * as Skills from '@simulacrum/ruleset-dnd4e/skill'
import * as Powers from '@simulacrum/ruleset-dnd4e/power'
import { PreparedDailySpell1Loadout, PreparedDailySpell5Loadout, PreparedUtilitySpell2Loadout } from '@simulacrum/ruleset-dnd4e/loadout'
import { RitualCaster } from '@simulacrum/ruleset-dnd4e/feat'
import { Human } from '@simulacrum/ruleset-dnd4e/race'

export const OrbOfImposition = Traits.defineTrait('wizard/implement-mastery/orb-of-imposition', {
  name: 'Orb of Imposition',
  description:
    'Once per encounter as a free action, you can use your orb to gain one of the following two effects.\n\nYou can designate one creature you have cast a wizard spell upon that has an effect that lasts until the subject succeeds on a saving throw. That creature takes a penalty to its saving throws against that effect equal to your Wisdom modifier.\n\nAlternatively, you can choose to extend the duration of an effect created by a wizard at-will spell (such as *cloud of daggers* or *ray of frost*) that would otherwise end at the end of your current turn. The effect instead ends at the end of your next turn.\n\nYou must wield an orb to use this ability.',
  archetypes: [ClassFeature],
  effects: [],
})

export const StaffOfDefense = Traits.defineTrait('wizard/implement-mastery/staff-of-defense', {
  name: 'Staff of Defense',
  description:
    'A staff of defense grants you a +1 bonus to AC. In addition, once per encounter as an immediate interrupt, you gain a bonus to defense against one attack equal to your Constitution modifier. You can declare the bonus after the Dungeon Master has already told you the damage total. You must wield your staff to benefit from these features.',
  archetypes: [ClassFeature],
  effects: [],
})

export const WandOfAccuracy = Traits.defineTrait('wizard/implement-mastery/wand-of-accuracy', {
  name: 'Wand of Accuracy',
  description:
    'Once per encounter as a free action, you gain a bonus to a single attack roll equal to your Dexterity modifier. You must wield your wand to benefit from this feature.',
  archetypes: [ClassFeature],
  effects: [],
})

export const SelectImplementMastery = CharacterOptions.selectTraitOption('wizard/select-implement-mastery', {
  name: 'Arcane Implement Mastery',
  description: 'You specialize in the use of one kind of implement to gain additional abilities when you wield it.',
  filter: { specificOptions: [OrbOfImposition, StaffOfDefense, WandOfAccuracy] },
})

// Unlocks the cantrips (see wizard-power.ts)
export const WizardCantrips = Traits.defineTrait('wizard/cantrips', {
  name: 'Cantrips',
  description:
    'Cantrips are minor spells you gain at 1st level. You can use the *ghost sound*, *light*, *mage hand*, and *prestidigitation* cantrips as at-will powers.',
  archetypes: [ClassFeature],
  effects: [],
})

export const RitualCasting = Traits.defineTrait('wizard/ritual-casting', {
  name: 'Ritual Casting',
  description: 'You gain the Ritual Caster feat as a bonus feat, allowing you to use magical rituals.',
  archetypes: [ClassFeature],
  effects: [Effects.gainTrait(RitualCaster)],
})

export const Spellbook = Traits.defineTrait('wizard/spellbook', {
  name: 'Spellbook',
  description:
    "You possess a spellbook, a book full of mystic lore in which you store your rituals and your daily and utility spells.\n\n**Daily and Utility Spells:** You begin knowing two daily spells, one of which you can use on any given day. Each time you gain a level that lets you select a daily spell or a utility spell, choose two different daily spells or utility spells of that level to add to your book. After an extended rest, you can prepare a number of daily and utility spells according to what you can cast per day for your level. You can't prepare the same spell twice.",
  archetypes: [ClassFeature],
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
    '**Controller.** You exert control through magical effects that cover large areas—sometimes hindering foes, sometimes consuming them with fire.\n\n**Power Source:** Arcane · **Key Abilities:** Intelligence, Wisdom, Dexterity\n\n**Armor Proficiencies:** Cloth · **Weapon Proficiencies:** Dagger, quarterstaff · **Implements:** Orbs, staffs, wands\n\n**Bonus to Defense:** +2 Will · **Hit Points:** 10 + Constitution score at 1st level, 4 per level gained · **Healing Surges:** 6 + Constitution modifier',
  archetypes: [Class],
  effects: [
    // 10 at 1st level and 4 per level after: 6 + 4 per level
    Effects.modifyCharacteristic(
      HitPoints,
      Attributes.modifier(Patches.sum(NumericExpressions.sum([6, NumericExpressions.multiply([CharacterValues.Level, 4])])))
    ),
    Effects.modifyCharacteristic(HealingSurges, Attributes.modifier(Patches.sum(6))),
    Effects.modifyCharacteristic(Will, Attributes.modifier(Patches.sum(2))),
    Effects.gainTrait(Skills.TrainedArcana),
    Effects.gainCharacterOption(SelectSkill),
    Effects.gainCharacterOption(SelectSkill),
    Effects.gainCharacterOption(SelectSkill),
    Effects.gainCharacterOption(SelectImplementMastery),
    Effects.gainTrait(WizardCantrips),
    Effects.gainTrait(RitualCasting),
    Effects.gainTrait(Spellbook),
    Effects.gainCharacterOption(Powers.SelectAtWillAttack),
    Effects.gainCharacterOption(Powers.SelectAtWillAttack),
    Effects.gainCharacterOption(Powers.SelectEncounterAttack1),
    Effects.gainCharacterOption(Powers.SelectSpellbookDaily1),
    Effects.gainCharacterOption(Powers.SelectSpellbookDaily1),
    Effects.gainLoadoutSlot(PreparedDailySpell1Loadout),
    // A human gains training in one additional skill from its class skill list
    Effects.conditional(Traits.traitPrerequisite(Human), [Effects.gainCharacterOption(SelectSkill)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 2), [
      Effects.gainCharacterOption(Powers.SelectSpellbookUtility2),
      Effects.gainCharacterOption(Powers.SelectSpellbookUtility2),
      Effects.gainLoadoutSlot(PreparedUtilitySpell2Loadout),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [Effects.gainCharacterOption(Powers.SelectEncounterAttack3)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [
      Effects.gainCharacterOption(Powers.SelectSpellbookDaily5),
      Effects.gainCharacterOption(Powers.SelectSpellbookDaily5),
      Effects.gainLoadoutSlot(PreparedDailySpell5Loadout),
    ]),
  ],
})

export const ExpandedSpellbook = Traits.defineTrait('feat/expanded-spellbook', {
  name: 'Expanded Spellbook',
  description:
    "**Prerequisites:** Wis 13, wizard\n\nChoose one daily wizard attack spell of every level you know. Add this spell to your spellbook.\n\nEach time you gain a new level of daily wizard attack spells, you learn one extra spell of that level (in other words, add three spells to your spellbook instead of only two).\n\nThis feat doesn't change the number of daily attack spells you can prepare each day.",
  archetypes: [Feat],
  prerequisites: [Expressions.greaterThanOrEqual(Wisdom.variable, 13), Traits.traitPrerequisite(Wizard)],
  effects: [
    Effects.gainCharacterOption(Powers.SelectSpellbookDaily1),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [Effects.gainCharacterOption(Powers.SelectSpellbookDaily5)]),
  ],
})

export const AllWizardTraits = [Wizard, OrbOfImposition, StaffOfDefense, WandOfAccuracy, WizardCantrips, RitualCasting, Spellbook, ExpandedSpellbook]
