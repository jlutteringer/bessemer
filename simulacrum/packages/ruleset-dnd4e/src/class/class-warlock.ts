import { Abilities, Tags, Attributes, CharacterOptions, CharacterValues, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions, NumericExpressions } from '@bessemer/cornerstone/expression'
import * as ActionTypes from '@simulacrum/ruleset-dnd4e/action-type'
import { AttackPower, AtWillPower, Class, ClassFeature, Feat, PowerLevel1 } from '@simulacrum/ruleset-dnd4e/tag'
import { Charisma, Constitution, HealingSurges, HitPoints, Intelligence, Reflex, Will } from '@simulacrum/ruleset-dnd4e/characteristic'
import * as Armor from '@simulacrum/ruleset-dnd4e/armor'
import * as Skills from '@simulacrum/ruleset-dnd4e/skill'
import * as Powers from '@simulacrum/ruleset-dnd4e/power'
import { Human } from '@simulacrum/ruleset-dnd4e/race'

export const EldritchPact = Tags.defineTraitTag('warlock/eldritch-pact', { name: 'Eldritch Pact' })

export const SelectEldritchPact = CharacterOptions.selectTraitOption('warlock/select-eldritch-pact', {
  name: 'Eldritch Pact',
  description:
    'You have forged a pact with mysterious entities that grant you your arcane powers. Choose one of the following pacts: fey pact, infernal pact, or star pact. The pact you choose determines the following warlock abilities:\n\n**At-Will Spells:** Your pact determines one of the at-will spells you know.\n\n**Pact Boon:** Each pact includes a pact boon. The pact boon is a granted power you can use to further hex your enemies.\n\nThe pact you take also provides bonuses to certain warlock powers. Individual powers detail the effects (if any) your Eldritch Pact selection has on them.',
  filter: { tags: [EldritchPact] },
})

export const EldritchBlastFeature = Traits.defineTrait('warlock/eldritch-blast', {
  name: 'Eldritch Blast',
  description:
    'All warlocks know the *eldritch blast* at-will power. This power can be used as a basic attack. You gain this power as well as another at-will power as determined by your Eldritch Pact.',
  tags: [ClassFeature],
  effects: [],
})

export const PrimeShot = Traits.defineTrait('warlock/prime-shot', {
  name: 'Prime Shot',
  description: 'If none of your allies are nearer to your target than you are, you receive a +1 bonus to ranged attack rolls against that target.',
  tags: [ClassFeature],
  effects: [],
})

export const ShadowWalk = Traits.defineTrait('warlock/shadow-walk', {
  name: 'Shadow Walk',
  description:
    'On your turn, if you move at least 3 squares away from where you started your turn, you gain concealment until the end of your next turn.',
  tags: [ClassFeature],
  effects: [],
})

export const WarlocksCurse = Traits.defineTrait('warlock/warlocks-curse', {
  name: "Warlock's Curse",
  description:
    "Once per turn as a minor action, you can place a Warlock's Curse on the enemy nearest to you that you can see. A cursed enemy is more vulnerable to your attacks. If you damage a cursed enemy, you deal extra damage. You decide whether to apply the extra damage after making the damage roll. You can deal this extra damage once per round.\n\nA Warlock's Curse remains in effect until the end of the encounter or until the cursed enemy drops to 0 hit points or fewer.\n\nYou can place a Warlock's Curse on multiple targets over the course of an encounter; each curse requires the use of a minor action. You can't place a Warlock's Curse on a creature that is already affected by your or another character's Warlock's Curse.\n\nAs you advance in level, your extra damage increases.\n\n| Level | Warlock's Curse Extra Damage |\n|---|---|\n| 1st–10th | +1d6 |\n| 11th–20th | +2d6 |\n| 21st–30th | +3d6 |",
  tags: [ClassFeature],
  effects: [],
})

export const SelectSkill = CharacterOptions.selectTraitOption('warlock/select-skill', {
  name: 'Trained Skill',
  filter: {
    specificOptions: [
      Skills.TrainedArcana,
      Skills.TrainedBluff,
      Skills.TrainedHistory,
      Skills.TrainedInsight,
      Skills.TrainedIntimidate,
      Skills.TrainedReligion,
      Skills.TrainedStreetwise,
      Skills.TrainedThievery,
    ],
  },
})

