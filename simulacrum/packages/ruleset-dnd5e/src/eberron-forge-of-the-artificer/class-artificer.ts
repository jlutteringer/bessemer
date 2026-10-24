import { Abilities, Archetypes, Attributes, CharacterOptions, Effects, Loadout, Traits } from '@simulacrum/ruleset'
import * as ActionTypes from '@simulacrum/ruleset-dnd5e/action-type'
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
  name: 'Skill Proficiency',
  filter: {
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
  },
})

export const SelectCantrip = CharacterOptions.selectAbilityOption('artificer/select-cantrip', {
  name: 'Cantrips',
  filter: { specificOptions: CantripList },
})

export const SelectSpellUpToRank1 = CharacterOptions.selectAbilityOption('artificer/select-spell-up-to-rank-1', {
  name: 'Prepared Spells',
  filter: {
    archetypes: [[Spells.Rank1]],
    specificOptions: SpellList,
  },
})

export const SelectSpellUpToRank2 = CharacterOptions.selectAbilityOption('artificer/select-spell-up-to-rank-2', {
  name: 'Prepared Spells',
  filter: {
    archetypes: [[Spells.Rank1, Spells.Rank2]],
    specificOptions: SpellList,
  },
})

const IntelligenceModifierUses = NumericExpressions.max([PlayerCharacteristics.IntelligenceModifier.variable, 1])

export const Level1 = Traits.defineTrait('artificer/level-1', {
  name: 'Artificer',
  description:
    "A master of invention who uses ingenuity and magic to unlock extraordinary capabilities in objects, casting spells through tools with **Intelligence**.\n\n**Saving Throws:** Constitution and Intelligence. **Armor:** Light and Medium armor, and Shields. **Weapons:** Simple weapons. **Tools:** Thieves' Tools, Tinker's Tools, and one type of Artisan's Tools of your choice.",
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
    Effects.gainAbility(Spells.Mending),
  ],
})

export const Spellcasting = Abilities.defineAbility('artificer/spellcasting', {
  name: 'Spellcasting',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  effects: [
    Effects.descriptive(
      "You cast Artificer spells using **Intelligence**, producing them through tools: you must hold Thieves' Tools, Tinker's Tools, or Artisan's Tools you're proficient with as your Spellcasting Focus. You know two cantrips, and can replace one with another Artificer cantrip after a Long Rest."
    ),
    Effects.descriptive(
      'You prepare a list of Artificer spells you can cast with your spell slots: 2 at level 1, rising to 6 by level 5. You can change the list after each Long Rest. You regain all spell slots on a Long Rest.'
    ),
  ],
})

export const TinkersMagic = Abilities.defineAbility('artificer/tinkers-magic', {
  name: "Tinker's Magic",
  prerequisites: [Traits.traitPrerequisite(Level1)],
  effects: [
    Effects.descriptive(
      "As a **Magic action** while holding Tinker's Tools, you create one item in an unoccupied space within 5 feet of you: Ball Bearings, a Basket, Bedroll, Bell, Blanket, Block and Tackle, Glass Bottle, Bucket, Caltrops, Candle, Crowbar, Flask, Grappling Hook, Hunting Trap, Jug, Lamp, Manacles, Net, Oil, Paper, Parchment, Pole, Pouch, Rope, Sack, Shovel, Iron Spikes, String, a Tinderbox, Torch, or Vial. It lasts until you finish a Long Rest, when it vanishes.\n\nYou can do this a number of times equal to your Intelligence modifier (minimum once), regaining all uses on a Long Rest. You also know the **Mending** cantrip."
    ),
  ],
  resource: { size: IntelligenceModifierUses, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
  actions: [{ name: "Use Tinker's Magic", action: ActionTypes.Action }],
})

export const Level2 = Traits.defineTrait('artificer/level-2', {
  name: 'Artificer (2)',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(5))),
    Effects.gainCharacterOption(SelectMagicItemPlan),
    Effects.gainCharacterOption(SelectMagicItemPlan),
    Effects.gainCharacterOption(SelectMagicItemPlan),
    Effects.gainCharacterOption(SelectMagicItemPlan),
    Effects.gainCharacterOption(SelectSpellUpToRank1),
  ],
})

