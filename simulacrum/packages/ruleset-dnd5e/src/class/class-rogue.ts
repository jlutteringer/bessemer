import { Abilities, Tags, Attributes, CharacterEffects, RulesetEntities, Traits } from '@simulacrum/ruleset'
import * as SavingThrowProficiencies from '@simulacrum/ruleset-dnd5e/tag/saving-throw-proficiency'
import { Class, Wizard } from '@simulacrum/ruleset-dnd5e/tag'
import * as SkillProficiencies from '@simulacrum/ruleset-dnd5e/tag/skill-proficiency'
import * as SkillExpertise from '@simulacrum/ruleset-dnd5e/tag/skill-expertise'
import * as Spells from '@simulacrum/ruleset-dnd5e/tag/spell'
import { SelectFeat } from '@simulacrum/ruleset-dnd5e/tag/feat'
import { WeaponMasteryLoadout } from '@simulacrum/ruleset-dnd5e/loadout'
import { CharacterOptions } from '@simulacrum/ruleset'
import { PlayerCharacteristics } from '@simulacrum/ruleset-dnd5e/characteristic'
import { AbilityPatchProps } from '@simulacrum/ruleset/ability'
import * as ActionTypes from '@simulacrum/ruleset-dnd5e/action-type'
import { ResourcePool } from '@simulacrum/ruleset/resource-pool'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import { Patches } from '@bessemer/cornerstone'

export const SelectSkillProficiency = CharacterOptions.selectTraitOption('rogue/select-skill-proficiency', {
  name: 'Skill Proficiency',
  filter: {
    tags: [SkillProficiencies.SkillProficiency],
    specificOptions: [
      SkillProficiencies.Acrobatics,
      SkillProficiencies.Athletics,
      SkillProficiencies.Deception,
      SkillProficiencies.Insight,
      SkillProficiencies.Intimidation,
      SkillProficiencies.Investigation,
      SkillProficiencies.Perception,
      SkillProficiencies.Persuasion,
      SkillProficiencies.SleightOfHand,
      SkillProficiencies.Stealth,
    ],
  },
})

export const SelectExpertise = CharacterOptions.selectTraitOption('rogue/select-expertise', {
  name: 'Skill Expertise',
  filter: {
    tags: [SkillExpertise.SkillExpertise],
  },
})

export const SneakAttack = Traits.defineTrait('rogue/sneak-attack', {
  name: 'Sneak Attack',
  description:
    "Once per turn, you can deal an extra **1d6** damage to a creature you hit with a Finesse or Ranged weapon attack if you have Advantage on the roll. You don't need Advantage if an ally who isn't Incapacitated is within 5 feet of the target and you don't have Disadvantage.\n\nThe extra damage increases as you gain Rogue levels: 2d6 at level 3 and 3d6 at level 5.",
  effects: [],
})

export const ThievesCant = Traits.defineTrait('rogue/thieves-cant', {
  name: "Thieves' Cant",
  description: "You know **Thieves' Cant** and one other language of your choice.",
  effects: [],
})

export const WeaponMastery = Traits.defineTrait('rogue/weapon-mastery', {
  name: 'Weapon Mastery',
  description:
    'You can use the mastery properties of **two kinds** of weapons you are proficient with, such as Daggers and Shortbows. Whenever you finish a Long Rest, you can change those choices.',
  effects: [CharacterEffects.gainLoadoutSlot(WeaponMasteryLoadout), CharacterEffects.gainLoadoutSlot(WeaponMasteryLoadout)],
})