export const EldritchBlast = Abilities.defineAbility('warlock/power/eldritch-blast', {
  name: 'Eldritch Blast',
  description: '*You fire a bolt of dark, crackling eldritch energy at your foe.*',
  universal: false,
  tags: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(EldritchBlastFeature)],
  effects: [
    Effects.descriptive(
      "**Warlock (All) Attack 1**\n\n**At-Will** ✦ Arcane, Implement\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature\n\n**Attack:** Charisma or Constitution vs. Reflex\n\n**Hit:** 1d10 + Charisma or Constitution modifier damage.\n\nIncrease damage to 2d10 + Charisma or Constitution modifier at 21st level.\n\n**Special:** At 1st level, you determine whether you use Charisma or Constitution to attack with this power. Once you make that choice, you can't change it later.\n\nThis power counts as a ranged basic attack. When a power allows you to make a ranged basic attack, you can use this power."
    ),
  ],
  actions: [{ name: 'Eldritch Blast', action: ActionTypes.StandardAction }],
})

export const Warlock = Traits.defineTrait('warlock', {
  name: 'Warlock',
  description:
    "**Role:** Striker. Your attack powers are highly damaging and often weaken or hamper the target in some way. You can elude attacks by flying, teleporting, or turning invisible.\n\n**Power Source:** Arcane. You gain your magical power from a pact you forge with a powerful, supernatural force or an unnamed entity.\n\n**Key Abilities:** [Charisma](characteristic:charisma), [Constitution](characteristic:constitution), [Intelligence](characteristic:intelligence)\n\n**Armor Proficiencies:** [Cloth](ability:armor/cloth), [leather](ability:armor/leather)\n\n**Weapon Proficiencies:** Simple melee, simple ranged\n\n**Implements:** Rods, wands\n\n**Bonus to Defense:** +1 [Reflex](characteristic:reflex), +1 [Will](characteristic:will)\n\n**Hit Points at 1st Level:** 12 + Constitution score\n\n**Hit Points per Level Gained:** 5\n\n**Healing Surges per Day:** 6 + Constitution modifier\n\n**Trained Skills:** From the class skills list below, choose four trained skills at 1st level.\n\n**Class Skills:** [Arcana](characteristic:skill/arcana) (Int), [Bluff](characteristic:skill/bluff) (Cha), [History](characteristic:skill/history) (Int), [Insight](characteristic:skill/insight) (Wis), [Intimidate](characteristic:skill/intimidate) (Cha), [Religion](characteristic:skill/religion) (Int), [Streetwise](characteristic:skill/streetwise) (Cha), [Thievery](characteristic:skill/thievery) (Dex)\n\n**Build Options:** [Deceptive warlock](content:classes/deceptive-warlock), [scourge warlock](content:classes/scourge-warlock)\n\n**Class Features:** [Eldritch blast](trait:warlock/eldritch-blast), [Eldritch Pact](character-option:warlock/select-eldritch-pact), [Prime Shot](trait:warlock/prime-shot), [Shadow Walk](trait:warlock/shadow-walk), [Warlock's Curse](trait:warlock/warlocks-curse)",
  tags: [Class],
  effects: [
    Effects.modifyCharacteristic(
      HitPoints,
      Attributes.modifier(Patches.sum(NumericExpressions.sum([7, NumericExpressions.multiply([CharacterValues.Level, 5])])))
    ),
    Effects.modifyCharacteristic(HealingSurges, Attributes.modifier(Patches.sum(6))),
    Effects.modifyCharacteristic(Reflex, Attributes.modifier(Patches.sum(1))),
    Effects.modifyCharacteristic(Will, Attributes.modifier(Patches.sum(1))),
    Effects.gainTrait(Armor.LeatherProficiency),
    Effects.gainCharacterOption(SelectSkill),
    Effects.gainCharacterOption(SelectSkill),
    Effects.gainCharacterOption(SelectSkill),
    Effects.gainCharacterOption(SelectSkill),
    Effects.gainTrait(EldritchBlastFeature),
    Effects.gainAbility(EldritchBlast),
    Effects.gainCharacterOption(SelectEldritchPact),
    Effects.gainTrait(PrimeShot),
    Effects.gainTrait(ShadowWalk),
    Effects.gainTrait(WarlocksCurse),
    Effects.gainCharacterOption(Powers.SelectEncounterAttack1),
    Effects.gainCharacterOption(Powers.SelectDailyAttack1),
    // A human gains training in one additional skill from its class skill list
    Effects.conditional(Traits.traitPrerequisite(Human), [Effects.gainCharacterOption(SelectSkill)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 2), [Effects.gainCharacterOption(Powers.SelectUtility2)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [Effects.gainCharacterOption(Powers.SelectEncounterAttack3)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [Effects.gainCharacterOption(Powers.SelectDailyAttack5)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 6), [Effects.gainCharacterOption(Powers.SelectUtility6)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 7), [Effects.gainCharacterOption(Powers.SelectEncounterAttack7)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 9), [Effects.gainCharacterOption(Powers.SelectDailyAttack9)]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 10), [Effects.gainCharacterOption(Powers.SelectUtility10)]),
  ],
})

export const DireRadiance = Abilities.defineAbility('warlock/power/dire-radiance', {
  name: 'Dire Radiance',
  description:
    '*You cause a shaft of brilliant, cold starlight to lance down from above, bathing your foe in excruciating light. The nearer he moves toward you, the brighter and more deadly the light becomes.*',
  universal: false,
  tags: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    Effects.descriptive(
      '**Warlock (Star) Attack 1**\n\n**At-Will** ✦ Arcane, Fear, Implement, Radiant\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature\n\n**Attack:** Constitution vs. Fortitude\n\n**Hit:** 1d6 + Constitution modifier radiant damage. If the target moves nearer to you on its next turn, it takes an extra 1d6 + Constitution modifier damage.\n\nIncrease damage and extra damage to 2d6 + Constitution modifier at 21st level.'
    ),
  ],
  actions: [{ name: 'Dire Radiance', action: ActionTypes.StandardAction }],
})

