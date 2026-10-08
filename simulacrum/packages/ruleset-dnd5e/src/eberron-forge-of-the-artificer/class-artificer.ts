import { Abilities, Archetypes, Attributes, CharacterOptions, Effects, Loadout, Traits } from '@simulacrum/ruleset'
import { ActionType } from '@simulacrum/ruleset/ability'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import { NumericExpressions } from '@bessemer/cornerstone/expression'
import { Patches } from '@bessemer/cornerstone'
import { Class } from '@simulacrum/ruleset-dnd5e/archetype'
import * as SavingThrowProficiencies from '@simulacrum/ruleset-dnd5e/archetype/saving-throw-proficiency'
import * as SkillProficiencies from '@simulacrum/ruleset-dnd5e/archetype/skill-proficiency'
import * as ArtisansTools from '@simulacrum/ruleset-dnd5e/archetype/artisans-tools'
import * as Tools from '@simulacrum/ruleset-dnd5e/archetype/tool'
import * as Spells from '@simulacrum/ruleset-dnd5e/archetype/spell'
import { SelectFeat } from '@simulacrum/ruleset-dnd5e/archetype/feat'
import { PlayerCharacteristics } from '@simulacrum/ruleset-dnd5e/characteristic'
import * as Fighter from '@simulacrum/ruleset-dnd5e/class/class-fighter'
import { HomunculusServant } from '@simulacrum/ruleset-dnd5e/eberron-forge-of-the-artificer/spell'
import { SelectMagicItemPlan } from '@simulacrum/ruleset-dnd5e/eberron-forge-of-the-artificer/magic-item-plan'

// FUTURE spell slots and Artificer levels 6+ aren't modelled yet

// The existing spells can't be tagged with an Artificer archetype from an extension, so the spell list is named explicitly
export const CantripList = [
  Spells.AcidSplash,
  Spells.DancingLights,
  Spells.Elementalism,
  Spells.FireBolt,
  Spells.Guidance,
  Spells.Light,
  Spells.MageHand,
  Spells.Message,
  Spells.PoisonSpray,
  Spells.Prestidigitation,
  Spells.RayOfFrost,
  Spells.Resistance,
  Spells.ShockingGrasp,
  Spells.SpareTheDying,
  Spells.ThornWhip,
  Spells.Thunderclap,
  Spells.TrueStrike,
]

export const SpellList = [
  Spells.Alarm,
  Spells.CureWounds,
  Spells.DetectMagic,
  Spells.DisguiseSelf,
  Spells.ExpeditiousRetreat,
  Spells.FaerieFire,
  Spells.FalseLife,
  Spells.FeatherFall,
  Spells.Grease,
  Spells.Identify,
  Spells.Jump,
  Spells.Longstrider,
  Spells.PurifyFoodAndDrink,
  Spells.Sanctuary,
  Spells.Aid,
  Spells.AlterSelf,
  Spells.ArcaneLock,
  Spells.ArcaneVigor,
  Spells.Blur,
  Spells.ContinualFlame,
  Spells.Darkvision,
  Spells.DragonsBreath,
  Spells.EnhanceAbility,
  Spells.EnlargeReduce,
  Spells.HeatMetal,
  HomunculusServant,
  Spells.Invisibility,
  Spells.LesserRestoration,
  Spells.Levitate,
  Spells.MagicMouth,
  Spells.MagicWeapon,
  Spells.ProtectionFromPoison,
  Spells.RopeTrick,
  Spells.SeeInvisibility,
  Spells.SpiderClimb,
  Spells.Web,
]

export const SelectSkillProficiency = CharacterOptions.selectTraitOption('artificer/select-skill-proficiency', {
  archetypes: [SkillProficiencies.SkillProficiency],
  specificOptions: [
    SkillProficiencies.Arcana,
    SkillProficiencies.History,
    SkillProficiencies.Investigation,
    SkillProficiencies.Medicine,
    SkillProficiencies.Nature,
    SkillProficiencies.Perception,
    SkillProficiencies.SleightOfHand,
  ],
})

export const SelectCantrip = CharacterOptions.selectAbilityOption('artificer/select-cantrip', { specificOptions: CantripList }, 'Cantrips')

export const SelectSpellUpToRank1 = CharacterOptions.selectAbilityOption(
  'artificer/select-spell-up-to-rank-1',
  { archetypes: [[Spells.Rank1]], specificOptions: SpellList },
  'Prepared Spells'
)

