import { Abilities, Attributes, CharacterEffects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { ResourcePool } from '@simulacrum/ruleset/resource-pool'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { ClassFeat, Feat, FeatLevel1, FeatLevel2, FeatLevel4, FeatLevel6, FeatLevel8, FeatLevel10, WizardFeat } from '@simulacrum/ruleset-pf2e/tag'
import { ExpertDeception, TrainedArcana } from '@simulacrum/ruleset-pf2e/skill'
import { FocusPoints } from '@simulacrum/ruleset-pf2e/spellcasting'
import * as WizardFocusSpells from '@simulacrum/ruleset-pf2e/class/wizard-focus-spell'
import { SelectFamiliarAbility } from '@simulacrum/ruleset-pf2e/companion/familiar'
import { ArcaneBond } from '@simulacrum/ruleset-pf2e/class/wizard-feature'
import {
  ArcaneSchoolFeature,
  ArsGrammatica,
  BattleMagic,
  Boundary,
  CivicWizardry,
  Mentalism,
  ProteanForm,
  UnifiedMagicalTheory,
} from '@simulacrum/ruleset-pf2e/class/wizard-school'

export const Familiar = Traits.defineTrait('feat/familiar', {
  name: 'Familiar',
  description:
    '*Magus, Sorcerer, Thaumaturge, Wizard*\n\nYou make a pact with a creature that serves you and assists your spellcasting. You gain a familiar.',
  tags: [Feat, ClassFeat, WizardFeat, FeatLevel1],
  effects: [CharacterEffects.gainCharacterOption(SelectFamiliarAbility), CharacterEffects.gainCharacterOption(SelectFamiliarAbility)],
})

export const SpellbookProdigy = Traits.defineTrait('feat/spellbook-prodigy', {
  name: 'Spellbook Prodigy',
  description:
    '*Wizard*\n\n**Prerequisites** Trained in [Arcana](characteristic:skill/arcana)\n\nYou are particularly adept at learning spells to add to your spellbook. You gain the [Magical Shorthand](trait:feat/magical-shorthand) skill feat without needing to meet its prerequisites. Further, when you roll a critical failure on your check to [Learn a Spell](content:skills/learn-a-spell), you get a failure instead.',
  tags: [Feat, ClassFeat, WizardFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(TrainedArcana)],
  effects: [],
})

export const EnergyAblation = Traits.defineTrait('feat/energy-ablation', {
  name: 'Energy Ablation',
  description:
    '*Spellshape, Wizard*\n\nAs you direct destructive energy at a foe, you can divert some of its power into a protective barrier that shields you from harm. If your next action is to [Cast a Spell](content:spells/cast-a-spell) that deals at least one type of energy damage (acid, cold, electricity, fire, force, sonic, vitality, or void), you gain resistance to an energy damage type of your choice equal to the spell’s rank. The resistance lasts until the end of your next turn. You get the resistance regardless of whether or not your spell dealt damage.',
  tags: [Feat, ClassFeat, WizardFeat, FeatLevel2],
  effects: [],
})

export const EnergyAblationAction = Abilities.defineAbility('feat/energy-ablation/action', {
  name: 'Energy Ablation',
  description: '*Spellshape, Wizard*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(EnergyAblation)],
  actions: [
    {
      name: 'Energy Ablation',
      description:
        'As you direct destructive energy at a foe, you can divert some of its power into a protective barrier that shields you from harm. If your next action is to [Cast a Spell](content:spells/cast-a-spell) that deals at least one type of energy damage (acid, cold, electricity, fire, force, sonic, vitality, or void), you gain resistance to an energy damage type of your choice equal to the spell’s rank. The resistance lasts until the end of your next turn. You get the resistance regardless of whether or not your spell dealt damage.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const NonlethalSpell = Traits.defineTrait('feat/nonlethal-spell', {
  name: 'Nonlethal Spell',
  description:
    "*Manipulate, Spellshape, Wizard*\n\nYou can alter offensive spells to be less deadly. If your next action is to [Cast a Spell](content:spells/cast-a-spell) that deals damage and doesn't have the death or void trait, that spell gains the [nonlethal](content:traits/nonlethal) trait.",
  tags: [Feat, ClassFeat, WizardFeat, FeatLevel2],
  effects: [],
})

export const NonlethalSpellAction = Abilities.defineAbility('feat/nonlethal-spell/action', {
  name: 'Nonlethal Spell',
  description: '*Manipulate, Spellshape, Wizard*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(NonlethalSpell)],
  actions: [
    {
      name: 'Nonlethal Spell',
      description:
        "You can alter offensive spells to be less deadly. If your next action is to [Cast a Spell](content:spells/cast-a-spell) that deals damage and doesn't have the death or void trait, that spell gains the [nonlethal](content:traits/nonlethal) trait.",
      action: ActionTypes.SingleAction,
    },
  ],
})

export const BespellStrikes = Traits.defineTrait('feat/bespell-strikes', {
  name: 'Bespell Strikes',
  description:
    '*Oracle, Sorcerer, Wizard*\n\n**Frequency** once per turn\n\n**Requirements** Your most recent action was to cast a non-cantrip spell\n\nYou siphon spell energy into one weapon you’re wielding, or into one of your unarmed attacks, such as a fist. Until the end of your turn, the weapon or unarmed attack deals an extra 1d6 force damage and gains the associated trait (see below) if it didn’t have it already. If the spell dealt a different type of damage, the [Strike](content:playing-the-game/strike) deals this type of damage instead (or one type of your choice if the spell could deal multiple types of damage).\n\n**Oracle**: Your strike gains the [divine](content:traits/divine) trait.\n\n**Sorcerer:** Your strike gains the trait of your bloodline’s magical tradition.\n\n**Wizard**: Your strike gains the [arcane](content:traits/arcane) trait.',
  tags: [Feat, ClassFeat, WizardFeat, FeatLevel4],
  effects: [],
})

export const BespellStrikesAction = Abilities.defineAbility('feat/bespell-strikes/action', {
  name: 'Bespell Strikes',
  description: '*Oracle, Sorcerer, Wizard*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(BespellStrikes)],
  actions: [
    {
      name: 'Bespell Strikes',
      description:
        '**Frequency** once per turn\n\n**Requirements** Your most recent action was to cast a non-cantrip spell\n\nYou siphon spell energy into one weapon you’re wielding, or into one of your unarmed attacks, such as a fist. Until the end of your turn, the weapon or unarmed attack deals an extra 1d6 force damage and gains the associated trait (see below) if it didn’t have it already. If the spell dealt a different type of damage, the [Strike](content:playing-the-game/strike) deals this type of damage instead (or one type of your choice if the spell could deal multiple types of damage).\n\n**Oracle**: Your strike gains the [divine](content:traits/divine) trait.\n\n**Sorcerer:** Your strike gains the trait of your bloodline’s magical tradition.\n\n**Wizard**: Your strike gains the [arcane](content:traits/arcane) trait.',
      action: ActionTypes.FreeAction,
    },
  ],
})

export const CallWizardlyTools = Traits.defineTrait('feat/call-wizardly-tools', {
  name: 'Call Wizardly Tools',
  description:
    '*Concentrate, Teleportation, Wizard*\n\n**Prerequisites** [arcane bond](trait:wizard)\n\nYou’re mystically connected to your wizardly tools, ensuring you can always find them when you’ve misplaced them. You teleport your bonded item or spellbook to you. It arrives in your hand if you have a free hand or at your feet if you don’t. The item must be within 1 mile and have 1 Bulk or less.',
  tags: [Feat, ClassFeat, WizardFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(ArcaneBond)],
  effects: [],
})

export const CallWizardlyToolsAction = Abilities.defineAbility('feat/call-wizardly-tools/action', {
  name: 'Call Wizardly Tools',
  description: '*Concentrate, Teleportation, Wizard*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(CallWizardlyTools)],
  actions: [
    {
      name: 'Call Wizardly Tools',
      description:
        '**Prerequisites** [arcane bond](trait:wizard)\n\nYou’re mystically connected to your wizardly tools, ensuring you can always find them when you’ve misplaced them. You teleport your bonded item or spellbook to you. It arrives in your hand if you have a free hand or at your feet if you don’t. The item must be within 1 mile and have 1 Bulk or less.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const LinkedFocus = Traits.defineTrait('feat/linked-focus', {
  name: 'Linked Focus',
  description:
    '*Wizard*\n\n**Prerequisites** [arcane bond](trait:wizard); [arcane school](trait:wizard)\n\nYou have linked your bonded item to the well of energy that powers your school spells. Once per day when you Drain your Bonded Item to cast one of your arcane school’s curriculum spells, you also regain 1 Focus Point.',
  tags: [Feat, ClassFeat, WizardFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(ArcaneBond), Traits.traitPrerequisite(ArcaneSchoolFeature)],
  effects: [],
})

export const SpellProtectionArray = Traits.defineTrait('feat/spell-protection-array', {
  name: 'Spell Protection Array',
  description:
    '*Arcane, Manipulate, Wizard*\n\nYou inscribe a circle of arcane runes that dampen enemies’ magic. You create a glowing magic circle in a 5-foot burst within 30 feet. Creatures in the circle gain a +1 status bonus to saving throws against magic. The circle lasts until the end of your next turn, and you can [Sustain](content:playing-the-game/sustain) it, to a maximum duration of 1 minute.',
  tags: [Feat, ClassFeat, WizardFeat, FeatLevel4],
  effects: [],
})

export const SpellProtectionArrayAction = Abilities.defineAbility('feat/spell-protection-array/action', {
  name: 'Spell Protection Array',
  description: '*Arcane, Manipulate, Wizard*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(SpellProtectionArray)],
  actions: [
    {
      name: 'Spell Protection Array',
      description:
        'You inscribe a circle of arcane runes that dampen enemies’ magic. You create a glowing magic circle in a 5-foot burst within 30 feet. Creatures in the circle gain a +1 status bonus to saving throws against magic. The circle lasts until the end of your next turn, and you can [Sustain](content:playing-the-game/sustain) it, to a maximum duration of 1 minute.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const ConvincingIllusion = Traits.defineTrait('feat/convincing-illusion', {
  name: 'Convincing Illusion',
  description:
    '*Wizard*\n\n**Prerequisites** Expert in [Deception](characteristic:skill/deception)\n\n**Trigger** A creature succeeded, but didn’t critically succeed, at a [Perception](characteristic:perception) check or [Will save](characteristic:will) to disbelieve an illusion from a spell that you cast\n\n**Requirements** You are within 30 feet of the observer and the illusion\n\nYou use your deceptive skills to make your illusions seem even more real. Attempt a Deception check against the target’s Perception DC. If you succeed, the target fails to disbelieve the illusion.',
  tags: [Feat, ClassFeat, WizardFeat, FeatLevel6],
  prerequisites: [Traits.traitPrerequisite(ExpertDeception)],
  effects: [],
})

export const ConvincingIllusionAction = Abilities.defineAbility('feat/convincing-illusion/action', {
  name: 'Convincing Illusion',
  description: '*Wizard*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(ConvincingIllusion)],
  actions: [
    {
      name: 'Convincing Illusion',
      description:
        '**Prerequisites** Expert in [Deception](characteristic:skill/deception)\n\n**Trigger** A creature succeeded, but didn’t critically succeed, at a [Perception](characteristic:perception) check or [Will save](characteristic:will) to disbelieve an illusion from a spell that you cast\n\n**Requirements** You are within 30 feet of the observer and the illusion\n\nYou use your deceptive skills to make your illusions seem even more real. Attempt a Deception check against the target’s Perception DC. If you succeed, the target fails to disbelieve the illusion.',
      action: ActionTypes.Reaction,
    },
  ],
})

export const ExplosiveArrival = Traits.defineTrait('feat/explosive-arrival', {
  name: 'Explosive Arrival',
  description:
    '*Concentrate, Manipulate, Spellshape, Wizard*\n\nYour summoned creature appears in a detonation of arcane runes. If your next action is to [Cast a Spell](content:spells/cast-a-spell) with the summon trait, all creatures in a 10-foot emanation around the creature you summoned take 1d4 fire damage per spell rank. If the creature summoned has the acid, cold, electricity, sonic, or spirit trait, you can deal damage of that type instead.',
  tags: [Feat, ClassFeat, WizardFeat, FeatLevel6],
  effects: [],
})

export const ExplosiveArrivalAction = Abilities.defineAbility('feat/explosive-arrival/action', {
  name: 'Explosive Arrival',
  description: '*Concentrate, Manipulate, Spellshape, Wizard*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(ExplosiveArrival)],
  actions: [
    {
      name: 'Explosive Arrival',
      description:
        'Your summoned creature appears in a detonation of arcane runes. If your next action is to [Cast a Spell](content:spells/cast-a-spell) with the summon trait, all creatures in a 10-foot emanation around the creature you summoned take 1d4 fire damage per spell rank. If the creature summoned has the acid, cold, electricity, sonic, or spirit trait, you can deal damage of that type instead.',
      action: ActionTypes.FreeAction,
    },
  ],
})

export const IrresistibleMagic = Traits.defineTrait('feat/irresistible-magic', {
  name: 'Irresistible Magic',
  description:
    '*Wizard*\n\nYou’ve studied ways of overcoming the innate defenses against magic that dragons, otherworldly beings, and certain other powerful creatures have. Any creature that has a status bonus to saving throws against magic reduces that bonus by 1 against your spells.',
  tags: [Feat, ClassFeat, WizardFeat, FeatLevel6],
  effects: [],
})

export const SplitSlot = Traits.defineTrait('feat/split-slot', {
  name: 'Split Slot',
  description:
    '*Wizard*\n\nYou can prepare two spells in one slot, giving you the freedom to choose the spell when you cast it. When you prepare your spells for the day, you can choose one spell slot at least 1 rank lower than the highest-rank spell you can cast and prepare two spells in that slot. When you [Cast a Spell](content:spells/cast-a-spell) from that slot, choose which spell to cast. Once you’ve chosen, the unused spell dissipates as though you hadn’t prepared it at all—for example, it isn’t available for use with [Drain Bonded Item](ability:wizard/drain-bonded-item).',
  tags: [Feat, ClassFeat, WizardFeat, FeatLevel6],
  effects: [],
})

export const AdvancedSchoolSpell = Traits.defineTrait('feat/advanced-school-spell', {
  name: 'Advanced School Spell',
  description:
    '*Wizard*\n\nYou gain access to the advanced teachings of your arcane institution, learning a powerful new school spell. You gain the advanced school spell for your arcane school.',
  tags: [Feat, ClassFeat, WizardFeat, FeatLevel8],
  prerequisites: [Traits.traitPrerequisite(ArcaneSchoolFeature)],
  effects: [
    CharacterEffects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
    CharacterEffects.conditional(Traits.traitPrerequisite(ArsGrammatica), [CharacterEffects.gainAbility(WizardFocusSpells.RuneOfObservation)]),
    CharacterEffects.conditional(Traits.traitPrerequisite(BattleMagic), [CharacterEffects.gainAbility(WizardFocusSpells.EnergyAbsorption)]),
    CharacterEffects.conditional(Traits.traitPrerequisite(CivicWizardry), [CharacterEffects.gainAbility(WizardFocusSpells.CommunityRestoration)]),
    CharacterEffects.conditional(Traits.traitPrerequisite(Mentalism), [CharacterEffects.gainAbility(WizardFocusSpells.InvisibilityCloak)]),
    CharacterEffects.conditional(Traits.traitPrerequisite(ProteanForm), [CharacterEffects.gainAbility(WizardFocusSpells.ShiftingForm)]),
    CharacterEffects.conditional(Traits.traitPrerequisite(UnifiedMagicalTheory), [
      CharacterEffects.gainAbility(WizardFocusSpells.InterdisciplinaryIncantation),
    ]),
    CharacterEffects.conditional(Traits.traitPrerequisite(Boundary), [CharacterEffects.gainAbility(WizardFocusSpells.SpiralOfHorrors)]),
  ],
})

export const BondConservation = Traits.defineTrait('feat/bond-conservation', {
  name: 'Bond Conservation',
  description:
    '*Manipulate, Spellshape, Wizard*\n\n**Prerequisites** [arcane bond](trait:wizard/arcane-bond)\n\n**Requirements** The last action you used was to [Cast a Spell](content:spells/cast-a-spell) enabled by [Drain Bonded Item](ability:wizard/drain-bonded-item)\n\nBy efficiently and carefully manipulating the arcane energies unleashed by your bonded item, you can conserve just enough power to cast another spell, though this second spell is slightly weaker. You gain an extra use of Drain Bonded Item. You can use it to cast a spell 2 or more ranks lower than the previous spell, and must use it before the end of your next turn or you lose it.',
  tags: [Feat, ClassFeat, WizardFeat, FeatLevel8],
  prerequisites: [Traits.traitPrerequisite(ArcaneBond)],
  effects: [],
})

export const BondConservationAction = Abilities.defineAbility('feat/bond-conservation/action', {
  name: 'Bond Conservation',
  description: '*Manipulate, Spellshape, Wizard*',
  universal: true,
  prerequisites: [Traits.traitPrerequisite(BondConservation)],
  actions: [
    {
      name: 'Bond Conservation',
      description:
        '**Prerequisites** [arcane bond](trait:wizard/arcane-bond)\n\n**Requirements** The last action you used was to [Cast a Spell](content:spells/cast-a-spell) enabled by [Drain Bonded Item](ability:wizard/drain-bonded-item)\n\nBy efficiently and carefully manipulating the arcane energies unleashed by your bonded item, you can conserve just enough power to cast another spell, though this second spell is slightly weaker. You gain an extra use of Drain Bonded Item. You can use it to cast a spell 2 or more ranks lower than the previous spell, and must use it before the end of your next turn or you lose it.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const FormRetention = Traits.defineTrait('feat/form-retention', {
  name: 'Form Retention',
  description:
    '*Wizard*\n\nYou have trained your mind and body to tolerate polymorph magic for longer periods of time, so long as you prepare for the change appropriately. When preparing a polymorph spell that lasts 1 minute and grants a battle form, you can prepare the spell in a slot 2 ranks higher than normal. This doesn’t grant any of the normal benefits of heightening a spell, but the spell lasts up to 10 minutes. For example, if you prepared [_animal form_](ability:spell/animal-form) in a 4th-rank slot with Form Retention, you would cast a 2nd-rank animal form that lasts for up to 10 minutes. If the spell can be Dismissed, that doesn’t change.',
  tags: [Feat, ClassFeat, WizardFeat, FeatLevel8],
  effects: [],
})

export const KnowledgeIsPowerWizard = Traits.defineTrait('feat/knowledge-is-power-wizard', {
  name: 'Knowledge is Power (Wizard)',
  description:
    '*Wizard*\n\nYour academic knowledge about a creature allows you to subtly alter your magic to defeat them. When you critically succeed at a [Recall Knowledge](content:skills/recall-knowledge) check about a creature, you can invoke your knowledge to make the creature take a –1 circumstance penalty to either [AC](characteristic:armor-class) and saves against the next attack you make against it, or the next spell you cast that it needs to defend against. The creature takes the same penalty to its attack or DC the next time it attacks against you or causes you to attempt a save against one of its effects.\n\nIf you share this information with your allies, they gain the benefits as well. If not used, the bonuses end after 1 minute.',
  tags: [Feat, ClassFeat, WizardFeat, FeatLevel8],
  effects: [],
})

export const ScrollAdept = Traits.defineTrait('feat/scroll-adept', {
  name: 'Scroll Adept',
  description:
    '*Wizard*\n\nDuring your daily preparations, you can create two temporary scrolls containing arcane spells from your spellbook. Each scroll must be of a different spell rank, and both spell ranks must be 2 or more ranks lower than your highest-rank spell. Any scrolls you create this way become non-magical the next time you make your daily preparations. A temporary scroll has no value if sold. As normal for a scroll, these are consumable items of light Bulk, and someone holding the item in one hand can Cast the Spell from it if it’s on their spell list, using their [spell attack modifier](characteristic:spell-attack) and [spell DC](characteristic:spell-dc). Scrolls are detailed fully on page 262 of GM Core.\n\nIf you have master proficiency in spell DC, you can create three temporary scrolls during your daily preparations, and if you have legendary proficiency, you can create four temporary scrolls.',
  tags: [Feat, ClassFeat, WizardFeat, FeatLevel10],
  effects: [],
})

export const AllWizardFeatEntities = [
  Familiar,
  SpellbookProdigy,
  EnergyAblation,
  EnergyAblationAction,
  NonlethalSpell,
  NonlethalSpellAction,
  BespellStrikes,
  BespellStrikesAction,
  CallWizardlyTools,
  CallWizardlyToolsAction,
  LinkedFocus,
  SpellProtectionArray,
  SpellProtectionArrayAction,
  ConvincingIllusion,
  ConvincingIllusionAction,
  ExplosiveArrival,
  ExplosiveArrivalAction,
  IrresistibleMagic,
  SplitSlot,
  AdvancedSchoolSpell,
  BondConservation,
  BondConservationAction,
  FormRetention,
  KnowledgeIsPowerWizard,
  ScrollAdept,
]
