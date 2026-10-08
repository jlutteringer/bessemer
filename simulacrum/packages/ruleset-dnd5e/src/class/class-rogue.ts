import { Abilities, Archetypes, Attributes, Effects, Traits } from '@simulacrum/ruleset'
import * as SavingThrowProficiencies from '@simulacrum/ruleset-dnd5e/archetype/saving-throw-proficiency'
import { Class, Wizard } from '@simulacrum/ruleset-dnd5e/archetype'
import * as SkillProficiencies from '@simulacrum/ruleset-dnd5e/archetype/skill-proficiency'
import * as SkillExpertise from '@simulacrum/ruleset-dnd5e/archetype/skill-expertise'
import * as Spells from '@simulacrum/ruleset-dnd5e/archetype/spell'
import { SelectFeat } from '@simulacrum/ruleset-dnd5e/archetype/feat'
import { WeaponMasteryLoadout } from '@simulacrum/ruleset-dnd5e/loadout'
import { CharacterOptions } from '@simulacrum/ruleset'
import { PlayerCharacteristics } from '@simulacrum/ruleset-dnd5e/characteristic'
import { Ability, ActionType } from '@simulacrum/ruleset/ability'
import { ResourcePool } from '@simulacrum/ruleset/resource-pool'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import { Patches } from '@bessemer/cornerstone'

export const SelectSkillProficiency = CharacterOptions.selectTraitOption('rogue/select-skill-proficiency', {
  archetypes: [SkillProficiencies.SkillProficiency],
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
})

export const SelectExpertise = CharacterOptions.selectTraitOption('rogue/select-expertise', { archetypes: [SkillExpertise.SkillExpertise] })

export const SneakAttack = Traits.defineTrait('rogue/sneak-attack', {
  name: 'Sneak Attack',
  description:
    "<p>Once per turn, you can deal an extra <strong>1d6</strong> damage to a creature you hit with a Finesse or Ranged weapon attack if you have Advantage on the roll. You don't need Advantage if an ally who isn't Incapacitated is within 5 feet of the target and you don't have Disadvantage.</p><p>The extra damage increases as you gain Rogue levels: 2d6 at level 3 and 3d6 at level 5.</p>",
  effects: [],
})

export const ThievesCant = Traits.defineTrait('rogue/thieves-cant', {
  name: "Thieves' Cant",
  description: "<p>You know <strong>Thieves' Cant</strong> and one other language of your choice.</p>",
  effects: [],
})

export const WeaponMastery = Traits.defineTrait('rogue/weapon-mastery', {
  name: 'Weapon Mastery',
  description:
    '<p>You can use the mastery properties of <strong>two kinds</strong> of weapons you are proficient with, such as Daggers and Shortbows. Whenever you finish a Long Rest, you can change those choices.</p>',
  effects: [Effects.gainLoadoutSlot(WeaponMasteryLoadout), Effects.gainLoadoutSlot(WeaponMasteryLoadout)],
})

export const Level1 = Traits.defineTrait('rogue/level-1', {
  name: 'Rogue',
  description:
    "<p>A cunning expert in <strong>stealth, skill, and precision</strong>, striking where foes are weakest.</p><p><strong>Saving Throws:</strong> Dexterity and Intelligence. <strong>Armor:</strong> Light armor. <strong>Weapons:</strong> Simple weapons, and Martial weapons with the Finesse or Light property. <strong>Tools:</strong> Thieves' Tools.</p>",
  archetypes: [Class],
  effects: [
    Effects.gainTrait(SavingThrowProficiencies.Dexterity),
    Effects.gainTrait(SavingThrowProficiencies.Intelligence),
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(8))),
    Effects.gainCharacterOption(SelectSkillProficiency),
    Effects.gainCharacterOption(SelectSkillProficiency),
    Effects.gainCharacterOption(SelectSkillProficiency),
    Effects.gainCharacterOption(SelectSkillProficiency),
    Effects.gainCharacterOption(SelectExpertise),
    Effects.gainCharacterOption(SelectExpertise),
    Effects.gainTrait(SneakAttack),
    Effects.gainTrait(ThievesCant),
    Effects.gainTrait(WeaponMastery),
  ],
})