export const Eyebite = Abilities.defineAbility('warlock/power/eyebite', {
  name: 'Eyebite',
  description:
    '*You glare at your enemy, and your eyes briefly gleam with brilliant colors. Your foe reels under your mental assault, and you vanish from his sight.*',
  universal: false,
  tags: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    Effects.descriptive(
      '**Warlock (Fey) Attack 1**\n\n**At-Will** ✦ Arcane, Charm, Implement, Psychic\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature\n\n**Attack:** Charisma vs. Will\n\n**Hit:** 1d6 + Charisma modifier psychic damage, and you are invisible to the target until the start of your next turn.\n\nIncrease damage to 2d6 + Charisma modifier at 21st level.'
    ),
  ],
  actions: [{ name: 'Eyebite', action: ActionTypes.StandardAction }],
})

export const HellishRebuke = Abilities.defineAbility('warlock/power/hellish-rebuke', {
  name: 'Hellish Rebuke',
  description:
    '*You point your finger, and your foe is scoured in hellish flames stoked by your own anger and pain. If you are injured, the flames burst into life one more time before they fade away.*',
  universal: false,
  tags: [AtWillPower, AttackPower, PowerLevel1],
  prerequisites: [Traits.traitPrerequisite(Warlock)],
  effects: [
    Effects.descriptive(
      '**Warlock (Infernal) Attack 1**\n\n**At-Will** ✦ Arcane, Fire, Implement\n\n**Standard Action** · Ranged 10\n\n**Target:** One creature\n\n**Attack:** Constitution vs. Reflex\n\n**Hit:** 1d6 + Constitution modifier fire damage. If you take damage before the end of your next turn, the target takes an extra 1d6 + Constitution modifier fire damage.\n\nIncrease damage and extra damage to 2d6 + Constitution modifier at 21st level.'
    ),
  ],
  actions: [{ name: 'Hellish Rebuke', action: ActionTypes.StandardAction }],
})

export const MistyStep = Traits.defineTrait('warlock/pact-boon/misty-step', {
  name: 'Misty Step',
  description:
    "You instantly transform into silver mist that streams a short distance and reforms, allowing you to flee or maneuver to set up a deadly attack.\n\nWhen an enemy under your Warlock's Curse is reduced to 0 hit points or fewer, you can immediately teleport 3 squares as a free action.",
  tags: [ClassFeature],
  effects: [],
})

export const DarkOnesBlessing = Traits.defineTrait('warlock/pact-boon/dark-ones-blessing', {
  name: "Dark One's Blessing",
  description:
    "You instantly gain vitality from a cursed enemy when that enemy falls.\n\nWhen an enemy under your Warlock's Curse is reduced to 0 hit points or fewer, you immediately gain temporary hit points equal to your level.",
  tags: [ClassFeature],
  effects: [],
})

export const FateOfTheVoid = Traits.defineTrait('warlock/pact-boon/fate-of-the-void', {
  name: 'Fate of the Void',
  description:
    "Your curse intermingles with the lost vitality of a cursed enemy to reveal a glimpse of the future to you.\n\nWhen an enemy under your Warlock's Curse is reduced to 0 hit points or fewer, you gain a +1 bonus to any single d20 roll you make during your next turn (attack roll, saving throw, skill check, or ability check). If you don't use this bonus by the end of your turn, it is lost.\n\nThis bonus is cumulative; if three cursed enemies drop to 0 hit points or fewer before your next turn, you gain a +3 bonus to a d20 roll during your turn.",
  tags: [ClassFeature],
  effects: [],
})

