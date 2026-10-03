import { Abilities, Archetypes, Attributes, Effects, Traits } from '@simulacrum/common'
import * as SavingThrowProficiencies from '@simulacrum/rulesets/dnd-5e/archetype/saving-throw-proficiency'
import { Bard, Class } from '@simulacrum/rulesets/dnd-5e/archetype'
import * as SkillProficiencies from '@simulacrum/rulesets/dnd-5e/archetype/skill-proficiency'
import * as SkillExpertise from '@simulacrum/rulesets/dnd-5e/archetype/skill-expertise'
import * as Spells from '@simulacrum/rulesets/dnd-5e/archetype/spell'
import { SelectFeat } from '@simulacrum/rulesets/dnd-5e/archetype/feat'
import { CharacterOptions } from '@simulacrum/common/character'
import { PlayerCharacteristics } from '@simulacrum/rulesets/dnd-5e/characteristic'
import { ActionType } from '@simulacrum/common/ability'
import { ResourcePool } from '@simulacrum/common/resource-pool'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/common/types'
import { NumericExpressions } from '@bessemer/cornerstone/expression'
import { Patches } from '@bessemer/cornerstone'

// FUTURE spell slots and musical instrument proficiencies aren't modelled yet

export const SelectSkillProficiency = CharacterOptions.selectTraitOption('bard/select-skill-proficiency', {
  archetypes: [SkillProficiencies.SkillProficiency],
})

export const SelectExpertise = CharacterOptions.selectTraitOption('bard/select-expertise', { archetypes: [SkillExpertise.SkillExpertise] })

export const SelectCantrip = CharacterOptions.selectAbilityOption('bard/select-cantrip', { archetypes: [Bard, Spells.Cantrip] }, 'Cantrips')

export const SelectSpellUpToRank1 = CharacterOptions.selectAbilityOption(
  'bard/select-spell-up-to-rank-1',
  { archetypes: [Bard, [Spells.Rank1]] },
  'Prepared Spells'
)

export const SelectSpellUpToRank2 = CharacterOptions.selectAbilityOption(
  'bard/select-spell-up-to-rank-2',
  { archetypes: [Bard, [Spells.Rank1, Spells.Rank2]] },
  'Prepared Spells'
)

export const SelectSpellUpToRank3 = CharacterOptions.selectAbilityOption(
  'bard/select-spell-up-to-rank-3',
  { archetypes: [Bard, [Spells.Rank1, Spells.Rank2, Spells.Rank3]] },
  'Prepared Spells'
)

const CharismaModifierUses = NumericExpressions.max([PlayerCharacteristics.CharismaModifier.variable, 1])

export const BardicInspiration = Abilities.defineAbility('bard/bardic-inspiration', {
  name: 'Bardic Inspiration',
  effects: [
    Effects.descriptive(
      '<p>As a <strong>Bonus Action</strong>, you inspire another creature within 60 feet that can see or hear you, giving it one of your Bardic Inspiration dice (a <strong>d6</strong>). A creature can only have one at a time.</p>'
    ),
    Effects.descriptive(
      '<p>Once within the next hour, when the creature fails a D20 Test, it can roll the die and add the result, possibly turning the failure into a success.</p>'
    ),
    Effects.descriptive(
      '<p>You can do this a number of times equal to your Charisma modifier (minimum once), regaining all uses on a Long Rest. The die becomes a d8 at Bard level 5, a d10 at level 10, and a d12 at level 15.</p>'
    ),
  ],
  resource: { size: CharismaModifierUses, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
  actions: [{ name: 'Use Bardic Inspiration', action: ActionType.Bonus }],
})

export const Spellcasting = Abilities.defineAbility('bard/spellcasting', {
  name: 'Spellcasting',
  effects: [
    Effects.descriptive(
      '<p>You cast Bard spells using <strong>Charisma</strong>, with a Musical Instrument as your focus. You know two cantrips, gaining a third at level 4, and can swap one for another Bard cantrip when you gain a level.</p>'
    ),
    Effects.descriptive(
      '<p>You prepare a list of Bard spells you can cast with your spell slots: 4 at level 1, rising to 9 by level 5. When you gain a level, you can swap one of them for another Bard spell you have slots for. You regain all spell slots on a Long Rest.</p>'
    ),
  ],
})

export const Level1 = Traits.defineTrait('bard/level-1', {
  name: 'Bard',
  description:
    '<p>A performer whose words, music, and dance carry <strong>magic</strong>, inspiring allies and casting spells with <strong>Charisma</strong>.</p><p><strong>Saving Throws:</strong> Dexterity and Charisma. <strong>Armor:</strong> Light armor. <strong>Weapons:</strong> Simple weapons. <strong>Tools:</strong> three Musical Instruments of your choice.</p>',
  archetypes: [Class],
  effects: [
    Effects.gainTrait(SavingThrowProficiencies.Dexterity),
    Effects.gainTrait(SavingThrowProficiencies.Charisma),
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(8))),
    Effects.gainCharacterOption(SelectSkillProficiency),
    Effects.gainCharacterOption(SelectSkillProficiency),
    Effects.gainCharacterOption(SelectSkillProficiency),
    Effects.gainCharacterOption(SelectCantrip),
    Effects.gainCharacterOption(SelectCantrip),
    Effects.gainCharacterOption(SelectSpellUpToRank1),
    Effects.gainCharacterOption(SelectSpellUpToRank1),
    Effects.gainCharacterOption(SelectSpellUpToRank1),
    Effects.gainCharacterOption(SelectSpellUpToRank1),
    Effects.gainAbility(BardicInspiration),
    Effects.gainAbility(Spellcasting),
  ],
})

