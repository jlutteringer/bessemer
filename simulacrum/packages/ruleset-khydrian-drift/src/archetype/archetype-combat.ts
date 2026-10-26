import { Abilities, ActionEffects, CharacterEffects, RulesetEntities, Tags, Traits } from '@simulacrum/ruleset'
import * as ActionTypes from '@simulacrum/ruleset-khydrian-drift/action-type'
import { Expressions } from '@bessemer/cornerstone/expression'
import { Primary } from '@simulacrum/ruleset-khydrian-drift/tag'
import { GeneralLoadoutSlot } from '@simulacrum/ruleset-khydrian-drift/loadout'
import { Stamina } from '@simulacrum/ruleset-khydrian-drift/resource-pool'
import { AgilityAttackRating, FortitudeDefense, StaminaCost } from '@simulacrum/ruleset-khydrian-drift/characteristic'
import { Primed, Vulnerable } from '@simulacrum/ruleset-khydrian-drift/condition'

export const BasicCombatTraining = Traits.defineTrait('combat/basic-training', {
  name: 'Basic Combat Training',
  description:
    '*"Blessed be the LORD my strength, which teacheth my hands to war, and my fingers to fight."*\n\nEvery corporate security force, street gang, and private militia teaches the same fundamentals: how to hold a weapon, move under fire, and keep your head when the shooting starts. It is the foundation every other fighting discipline is built on.',
  tags: [Primary],
  prerequisites: [],
  effects: [],
})

export const BackInTheFight = Abilities.defineAbility('combat/back-in-the-fight', {
  name: 'Back in the Fight',
  loadout: GeneralLoadoutSlot,
  prerequisites: [Traits.traitPrerequisite(BasicCombatTraining)],
  actions: [
    {
      name: 'Back in the Fight',
      description: 'Choose a creature adjacent to you. The target can end any [conditions](content:combat/conditions) affecting it.',
      action: ActionTypes.MajorAction,
      costs: [{ cost: StaminaCost.Medium, resource: Stamina }],
      targeting: { target: { range: 1, count: 1 } },
    },
  ],
})

export const Blackjack = Abilities.defineAbility('combat/blackjack', {
  name: 'Blackjack',
  loadout: GeneralLoadoutSlot,
  prerequisites: [Traits.traitPrerequisite(BasicCombatTraining)],
  actions: [
    {
      name: 'Blackjack',
      description: 'Make a melee weapon attack against the Fortitude of a creature. On a hit, the target is stunned for 2 rounds.',
      action: ActionTypes.MajorAction,
      costs: [{ cost: StaminaCost.Medium, resource: Stamina }],
      targeting: { target: { range: 1, count: 1 } },
    },
  ],
})

export const Tumble = Abilities.defineAbility('combat/tumble', {
  name: 'Tumble',
  loadout: GeneralLoadoutSlot,
  prerequisites: [Traits.traitPrerequisite(BasicCombatTraining)],
  actions: [
    {
      name: 'Tumble',
      description:
        "For the rest of your turn, your movement doesn't provoke Opportunity Attacks, and you can move through enemies' spaces as if they were allies.",
      action: ActionTypes.MinorAction,
      costs: [{ cost: StaminaCost.Low, resource: Stamina }],
    },
  ],
})

export const ActionSurge = Abilities.defineAbility('combat/action-surge', {
  name: 'Action Surge',
  loadout: GeneralLoadoutSlot,
  prerequisites: [Traits.traitPrerequisite(BasicCombatTraining)],
  actions: [
    {
      name: 'Action Surge',
      description: 'You can take one additional Major Action this turn.',
      action: ActionTypes.MinorAction,
      costs: [{ cost: StaminaCost.High, resource: Stamina }],
    },
  ],
})

export const ExploitWeakness = Abilities.defineAbility('combat/exploit-weakness', {
  name: 'Exploit Weakness',
  loadout: GeneralLoadoutSlot,
  prerequisites: [Traits.traitPrerequisite(BasicCombatTraining)],
  actions: [
    {
      action: ActionTypes.MajorAction,
      costs: [{ cost: StaminaCost.Medium, resource: Stamina }],
      targeting: { target: { range: 1, count: 1 } },
      test: {
        offense: AgilityAttackRating,
        defense: FortitudeDefense,
        success: [ActionEffects.condition(Primed, { duration: { rounds: 1 } }), ActionEffects.condition(Vulnerable, { duration: { rounds: 1 } })],
      },
    },
  ],
})