export const FeyPact = Traits.defineTrait('warlock/pact/fey', {
  name: 'Fey Pact',
  description:
    'You have forged a bargain with ancient, amoral powers of the Feywild. Some are primitive earth spirits, grim and menacing; some are capricious wood, sky, or water spirits; and others are incarnations of seasons or natural forces who roam the faerie realm like wild gods. They bestow magic that ranges from feral and savage to wondrous and enchanting.\n\n**Eyebite:** You know the *eyebite* at-will spell.\n\n**Misty Step:** You have the Misty Step pact boon.',
  tags: [ClassFeature, EldritchPact],
  effects: [Effects.gainAbility(Eyebite), Effects.gainTrait(MistyStep)],
})

export const InfernalPact = Traits.defineTrait('warlock/pact/infernal', {
  name: 'Infernal Pact',
  description:
    "Long ago a forgotten race of devils created a secret path to power and taught it to the tieflings of old to weaken their fealty to Asmodeus. In his wrath, Asmodeus destroyed the scheming devils and struck their very names from the memory of all beings—but you dare to study their perilous secrets anyway.\n\n**Hellish Rebuke:** You know the *hellish rebuke* at-will spell.\n\n**Dark One's Blessing:** You have the Dark One's Blessing pact boon.",
  tags: [ClassFeature, EldritchPact],
  effects: [Effects.gainAbility(HellishRebuke), Effects.gainTrait(DarkOnesBlessing)],
})

export const StarPact = Traits.defineTrait('warlock/pact/star', {
  name: 'Star Pact',
  description:
    "You have mastered the astrologer's art, learning the secret names of the stars and gazing into the Far Realm beyond, gaining great power thereby. You can call upon powers that madden or terrify your enemies, manipulate chance and fate, or scour your foes with icy banes and curses drawn from beyond the night sky.\n\n**Dire Radiance:** You know the *dire radiance* at-will spell.\n\n**Fate of the Void:** You have the Fate of the Void pact boon.",
  tags: [ClassFeature, EldritchPact],
  effects: [Effects.gainAbility(DireRadiance), Effects.gainTrait(FateOfTheVoid)],
})

export const ImprovedDarkOnesBlessing = Traits.defineTrait('feat/improved-dark-ones-blessing', {
  name: "Improved Dark One's Blessing",
  description: "**Prerequisites:** Con 15, warlock, infernal pact\n\nYour Dark One's Blessing now gives you 3 additional temporary hit points.",
  tags: [Feat],
  prerequisites: [
    Expressions.greaterThanOrEqual(Constitution.variable, 15),
    Traits.traitPrerequisite(Warlock),
    Traits.traitPrerequisite(InfernalPact),
  ],
  effects: [],
})

export const ImprovedFateOfTheVoid = Traits.defineTrait('feat/improved-fate-of-the-void', {
  name: 'Improved Fate of the Void',
  description: '**Prerequisites:** Con 13 or Cha 13, warlock, star pact\n\nYour Fate of the Void grants an additional +1 bonus to the d20 roll.',
  tags: [Feat],
  prerequisites: [
    Expressions.or([Expressions.greaterThanOrEqual(Constitution.variable, 13), Expressions.greaterThanOrEqual(Charisma.variable, 13)]),
    Traits.traitPrerequisite(Warlock),
    Traits.traitPrerequisite(StarPact),
  ],
  effects: [],
})

export const ImprovedMistyStep = Traits.defineTrait('feat/improved-misty-step', {
  name: 'Improved Misty Step',
  description: '**Prerequisites:** Int 13, warlock, fey pact\n\nYour Misty Step now allows you to teleport an additional 2 squares.',
  tags: [Feat],
  prerequisites: [Expressions.greaterThanOrEqual(Intelligence.variable, 13), Traits.traitPrerequisite(Warlock), Traits.traitPrerequisite(FeyPact)],
  effects: [],
})

export const AllWarlockTraits = [
  ImprovedDarkOnesBlessing,
  ImprovedFateOfTheVoid,
  ImprovedMistyStep,
  EldritchPact,
  Warlock,
  EldritchBlastFeature,
  PrimeShot,
  ShadowWalk,
  WarlocksCurse,
  FeyPact,
  InfernalPact,
  StarPact,
  MistyStep,
  DarkOnesBlessing,
  FateOfTheVoid,
  EldritchBlast,
  DireRadiance,
  Eyebite,
  HellishRebuke,
]