export const SelectSpellUpToRank2 = CharacterOptions.selectAbilityOption(
  'artificer/select-spell-up-to-rank-2',
  { archetypes: [[Spells.Rank1, Spells.Rank2]], specificOptions: SpellList },
  'Prepared Spells'
)

const IntelligenceModifierUses = NumericExpressions.max([PlayerCharacteristics.IntelligenceModifier.variable, 1])

export const Spellcasting = Abilities.defineAbility('artificer/spellcasting', {
  name: 'Spellcasting',
  effects: [
    Effects.descriptive(
      "<p>You cast Artificer spells using <strong>Intelligence</strong>, producing them through tools: you must hold Thieves' Tools, Tinker's Tools, or Artisan's Tools you're proficient with as your Spellcasting Focus. You know two cantrips, and can replace one with another Artificer cantrip after a Long Rest.</p>"
    ),
    Effects.descriptive(
      '<p>You prepare a list of Artificer spells you can cast with your spell slots: 2 at level 1, rising to 6 by level 5. You can change the list after each Long Rest. You regain all spell slots on a Long Rest.</p>'
    ),
  ],
})

export const TinkersMagic = Abilities.defineAbility('artificer/tinkers-magic', {
  name: "Tinker's Magic",
  effects: [
    Effects.descriptive(
      "<p>As a <strong>Magic action</strong> while holding Tinker's Tools, you create one item in an unoccupied space within 5 feet of you: Ball Bearings, a Basket, Bedroll, Bell, Blanket, Block and Tackle, Glass Bottle, Bucket, Caltrops, Candle, Crowbar, Flask, Grappling Hook, Hunting Trap, Jug, Lamp, Manacles, Net, Oil, Paper, Parchment, Pole, Pouch, Rope, Sack, Shovel, Iron Spikes, String, a Tinderbox, Torch, or Vial. It lasts until you finish a Long Rest, when it vanishes.</p><p>You can do this a number of times equal to your Intelligence modifier (minimum once), regaining all uses on a Long Rest. You also know the <strong>Mending</strong> cantrip.</p>"
    ),
  ],
  resource: { size: IntelligenceModifierUses, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
  actions: [{ name: "Use Tinker's Magic", action: ActionType.Standard }],
})

export const Level1 = Traits.defineTrait('artificer/level-1', {
  name: 'Artificer',
  description:
    "<p>A master of invention who uses ingenuity and magic to unlock extraordinary capabilities in objects, casting spells through tools with <strong>Intelligence</strong>.</p><p><strong>Saving Throws:</strong> Constitution and Intelligence. <strong>Armor:</strong> Light and Medium armor, and Shields. <strong>Weapons:</strong> Simple weapons. <strong>Tools:</strong> Thieves' Tools, Tinker's Tools, and one type of Artisan's Tools of your choice.</p>",
  archetypes: [Class],
  effects: [
    Effects.gainTrait(SavingThrowProficiencies.Constitution),
    Effects.gainTrait(SavingThrowProficiencies.Intelligence),
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(8))),
    Effects.gainCharacterOption(SelectSkillProficiency),
    Effects.gainCharacterOption(SelectSkillProficiency),
    Effects.gainTrait(Tools.ThievesTools),
    Effects.gainTrait(ArtisansTools.TinkersTools),
    Effects.gainCharacterOption(ArtisansTools.SelectArtisansTools),
    Effects.gainCharacterOption(SelectCantrip),
    Effects.gainCharacterOption(SelectCantrip),
    Effects.gainCharacterOption(SelectSpellUpToRank1),
    Effects.gainCharacterOption(SelectSpellUpToRank1),
    Effects.gainAbility(Spellcasting),
    Effects.gainAbility(TinkersMagic),
    Effects.gainAbility(Spells.Mending),
  ],
})

export const ReplicateMagicItem = Abilities.defineAbility('artificer/replicate-magic-item', {
  name: 'Replicate Magic Item',
  effects: [
    Effects.descriptive(
      "<p>You know <strong>four plans</strong> for making magic items, and can replace one with another plan you qualify for whenever you gain an Artificer level.</p><p>When you finish a Long Rest with Tinker's Tools in hand, you can create one or two different magic items, each from a different plan you know, and attune to them instantly if they require it. You can have no more than <strong>two</strong> items from this feature at once; creating another makes the oldest vanish.</p><p>The items vanish 1d4 days after you die, or immediately if you replace their plan. You can use a Wand or Weapon made this way as your Spellcasting Focus.</p>"
    ),
  ],
})

