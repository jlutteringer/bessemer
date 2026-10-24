import { Abilities, Attributes, CharacterOptions, CharacterValues, Effects, Traits } from '@simulacrum/ruleset'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import { Patches } from '@bessemer/cornerstone'
import { Expressions, NumericExpressions } from '@bessemer/cornerstone/expression'
import * as ActionTypes from '@simulacrum/ruleset-dnd4e/action-type'
import { AtWillPower, Class, ClassFeature, EncounterPower, Feat, UtilityPower } from '@simulacrum/ruleset-dnd4e/archetype'
import { Fortitude, HealingSurges, HitPoints, Reflex, Will, WisdomModifier } from '@simulacrum/ruleset-dnd4e/characteristic'
import { ChannelDivinity } from '@simulacrum/ruleset-dnd4e/common'
import { SelectDeity } from '@simulacrum/ruleset-dnd4e/deity'
import * as Armor from '@simulacrum/ruleset-dnd4e/armor'
import * as Skills from '@simulacrum/ruleset-dnd4e/skill'
import * as Powers from '@simulacrum/ruleset-dnd4e/power'
import { Human } from '@simulacrum/ruleset-dnd4e/race'

export const ChannelDivinityFeature = Traits.defineTrait('paladin/channel-divinity', {
  name: 'Channel Divinity',
  description:
    'Once per encounter you can invoke divine power, filling yourself with the might of your patron deity. With the divine might you invoke you can wield special powers, such as *divine mettle* and *divine strength*. Some paladins learn other uses for this feature; for instance, the divinity feats in Chapter 6 grant characters with access to the Channel Divinity class feature the ability to use additional special powers.\n\nRegardless of how many different uses for Channel Divinity you know, you can use only one such ability per encounter. The special ability or power you invoke works just like your other powers.',
  archetypes: [ClassFeature],
  effects: [Effects.gainResourcePool(ChannelDivinity)],
})

export const DivineChallengeFeature = Traits.defineTrait('paladin/divine-challenge', {
  name: 'Divine Challenge',
  description: 'The challenge of a paladin is filled with divine menace. You can use the *divine challenge* power to mark an enemy of your choice.',
  archetypes: [ClassFeature],
  effects: [],
})

export const LayOnHandsFeature = Traits.defineTrait('paladin/lay-on-hands', {
  name: 'Lay on Hands',
  description:
    'Using the *lay on hands* power, paladins can grant their comrades additional resilience with a touch of their hands and a short prayer, though they must give of their own strength to do so.',
  archetypes: [ClassFeature],
  effects: [],
})

export const DivineMettle = Abilities.defineAbility('paladin/power/divine-mettle', {
  name: 'Channel Divinity: Divine Mettle',
  description: '*Your unswerving faith in your deity empowers a nearby creature to resist a debilitating affliction.*',
  archetypes: [EncounterPower, UtilityPower],
  prerequisites: [Traits.traitPrerequisite(ChannelDivinityFeature)],
  effects: [
    Effects.descriptive(
      '**Paladin Feature**\n\n**Encounter** ✦ Divine\n\n**Minor Action** · Close burst 10\n\n**Target:** One creature in burst\n\n**Effect:** The target makes a saving throw with a bonus equal to your Charisma modifier.'
    ),
  ],
  actions: [{ name: 'Channel Divinity: Divine Mettle', action: ActionTypes.MinorAction, costs: [{ cost: 1, resource: ChannelDivinity }] }],
})

export const DivineStrength = Abilities.defineAbility('paladin/power/divine-strength', {
  name: 'Channel Divinity: Divine Strength',
  description: '*You petition your deity for the divine strength to lay low your enemies.*',
  archetypes: [EncounterPower, UtilityPower],
  prerequisites: [Traits.traitPrerequisite(ChannelDivinityFeature)],
  effects: [
    Effects.descriptive(
      '**Paladin Feature**\n\n**Encounter** ✦ Divine\n\n**Minor Action** · Personal\n\n**Effect:** Apply your Strength modifier as extra damage on your next attack this turn.'
    ),
  ],
  actions: [{ name: 'Channel Divinity: Divine Strength', action: ActionTypes.MinorAction, costs: [{ cost: 1, resource: ChannelDivinity }] }],
})

export const DivineChallenge = Abilities.defineAbility('paladin/power/divine-challenge', {
  name: 'Divine Challenge',
  description: '*You boldly confront a nearby enemy, searing it with divine light if it ignores your challenge.*',
  archetypes: [AtWillPower, UtilityPower],
  prerequisites: [Traits.traitPrerequisite(DivineChallengeFeature)],
  effects: [
    Effects.descriptive(
      "**Paladin Feature**\n\n**At-Will** ✦ Divine, Radiant\n\n**Minor Action** · Close burst 5\n\n**Target:** One creature in burst\n\n**Effect:** You mark the target. The target remains marked until you use this power against another target, or if you fail to engage the target (see below). A creature can be subject to only one mark at a time. A new mark supersedes a mark that was already in place.\n\nWhile a target is marked, it takes a –2 penalty to attack rolls for any attack that doesn't include you as a target. Also, it takes radiant damage equal to 3 + your Charisma modifier the first time it makes an attack that doesn't include you as a target before the start of your next turn. The damage increases to 6 + your Charisma modifier at 11th level, and to 9 + your Charisma modifier at 21st level.\n\nOn your turn, you must engage the target you challenged or challenge a different target. To engage the target, you must either attack it or end your turn adjacent to it. If none of these events occur by the end of your turn, the marked condition ends and you can't use *divine challenge* on your next turn.\n\nYou can use *divine challenge* once per turn.\n\n**Special:** Even though this ability is called a challenge, it doesn't rely on the intelligence or language ability of the target. It's a magical compulsion that affects the creature's behavior, regardless of the creature's nature. You can't place a divine challenge on a creature that is already affected by your or another character's divine challenge."
    ),
  ],
  actions: [{ name: 'Divine Challenge', action: ActionTypes.MinorAction }],
})

