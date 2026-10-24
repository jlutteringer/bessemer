import { Abilities, Attributes, CharacterOptions, CharacterValues, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions, NumericExpressions } from '@bessemer/cornerstone/expression'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import * as ActionTypes from '@simulacrum/ruleset-dnd4e/action-type'
import { AttackPower, Class, ClassFeature, EncounterPower, UtilityPower } from '@simulacrum/ruleset-dnd4e/archetype'
import { HealingSurges, HitPoints, Will } from '@simulacrum/ruleset-dnd4e/characteristic'
import * as Armor from '@simulacrum/ruleset-dnd4e/armor'
import * as Skills from '@simulacrum/ruleset-dnd4e/skill'
import * as Powers from '@simulacrum/ruleset-dnd4e/power'
import { RitualCaster } from '@simulacrum/ruleset-dnd4e/feat'
import { Human } from '@simulacrum/ruleset-dnd4e/race'
import { ChannelDivinity } from '@simulacrum/ruleset-dnd4e/common'
import { SelectDeity } from '@simulacrum/ruleset-dnd4e/deity'

export const ClericChannelDivinity = Traits.defineTrait('cleric/channel-divinity', {
  name: 'Channel Divinity',
  description:
    'Once per encounter you can invoke divine power, filling yourself with the might of your patron deity. With the divine might you invoke you can wield special powers, such as *turn undead* and *divine fortune*. Some clerics learn other uses for this feature; for instance, the divinity feats in Chapter 6 grant characters with access to the Channel Divinity class feature the ability to use additional special powers.\n\nRegardless of how many different uses for Channel Divinity you know, you can use only one such ability per encounter. The special ability or power you invoke works just like your other powers.',
  archetypes: [ClassFeature],
  effects: [Effects.gainResourcePool(ChannelDivinity)],
})

export const DivineFortune = Abilities.defineAbility('cleric/feature/divine-fortune', {
  name: 'Channel Divinity: Divine Fortune',
  description: '*In the face of peril, you hold true to your faith and receive a special boon.*',
  archetypes: [EncounterPower, UtilityPower],
  prerequisites: [Traits.traitPrerequisite(ClericChannelDivinity)],
  effects: [
    Effects.descriptive(
      '**Cleric Feature**\n\n**Encounter** ✦ Divine\n\n**Free Action** · Personal\n\n**Effect:** You gain a +1 bonus to your next attack roll or saving throw before the end of your next turn.'
    ),
  ],
  actions: [{ name: 'Channel Divinity: Divine Fortune', action: ActionTypes.FreeAction, costs: [{ cost: 1, resource: ChannelDivinity }] }],
})

export const TurnUndead = Abilities.defineAbility('cleric/feature/turn-undead', {
  name: 'Channel Divinity: Turn Undead',
  description: '*You sear undead foes, push them back, and root them in place.*',
  archetypes: [EncounterPower, AttackPower],
  prerequisites: [Traits.traitPrerequisite(ClericChannelDivinity)],
  effects: [
    Effects.descriptive(
      '**Cleric Feature**\n\n**Encounter** ✦ Divine, Implement, Radiant\n\n**Standard Action** · Close burst 2 (5 at 11th level, 8 at 21st level)\n\n**Target:** Each undead creature in burst\n\n**Attack:** Wisdom vs. Will\n\n**Hit:** 1d10 + Wisdom modifier radiant damage, and you push the target a number of squares equal to 3 + your Charisma modifier. The target is immobilized until the end of your next turn.\n\nIncrease damage to 2d10 + Wisdom modifier at 5th level, 3d10 + Wisdom modifier at 11th level, 4d10 + Wisdom modifier at 15th level, 5d10 + Wisdom modifier at 21st level, and 6d10 + Wisdom modifier at 25th level.\n\n**Miss:** Half damage, and the target is not pushed or immobilized.'
    ),
  ],
  actions: [{ name: 'Channel Divinity: Turn Undead', action: ActionTypes.StandardAction, costs: [{ cost: 1, resource: ChannelDivinity }] }],
})

export const HealersLore = Traits.defineTrait('cleric/healers-lore', {
  name: "Healer's Lore",
  description:
    'Your study of healing allows you to make the most of your healing prayers. When you grant healing with one of your cleric powers that has the healing keyword, add your Wisdom modifier to the hit points the recipient regains.',
  archetypes: [ClassFeature],
  effects: [],
})

export const HealingWordFeature = Traits.defineTrait('cleric/healing-word', {
  name: 'Healing Word',
  description: 'Using the *healing word* power, clerics can grant their comrades additional resilience with nothing more than a short prayer.',
  archetypes: [ClassFeature],
  effects: [],
})