export const Level1 = Traits.defineTrait('rogue/level-1', {
  name: 'Rogue',
  description:
    "A cunning expert in **stealth, skill, and precision**, striking where foes are weakest.\n\n**Saving Throws:** Dexterity and Intelligence. **Armor:** Light armor. **Weapons:** Simple weapons, and Martial weapons with the Finesse or Light property. **Tools:** Thieves' Tools.",
  tags: [Class],
  effects: [
    CharacterEffects.gainTrait(SavingThrowProficiencies.Dexterity),
    CharacterEffects.gainTrait(SavingThrowProficiencies.Intelligence),
    CharacterEffects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(8))),
    CharacterEffects.gainCharacterOption(SelectSkillProficiency),
    CharacterEffects.gainCharacterOption(SelectSkillProficiency),
    CharacterEffects.gainCharacterOption(SelectSkillProficiency),
    CharacterEffects.gainCharacterOption(SelectSkillProficiency),
    CharacterEffects.gainCharacterOption(SelectExpertise),
    CharacterEffects.gainCharacterOption(SelectExpertise),
    CharacterEffects.gainTrait(SneakAttack),
    CharacterEffects.gainTrait(ThievesCant),
    CharacterEffects.gainTrait(WeaponMastery),
  ],
})

export const Level2 = Traits.defineTrait('rogue/level-2', {
  name: 'Rogue (2)',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  tags: [Class],
  effects: [CharacterEffects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(5)))],
})

export const CunningAction = Abilities.defineAbility('rogue/cunning-action', {
  name: 'Cunning Action',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  effects: [CharacterEffects.descriptive('On your turn, you can take the **Dash**, **Disengage**, or **Hide** action as a Bonus Action.')],
  actions: [{ name: 'Use Cunning Action', action: ActionTypes.BonusAction }],
})

export const RogueSubclass = Tags.defineTraitTag('rogue/subclass', { name: 'Rogue Subclass' })
export const SelectRogueSubclass = CharacterOptions.selectTraitOption('rogue/select-subclass', {
  name: 'Rogue Subclass',
  filter: { tags: [RogueSubclass] },
})

export const Level3 = Traits.defineTrait('rogue/level-3', {
  name: 'Rogue (3)',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  tags: [Class],
  effects: [
    CharacterEffects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(5))),
    CharacterEffects.gainCharacterOption(SelectRogueSubclass),
  ],
})

export const SteadyAim = Abilities.defineAbility('rogue/steady-aim', {
  name: 'Steady Aim',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  effects: [
    CharacterEffects.descriptive(
      "As a **Bonus Action**, if you haven't moved this turn, you give yourself Advantage on your next attack roll this turn. Your Speed is then 0 until the end of the turn."
    ),
  ],
  actions: [{ name: 'Use Steady Aim', action: ActionTypes.BonusAction }],
})

export const Level4 = Traits.defineTrait('rogue/level-4', {
  name: 'Rogue (4)',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  tags: [Class],
  effects: [
    CharacterEffects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(5))),
    // Ability Score Improvement
    CharacterEffects.gainCharacterOption(SelectFeat),
  ],
})

export const CunningStrike = Traits.defineTrait('rogue/cunning-strike', {
  name: 'Cunning Strike',
  description:
    "When you deal Sneak Attack damage, you can give up dice of it to add an effect (save DC 8 + your Dexterity modifier + Proficiency Bonus):\n\n**Poison (1d6):** the target must pass a Constitution save or be Poisoned for 1 minute, repeating the save each turn. You need a Poisoner's Kit.\n\n**Trip (1d6):** a Large or smaller target must pass a Dexterity save or fall Prone.\n\n**Withdraw (1d6):** right after the attack, you move up to half your Speed without provoking Opportunity Attacks.",
  effects: [],
})

export const Level5 = Traits.defineTrait('rogue/level-5', {
  name: 'Rogue (5)',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  tags: [Class],
  effects: [
    CharacterEffects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(5))),
    CharacterEffects.gainTrait(CunningStrike),
  ],
})

export const UncannyDodge = Abilities.defineAbility('rogue/uncanny-dodge', {
  name: 'Uncanny Dodge',
  prerequisites: [Traits.traitPrerequisite(Level5)],
  effects: [CharacterEffects.descriptive('When an attacker you can see hits you, you can use your **Reaction** to halve the damage (rounded down).')],
  actions: [{ name: 'Use Uncanny Dodge', action: ActionTypes.Reaction }],
})

export const SelectArcaneTricksterCantrip = CharacterOptions.selectAbilityOption('rogue/select-arcane-trickster-cantrip', {
  name: 'Cantrips',
  filter: {
    tags: [Wizard, Spells.Cantrip],
  },
})