export const AdvancedCombatTraining = Traits.defineTrait('combat/advanced-training', {
  name: 'Advanced Combat Training',
  description:
    '*"Iron sharpeneth iron."*\n\nBeyond the fundamentals lies training reserved for corporate strike teams, special forces, and veteran mercenaries: coordinated assaults, breaching, and fighting through chaos without hesitation. It is where a fighter begins to specialize, toward the blade or toward the gun.',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(BasicCombatTraining)],
  effects: [CharacterEffects.gainLoadoutSlot(GeneralLoadoutSlot)],
})

// Melee and Ranged Combat Mastery are mutually exclusive, so each refers to the other by reference before both are defined
const MeleeCombatMasteryReference = RulesetEntities.buildReference(RulesetEntities.RulesetEntityType.Trait, 'combat/melee-mastery')
const RangedCombatMasteryReference = RulesetEntities.buildReference(RulesetEntities.RulesetEntityType.Trait, 'combat/ranged-mastery')

export const MeleeCombatMastery = Traits.defineTrait('combat/melee-mastery', {
  name: 'Melee Combat Mastery',
  description:
    '*"With the jawbone of an ass have I slain a thousand men."*\n\nIn a world of guns, the fighters who choose to close the distance are either desperate or very, very good. Melee mastery covers blades, blunt weapons, and bare hands, and turns every step inside an enemy\'s reach into an advantage.',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(AdvancedCombatTraining), Expressions.not(Traits.traitPrerequisite(RangedCombatMasteryReference))],
  effects: [],
})

export const RangedCombatMastery = Traits.defineTrait('combat/ranged-mastery', {
  name: 'Ranged Combat Mastery',
  description:
    '*"He hath bent his bow, and made it ready."*\n\nWhether with a pistol at ten paces or a rifle across a city block, the discipline is the same: preparation, patience, and precision. Ranged mastery lets a fighter control an engagement from beyond the reach of most enemies.',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(AdvancedCombatTraining), Expressions.not(Traits.traitPrerequisite(MeleeCombatMasteryReference))],
  effects: [],
})

export const ArmorProficiency = Tags.defineTraitTag('armor-proficiency', { name: 'Armor Proficiency' })

export const LightArmorProficiency = Traits.defineTrait('armor-proficiency/light', {
  name: 'Light Armor Proficiency',
  description:
    '*"Put on the whole armour of God, that ye may be able to stand against the wiles of the devil."*\n\nBallistic weaves and armored jackets are the street\'s everyday protection, light enough to wear under a coat and quiet enough not to slow a runner down. Training covers how to move, fall, and fight in them without giving up speed.',
  tags: [Primary, ArmorProficiency],
  prerequisites: [],
  effects: [],
})

export const MediumArmorProficiency = Traits.defineTrait('armor-proficiency/medium', {
  name: 'Medium Armor Proficiency',
  description:
    '*"For he put on righteousness as a breastplate, and an helmet of salvation upon his head."*\n\nPlated vests and segmented composites stop rifle rounds that would punch straight through a jacket, at the cost of weight and freedom of movement. Wearing them well takes drilling until the extra bulk no longer changes how you fight.',
  tags: [Primary, ArmorProficiency],
  prerequisites: [Traits.traitPrerequisite(LightArmorProficiency)],
  effects: [],
})

export const HeavyArmorProficiency = Traits.defineTrait('armor-proficiency/heavy', {
  name: 'Heavy Armor Proficiency',
  description:
    '*"And he had an helmet of brass upon his head, and he was armed with a coat of mail."*\n\nPowered exoplate and full-coverage combat armor turn a soldier into a walking barricade, the protection corporate strike teams wear to breach a fortified floor. Only fighters trained to carry and move in that much metal can fight effectively inside it.',
  tags: [Primary, ArmorProficiency],
  prerequisites: [Traits.traitPrerequisite(MediumArmorProficiency)],
  effects: [],
})

export const AllArmorProficiencies = [LightArmorProficiency, MediumArmorProficiency, HeavyArmorProficiency]