export const Level2 = Traits.defineTrait('artificer/level-2', {
  name: 'Artificer (2)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(5))),
    Effects.gainAbility(ReplicateMagicItem),
    Effects.gainCharacterOption(SelectMagicItemPlan),
    Effects.gainCharacterOption(SelectMagicItemPlan),
    Effects.gainCharacterOption(SelectMagicItemPlan),
    Effects.gainCharacterOption(SelectMagicItemPlan),
    Effects.gainCharacterOption(SelectSpellUpToRank1),
  ],
})

export const ArtificerSubclass = Archetypes.defineArchetype('artificer/subclass', { name: 'Artificer Subclass' })
export const SelectArtificerSubclass = CharacterOptions.selectTraitOption('artificer/select-subclass', { archetypes: [ArtificerSubclass] })

export const Level3 = Traits.defineTrait('artificer/level-3', {
  name: 'Artificer (3)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(5))),
    Effects.gainCharacterOption(SelectArtificerSubclass),
    Effects.gainCharacterOption(SelectSpellUpToRank1),
  ],
})

export const Level4 = Traits.defineTrait('artificer/level-4', {
  name: 'Artificer (4)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(5))),
    // Ability Score Improvement
    Effects.gainCharacterOption(SelectFeat),
    Effects.gainCharacterOption(SelectSpellUpToRank1),
  ],
})

export const Level5 = Traits.defineTrait('artificer/level-5', {
  name: 'Artificer (5)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(5))),
    Effects.gainCharacterOption(SelectSpellUpToRank2),
  ],
})

// Each subclass's spells are always prepared, so they're granted without a loadout: two (or three) from Artificer level 3, and two more
// once its prerequisite of Artificer level 5 is met

export const AlchemistToolsOfTheTrade = Traits.defineTrait('artificer/alchemist-tools-of-the-trade', {
  name: 'Tools of the Trade',
  description:
    "<p>You gain proficiency with <strong>Alchemist's Supplies</strong> and the <strong>Herbalism Kit</strong> (or with another type of Artisan's Tools for each you already have). Brewing a potion takes you half the usual time.</p>",
  effects: [Effects.gainTrait(ArtisansTools.AlchemistsSupplies), Effects.gainTrait(Tools.HerbalismKit)],
})

export const AlchemistSpellsLevel5 = Traits.defineTrait('artificer/alchemist-spells-level-5', {
  name: 'Alchemist Spells (Level 5)',
  description: "<p>You always have <strong>Flaming Sphere</strong> and <strong>Melf's Acid Arrow</strong> prepared.</p>",
  prerequisites: [Traits.traitPrerequisite(Level5)],
  effects: [Effects.gainAbility(Spells.FlamingSphere), Effects.gainAbility(Spells.MelfsAcidArrow)],
})

export const AlchemistSpells = Traits.defineTrait('artificer/alchemist-spells', {
  name: 'Alchemist Spells',
  description:
    "<p>You always have <strong>Healing Word</strong> and <strong>Ray of Sickness</strong> prepared. At Artificer level 5, you also always have <strong>Flaming Sphere</strong> and <strong>Melf's Acid Arrow</strong> prepared.</p>",
  effects: [Effects.gainAbility(Spells.HealingWord), Effects.gainAbility(Spells.RayOfSickness), Effects.gainTrait(AlchemistSpellsLevel5)],
})

export const ExperimentalElixir = Abilities.defineAbility('artificer/experimental-elixir', {
  name: 'Experimental Elixir',
  effects: [
    Effects.descriptive(
      "<p>When you finish a Long Rest holding Alchemist's Supplies, you produce <strong>two elixirs</strong> (three at Artificer level 5), rolling a d6 for each one's effect. Any left over vanish on your next Long Rest. A creature can drink an elixir, or give it to a creature within 5 feet, as a Bonus Action.</p><p><strong>1 Healing:</strong> regain 2d8 + your Intelligence modifier Hit Points. <strong>2 Swiftness:</strong> +10 feet Speed for 1 hour. <strong>3 Resilience:</strong> +1 AC for 10 minutes. <strong>4 Boldness:</strong> add 1d4 to attack rolls and saving throws for 1 minute. <strong>5 Flight:</strong> a 10-foot Fly Speed for 10 minutes. <strong>6</strong> choose another effect.</p><p>As a Magic action while holding Alchemist's Supplies, you can expend a spell slot to create another elixir, choosing its effect instead of rolling.</p>"
    ),
  ],
  actions: [{ name: 'Create an Elixir', action: ActionType.Standard }],
})

