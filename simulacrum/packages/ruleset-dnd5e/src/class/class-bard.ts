import { Abilities, Tags, Attributes, CharacterEffects, Traits } from '@simulacrum/ruleset'
import * as SavingThrowProficiencies from '@simulacrum/ruleset-dnd5e/tag/saving-throw-proficiency'
import { Bard, Class } from '@simulacrum/ruleset-dnd5e/tag'
import * as SkillProficiencies from '@simulacrum/ruleset-dnd5e/tag/skill-proficiency'
import * as SkillExpertise from '@simulacrum/ruleset-dnd5e/tag/skill-expertise'
import * as Spells from '@simulacrum/ruleset-dnd5e/tag/spell'
import { SelectFeat } from '@simulacrum/ruleset-dnd5e/tag/feat'
import { CharacterOptions } from '@simulacrum/ruleset'
import { PlayerCharacteristics } from '@simulacrum/ruleset-dnd5e/characteristic'
import * as ActionTypes from '@simulacrum/ruleset-dnd5e/action-type'
import { ResourcePool } from '@simulacrum/ruleset/resource-pool'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import { NumericExpressions } from '@bessemer/cornerstone/expression'
import { Patches } from '@bessemer/cornerstone'

// FUTURE spell slots and musical instrument proficiencies aren't modelled yet

export const SelectSkillProficiency = CharacterOptions.selectTraitOption('bard/select-skill-proficiency', {
  name: 'Skill Proficiency',
  filter: {
    tags: [SkillProficiencies.SkillProficiency],
  },
})

export const SelectExpertise = CharacterOptions.selectTraitOption('bard/select-expertise', {
  name: 'Skill Expertise',
  filter: {
    tags: [SkillExpertise.SkillExpertise],
  },
})

export const SelectCantrip = CharacterOptions.selectAbilityOption('bard/select-cantrip', {
  name: 'Cantrips',
  filter: { tags: [Bard, Spells.Cantrip] },
})

export const SelectSpellUpToRank1 = CharacterOptions.selectAbilityOption('bard/select-spell-up-to-rank-1', {
  name: 'Prepared Spells',
  filter: {
    tags: [Bard, [Spells.Rank1]],
  },
})

export const SelectSpellUpToRank2 = CharacterOptions.selectAbilityOption('bard/select-spell-up-to-rank-2', {
  name: 'Prepared Spells',
  filter: {
    tags: [Bard, [Spells.Rank1, Spells.Rank2]],
  },
})

export const SelectSpellUpToRank3 = CharacterOptions.selectAbilityOption('bard/select-spell-up-to-rank-3', {
  name: 'Prepared Spells',
  filter: {
    tags: [Bard, [Spells.Rank1, Spells.Rank2, Spells.Rank3]],
  },
})

const CharismaModifierUses = NumericExpressions.max([PlayerCharacteristics.CharismaModifier.variable, 1])

export const Level1 = Traits.defineTrait('bard/level-1', {
  name: 'Bard',
  description:
    'A performer whose words, music, and dance carry **magic**, inspiring allies and casting spells with **Charisma**.\n\n**Saving Throws:** Dexterity and Charisma. **Armor:** Light armor. **Weapons:** Simple weapons. **Tools:** three Musical Instruments of your choice.',
  tags: [Class],
  effects: [
    CharacterEffects.gainTrait(SavingThrowProficiencies.Dexterity),
    CharacterEffects.gainTrait(SavingThrowProficiencies.Charisma),
    CharacterEffects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(8))),
    CharacterEffects.gainCharacterOption(SelectSkillProficiency),
    CharacterEffects.gainCharacterOption(SelectSkillProficiency),
    CharacterEffects.gainCharacterOption(SelectSkillProficiency),
    CharacterEffects.gainCharacterOption(SelectCantrip),
    CharacterEffects.gainCharacterOption(SelectCantrip),
    CharacterEffects.gainCharacterOption(SelectSpellUpToRank1),
    CharacterEffects.gainCharacterOption(SelectSpellUpToRank1),
    CharacterEffects.gainCharacterOption(SelectSpellUpToRank1),
    CharacterEffects.gainCharacterOption(SelectSpellUpToRank1),
  ],
})

