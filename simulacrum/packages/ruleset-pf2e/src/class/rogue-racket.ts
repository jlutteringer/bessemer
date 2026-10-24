import { Archetypes, Attributes, CharacterOptions, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { MediumArmor } from '@simulacrum/ruleset-pf2e/characteristic'
import { Proficiency } from '@simulacrum/ruleset-pf2e/bonus-type'
import { Trained } from '@simulacrum/ruleset-pf2e/proficiency'
import {
  TrainedArcana,
  TrainedDeception,
  TrainedDiplomacy,
  TrainedIntimidation,
  TrainedNature,
  TrainedOccultism,
  TrainedReligion,
  TrainedSociety,
  TrainedThievery,
} from '@simulacrum/ruleset-pf2e/skill'
import { CharismaKeyAttribute, DexterityKeyAttribute, IntelligenceKeyAttribute, StrengthKeyAttribute } from '@simulacrum/ruleset-pf2e/attribute-boost'

export const RoguesRacket = Archetypes.defineArchetype('rogue/racket', { name: "Rogue's Racket" })

export const SelectMastermindSkill = CharacterOptions.selectTraitOption('rogue/racket/mastermind/select-skill', {
  name: 'Mastermind Skill',
  filter: { specificOptions: [TrainedArcana, TrainedNature, TrainedOccultism, TrainedReligion] },
})

export const SelectMastermindKeyAttribute = CharacterOptions.selectTraitOption('rogue/racket/mastermind/select-key-attribute', {
  name: 'Key Attribute',
  filter: { specificOptions: [DexterityKeyAttribute, IntelligenceKeyAttribute] },
})

export const MastermindRacket = Traits.defineTrait('rogue/racket/mastermind', {
  name: 'Mastermind',
  description:
    "You rely on your intellect to craft intricate schemes, planning 10 steps ahead where others might plan three. You might be a driven detective, a spymaster in the service of a powerful house, or an aspiring crime lord or information broker.\n\nIf you successfully identify a creature using [Recall Knowledge](content:skills/recall-knowledge), that creature is [off-guard](content:conditions/off-guard) against your attacks until the start of your next turn; if you critically succeed, it's off-guard against your attacks for 1 minute.\n\nYou're trained in [Society](characteristic:skill/society) and one of the following skills of your choice: [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), or [Religion](characteristic:skill/religion). You can choose Intelligence as your key attribute.",
  archetypes: [RoguesRacket],
  effects: [
    Effects.gainTrait(TrainedSociety),
    Effects.gainCharacterOption(SelectMastermindSkill),
    Effects.gainCharacterOption(SelectMastermindKeyAttribute),
  ],
})

export const SelectRuffianKeyAttribute = CharacterOptions.selectTraitOption('rogue/racket/ruffian/select-key-attribute', {
  name: 'Key Attribute',
  filter: { specificOptions: [DexterityKeyAttribute, StrengthKeyAttribute] },
})

export const RuffianRacket = Traits.defineTrait('rogue/racket/ruffian', {
  name: 'Ruffian',
  description:
    "You prefer the direct approach: strong-arming or intimidation. You might be an enforcer for organized crime, a highway bandit, or a noble who bullies others with threats of your family's power. You use whatever tools you have at hand to get the job done. You can deal sneak attack damage with any weapon, not just the weapons listed in the sneak attack class feature. This benefit doesn't apply to a simple weapon with a damage die greater than d8 or a martial or advanced weapon with a damage die greater than d6. (Apply any abilities that alter the damage die size first.) Critical hits you make with these weapons gain the weapon's [critical specialization benefit](content:equipment/critical-specialization) if the target is [off-guard](content:conditions/off-guard) to you.\n\nYou're trained in [Intimidation](characteristic:skill/intimidation) and medium armor. You can choose Strength as your key attribute. When you gain light armor expertise, you also gain expert proficiency in medium armor, and when you gain light armor mastery, you also gain master proficiency in medium armor.",
  archetypes: [RoguesRacket],
  effects: [
    Effects.gainTrait(TrainedIntimidation),
    Effects.modifyCharacteristic(MediumArmor, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.gainCharacterOption(SelectRuffianKeyAttribute),
  ],
})

export const SelectScoundrelKeyAttribute = CharacterOptions.selectTraitOption('rogue/racket/scoundrel/select-key-attribute', {
  name: 'Key Attribute',
  filter: { specificOptions: [DexterityKeyAttribute, CharismaKeyAttribute] },
})

export const ScoundrelRacket = Traits.defineTrait('rogue/racket/scoundrel', {
  name: 'Scoundrel',
  description:
    'You use fast-talking, flattery, and a silver tongue to avoid danger and escape tricky situations. You might be a grifter or con artist, or you might use your skills in certain reputable professions, like a barrister or diplomat\n\nWhen you successfully [Feint](content:skills/feint), the target is [off-guard](content:conditions/off-guard) against your melee attacks until the end of your next turn. On a critical success, the target is off-guard against all melee attacks until the end of your next turn, not just yours. If you Feint while wielding an agile or finesse melee weapon, you can [Step](content:playing-the-game/step) immediately after the Feint as a free action.\n\nYou’re trained in [Deception](characteristic:skill/deception) and [Diplomacy](characteristic:skill/diplomacy). You can choose Charisma as your key ability score.',
  archetypes: [RoguesRacket],
  effects: [Effects.gainTrait(TrainedDeception), Effects.gainTrait(TrainedDiplomacy), Effects.gainCharacterOption(SelectScoundrelKeyAttribute)],
})

export const ThiefRacket = Traits.defineTrait('rogue/racket/thief', {
  name: 'Thief',
  description:
    'Nothing beats the thrill of taking something that belongs to someone else, especially if you can do so completely unnoticed. You might be a pickpocket working the streets, a cat burglar sneaking through windows, or even a consultant, testing clients’ vaults for openings.\n\nWhen a fight breaks out, you prefer swift, lightweight weapons, and you strike where it hurts. When you attack with a [finesse](content:traits/finesse) melee weapon or finesse melee unarmed attack, you can add your [Dexterity modifier](characteristic:dexterity) to damage rolls instead of your [Strength modifier](characteristic:strength).\n\nYou are trained in [Thievery](characteristic:skill/thievery).',
  archetypes: [RoguesRacket],
  effects: [Effects.gainTrait(TrainedThievery), Effects.gainTrait(DexterityKeyAttribute)],
})

export const SelectRoguesRacket = CharacterOptions.selectTraitOption('rogue/select-racket', {
  name: "Rogue's Racket",
  filter: { archetypes: [RoguesRacket] },
})

export const AllRogueRacketEntities = [
  RoguesRacket,
  SelectMastermindSkill,
  SelectMastermindKeyAttribute,
  MastermindRacket,
  SelectRuffianKeyAttribute,
  RuffianRacket,
  SelectScoundrelKeyAttribute,
  ScoundrelRacket,
  ThiefRacket,
  SelectRoguesRacket,
]