export const CunningAction = Abilities.defineAbility('rogue/cunning-action', {
  name: 'Cunning Action',
  effects: [
    Effects.descriptive(
      '<p>On your turn, you can take the <strong>Dash</strong>, <strong>Disengage</strong>, or <strong>Hide</strong> action as a Bonus Action.</p>'
    ),
  ],
  actions: [{ name: 'Use Cunning Action', action: ActionType.Bonus }],
})

export const Level2 = Traits.defineTrait('rogue/level-2', {
  name: 'Rogue (2)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  archetypes: [Class],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(5))), Effects.gainAbility(CunningAction)],
})

export const SteadyAim = Abilities.defineAbility('rogue/steady-aim', {
  name: 'Steady Aim',
  effects: [
    Effects.descriptive(
      "<p>As a <strong>Bonus Action</strong>, if you haven't moved this turn, you give yourself Advantage on your next attack roll this turn. Your Speed is then 0 until the end of the turn.</p>"
    ),
  ],
  actions: [{ name: 'Use Steady Aim', action: ActionType.Bonus }],
})

export const RogueSubclass = Archetypes.defineArchetype('rogue/subclass', { name: 'Rogue Subclass' })
export const SelectRogueSubclass = CharacterOptions.selectTraitOption('rogue/select-subclass', { archetypes: [RogueSubclass] })

export const Level3 = Traits.defineTrait('rogue/level-3', {
  name: 'Rogue (3)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(5))),
    Effects.gainCharacterOption(SelectRogueSubclass),
    Effects.gainAbility(SteadyAim),
  ],
})

export const Level4 = Traits.defineTrait('rogue/level-4', {
  name: 'Rogue (4)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(5))),
    // Ability Score Improvement
    Effects.gainCharacterOption(SelectFeat),
  ],
})

export const CunningStrike = Traits.defineTrait('rogue/cunning-strike', {
  name: 'Cunning Strike',
  description:
    "<p>When you deal Sneak Attack damage, you can give up dice of it to add an effect (save DC 8 + your Dexterity modifier + Proficiency Bonus):</p><p><strong>Poison (1d6):</strong> the target must pass a Constitution save or be Poisoned for 1 minute, repeating the save each turn. You need a Poisoner's Kit.</p><p><strong>Trip (1d6):</strong> a Large or smaller target must pass a Dexterity save or fall Prone.</p><p><strong>Withdraw (1d6):</strong> right after the attack, you move up to half your Speed without provoking Opportunity Attacks.</p>",
  effects: [],
})

export const UncannyDodge = Abilities.defineAbility('rogue/uncanny-dodge', {
  name: 'Uncanny Dodge',
  effects: [
    Effects.descriptive(
      '<p>When an attacker you can see hits you, you can use your <strong>Reaction</strong> to halve the damage (rounded down).</p>'
    ),
  ],
  actions: [{ name: 'Use Uncanny Dodge', action: ActionType.Reaction }],
})

export const Level5 = Traits.defineTrait('rogue/level-5', {
  name: 'Rogue (5)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(5))),
    Effects.gainTrait(CunningStrike),
    Effects.gainAbility(UncannyDodge),
  ],
})

export const SelectArcaneTricksterCantrip = CharacterOptions.selectAbilityOption(
  'rogue/select-arcane-trickster-cantrip',
  { archetypes: [Wizard, Spells.Cantrip] },
  'Cantrips'
)

export const SelectArcaneTricksterSpell = CharacterOptions.selectAbilityOption(
  'rogue/select-arcane-trickster-spell',
  { archetypes: [Wizard, [Spells.Rank1]] },
  'Prepared Spells'
)