export const BardicInspiration = Abilities.defineAbility('bard/bardic-inspiration', {
  name: 'Bardic Inspiration',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  effects: [
    CharacterEffects.descriptive(
      'As a **Bonus Action**, you inspire another creature within 60 feet that can see or hear you, giving it one of your Bardic Inspiration dice (a **d6**). A creature can only have one at a time.'
    ),
    CharacterEffects.descriptive(
      'Once within the next hour, when the creature fails a D20 Test, it can roll the die and add the result, possibly turning the failure into a success.'
    ),
    CharacterEffects.descriptive(
      'You can do this a number of times equal to your Charisma modifier (minimum once), regaining all uses on a Long Rest. The die becomes a d8 at Bard level 5, a d10 at level 10, and a d12 at level 15.'
    ),
  ],
  resource: { size: CharismaModifierUses, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
  actions: [{ name: 'Use Bardic Inspiration', action: ActionTypes.BonusAction }],
})

export const Spellcasting = Abilities.defineAbility('bard/spellcasting', {
  name: 'Spellcasting',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  effects: [
    CharacterEffects.descriptive(
      'You cast Bard spells using **Charisma**, with a Musical Instrument as your focus. You know two cantrips, gaining a third at level 4, and can swap one for another Bard cantrip when you gain a level.'
    ),
    CharacterEffects.descriptive(
      'You prepare a list of Bard spells you can cast with your spell slots: 4 at level 1, rising to 9 by level 5. When you gain a level, you can swap one of them for another Bard spell you have slots for. You regain all spell slots on a Long Rest.'
    ),
  ],
})

export const JackOfAllTrades = Traits.defineTrait('bard/jack-of-all-trades', {
  name: 'Jack of All Trades',
  description:
    "You can add **half your Proficiency Bonus** (rounded down) to any ability check that uses a skill you aren't proficient in and doesn't already use your Proficiency Bonus.",
  effects: [],
})

export const Level2 = Traits.defineTrait('bard/level-2', {
  name: 'Bard (2)',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  tags: [Class],
  effects: [
    CharacterEffects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(5))),
    CharacterEffects.gainCharacterOption(SelectExpertise),
    CharacterEffects.gainCharacterOption(SelectExpertise),
    CharacterEffects.gainTrait(JackOfAllTrades),
    CharacterEffects.gainCharacterOption(SelectSpellUpToRank1),
  ],
})

export const BardSubclass = Tags.defineTraitTag('bard/subclass', { name: 'Bard Subclass' })
export const SelectBardSubclass = CharacterOptions.selectTraitOption('bard/select-subclass', {
  name: 'Bard Subclass',
  filter: { tags: [BardSubclass] },
})

export const Level3 = Traits.defineTrait('bard/level-3', {
  name: 'Bard (3)',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  tags: [Class],
  effects: [
    CharacterEffects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(5))),
    CharacterEffects.gainCharacterOption(SelectBardSubclass),
    CharacterEffects.gainCharacterOption(SelectSpellUpToRank2),
  ],
})

export const DazzlingFootwork = Traits.defineTrait('bard/dazzling-footwork', {
  name: 'Dazzling Footwork',
  description:
    "While you aren't wearing armor or using a Shield:\n\n**Dance Virtuoso:** you have Advantage on Charisma (Performance) checks that involve dancing.\n\n**Unarmored Defense:** your base AC equals 10 + your Dexterity modifier + your Charisma modifier.\n\n**Agile Strikes:** when you spend a use of Bardic Inspiration as part of an action, Bonus Action, or Reaction, you can make one Unarmed Strike as part of it.\n\n**Bardic Damage:** your Unarmed Strikes can use Dexterity to hit, and can deal Bludgeoning damage equal to a roll of your Bardic Inspiration die + your Dexterity modifier, without spending the die.",
  effects: [],
})

export const CollegeOfDance = Traits.defineTrait('bard/college-of-dance', {
  name: 'College of Dance',
  description: 'Bards who express the Words of Creation through **movement**, in harmony with a whirling cosmos of agility and grace.',
  tags: [BardSubclass],
  effects: [CharacterEffects.gainTrait(DazzlingFootwork)],
})

export const BeguilingMagic = Traits.defineTrait('bard/beguiling-magic', {
  name: 'Beguiling Magic',
  description:
    "You always have **Charm Person** and **Mirror Image** prepared.\n\nRight after you cast an Enchantment or Illusion spell with a spell slot, you can force a creature you can see within 60 feet to make a Wisdom save against your spell save DC. On a failure it's Charmed or Frightened (your choice) for 1 minute, repeating the save at the end of each of its turns. You can do this once per Long Rest, or regain the use by spending a use of Bardic Inspiration.",
  effects: [CharacterEffects.gainAbility(Spells.CharmPerson), CharacterEffects.gainAbility(Spells.MirrorImage)],
})

export const CollegeOfGlamour = Traits.defineTrait('bard/college-of-glamour', {
  name: 'College of Glamour',
  description: 'Bards who weave the **beguiling magic of the Feywild** into their performances, stirring wonder and dread alike.',
  tags: [BardSubclass],
  effects: [CharacterEffects.gainTrait(BeguilingMagic)],
})