export const SelectArcaneTricksterSpell = CharacterOptions.selectAbilityOption('rogue/select-arcane-trickster-spell', {
  name: 'Prepared Spells',
  filter: {
    tags: [Wizard, [Spells.Rank1]],
  },
})

export const MageHandLegerdemain = Traits.defineTrait('rogue/mage-hand-legerdemain', {
  name: 'Mage Hand Legerdemain',
  description:
    'You can cast **Mage Hand** as a Bonus Action and make the hand Invisible. You can control it as a Bonus Action, and make Dexterity (Sleight of Hand) checks through it.',
  effects: [
    CharacterEffects.modifyAbility(
      Spells.MageHand,
      Attributes.modifier(
        Patches.patch<AbilityPatchProps>({
          effects: Patches.concatenate([
            CharacterEffects.descriptive(
              '**Mage Hand Legerdemain:** you can cast it as a Bonus Action and make the hand Invisible, control it as a Bonus Action, and make Dexterity (Sleight of Hand) checks through it.'
            ),
          ]),
          actions: Patches.concatenate([{ name: 'Cast Mage Hand (Legerdemain)', action: ActionTypes.BonusAction }]),
        })
      )
    ),
  ],
})

export const ArcaneTrickster = Traits.defineTrait('rogue/arcane-trickster', {
  name: 'Arcane Trickster',
  description: 'Rogues who sharpen their stealth and agility with **arcane spells**, whether as burglars, pickpockets, or pranksters.',
  tags: [RogueSubclass],
  effects: [
    CharacterEffects.gainAbility(Spells.MageHand),
    CharacterEffects.gainCharacterOption(SelectArcaneTricksterCantrip),
    CharacterEffects.gainCharacterOption(SelectArcaneTricksterCantrip),
    CharacterEffects.gainCharacterOption(SelectArcaneTricksterSpell),
    CharacterEffects.gainCharacterOption(SelectArcaneTricksterSpell),
    CharacterEffects.gainCharacterOption(SelectArcaneTricksterSpell),
    CharacterEffects.conditional(Traits.traitPrerequisite(Level4), [CharacterEffects.gainCharacterOption(SelectArcaneTricksterSpell)]),
    CharacterEffects.gainTrait(MageHandLegerdemain),
  ],
})

export const ArcaneTricksterSpellcasting = Abilities.defineAbility('rogue/arcane-trickster-spellcasting', {
  name: 'Spellcasting',
  prerequisites: [Traits.traitPrerequisite(ArcaneTrickster)],
  effects: [
    CharacterEffects.descriptive(
      'You cast Wizard spells using **Intelligence**, with an Arcane Focus as your focus. You know **Mage Hand** and two other Wizard cantrips, and can swap one of the others when you gain a Rogue level.'
    ),
    CharacterEffects.descriptive(
      'You prepare a list of level 1 Wizard spells you can cast with your spell slots: 3 at Rogue level 3 and 4 at level 4. When you gain a Rogue level, you can swap one of them for another Wizard spell you have slots for. You regain all spell slots on a Long Rest.'
    ),
  ],
})

export const Assassinate = Traits.defineTrait('rogue/assassinate', {
  name: 'Assassinate',
  description:
    "**Initiative:** you have Advantage on Initiative rolls.\n\n**Surprising Strikes:** during the first round of each combat, you have Advantage on attacks against creatures that haven't taken a turn, and a Sneak Attack that round deals extra damage equal to your Rogue level.",
  effects: [],
})

export const AssassinsTools = Traits.defineTrait('rogue/assassins-tools', {
  name: "Assassin's Tools",
  description: "You gain a **Disguise Kit** and a **Poisoner's Kit**, and proficiency with both.",
  effects: [],
})

export const Assassin = Traits.defineTrait('rogue/assassin', {
  name: 'Assassin',
  description: 'Rogues trained to eliminate foes with **stealth, poison, and disguise**, from hired killers to spies and bounty hunters.',
  tags: [RogueSubclass],
  effects: [CharacterEffects.gainTrait(Assassinate), CharacterEffects.gainTrait(AssassinsTools)],
})