export const LayOnHands = Abilities.defineAbility('paladin/power/lay-on-hands', {
  name: 'Lay on Hands',
  description: '*Your divine touch instantly heals wounds.*',
  archetypes: [AtWillPower, UtilityPower],
  prerequisites: [Traits.traitPrerequisite(LayOnHandsFeature)],
  effects: [
    Effects.descriptive(
      '**Paladin Feature**\n\n**At-Will (Special)** ✦ Divine, Healing\n\n**Special:** You can use this power a number of times per day equal to your Wisdom modifier (minimum 1), but only once per round.\n\n**Minor Action** · Melee touch\n\n**Target:** One creature\n\n**Effect:** You spend a healing surge but regain no hit points. Instead, the target regains hit points as if it had spent a healing surge. You must have at least one healing surge remaining to use this power.'
    ),
  ],
  actions: [{ name: 'Lay on Hands', action: ActionTypes.MinorAction }],
  resource: {
    size: NumericExpressions.max([1, WisdomModifier.variable]),
    refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }],
  },
  costs: [{ cost: 1 }],
})

export const SelectSkill = CharacterOptions.selectTraitOption('paladin/select-skill', {
  name: 'Trained Skill',
  filter: {
    specificOptions: [
      Skills.TrainedDiplomacy,
      Skills.TrainedEndurance,
      Skills.TrainedHeal,
      Skills.TrainedHistory,
      Skills.TrainedInsight,
      Skills.TrainedIntimidate,
      Skills.TrainedReligion,
    ],
  },
})

export const Paladin = Traits.defineTrait('paladin', {
  name: 'Paladin',
  description:
    '**Defender.** You are extremely durable, with high hit points and the ability to wear the heaviest armor. You can issue bold challenges to foes and compel them to fight you rather than your allies.\n\n**Power Source:** Divine · **Key Abilities:** Strength, Charisma, Wisdom\n\n**Armor Proficiencies:** Cloth, leather, hide, chainmail, scale, plate; light shield, heavy shield\n\n**Weapon Proficiencies:** Simple melee, military melee, simple ranged · **Implements:** Holy symbol\n\n**Bonus to Defense:** +1 Fortitude, +1 Reflex, +1 Will · **Hit Points:** 15 + Constitution score at 1st level, 6 per level gained · **Healing Surges:** 10 + Constitution modifier',
  archetypes: [Class],
  effects: [
    Effects.gainCharacterOption(SelectDeity),
    Effects.modifyCharacteristic(
      HitPoints,
      Attributes.modifier(Patches.sum(NumericExpressions.sum([9, NumericExpressions.multiply([CharacterValues.Level, 6])])))
    ),
    Effects.modifyCharacteristic(HealingSurges, Attributes.modifier(Patches.sum(10))),
    Effects.modifyCharacteristic(Fortitude, Attributes.modifier(Patches.sum(1))),
    Effects.modifyCharacteristic(Reflex, Attributes.modifier(Patches.sum(1))),
    Effects.modifyCharacteristic(Will, Attributes.modifier(Patches.sum(1))),
    Effects.gainTrait(ChannelDivinityFeature),
    Effects.gainTrait(DivineChallengeFeature),
    Effects.gainTrait(LayOnHandsFeature),
    Effects.gainTrait(Armor.LeatherProficiency),
    Effects.gainTrait(Armor.HideProficiency),
    Effects.gainTrait(Armor.ChainmailProficiency),
    Effects.gainTrait(Armor.ScaleProficiency),
    Effects.gainTrait(Armor.PlateProficiency),
    Effects.gainTrait(Armor.LightShieldProficiency),
    Effects.gainTrait(Armor.HeavyShieldProficiency),
    Effects.gainTrait(Skills.TrainedReligion),
    Effects.gainCharacterOption(SelectSkill),
    Effects.gainCharacterOption(SelectSkill),
    Effects.gainCharacterOption(SelectSkill),
    Effects.gainCharacterOption(Powers.SelectAtWillAttack),
    Effects.gainCharacterOption(Powers.SelectAtWillAttack),
    Effects.gainCharacterOption(Powers.SelectEncounterAttack1),
    Effects.gainCharacterOption(Powers.SelectDailyAttack1),
    // A human gains training in one additional skill from its class skill list
    Effects.conditional(Traits.traitPrerequisite(Human), [Effects.gainCharacterOption(SelectSkill)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 2), [Effects.gainCharacterOption(Powers.SelectUtility2)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [Effects.gainCharacterOption(Powers.SelectEncounterAttack3)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [Effects.gainCharacterOption(Powers.SelectDailyAttack5)]),
  ],
})

export const HealingHands = Traits.defineTrait('feat/healing-hands', {
  name: 'Healing Hands',
  description:
    '**Prerequisites:** Paladin, *lay on hands* power\n\nWhen you use the *lay on hands* power, the affected ally regains additional hit points equal to your Charisma modifier.',
  archetypes: [Feat],
  prerequisites: [Traits.traitPrerequisite(Paladin), Traits.traitPrerequisite(LayOnHandsFeature)],
  effects: [],
})

export const AllPaladinTraits = [
  Paladin,
  ChannelDivinityFeature,
  DivineChallengeFeature,
  LayOnHandsFeature,
  DivineMettle,
  DivineStrength,
  DivineChallenge,
  LayOnHands,
  HealingHands,
]