export const JackOfAllTrades = Traits.defineTrait('bard/jack-of-all-trades', {
  name: 'Jack of All Trades',
  description:
    "<p>You can add <strong>half your Proficiency Bonus</strong> (rounded down) to any ability check that uses a skill you aren't proficient in and doesn't already use your Proficiency Bonus.</p>",
  effects: [],
})

export const Level2 = Traits.defineTrait('bard/level-2', {
  name: 'Bard (2)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(5))),
    Effects.gainCharacterOption(SelectExpertise),
    Effects.gainCharacterOption(SelectExpertise),
    Effects.gainTrait(JackOfAllTrades),
    Effects.gainCharacterOption(SelectSpellUpToRank1),
  ],
})

export const BardSubclass = Archetypes.defineArchetype('bard/subclass', { name: 'Bard Subclass' })
export const SelectBardSubclass = CharacterOptions.selectTraitOption('bard/select-subclass', { archetypes: [BardSubclass] })

export const Level3 = Traits.defineTrait('bard/level-3', {
  name: 'Bard (3)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(5))),
    Effects.gainCharacterOption(SelectBardSubclass),
    Effects.gainCharacterOption(SelectSpellUpToRank2),
  ],
})

export const DazzlingFootwork = Traits.defineTrait('bard/dazzling-footwork', {
  name: 'Dazzling Footwork',
  description:
    "<p>While you aren't wearing armor or using a Shield:</p><p><strong>Dance Virtuoso:</strong> you have Advantage on Charisma (Performance) checks that involve dancing.</p><p><strong>Unarmored Defense:</strong> your base AC equals 10 + your Dexterity modifier + your Charisma modifier.</p><p><strong>Agile Strikes:</strong> when you spend a use of Bardic Inspiration as part of an action, Bonus Action, or Reaction, you can make one Unarmed Strike as part of it.</p><p><strong>Bardic Damage:</strong> your Unarmed Strikes can use Dexterity to hit, and can deal Bludgeoning damage equal to a roll of your Bardic Inspiration die + your Dexterity modifier, without spending the die.</p>",
  effects: [],
})

export const CollegeOfDance = Traits.defineTrait('bard/college-of-dance', {
  name: 'College of Dance',
  description:
    '<p>Bards who express the Words of Creation through <strong>movement</strong>, in harmony with a whirling cosmos of agility and grace.</p>',
  archetypes: [BardSubclass],
  effects: [Effects.gainTrait(DazzlingFootwork)],
})

export const BeguilingMagic = Traits.defineTrait('bard/beguiling-magic', {
  name: 'Beguiling Magic',
  description:
    "<p>You always have <strong>Charm Person</strong> and <strong>Mirror Image</strong> prepared.</p><p>Right after you cast an Enchantment or Illusion spell with a spell slot, you can force a creature you can see within 60 feet to make a Wisdom save against your spell save DC. On a failure it's Charmed or Frightened (your choice) for 1 minute, repeating the save at the end of each of its turns. You can do this once per Long Rest, or regain the use by spending a use of Bardic Inspiration.</p>",
  effects: [Effects.gainAbility(Spells.CharmPerson), Effects.gainAbility(Spells.MirrorImage)],
})

export const MantleOfInspiration = Abilities.defineAbility('bard/mantle-of-inspiration', {
  name: 'Mantle of Inspiration',
  effects: [
    Effects.descriptive(
      '<p>As a <strong>Bonus Action</strong>, spend a use of Bardic Inspiration and roll the die. Up to a number of other creatures within 60 feet equal to your Charisma modifier (minimum one) each gain Temporary Hit Points equal to <strong>twice the roll</strong>, and can use their Reaction to move up to their Speed without provoking Opportunity Attacks.</p>'
    ),
  ],
  actions: [{ name: 'Use Mantle of Inspiration', action: ActionType.Bonus, costs: [{ cost: 1, resource: BardicInspiration.resource }] }],
})