export const ReplicateMagicItem = Abilities.defineAbility('artificer/replicate-magic-item', {
  name: 'Replicate Magic Item',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  effects: [
    Effects.descriptive(
      "You know **four plans** for making magic items, and can replace one with another plan you qualify for whenever you gain an Artificer level.\n\nWhen you finish a Long Rest with Tinker's Tools in hand, you can create one or two different magic items, each from a different plan you know, and attune to them instantly if they require it. You can have no more than **two** items from this feature at once; creating another makes the oldest vanish.\n\nThe items vanish 1d4 days after you die, or immediately if you replace their plan. You can use a Wand or Weapon made this way as your Spellcasting Focus."
    ),
  ],
})

export const ArtificerSubclass = Archetypes.defineTraitArchetype('artificer/subclass', { name: 'Artificer Subclass' })
export const SelectArtificerSubclass = CharacterOptions.selectTraitOption('artificer/select-subclass', {
  name: 'Artificer Subclass',
  filter: {
    archetypes: [ArtificerSubclass],
  },
})

export const Level3 = Traits.defineTrait('artificer/level-3', {
  name: 'Artificer (3)',
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
  prerequisites: [Traits.traitPrerequisite(Level4)],
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(5))),
    Effects.gainCharacterOption(SelectSpellUpToRank2),
  ],
})

// Each subclass's spells are always prepared, so they're granted without a loadout

export const AlchemistToolsOfTheTrade = Traits.defineTrait('artificer/alchemist-tools-of-the-trade', {
  name: 'Tools of the Trade',
  description:
    "You gain proficiency with **Alchemist's Supplies** and the **Herbalism Kit** (or with another type of Artisan's Tools for each you already have). Brewing a potion takes you half the usual time.",
  effects: [Effects.gainTrait(ArtisansTools.AlchemistsSupplies), Effects.gainTrait(Tools.HerbalismKit)],
})

export const AlchemistSpells = Traits.defineTrait('artificer/alchemist-spells', {
  name: 'Alchemist Spells',
  description:
    "You always have **Healing Word** and **Ray of Sickness** prepared. At Artificer level 5, you also always have **Flaming Sphere** and **Melf's Acid Arrow** prepared.",
  effects: [
    Effects.gainAbility(Spells.HealingWord),
    Effects.gainAbility(Spells.RayOfSickness),
    Effects.conditional(Traits.traitPrerequisite(Level5), [Effects.gainAbility(Spells.FlamingSphere), Effects.gainAbility(Spells.MelfsAcidArrow)]),
  ],
})

export const AlchemicalSavant = Traits.defineTrait('artificer/alchemical-savant', {
  name: 'Alchemical Savant',
  description:
    "When you cast a spell using Alchemist's Supplies as your focus, add your Intelligence modifier (minimum of +1) to one roll of the spell that restores Hit Points or deals Acid, Fire, or Poison damage.",
  prerequisites: [Traits.traitPrerequisite(Level5)],
  effects: [],
})

export const Alchemist = Traits.defineTrait('artificer/alchemist', {
  name: 'Alchemist',
  description: 'An expert at **combining reagents** to produce magical effects, using their creations to give life and to leech it away.',
  archetypes: [ArtificerSubclass],
  effects: [Effects.gainTrait(AlchemistToolsOfTheTrade), Effects.gainTrait(AlchemistSpells), Effects.gainTrait(AlchemicalSavant)],
})

export const ExperimentalElixir = Abilities.defineAbility('artificer/experimental-elixir', {
  name: 'Experimental Elixir',
  prerequisites: [Traits.traitPrerequisite(Alchemist)],
  effects: [
    Effects.descriptive(
      "When you finish a Long Rest holding Alchemist's Supplies, you produce **two elixirs** (three at Artificer level 5), rolling a d6 for each one's effect. Any left over vanish on your next Long Rest. A creature can drink an elixir, or give it to a creature within 5 feet, as a Bonus Action.\n\n**1 Healing:** regain 2d8 + your Intelligence modifier Hit Points. **2 Swiftness:** +10 feet Speed for 1 hour. **3 Resilience:** +1 AC for 10 minutes. **4 Boldness:** add 1d4 to attack rolls and saving throws for 1 minute. **5 Flight:** a 10-foot Fly Speed for 10 minutes. **6** choose another effect.\n\nAs a Magic action while holding Alchemist's Supplies, you can expend a spell slot to create another elixir, choosing its effect instead of rolling."
    ),
  ],
  actions: [{ name: 'Create an Elixir', action: ActionTypes.Action }],
})