export const HealingWord = Abilities.defineAbility('cleric/feature/healing-word', {
  name: 'Healing Word',
  description: '*You whisper a brief prayer as divine light washes over your target, helping to mend its wounds.*',
  archetypes: [EncounterPower, UtilityPower],
  prerequisites: [Traits.traitPrerequisite(HealingWordFeature)],
  effects: [
    Effects.descriptive(
      '**Cleric Feature**\n\n**Encounter (Special)** ✦ Divine, Healing\n\n**Minor Action** · Close burst 5 (10 at 11th level, 15 at 21st level)\n\n**Special:** You can use this power twice per encounter, but only once per round. At 16th level, you can use this power three times per encounter.\n\n**Target:** You or one ally\n\n**Effect:** The target can spend a healing surge and regain an additional 1d6 hit points.\n\nIncrease the amount of additional hit points regained to 2d6 at 6th level, 3d6 at 11th level, 4d6 at 16th level, 5d6 at 21st level, and 6d6 at 26th level.'
    ),
  ],
  actions: [{ name: 'Healing Word', action: ActionTypes.MinorAction }],
  resource: { size: 2, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const RitualCasting = Traits.defineTrait('cleric/ritual-casting', {
  name: 'Ritual Casting',
  description:
    'You gain the Ritual Caster feat (page 200) as a bonus feat, allowing you to use magical rituals (see Chapter 10). You possess a ritual book, and it contains two rituals you have mastered: the Gentle Repose ritual and one other 1st-level ritual of your choice.',
  archetypes: [ClassFeature],
  effects: [Effects.gainTrait(RitualCaster)],
})

export const SelectSkill = CharacterOptions.selectTraitOption('cleric/select-skill', {
  name: 'Trained Skill',
  filter: {
    specificOptions: [
      Skills.TrainedArcana,
      Skills.TrainedDiplomacy,
      Skills.TrainedHeal,
      Skills.TrainedHistory,
      Skills.TrainedInsight,
      Skills.TrainedReligion,
    ],
  },
})

export const Cleric = Traits.defineTrait('cleric', {
  name: 'Cleric',
  description:
    "**Leader.** You lead by shielding allies with your prayers, healing, and using powers that improve your allies' attacks.\n\n**Power Source:** Divine · **Key Abilities:** Wisdom, Strength, Charisma\n\n**Armor Proficiencies:** Cloth, leather, hide, chainmail\n\n**Weapon Proficiencies:** Simple melee, simple ranged · **Implement:** Holy symbol\n\n**Bonus to Defense:** +2 Will · **Hit Points:** 12 + Constitution score at 1st level, 5 per level gained · **Healing Surges:** 7 + Constitution modifier",
  archetypes: [Class],
  effects: [
    Effects.gainCharacterOption(SelectDeity),
    Effects.modifyCharacteristic(
      HitPoints,
      Attributes.modifier(Patches.sum(NumericExpressions.sum([7, NumericExpressions.multiply([CharacterValues.Level, 5])])))
    ),
    Effects.modifyCharacteristic(HealingSurges, Attributes.modifier(Patches.sum(7))),
    Effects.modifyCharacteristic(Will, Attributes.modifier(Patches.sum(2))),
    Effects.gainTrait(Armor.LeatherProficiency),
    Effects.gainTrait(Armor.HideProficiency),
    Effects.gainTrait(Armor.ChainmailProficiency),
    Effects.gainTrait(Skills.TrainedReligion),
    Effects.gainCharacterOption(SelectSkill),
    Effects.gainCharacterOption(SelectSkill),
    Effects.gainCharacterOption(SelectSkill),
    Effects.gainTrait(ClericChannelDivinity),
    Effects.gainTrait(HealersLore),
    Effects.gainTrait(HealingWordFeature),
    Effects.gainTrait(RitualCasting),
    Effects.gainCharacterOption(Powers.SelectAtWillAttack),
    Effects.gainCharacterOption(Powers.SelectAtWillAttack),
    Effects.gainCharacterOption(Powers.SelectEncounterAttack1),
    Effects.gainCharacterOption(Powers.SelectDailyAttack1),
    Effects.conditional(Traits.traitPrerequisite(Human), [Effects.gainCharacterOption(SelectSkill)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 2), [Effects.gainCharacterOption(Powers.SelectUtility2)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [Effects.gainCharacterOption(Powers.SelectEncounterAttack3)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [Effects.gainCharacterOption(Powers.SelectDailyAttack5)]),
  ],
})

export const AllClericTraits = [Cleric, ClericChannelDivinity, DivineFortune, TurnUndead, HealersLore, HealingWordFeature, HealingWord, RitualCasting]