export const PsionicPower = Abilities.defineAbility('rogue/psionic-power', {
  name: 'Psionic Power',
  // Soulknife is referenced by id, since it grants Psionic Power (Level 5), which needs this ability first
  prerequisites: [Traits.traitPrerequisite(RulesetEntities.buildReference(RulesetEntities.RulesetEntityType.Trait, 'rogue/soulknife'))],
  effects: [
    CharacterEffects.descriptive(
      'You have **Psionic Energy Dice** that fuel your Soulknife powers: four d6s, becoming six d8s at Rogue level 5. You regain one on a Short Rest and all of them on a Long Rest.'
    ),
  ],
  resource: {
    size: 4,
    refresh: [
      { period: GameTimeUnit.ShortRest, amount: 1 },
      { period: GameTimeUnit.LongRest, amount: RelativeAmount.All },
    ],
  },
  costs: [{ cost: 1 }],
  actions: [
    {
      name: 'Psi-Bolstered Knack',
      description:
        'When you fail an ability check using a skill or tool you are proficient with, roll a die and add it to the check. The die is only spent if the check then succeeds.',
      action: ActionTypes.Free,
    },
    {
      name: 'Psychic Whispers',
      description:
        'As a Magic action, choose up to a number of creatures you can see equal to your Proficiency Bonus and roll a die. For that many hours, you and they can speak telepathically within 1 mile.',
      action: ActionTypes.Action,
    },
  ],
})

export const Soulknife = Traits.defineTrait('rogue/soulknife', {
  name: 'Soulknife',
  description: 'Rogues who strike with the **mind**, channelling psionic power into blades that cut through physical and psychic barriers alike.',
  tags: [RogueSubclass],
  effects: [
    CharacterEffects.conditional(Traits.traitPrerequisite(Level5), [
      CharacterEffects.modifyResourcePool(PsionicPower.resource, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(2) }))),
    ]),
  ],
})

export const PsychicBlades = Abilities.defineAbility('rogue/psychic-blades', {
  name: 'Psychic Blades',
  prerequisites: [Traits.traitPrerequisite(Soulknife)],
  effects: [
    CharacterEffects.descriptive(
      'When you take the Attack action or make an Opportunity Attack, you can attack with a **Psychic Blade** made in your free hand: a Simple Melee weapon with Finesse and Thrown (60/120 feet), dealing **1d6 Psychic** damage plus your ability modifier. You can use its Vex mastery property without it counting against your Weapon Mastery. The blade vanishes after the attack.'
    ),
    CharacterEffects.descriptive(
      'After attacking with a blade on your turn, you can attack with a second blade as a **Bonus Action** if your other hand is free, dealing 1d4 instead of 1d6.'
    ),
  ],
  actions: [
    { name: 'Attack with a Psychic Blade', action: ActionTypes.Action },
    { name: 'Attack with a Second Blade', action: ActionTypes.BonusAction },
  ],
})

export const SecondStoryWork = Traits.defineTrait('rogue/second-story-work', {
  name: 'Second-Story Work',
  description:
    '**Climber:** you gain a Climb Speed equal to your Speed.\n\n**Jumper:** you can use Dexterity instead of Strength to work out your jump distance.',
  effects: [],
})

export const Thief = Traits.defineTrait('rogue/thief', {
  name: 'Thief',
  description: 'The classic adventurer: part **burglar, treasure hunter, and explorer**, at home delving into ruins.',
  tags: [RogueSubclass],
  effects: [CharacterEffects.gainTrait(SecondStoryWork)],
})

export const FastHands = Abilities.defineAbility('rogue/fast-hands', {
  name: 'Fast Hands',
  prerequisites: [Traits.traitPrerequisite(Thief)],
  effects: [
    CharacterEffects.descriptive(
      'As a **Bonus Action**, you can make a Dexterity (Sleight of Hand) check to pick a lock, disarm a trap, or pick a pocket, or take the Utilize action or the Magic action to use a magic item.'
    ),
  ],
  actions: [{ name: 'Use Fast Hands', action: ActionTypes.BonusAction }],
})
