import { Abilities, Attributes, CharacterOptions, CharacterValues, Effects, Traits } from '@simulacrum/ruleset'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import { Patches } from '@bessemer/cornerstone'
import { Expressions, NumericExpressions } from '@bessemer/cornerstone/expression'
import * as ActionTypes from '@simulacrum/ruleset-dnd4e/action-type'
import { Class, ClassFeature, EncounterPower, Feat, UtilityPower } from '@simulacrum/ruleset-dnd4e/tag'
import { Fortitude, HealingSurges, HitPoints, Initiative, Will } from '@simulacrum/ruleset-dnd4e/characteristic'
import { PowerBonus } from '@simulacrum/ruleset-dnd4e/bonus-type'
import * as Armor from '@simulacrum/ruleset-dnd4e/armor'
import * as Skills from '@simulacrum/ruleset-dnd4e/skill'
import * as Powers from '@simulacrum/ruleset-dnd4e/power'
import { Human } from '@simulacrum/ruleset-dnd4e/race'

export const CombatLeader = Traits.defineTrait('warlord/combat-leader', {
  name: 'Combat Leader',
  description: 'You and each ally within 10 squares who can see and hear you gain a +2 power bonus to initiative.',
  tags: [ClassFeature],
  effects: [Effects.modifyCharacteristic(Initiative, Attributes.modifier(Patches.sum(2), { combinability: PowerBonus }))],
})

export const InspiringPresence = Traits.defineTrait('warlord/commanding-presence/inspiring-presence', {
  name: 'Inspiring Presence',
  description:
    'When an ally who can see you spends an action point to take an extra action, that ally also regains lost hit points equal to one-half your level + your Charisma modifier.',
  tags: [ClassFeature],
  effects: [],
})

export const TacticalPresence = Traits.defineTrait('warlord/commanding-presence/tactical-presence', {
  name: 'Tactical Presence',
  description:
    'When an ally you can see spends an action point to make an extra attack, the ally gains a bonus to the attack roll equal to one-half your Intelligence modifier.',
  tags: [ClassFeature],
  effects: [],
})

export const SelectCommandingPresence = CharacterOptions.selectTraitOption('warlord/select-commanding-presence', {
  name: 'Commanding Presence',
  description:
    'Choose one of the following two benefits.\n\nThe choice you make also provides bonuses to certain warlord powers. Individual powers detail the effects (if any) your Commanding Presence selection has on them.',
  filter: { specificOptions: [InspiringPresence, TacticalPresence] },
})

export const InspiringWordFeature = Traits.defineTrait('warlord/inspiring-word', {
  name: 'Inspiring Word',
  description:
    'Using the *inspiring word* power, warlords can grant their comrades additional resilience with nothing more than a shout of encouragement.',
  tags: [ClassFeature],
  effects: [],
})

export const InspiringWord = Abilities.defineAbility('warlord/power/inspiring-word', {
  name: 'Inspiring Word',
  description: '*You call out to a wounded ally and offer inspiring words of courage and determination that helps that ally heal.*',
  tags: [EncounterPower, UtilityPower],
  prerequisites: [Traits.traitPrerequisite(InspiringWordFeature)],
  effects: [
    Effects.descriptive(
      '**Warlord Feature**\n\n**Encounter (Special)** ✦ Martial, Healing\n\n**Minor Action** · Close burst 5 (10 at 11th level, 15 at 21st level)\n\n**Special:** You can use this power twice per encounter, but only once per round. At 16th level, you can use inspiring word three times per encounter.\n\n**Target:** You or one ally in burst\n\n**Effect:** The target can spend a healing surge and regain an additional 1d6 hit points.\n\nThe amount of additional hit points regained is 2d6 at 6th level, 3d6 at 11th level, 4d6 at 16th level, 5d6 at 21st level, and 6d6 at 26th level.'
    ),
  ],
  actions: [{ name: 'Inspiring Word', action: ActionTypes.MinorAction }],
  resource: { size: 2, refresh: [{ period: GameTimeUnit.ShortRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
})

export const SelectSkill = CharacterOptions.selectTraitOption('warlord/select-skill', {
  name: 'Trained Skill',
  filter: {
    specificOptions: [
      Skills.TrainedAthletics,
      Skills.TrainedDiplomacy,
      Skills.TrainedEndurance,
      Skills.TrainedHeal,
      Skills.TrainedHistory,
      Skills.TrainedIntimidate,
    ],
  },
})

export const Warlord = Traits.defineTrait('warlord', {
  name: 'Warlord',
  description:
    '**Leader.** You are an inspiring commander and a master of battle tactics.\n\n**Power Source:** Martial · **Key Abilities:** Strength, Intelligence, Charisma\n\n**Armor Proficiencies:** Cloth, leather, hide, chainmail; light shield\n\n**Weapon Proficiencies:** Simple melee, military melee, simple ranged\n\n**Bonus to Defense:** +1 Fortitude, +1 Will · **Hit Points:** 12 + Constitution score at 1st level, 5 per level gained · **Healing Surges:** 7 + Constitution modifier',
  tags: [Class],
  effects: [
    Effects.modifyCharacteristic(
      HitPoints,
      Attributes.modifier(Patches.sum(NumericExpressions.sum([7, NumericExpressions.multiply([CharacterValues.Level, 5])])))
    ),
    Effects.modifyCharacteristic(HealingSurges, Attributes.modifier(Patches.sum(7))),
    Effects.modifyCharacteristic(Fortitude, Attributes.modifier(Patches.sum(1))),
    Effects.modifyCharacteristic(Will, Attributes.modifier(Patches.sum(1))),
    Effects.gainTrait(CombatLeader),
    Effects.gainCharacterOption(SelectCommandingPresence),
    Effects.gainTrait(InspiringWordFeature),
    Effects.gainTrait(Armor.LeatherProficiency),
    Effects.gainTrait(Armor.HideProficiency),
    Effects.gainTrait(Armor.ChainmailProficiency),
    Effects.gainTrait(Armor.LightShieldProficiency),
    Effects.gainCharacterOption(SelectSkill),
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

export const InspiredRecovery = Traits.defineTrait('feat/inspired-recovery', {
  name: 'Inspired Recovery',
  description:
    '**Prerequisites:** Warlord, Inspiring Presence class feature\n\nWhen an ally who can see you spends an action point to gain an extra standard action, that ally can roll a saving throw as a free action, adding your Charisma modifier to the roll.',
  tags: [Feat],
  prerequisites: [Traits.traitPrerequisite(Warlord), Traits.traitPrerequisite(InspiringPresence)],
  effects: [],
})

export const TacticalAssault = Traits.defineTrait('feat/tactical-assault', {
  name: 'Tactical Assault',
  description:
    "**Prerequisites:** Warlord, Tactical Presence class feature\n\nWhen an ally who can see you spends an action point to make an attack, the attack's damage roll gains a bonus equal to your Intelligence modifier.",
  tags: [Feat],
  prerequisites: [Traits.traitPrerequisite(Warlord), Traits.traitPrerequisite(TacticalPresence)],
  effects: [],
})

export const AllWarlordTraits = [
  Warlord,
  CombatLeader,
  InspiringPresence,
  TacticalPresence,
  InspiringWordFeature,
  InspiringWord,
  InspiredRecovery,
  TacticalAssault,
]