export const AlchemicalSavant = Traits.defineTrait('artificer/alchemical-savant', {
  name: 'Alchemical Savant',
  description:
    "<p>When you cast a spell using Alchemist's Supplies as your focus, add your Intelligence modifier (minimum of +1) to one roll of the spell that restores Hit Points or deals Acid, Fire, or Poison damage.</p>",
  prerequisites: [Traits.traitPrerequisite(Level5)],
  effects: [],
})

export const Alchemist = Traits.defineTrait('artificer/alchemist', {
  name: 'Alchemist',
  description:
    '<p>An expert at <strong>combining reagents</strong> to produce magical effects, using their creations to give life and to leech it away.</p>',
  archetypes: [ArtificerSubclass],
  effects: [
    Effects.gainTrait(AlchemistToolsOfTheTrade),
    Effects.gainTrait(AlchemistSpells),
    Effects.gainAbility(ExperimentalElixir),
    Effects.gainTrait(AlchemicalSavant),
  ],
})

export const ArmorerToolsOfTheTrade = Traits.defineTrait('artificer/armorer-tools-of-the-trade', {
  name: 'Tools of the Trade',
  description:
    "<p>You gain training with <strong>Heavy armor</strong> and proficiency with <strong>Smith's Tools</strong> (or another type of Artisan's Tools if you already have it). Crafting armor takes you half the usual time.</p>",
  effects: [Effects.gainTrait(ArtisansTools.SmithsTools)],
})

export const ArmorerSpellsLevel5 = Traits.defineTrait('artificer/armorer-spells-level-5', {
  name: 'Armorer Spells (Level 5)',
  description: '<p>You always have <strong>Mirror Image</strong> and <strong>Shatter</strong> prepared.</p>',
  prerequisites: [Traits.traitPrerequisite(Level5)],
  effects: [Effects.gainAbility(Spells.MirrorImage), Effects.gainAbility(Spells.Shatter)],
})

export const ArmorerSpells = Traits.defineTrait('artificer/armorer-spells', {
  name: 'Armorer Spells',
  description:
    '<p>You always have <strong>Magic Missile</strong> and <strong>Thunderwave</strong> prepared. At Artificer level 5, you also always have <strong>Mirror Image</strong> and <strong>Shatter</strong> prepared.</p>',
  effects: [Effects.gainAbility(Spells.MagicMissile), Effects.gainAbility(Spells.Thunderwave), Effects.gainTrait(ArmorerSpellsLevel5)],
})

export const ArcaneArmor = Abilities.defineAbility('artificer/arcane-armor', {
  name: 'Arcane Armor',
  effects: [
    Effects.descriptive(
      "<p>As a <strong>Magic action</strong> with Smith's Tools in hand, you turn a suit of armor you're wearing into Arcane Armor until you don another suit or die. While wearing it, you ignore its Strength requirement, can don or doff it as a Utilize action (it can't be removed against your will), and can use it as your Spellcasting Focus.</p>"
    ),
  ],
  actions: [{ name: 'Create Arcane Armor', action: ActionType.Standard }],
})

// The armor's model can be changed after a Short or Long Rest, so the models are swapped in and out of a single loadout slot
export const ArmorModelLoadout = Loadout.defineLoadoutType('loadout/armor-model', { name: 'Armor Model' })