export const ArmorerToolsOfTheTrade = Traits.defineTrait('artificer/armorer-tools-of-the-trade', {
  name: 'Tools of the Trade',
  description:
    "You gain training with **Heavy armor** and proficiency with **Smith's Tools** (or another type of Artisan's Tools if you already have it). Crafting armor takes you half the usual time.",
  effects: [Effects.gainTrait(ArtisansTools.SmithsTools)],
})

export const ArmorerSpells = Traits.defineTrait('artificer/armorer-spells', {
  name: 'Armorer Spells',
  description:
    'You always have **Magic Missile** and **Thunderwave** prepared. At Artificer level 5, you also always have **Mirror Image** and **Shatter** prepared.',
  effects: [
    Effects.gainAbility(Spells.MagicMissile),
    Effects.gainAbility(Spells.Thunderwave),
    Effects.conditional(Traits.traitPrerequisite(Level5), [Effects.gainAbility(Spells.MirrorImage), Effects.gainAbility(Spells.Shatter)]),
  ],
})

// The armor's model can be changed after a Short or Long Rest, so the models are swapped in and out of a single loadout slot
export const ArmorModelLoadout = Loadout.defineLoadoutType('armor-model', { name: 'Armor Model' })

export const ArmorModel = Traits.defineTrait('artificer/armor-model', {
  name: 'Armor Model',
  description:
    "You customize your Arcane Armor as a **Dreadnaught**, **Guardian**, or **Infiltrator**, each with its own special weapon. You can change the model whenever you finish a Short or Long Rest with Smith's Tools in hand.",
  effects: [Effects.gainLoadoutSlot(ArmorModelLoadout)],
})