export const MantleOfInspiration = Abilities.defineAbility('bard/mantle-of-inspiration', {
  name: 'Mantle of Inspiration',
  prerequisites: [Traits.traitPrerequisite(CollegeOfGlamour)],
  effects: [
    CharacterEffects.descriptive(
      'As a **Bonus Action**, spend a use of Bardic Inspiration and roll the die. Up to a number of other creatures within 60 feet equal to your Charisma modifier (minimum one) each gain Temporary Hit Points equal to **twice the roll**, and can use their Reaction to move up to their Speed without provoking Opportunity Attacks.'
    ),
  ],
  actions: [{ name: 'Use Mantle of Inspiration', action: ActionTypes.BonusAction, costs: [{ cost: 1, resource: BardicInspiration.resource }] }],
})

export const BonusProficiencies = Traits.defineTrait('bard/bonus-proficiencies', {
  name: 'Bonus Proficiencies',
  description: 'You gain proficiency in **three skills** of your choice.',
  effects: [
    CharacterEffects.gainCharacterOption(SelectSkillProficiency),
    CharacterEffects.gainCharacterOption(SelectSkillProficiency),
    CharacterEffects.gainCharacterOption(SelectSkillProficiency),
  ],
})

export const CollegeOfLore = Traits.defineTrait('bard/college-of-lore', {
  name: 'College of Lore',
  description: 'Bards who **collect spells and secrets** from every source, and use their wit to expose lies and deflate the self-important.',
  tags: [BardSubclass],
  effects: [CharacterEffects.gainTrait(BonusProficiencies)],
})

export const CuttingWords = Abilities.defineAbility('bard/cutting-words', {
  name: 'Cutting Words',
  prerequisites: [Traits.traitPrerequisite(CollegeOfLore)],
  effects: [
    CharacterEffects.descriptive(
      "When a creature you can see within 60 feet makes a damage roll or succeeds on an ability check or attack roll, you can use your **Reaction** to spend a use of Bardic Inspiration. Roll the die and subtract it from the creature's roll, possibly reducing the damage or turning the success into a failure."
    ),
  ],
  actions: [{ name: 'Use Cutting Words', action: ActionTypes.Reaction, costs: [{ cost: 1, resource: BardicInspiration.resource }] }],
})

export const CombatInspiration = Traits.defineTrait('bard/combat-inspiration', {
  name: 'Combat Inspiration',
  description:
    'A creature with one of your Bardic Inspiration dice can also use it for:\n\n**Defense:** when hit by an attack, it can use its Reaction to roll the die and add it to its AC against that attack, possibly causing it to miss.\n\n**Offense:** right after it hits with an attack, it can roll the die and add it to the damage.',
  effects: [],
})

export const MartialTraining = Traits.defineTrait('bard/martial-training', {
  name: 'Martial Training',
  description:
    'You gain proficiency with **Martial weapons** and training with **Medium armor** and **Shields**. You can use a Simple or Martial weapon as a Spellcasting Focus for your Bard spells.',
  effects: [],
})

export const CollegeOfValor = Traits.defineTrait('bard/college-of-valor', {
  name: 'College of Valor',
  description: 'Bards who **sing the deeds of ancient heroes**, keeping their memory alive and inspiring new heroes on the battlefield.',
  tags: [BardSubclass],
  effects: [CharacterEffects.gainTrait(CombatInspiration), CharacterEffects.gainTrait(MartialTraining)],
})

export const Level4 = Traits.defineTrait('bard/level-4', {
  name: 'Bard (4)',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  tags: [Class],
  effects: [
    CharacterEffects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(5))),
    // Ability Score Improvement
    CharacterEffects.gainCharacterOption(SelectFeat),
    CharacterEffects.gainCharacterOption(SelectCantrip),
    CharacterEffects.gainCharacterOption(SelectSpellUpToRank2),
  ],
})

export const FontOfInspiration = Traits.defineTrait('bard/font-of-inspiration', {
  name: 'Font of Inspiration',
  description:
    'You regain all uses of **Bardic Inspiration** when you finish a Short or Long Rest. You can also spend a spell slot (no action required) to regain one use.',
  effects: [
    CharacterEffects.modifyResourcePool(
      BardicInspiration.resource,
      Attributes.modifier(
        Patches.patch<ResourcePool>({ refresh: Patches.concatenate([{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }]) })
      )
    ),
  ],
})

export const Level5 = Traits.defineTrait('bard/level-5', {
  name: 'Bard (5)',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  tags: [Class],
  effects: [
    CharacterEffects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(5))),
    CharacterEffects.gainTrait(FontOfInspiration),
    CharacterEffects.gainCharacterOption(SelectSpellUpToRank3),
    CharacterEffects.gainCharacterOption(SelectSpellUpToRank3),
  ],
})