export const Dreadnaught = Abilities.defineAbility('artificer/armor-model/dreadnaught', {
  name: 'Dreadnaught',
  effects: [
    Effects.descriptive(
      '<p><strong>Force Demolisher:</strong> a Simple Melee weapon with the Reach property that deals 1d10 Force damage, using your Intelligence modifier for its attack and damage rolls. When you hit a creature at least one size smaller than you, you can push it up to 10 feet away or pull it up to 10 feet toward you.</p>'
    ),
    Effects.descriptive(
      "<p><strong>Giant Stature:</strong> as a <strong>Bonus Action</strong>, your armor enlarges for 1 minute: your reach increases by 5 feet, and if you're smaller than Large, you become Large if there's room. You can do this a number of times equal to your Intelligence modifier (minimum once), regaining all uses on a Long Rest.</p>"
    ),
  ],
  resource: { size: IntelligenceModifierUses, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
  actions: [
    { name: 'Attack with Force Demolisher', action: ActionType.Standard, costs: [] },
    { name: 'Use Giant Stature', action: ActionType.Bonus },
  ],
})

export const Guardian = Abilities.defineAbility('artificer/armor-model/guardian', {
  name: 'Guardian',
  effects: [
    Effects.descriptive(
      '<p><strong>Thunder Pulse:</strong> a Simple Melee weapon that deals 1d8 Thunder damage, using your Intelligence modifier for its attack and damage rolls. A creature it hits has Disadvantage on attack rolls against targets other than you until the start of your next turn.</p>'
    ),
    Effects.descriptive(
      '<p><strong>Defensive Field:</strong> while Bloodied, you can take a <strong>Bonus Action</strong> to gain Temporary Hit Points equal to your Artificer level, which you lose if you doff the armor.</p>'
    ),
  ],
  actions: [
    { name: 'Attack with Thunder Pulse', action: ActionType.Standard },
    { name: 'Use Defensive Field', action: ActionType.Bonus },
  ],
})

export const Infiltrator = Abilities.defineAbility('artificer/armor-model/infiltrator', {
  name: 'Infiltrator',
  effects: [
    Effects.descriptive(
      '<p><strong>Lightning Launcher:</strong> a Simple Ranged weapon (range 90/300 feet) that deals 1d6 Lightning damage, using your Intelligence modifier for its attack and damage rolls. Once on each of your turns when you hit a creature with it, you can deal an extra 1d6 Lightning damage to that target.</p>'
    ),
    Effects.descriptive(
      '<p><strong>Powered Steps:</strong> your Speed increases by 5 feet. <strong>Dampening Field:</strong> you have Advantage on Dexterity (Stealth) checks, which cancels out any Disadvantage the armor imposes.</p>'
    ),
  ],
  actions: [{ name: 'Attack with Lightning Launcher', action: ActionType.Standard }],
})

export const ArmorModel = Traits.defineTrait('artificer/armor-model', {
  name: 'Armor Model',
  description:
    "<p>You customize your Arcane Armor as a <strong>Dreadnaught</strong>, <strong>Guardian</strong>, or <strong>Infiltrator</strong>, each with its own special weapon. You can change the model whenever you finish a Short or Long Rest with Smith's Tools in hand.</p>",
  effects: [
    Effects.gainLoadoutSlot(ArmorModelLoadout),
    Effects.gainAbility(Dreadnaught, ArmorModelLoadout),
    Effects.gainAbility(Guardian, ArmorModelLoadout),
    Effects.gainAbility(Infiltrator, ArmorModelLoadout),
  ],
})

export const ArmorerExtraAttack = Traits.defineTrait('artificer/armorer-extra-attack', {
  name: 'Extra Attack',
  description: '<p>You can attack <strong>twice</strong>, instead of once, whenever you take the Attack action on your turn.</p>',
  prerequisites: [Traits.traitPrerequisite(Level5)],
  effects: [Effects.gainAbility(Fighter.ExtraAttack)],
})

export const Armorer = Traits.defineTrait('artificer/armorer', {
  name: 'Armorer',
  description:
    '<p>An inventor who modifies armor to function almost like a <strong>second skin</strong>, honing their magic, unleashing potent attacks, and generating a formidable defense.</p>',
  archetypes: [ArtificerSubclass],
  effects: [
    Effects.gainTrait(ArmorerToolsOfTheTrade),
    Effects.gainTrait(ArmorerSpells),
    Effects.gainAbility(ArcaneArmor),
    Effects.gainTrait(ArmorModel),
    Effects.gainTrait(ArmorerExtraAttack),
  ],
})

export const ArtilleristToolsOfTheTrade = Traits.defineTrait('artificer/artillerist-tools-of-the-trade', {
  name: 'Tools of the Trade',
  description:
    "<p>You gain proficiency with <strong>Martial Ranged weapons</strong> and <strong>Woodcarver's Tools</strong> (or another type of Artisan's Tools if you already have it). Crafting a magic Wand takes you half the usual time.</p>",
  effects: [Effects.gainTrait(ArtisansTools.WoodcarversTools)],
})

export const ArtilleristSpellsLevel5 = Traits.defineTrait('artificer/artillerist-spells-level-5', {
  name: 'Artillerist Spells (Level 5)',
  description: '<p>You always have <strong>Scorching Ray</strong> and <strong>Shatter</strong> prepared.</p>',
  prerequisites: [Traits.traitPrerequisite(Level5)],
  effects: [Effects.gainAbility(Spells.ScorchingRay), Effects.gainAbility(Spells.Shatter)],
})

export const ArtilleristSpells = Traits.defineTrait('artificer/artillerist-spells', {
  name: 'Artillerist Spells',
  description:
    '<p>You always have <strong>Shield</strong> and <strong>Thunderwave</strong> prepared. At Artificer level 5, you also always have <strong>Scorching Ray</strong> and <strong>Shatter</strong> prepared.</p>',
  effects: [Effects.gainAbility(Spells.Shield), Effects.gainAbility(Spells.Thunderwave), Effects.gainTrait(ArtilleristSpellsLevel5)],
})

export const EldritchCannon = Abilities.defineAbility('artificer/eldritch-cannon', {
  name: 'Eldritch Cannon',
  effects: [
    Effects.descriptive(
      "<p>As a <strong>Magic action</strong> using Smith's Tools or Woodcarver's Tools, you create a Small or Tiny Eldritch Cannon on a horizontal surface within 5 feet of you. It has AC 18 and Hit Points equal to five times your Artificer level, and is immune to Poison and Psychic damage. It disappears after 1 hour or at 0 Hit Points, and you can dismiss it as a Magic action. You can have only one cannon at a time, and can create one again after a Long Rest or by expending a spell slot.</p>"
    ),
    Effects.descriptive(
      '<p>As a <strong>Bonus Action</strong> while within 60 feet of it, you have the cannon move up to 15 feet and do one of the following.</p><p><strong>Flamethrower:</strong> each creature in a 15-foot Cone makes a Dexterity save against your spell save DC, taking 2d8 Fire damage on a failure or half as much on a success. <strong>Force Ballista:</strong> make a ranged spell attack from the cannon against a creature or object within 120 feet, dealing 2d8 Force damage and pushing a creature 5 feet away. <strong>Protector:</strong> the cannon and each creature of your choice within 10 feet of it gain 1d8 + your Intelligence modifier (minimum of +1) Temporary Hit Points.</p>'
    ),
  ],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
  actions: [
    { name: 'Create Eldritch Cannon', action: ActionType.Standard },
    { name: 'Activate Cannon', action: ActionType.Bonus, costs: [] },
  ],
})

export const ArcaneFirearm = Traits.defineTrait('artificer/arcane-firearm', {
  name: 'Arcane Firearm',
  description:
    "<p>When you finish a Long Rest, you can use Woodcarver's Tools to carve sigils into a Rod, Staff, Wand, or Martial Ranged weapon, making it your Arcane Firearm. You can use it as your Spellcasting Focus, and when you cast an Artificer spell through it, roll a d8 and add the number rolled to one of the spell's damage rolls.</p>",
  prerequisites: [Traits.traitPrerequisite(Level5)],
  effects: [],
})

export const Artillerist = Traits.defineTrait('artificer/artillerist', {
  name: 'Artillerist',
  description: '<p>A specialist in using magic to <strong>hurl energy, projectiles, and explosions</strong> on a battlefield.</p>',
  archetypes: [ArtificerSubclass],
  effects: [
    Effects.gainTrait(ArtilleristToolsOfTheTrade),
    Effects.gainTrait(ArtilleristSpells),
    Effects.gainAbility(EldritchCannon),
    Effects.gainTrait(ArcaneFirearm),
  ],
})

export const BattleSmithToolsOfTheTrade = Traits.defineTrait('artificer/battle-smith-tools-of-the-trade', {
  name: 'Tools of the Trade',
  description:
    "<p>You gain proficiency with <strong>Smith's Tools</strong> (or another type of Artisan's Tools if you already have it). Crafting a weapon takes you half the usual time.</p>",
  effects: [Effects.gainTrait(ArtisansTools.SmithsTools)],
})

export const BattleSmithSpellsLevel5 = Traits.defineTrait('artificer/battle-smith-spells-level-5', {
  name: 'Battle Smith Spells (Level 5)',
  description: '<p>You always have <strong>Shining Smite</strong> and <strong>Warding Bond</strong> prepared.</p>',
  prerequisites: [Traits.traitPrerequisite(Level5)],
  effects: [Effects.gainAbility(Spells.ShiningSmite), Effects.gainAbility(Spells.WardingBond)],
})

export const BattleSmithSpells = Traits.defineTrait('artificer/battle-smith-spells', {
  name: 'Battle Smith Spells',
  description:
    '<p>You always have <strong>Heroism</strong> and <strong>Shield</strong> prepared. At Artificer level 5, you also always have <strong>Shining Smite</strong> and <strong>Warding Bond</strong> prepared.</p>',
  effects: [Effects.gainAbility(Spells.Heroism), Effects.gainAbility(Spells.Shield), Effects.gainTrait(BattleSmithSpellsLevel5)],
})

export const BattleReady = Traits.defineTrait('artificer/battle-ready', {
  name: 'Battle Ready',
  description:
    "<p><strong>Arcane Empowerment:</strong> when you attack with a magic weapon, you can use your Intelligence modifier for the attack and damage rolls. <strong>Weapon Knowledge:</strong> you gain proficiency with Martial weapons, and can use a weapon you're proficient with as your Spellcasting Focus.</p>",
  effects: [],
})

export const SteelDefender = Abilities.defineAbility('artificer/steel-defender', {
  name: 'Steel Defender',
  effects: [
    Effects.descriptive(
      '<p>You are accompanied by a <strong>Steel Defender</strong>, a Medium Construct with AC 12 + your Intelligence modifier, Hit Points equal to 5 + five times your Artificer level, and a Speed of 40 feet. It adds your Proficiency Bonus to its ability checks and saving throws, and vanishes if you die.</p>'
    ),
    Effects.descriptive(
      '<p>It acts during your turn and takes the Dodge action unless you take a <strong>Bonus Action</strong> to command it. Its <strong>Force-Empowered Rend</strong> uses your spell attack modifier and deals 1d8 + 2 + your Intelligence modifier Force damage, its <strong>Repair</strong> (3/Day) restores 2d8 + your Intelligence modifier Hit Points to itself or a Construct or object within 5 feet, and its <strong>Deflect Attack</strong> Reaction imposes Disadvantage on an attack against a creature other than it within 5 feet.</p>'
    ),
    Effects.descriptive(
      "<p>If it died within the last hour, you can take a <strong>Magic action</strong> to touch it and expend a spell slot to revive it after 1 minute. When you finish a Long Rest with Smith's Tools in hand, you can create a new defender, replacing the old one.</p>"
    ),
  ],
  actions: [
    { name: 'Command Steel Defender', action: ActionType.Bonus },
    { name: 'Restore Steel Defender', action: ActionType.Standard },
  ],
})

export const BattleSmithExtraAttack = Abilities.defineAbility('artificer/battle-smith-extra-attack', {
  name: 'Extra Attack',
  effects: [
    Effects.descriptive(
      '<p>You can attack <strong>twice</strong>, instead of once, whenever you take the Attack action on your turn. You can forgo one of those attacks to command your Steel Defender to use its Force-Empowered Rend.</p>'
    ),
  ],
})

export const BattleSmithLevel5 = Traits.defineTrait('artificer/battle-smith-level-5', {
  name: 'Extra Attack',
  description:
    '<p>You can attack <strong>twice</strong>, instead of once, whenever you take the Attack action on your turn, and can forgo one of those attacks to command your Steel Defender.</p>',
  prerequisites: [Traits.traitPrerequisite(Level5)],
  effects: [Effects.gainAbility(BattleSmithExtraAttack)],
})

export const BattleSmith = Traits.defineTrait('artificer/battle-smith', {
  name: 'Battle Smith',
  description:
    '<p>A combination of <strong>protector and medic</strong>, expert at defending others and repairing both materiel and personnel, accompanied by a Steel Defender of their own creation.</p>',
  archetypes: [ArtificerSubclass],
  effects: [
    Effects.gainTrait(BattleSmithToolsOfTheTrade),
    Effects.gainTrait(BattleSmithSpells),
    Effects.gainTrait(BattleReady),
    Effects.gainAbility(SteelDefender),
    Effects.gainTrait(BattleSmithLevel5),
  ],
})

export const CartographerToolsOfTheTrade = Traits.defineTrait('artificer/cartographer-tools-of-the-trade', {
  name: 'Tools of the Trade',
  description:
    "<p>You gain proficiency with <strong>Calligrapher's Supplies</strong> and <strong>Cartographer's Tools</strong> (or with another type of Artisan's Tools for each you already have). Scribing a Spell Scroll takes you half the usual time.</p>",
  effects: [Effects.gainTrait(ArtisansTools.CalligraphersSupplies), Effects.gainTrait(ArtisansTools.CartographersTools)],
})

export const CartographerSpellsLevel5 = Traits.defineTrait('artificer/cartographer-spells-level-5', {
  name: 'Cartographer Spells (Level 5)',
  description: '<p>You always have <strong>Locate Object</strong> and <strong>Mind Spike</strong> prepared.</p>',
  prerequisites: [Traits.traitPrerequisite(Level5)],
  effects: [Effects.gainAbility(Spells.LocateObject), Effects.gainAbility(Spells.MindSpike)],
})

export const CartographerSpells = Traits.defineTrait('artificer/cartographer-spells', {
  name: 'Cartographer Spells',
  description:
    '<p>You always have <strong>Faerie Fire</strong>, <strong>Guiding Bolt</strong>, and <strong>Healing Word</strong> prepared. At Artificer level 5, you also always have <strong>Locate Object</strong> and <strong>Mind Spike</strong> prepared.</p>',
  effects: [
    Effects.gainAbility(Spells.FaerieFire),
    Effects.gainAbility(Spells.GuidingBolt),
    Effects.gainAbility(Spells.HealingWord),
    Effects.gainTrait(CartographerSpellsLevel5),
  ],
})

export const AdventurersAtlas = Abilities.defineAbility('artificer/adventurers-atlas', {
  name: "Adventurer's Atlas",
  effects: [
    Effects.descriptive(
      "<p>When you finish a Long Rest holding Cartographer's Tools, you create magical maps for at least two creatures you touch (which can include you), up to 1 + your Intelligence modifier creatures. The maps last until you die or use this feature again.</p><p>A map holder adds 1d4 to its Initiative rolls and knows the location of every other map holder on the same plane. It can target another map holder with a spell or effect that requires seeing the target, regardless of sight or cover, as long as they're within range.</p>"
    ),
  ],
})

export const IlluminatedCartography = Abilities.defineAbility('artificer/illuminated-cartography', {
  name: 'Illuminated Cartography',
  effects: [
    Effects.descriptive(
      '<p>You can cast <strong>Faerie Fire</strong> without expending a spell slot, outlining the affected creatures as if in ink. You can do this a number of times equal to your Intelligence modifier (minimum once), regaining all uses on a Long Rest.</p>'
    ),
  ],
  resource: { size: IntelligenceModifierUses, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
  actions: [{ name: 'Cast Faerie Fire', action: ActionType.Standard }],
})

export const PortalJump = Abilities.defineAbility('artificer/portal-jump', {
  name: 'Portal Jump',
  effects: [
    Effects.descriptive(
      "<p>On your turn, you can spend movement equal to half your Speed to teleport to an unoccupied space you can see within 10 feet of you, or within 5 feet of a creature within 30 feet of you that's holding one of your Adventurer's Atlas maps. You can't do this if your Speed is 0.</p>"
    ),
  ],
  actions: [{ name: 'Use Portal Jump', action: ActionType.Free }],
})

export const GuidedPrecision = Traits.defineTrait('artificer/guided-precision', {
  name: 'Guided Precision',
  description:
    "<p>Once per turn, when you cast a spell from your Cartographer Spells or hit a creature affected by your Faerie Fire with an attack roll, you can add your Intelligence modifier to one damage roll of it. Taking damage can't break your Concentration on Faerie Fire.</p>",
  prerequisites: [Traits.traitPrerequisite(Level5)],
  effects: [],
})

export const Cartographer = Traits.defineTrait('artificer/cartographer', {
  name: 'Cartographer',
  description:
    '<p>A premier <strong>navigator and reconnaissance agent</strong> whose creations highlight threats, safeguard allies, and carve portals to distant locations.</p>',
  archetypes: [ArtificerSubclass],
  effects: [
    Effects.gainTrait(CartographerToolsOfTheTrade),
    Effects.gainTrait(CartographerSpells),
    Effects.gainAbility(AdventurersAtlas),
    Effects.gainAbility(IlluminatedCartography),
    Effects.gainAbility(PortalJump),
    Effects.gainTrait(GuidedPrecision),
  ],
})