export const Dreadnaught = Abilities.defineAbility('artificer/armor-model/dreadnaught', {
  name: 'Dreadnaught',
  prerequisites: [Traits.traitPrerequisite(ArmorModel)],
  loadout: ArmorModelLoadout,
  effects: [
    Effects.descriptive(
      '**Force Demolisher:** a Simple Melee weapon with the Reach property that deals 1d10 Force damage, using your Intelligence modifier for its attack and damage rolls. When you hit a creature at least one size smaller than you, you can push it up to 10 feet away or pull it up to 10 feet toward you.'
    ),
    Effects.descriptive(
      "**Giant Stature:** as a **Bonus Action**, your armor enlarges for 1 minute: your reach increases by 5 feet, and if you're smaller than Large, you become Large if there's room. You can do this a number of times equal to your Intelligence modifier (minimum once), regaining all uses on a Long Rest."
    ),
  ],
  resource: { size: IntelligenceModifierUses, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
  actions: [
    { name: 'Attack with Force Demolisher', action: ActionTypes.Action, costs: [] },
    { name: 'Use Giant Stature', action: ActionTypes.BonusAction },
  ],
})

export const Guardian = Abilities.defineAbility('artificer/armor-model/guardian', {
  name: 'Guardian',
  prerequisites: [Traits.traitPrerequisite(ArmorModel)],
  loadout: ArmorModelLoadout,
  effects: [
    Effects.descriptive(
      '**Thunder Pulse:** a Simple Melee weapon that deals 1d8 Thunder damage, using your Intelligence modifier for its attack and damage rolls. A creature it hits has Disadvantage on attack rolls against targets other than you until the start of your next turn.'
    ),
    Effects.descriptive(
      '**Defensive Field:** while Bloodied, you can take a **Bonus Action** to gain Temporary Hit Points equal to your Artificer level, which you lose if you doff the armor.'
    ),
  ],
  actions: [
    { name: 'Attack with Thunder Pulse', action: ActionTypes.Action },
    { name: 'Use Defensive Field', action: ActionTypes.BonusAction },
  ],
})

export const Infiltrator = Abilities.defineAbility('artificer/armor-model/infiltrator', {
  name: 'Infiltrator',
  prerequisites: [Traits.traitPrerequisite(ArmorModel)],
  loadout: ArmorModelLoadout,
  effects: [
    Effects.descriptive(
      '**Lightning Launcher:** a Simple Ranged weapon (range 90/300 feet) that deals 1d6 Lightning damage, using your Intelligence modifier for its attack and damage rolls. Once on each of your turns when you hit a creature with it, you can deal an extra 1d6 Lightning damage to that target.'
    ),
    Effects.descriptive(
      '**Powered Steps:** your Speed increases by 5 feet. **Dampening Field:** you have Advantage on Dexterity (Stealth) checks, which cancels out any Disadvantage the armor imposes.'
    ),
  ],
  actions: [{ name: 'Attack with Lightning Launcher', action: ActionTypes.Action }],
})

export const Armorer = Traits.defineTrait('artificer/armorer', {
  name: 'Armorer',
  description:
    'An inventor who modifies armor to function almost like a **second skin**, honing their magic, unleashing potent attacks, and generating a formidable defense.',
  archetypes: [ArtificerSubclass],
  effects: [Effects.gainTrait(ArmorerToolsOfTheTrade), Effects.gainTrait(ArmorerSpells), Effects.gainTrait(ArmorModel)],
})

export const ArmorerExtraAttack = Abilities.defineAbility('artificer/armorer-extra-attack', {
  name: 'Extra Attack',
  prerequisites: [Traits.traitPrerequisite(Armorer), Traits.traitPrerequisite(Level5)],
  effects: [Effects.descriptive('You can attack **twice**, instead of once, whenever you take the Attack action on your turn.')],
})

export const ArcaneArmor = Abilities.defineAbility('artificer/arcane-armor', {
  name: 'Arcane Armor',
  prerequisites: [Traits.traitPrerequisite(Armorer)],
  effects: [
    Effects.descriptive(
      "As a **Magic action** with Smith's Tools in hand, you turn a suit of armor you're wearing into Arcane Armor until you don another suit or die. While wearing it, you ignore its Strength requirement, can don or doff it as a Utilize action (it can't be removed against your will), and can use it as your Spellcasting Focus."
    ),
  ],
  actions: [{ name: 'Create Arcane Armor', action: ActionTypes.Action }],
})

export const ArtilleristToolsOfTheTrade = Traits.defineTrait('artificer/artillerist-tools-of-the-trade', {
  name: 'Tools of the Trade',
  description:
    "You gain proficiency with **Martial Ranged weapons** and **Woodcarver's Tools** (or another type of Artisan's Tools if you already have it). Crafting a magic Wand takes you half the usual time.",
  effects: [Effects.gainTrait(ArtisansTools.WoodcarversTools)],
})

export const ArtilleristSpells = Traits.defineTrait('artificer/artillerist-spells', {
  name: 'Artillerist Spells',
  description:
    'You always have **Shield** and **Thunderwave** prepared. At Artificer level 5, you also always have **Scorching Ray** and **Shatter** prepared.',
  effects: [
    Effects.gainAbility(Spells.Shield),
    Effects.gainAbility(Spells.Thunderwave),
    Effects.conditional(Traits.traitPrerequisite(Level5), [Effects.gainAbility(Spells.ScorchingRay), Effects.gainAbility(Spells.Shatter)]),
  ],
})

export const ArcaneFirearm = Traits.defineTrait('artificer/arcane-firearm', {
  name: 'Arcane Firearm',
  description:
    "When you finish a Long Rest, you can use Woodcarver's Tools to carve sigils into a Rod, Staff, Wand, or Martial Ranged weapon, making it your Arcane Firearm. You can use it as your Spellcasting Focus, and when you cast an Artificer spell through it, roll a d8 and add the number rolled to one of the spell's damage rolls.",
  prerequisites: [Traits.traitPrerequisite(Level5)],
  effects: [],
})

export const Artillerist = Traits.defineTrait('artificer/artillerist', {
  name: 'Artillerist',
  description: 'A specialist in using magic to **hurl energy, projectiles, and explosions** on a battlefield.',
  archetypes: [ArtificerSubclass],
  effects: [Effects.gainTrait(ArtilleristToolsOfTheTrade), Effects.gainTrait(ArtilleristSpells), Effects.gainTrait(ArcaneFirearm)],
})

export const EldritchCannon = Abilities.defineAbility('artificer/eldritch-cannon', {
  name: 'Eldritch Cannon',
  prerequisites: [Traits.traitPrerequisite(Artillerist)],
  effects: [
    Effects.descriptive(
      "As a **Magic action** using Smith's Tools or Woodcarver's Tools, you create a Small or Tiny Eldritch Cannon on a horizontal surface within 5 feet of you. It has AC 18 and Hit Points equal to five times your Artificer level, and is immune to Poison and Psychic damage. It disappears after 1 hour or at 0 Hit Points, and you can dismiss it as a Magic action. You can have only one cannon at a time, and can create one again after a Long Rest or by expending a spell slot."
    ),
    Effects.descriptive(
      'As a **Bonus Action** while within 60 feet of it, you have the cannon move up to 15 feet and do one of the following.\n\n**Flamethrower:** each creature in a 15-foot Cone makes a Dexterity save against your spell save DC, taking 2d8 Fire damage on a failure or half as much on a success. **Force Ballista:** make a ranged spell attack from the cannon against a creature or object within 120 feet, dealing 2d8 Force damage and pushing a creature 5 feet away. **Protector:** the cannon and each creature of your choice within 10 feet of it gain 1d8 + your Intelligence modifier (minimum of +1) Temporary Hit Points.'
    ),
  ],
  resource: { size: 1, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
  actions: [
    { name: 'Create Eldritch Cannon', action: ActionTypes.Action },
    { name: 'Activate Cannon', action: ActionTypes.BonusAction, costs: [] },
  ],
})

export const BattleSmithToolsOfTheTrade = Traits.defineTrait('artificer/battle-smith-tools-of-the-trade', {
  name: 'Tools of the Trade',
  description:
    "You gain proficiency with **Smith's Tools** (or another type of Artisan's Tools if you already have it). Crafting a weapon takes you half the usual time.",
  effects: [Effects.gainTrait(ArtisansTools.SmithsTools)],
})

export const BattleSmithSpells = Traits.defineTrait('artificer/battle-smith-spells', {
  name: 'Battle Smith Spells',
  description:
    'You always have **Heroism** and **Shield** prepared. At Artificer level 5, you also always have **Shining Smite** and **Warding Bond** prepared.',
  effects: [
    Effects.gainAbility(Spells.Heroism),
    Effects.gainAbility(Spells.Shield),
    Effects.conditional(Traits.traitPrerequisite(Level5), [Effects.gainAbility(Spells.ShiningSmite), Effects.gainAbility(Spells.WardingBond)]),
  ],
})

export const BattleReady = Traits.defineTrait('artificer/battle-ready', {
  name: 'Battle Ready',
  description:
    "**Arcane Empowerment:** when you attack with a magic weapon, you can use your Intelligence modifier for the attack and damage rolls. **Weapon Knowledge:** you gain proficiency with Martial weapons, and can use a weapon you're proficient with as your Spellcasting Focus.",
  effects: [],
})

export const BattleSmith = Traits.defineTrait('artificer/battle-smith', {
  name: 'Battle Smith',
  description:
    'A combination of **protector and medic**, expert at defending others and repairing both materiel and personnel, accompanied by a Steel Defender of their own creation.',
  archetypes: [ArtificerSubclass],
  effects: [Effects.gainTrait(BattleSmithToolsOfTheTrade), Effects.gainTrait(BattleSmithSpells), Effects.gainTrait(BattleReady)],
})

export const BattleSmithExtraAttack = Abilities.defineAbility('artificer/battle-smith-extra-attack', {
  name: 'Extra Attack',
  prerequisites: [Traits.traitPrerequisite(BattleSmith), Traits.traitPrerequisite(Level5)],
  effects: [
    Effects.descriptive(
      'You can attack **twice**, instead of once, whenever you take the Attack action on your turn. You can forgo one of those attacks to command your Steel Defender to use its Force-Empowered Rend.'
    ),
  ],
})

export const SteelDefender = Abilities.defineAbility('artificer/steel-defender', {
  name: 'Steel Defender',
  prerequisites: [Traits.traitPrerequisite(BattleSmith)],
  effects: [
    Effects.descriptive(
      'You are accompanied by a **Steel Defender**, a Medium Construct with AC 12 + your Intelligence modifier, Hit Points equal to 5 + five times your Artificer level, and a Speed of 40 feet. It adds your Proficiency Bonus to its ability checks and saving throws, and vanishes if you die.'
    ),
    Effects.descriptive(
      'It acts during your turn and takes the Dodge action unless you take a **Bonus Action** to command it. Its **Force-Empowered Rend** uses your spell attack modifier and deals 1d8 + 2 + your Intelligence modifier Force damage, its **Repair** (3/Day) restores 2d8 + your Intelligence modifier Hit Points to itself or a Construct or object within 5 feet, and its **Deflect Attack** Reaction imposes Disadvantage on an attack against a creature other than it within 5 feet.'
    ),
    Effects.descriptive(
      "If it died within the last hour, you can take a **Magic action** to touch it and expend a spell slot to revive it after 1 minute. When you finish a Long Rest with Smith's Tools in hand, you can create a new defender, replacing the old one."
    ),
  ],
  actions: [
    { name: 'Command Steel Defender', action: ActionTypes.BonusAction },
    { name: 'Restore Steel Defender', action: ActionTypes.Action },
  ],
})

export const CartographerToolsOfTheTrade = Traits.defineTrait('artificer/cartographer-tools-of-the-trade', {
  name: 'Tools of the Trade',
  description:
    "You gain proficiency with **Calligrapher's Supplies** and **Cartographer's Tools** (or with another type of Artisan's Tools for each you already have). Scribing a Spell Scroll takes you half the usual time.",
  effects: [Effects.gainTrait(ArtisansTools.CalligraphersSupplies), Effects.gainTrait(ArtisansTools.CartographersTools)],
})

export const CartographerSpells = Traits.defineTrait('artificer/cartographer-spells', {
  name: 'Cartographer Spells',
  description:
    'You always have **Faerie Fire**, **Guiding Bolt**, and **Healing Word** prepared. At Artificer level 5, you also always have **Locate Object** and **Mind Spike** prepared.',
  effects: [
    Effects.gainAbility(Spells.FaerieFire),
    Effects.gainAbility(Spells.GuidingBolt),
    Effects.gainAbility(Spells.HealingWord),
    Effects.conditional(Traits.traitPrerequisite(Level5), [Effects.gainAbility(Spells.LocateObject), Effects.gainAbility(Spells.MindSpike)]),
  ],
})

export const GuidedPrecision = Traits.defineTrait('artificer/guided-precision', {
  name: 'Guided Precision',
  description:
    "Once per turn, when you cast a spell from your Cartographer Spells or hit a creature affected by your Faerie Fire with an attack roll, you can add your Intelligence modifier to one damage roll of it. Taking damage can't break your Concentration on Faerie Fire.",
  prerequisites: [Traits.traitPrerequisite(Level5)],
  effects: [],
})

export const Cartographer = Traits.defineTrait('artificer/cartographer', {
  name: 'Cartographer',
  description:
    'A premier **navigator and reconnaissance agent** whose creations highlight threats, safeguard allies, and carve portals to distant locations.',
  archetypes: [ArtificerSubclass],
  effects: [Effects.gainTrait(CartographerToolsOfTheTrade), Effects.gainTrait(CartographerSpells), Effects.gainTrait(GuidedPrecision)],
})

export const AdventurersAtlas = Abilities.defineAbility('artificer/adventurers-atlas', {
  name: "Adventurer's Atlas",
  prerequisites: [Traits.traitPrerequisite(Cartographer)],
  effects: [
    Effects.descriptive(
      "When you finish a Long Rest holding Cartographer's Tools, you create magical maps for at least two creatures you touch (which can include you), up to 1 + your Intelligence modifier creatures. The maps last until you die or use this feature again.\n\nA map holder adds 1d4 to its Initiative rolls and knows the location of every other map holder on the same plane. It can target another map holder with a spell or effect that requires seeing the target, regardless of sight or cover, as long as they're within range."
    ),
  ],
})

export const IlluminatedCartography = Abilities.defineAbility('artificer/illuminated-cartography', {
  name: 'Illuminated Cartography',
  prerequisites: [Traits.traitPrerequisite(Cartographer)],
  effects: [
    Effects.descriptive(
      'You can cast **Faerie Fire** without expending a spell slot, outlining the affected creatures as if in ink. You can do this a number of times equal to your Intelligence modifier (minimum once), regaining all uses on a Long Rest.'
    ),
  ],
  resource: { size: IntelligenceModifierUses, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
  actions: [{ name: 'Cast Faerie Fire', action: ActionTypes.Action }],
})

export const PortalJump = Abilities.defineAbility('artificer/portal-jump', {
  name: 'Portal Jump',
  prerequisites: [Traits.traitPrerequisite(Cartographer)],
  effects: [
    Effects.descriptive(
      "On your turn, you can spend movement equal to half your Speed to teleport to an unoccupied space you can see within 10 feet of you, or within 5 feet of a creature within 30 feet of you that's holding one of your Adventurer's Atlas maps. You can't do this if your Speed is 0."
    ),
  ],
  actions: [{ name: 'Use Portal Jump', action: ActionTypes.Free }],
})