export const ArcaneTricksterSpellcasting = Abilities.defineAbility('rogue/arcane-trickster-spellcasting', {
  name: 'Spellcasting',
  effects: [
    Effects.descriptive(
      '<p>You cast Wizard spells using <strong>Intelligence</strong>, with an Arcane Focus as your focus. You know <strong>Mage Hand</strong> and two other Wizard cantrips, and can swap one of the others when you gain a Rogue level.</p>'
    ),
    Effects.descriptive(
      '<p>You prepare a list of level 1 Wizard spells you can cast with your spell slots: 3 at Rogue level 3 and 4 at level 4. When you gain a Rogue level, you can swap one of them for another Wizard spell you have slots for. You regain all spell slots on a Long Rest.</p>'
    ),
  ],
})

export const ArcaneTricksterSpellsLevel4 = Traits.defineTrait('rogue/arcane-trickster-spells-level-4', {
  name: 'Arcane Trickster Spells (Level 4)',
  description: '<p>You prepare <strong>one more</strong> level 1 Wizard spell.</p>',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  effects: [Effects.gainCharacterOption(SelectArcaneTricksterSpell)],
})

export const MageHandLegerdemain = Traits.defineTrait('rogue/mage-hand-legerdemain', {
  name: 'Mage Hand Legerdemain',
  description:
    '<p>You can cast <strong>Mage Hand</strong> as a Bonus Action and make the hand Invisible. You can control it as a Bonus Action, and make Dexterity (Sleight of Hand) checks through it.</p>',
  effects: [
    Effects.modifyAbility(
      Spells.MageHand,
      Attributes.modifier(
        Patches.patch<Ability>({
          effects: Patches.concatenate([
            Effects.descriptive(
              '<p><strong>Mage Hand Legerdemain:</strong> you can cast it as a Bonus Action and make the hand Invisible, control it as a Bonus Action, and make Dexterity (Sleight of Hand) checks through it.</p>'
            ),
          ]),
          actions: Patches.concatenate([{ name: 'Cast Mage Hand (Legerdemain)', description: null, action: ActionType.Bonus, costs: [], targeting: {} }]),
        })
      )
    ),
  ],
})

export const ArcaneTrickster = Traits.defineTrait('rogue/arcane-trickster', {
  name: 'Arcane Trickster',
  description:
    '<p>Rogues who sharpen their stealth and agility with <strong>arcane spells</strong>, whether as burglars, pickpockets, or pranksters.</p>',
  archetypes: [RogueSubclass],
  effects: [
    Effects.gainAbility(ArcaneTricksterSpellcasting),
    Effects.gainAbility(Spells.MageHand),
    Effects.gainCharacterOption(SelectArcaneTricksterCantrip),
    Effects.gainCharacterOption(SelectArcaneTricksterCantrip),
    Effects.gainCharacterOption(SelectArcaneTricksterSpell),
    Effects.gainCharacterOption(SelectArcaneTricksterSpell),
    Effects.gainCharacterOption(SelectArcaneTricksterSpell),
    Effects.gainTrait(ArcaneTricksterSpellsLevel4),
    Effects.gainTrait(MageHandLegerdemain),
  ],
})

export const Assassinate = Traits.defineTrait('rogue/assassinate', {
  name: 'Assassinate',
  description:
    "<p><strong>Initiative:</strong> you have Advantage on Initiative rolls.</p><p><strong>Surprising Strikes:</strong> during the first round of each combat, you have Advantage on attacks against creatures that haven't taken a turn, and a Sneak Attack that round deals extra damage equal to your Rogue level.</p>",
  effects: [],
})

export const AssassinsTools = Traits.defineTrait('rogue/assassins-tools', {
  name: "Assassin's Tools",
  description: "<p>You gain a <strong>Disguise Kit</strong> and a <strong>Poisoner's Kit</strong>, and proficiency with both.</p>",
  effects: [],
})

export const Assassin = Traits.defineTrait('rogue/assassin', {
  name: 'Assassin',
  description:
    '<p>Rogues trained to eliminate foes with <strong>stealth, poison, and disguise</strong>, from hired killers to spies and bounty hunters.</p>',
  archetypes: [RogueSubclass],
  effects: [Effects.gainTrait(Assassinate), Effects.gainTrait(AssassinsTools)],
})