export const CollegeOfGlamour = Traits.defineTrait('bard/college-of-glamour', {
  name: 'College of Glamour',
  description: '<p>Bards who weave the <strong>beguiling magic of the Feywild</strong> into their performances, stirring wonder and dread alike.</p>',
  archetypes: [BardSubclass],
  effects: [Effects.gainTrait(BeguilingMagic), Effects.gainAbility(MantleOfInspiration)],
})

export const BonusProficiencies = Traits.defineTrait('bard/bonus-proficiencies', {
  name: 'Bonus Proficiencies',
  description: '<p>You gain proficiency in <strong>three skills</strong> of your choice.</p>',
  effects: [
    Effects.gainCharacterOption(SelectSkillProficiency),
    Effects.gainCharacterOption(SelectSkillProficiency),
    Effects.gainCharacterOption(SelectSkillProficiency),
  ],
})

export const CuttingWords = Abilities.defineAbility('bard/cutting-words', {
  name: 'Cutting Words',
  effects: [
    Effects.descriptive(
      "<p>When a creature you can see within 60 feet makes a damage roll or succeeds on an ability check or attack roll, you can use your <strong>Reaction</strong> to spend a use of Bardic Inspiration. Roll the die and subtract it from the creature's roll, possibly reducing the damage or turning the success into a failure.</p>"
    ),
  ],
  actions: [{ name: 'Use Cutting Words', action: ActionType.Reaction, costs: [{ cost: 1, resource: BardicInspiration.resource }] }],
})

export const CollegeOfLore = Traits.defineTrait('bard/college-of-lore', {
  name: 'College of Lore',
  description:
    '<p>Bards who <strong>collect spells and secrets</strong> from every source, and use their wit to expose lies and deflate the self-important.</p>',
  archetypes: [BardSubclass],
  effects: [Effects.gainTrait(BonusProficiencies), Effects.gainAbility(CuttingWords)],
})

export const CombatInspiration = Traits.defineTrait('bard/combat-inspiration', {
  name: 'Combat Inspiration',
  description:
    '<p>A creature with one of your Bardic Inspiration dice can also use it for:</p><p><strong>Defense:</strong> when hit by an attack, it can use its Reaction to roll the die and add it to its AC against that attack, possibly causing it to miss.</p><p><strong>Offense:</strong> right after it hits with an attack, it can roll the die and add it to the damage.</p>',
  effects: [],
})

export const MartialTraining = Traits.defineTrait('bard/martial-training', {
  name: 'Martial Training',
  description:
    '<p>You gain proficiency with <strong>Martial weapons</strong> and training with <strong>Medium armor</strong> and <strong>Shields</strong>. You can use a Simple or Martial weapon as a Spellcasting Focus for your Bard spells.</p>',
  effects: [],
})

export const CollegeOfValor = Traits.defineTrait('bard/college-of-valor', {
  name: 'College of Valor',
  description:
    '<p>Bards who <strong>sing the deeds of ancient heroes</strong>, keeping their memory alive and inspiring new heroes on the battlefield.</p>',
  archetypes: [BardSubclass],
  effects: [Effects.gainTrait(CombatInspiration), Effects.gainTrait(MartialTraining)],
})

export const Level4 = Traits.defineTrait('bard/level-4', {
  name: 'Bard (4)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(5))),
    // Ability Score Improvement
    Effects.gainCharacterOption(SelectFeat),
    Effects.gainCharacterOption(SelectCantrip),
    Effects.gainCharacterOption(SelectSpellUpToRank2),
  ],
})

export const FontOfInspiration = Traits.defineTrait('bard/font-of-inspiration', {
  name: 'Font of Inspiration',
  description:
    '<p>You regain all uses of <strong>Bardic Inspiration</strong> when you finish a Short or Long Rest. You can also spend a spell slot (no action required) to regain one use.</p>',
  effects: [
    Effects.modifyResourcePool(
      BardicInspiration.resource,
      Attributes.modifier(
        Patches.patch<ResourcePool>({ refresh: Patches.concatenate([{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }]) })
      )
    ),
  ],
})

export const Level5 = Traits.defineTrait('bard/level-5', {
  name: 'Bard (5)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(5))),
    Effects.gainTrait(FontOfInspiration),
    Effects.gainCharacterOption(SelectSpellUpToRank3),
    Effects.gainCharacterOption(SelectSpellUpToRank3),
  ],
})