export const PsionicPower = Abilities.defineAbility('rogue/psionic-power', {
  name: 'Psionic Power',
  effects: [
    Effects.descriptive(
      '<p>You have <strong>Psionic Energy Dice</strong> that fuel your Soulknife powers: four d6s, becoming six d8s at Rogue level 5. You regain one on a Short Rest and all of them on a Long Rest.</p>'
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
        '<p>When you fail an ability check using a skill or tool you are proficient with, roll a die and add it to the check. The die is only spent if the check then succeeds.</p>',
      action: ActionType.Free,
    },
    {
      name: 'Psychic Whispers',
      description:
        '<p>As a Magic action, choose up to a number of creatures you can see equal to your Proficiency Bonus and roll a die. For that many hours, you and they can speak telepathically within 1 mile.</p>',
      action: ActionType.Standard,
    },
  ],
})

export const PsychicBlades = Abilities.defineAbility('rogue/psychic-blades', {
  name: 'Psychic Blades',
  effects: [
    Effects.descriptive(
      '<p>When you take the Attack action or make an Opportunity Attack, you can attack with a <strong>Psychic Blade</strong> made in your free hand: a Simple Melee weapon with Finesse and Thrown (60/120 feet), dealing <strong>1d6 Psychic</strong> damage plus your ability modifier. You can use its Vex mastery property without it counting against your Weapon Mastery. The blade vanishes after the attack.</p>'
    ),
    Effects.descriptive(
      '<p>After attacking with a blade on your turn, you can attack with a second blade as a <strong>Bonus Action</strong> if your other hand is free, dealing 1d4 instead of 1d6.</p>'
    ),
  ],
  actions: [
    { name: 'Attack with a Psychic Blade', action: ActionType.Standard },
    { name: 'Attack with a Second Blade', action: ActionType.Bonus },
  ],
})

export const PsionicPowerLevel5 = Traits.defineTrait('rogue/psionic-power-level-5', {
  name: 'Psionic Power (Level 5)',
  description: '<p>You have <strong>six</strong> Psionic Energy Dice, and they become <strong>d8s</strong>.</p>',
  prerequisites: [Traits.traitPrerequisite(Level5)],
  effects: [Effects.modifyResourcePool(PsionicPower.resource, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(2) })))],
})

export const Soulknife = Traits.defineTrait('rogue/soulknife', {
  name: 'Soulknife',
  description:
    '<p>Rogues who strike with the <strong>mind</strong>, channelling psionic power into blades that cut through physical and psychic barriers alike.</p>',
  archetypes: [RogueSubclass],
  effects: [Effects.gainAbility(PsionicPower), Effects.gainAbility(PsychicBlades), Effects.gainTrait(PsionicPowerLevel5)],
})

export const FastHands = Abilities.defineAbility('rogue/fast-hands', {
  name: 'Fast Hands',
  effects: [
    Effects.descriptive(
      '<p>As a <strong>Bonus Action</strong>, you can make a Dexterity (Sleight of Hand) check to pick a lock, disarm a trap, or pick a pocket, or take the Utilize action or the Magic action to use a magic item.</p>'
    ),
  ],
  actions: [{ name: 'Use Fast Hands', action: ActionType.Bonus }],
})

export const SecondStoryWork = Traits.defineTrait('rogue/second-story-work', {
  name: 'Second-Story Work',
  description:
    '<p><strong>Climber:</strong> you gain a Climb Speed equal to your Speed.</p><p><strong>Jumper:</strong> you can use Dexterity instead of Strength to work out your jump distance.</p>',
  effects: [],
})

export const Thief = Traits.defineTrait('rogue/thief', {
  name: 'Thief',
  description: '<p>The classic adventurer: part <strong>burglar, treasure hunter, and explorer</strong>, at home delving into ruins.</p>',
  archetypes: [RogueSubclass],
  effects: [Effects.gainAbility(FastHands), Effects.gainTrait(SecondStoryWork)],
})
