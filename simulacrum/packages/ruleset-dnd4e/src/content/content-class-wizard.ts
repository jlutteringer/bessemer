import { Content } from '@simulacrum/ruleset'
import { ContentSection } from '@simulacrum/ruleset/content'
import { ClassesSection } from '@simulacrum/ruleset-dnd4e/content/content-classes'
import * as ClassWizard from '@simulacrum/ruleset-dnd4e/class/class-wizard'
import * as WizardPowers from '@simulacrum/ruleset-dnd4e/class/wizard-power'

export const WizardSection = Content.defineSection('classes/wizard', {
  parent: ClassesSection,
  content: {
    name: 'Wizard',
    description:
      '_“I am the fire that burns, the choking fog, the storm that rains devastation on our foes.”_\n\n' +
      'Wizards are scions of arcane magic. Wizards tap the true power that permeates the cosmos, research esoteric rituals that can alter time and space, and hurl balls of fire that incinerate massed foes. Wizards wield spells the way warriors brandish swords.\n\n' +
      'Magic lured you into its grasp, and now you seek to master it in turn. You could be a bespectacled sage searching for dusty tomes in forgotten sepulchers, a scarred war mage plying foes with fireballs and foul language in equal measure, a disgruntled apprentice who absconded with your master’s spellbooks, an eladrin upholding the magical tradition of your race, or even a power-hungry student of magic who might do anything to learn a new spell.\n\n' +
      'A cloak of spells enfolds you, ancient rituals bolster your senses, and runed implements of your craft hang from your belt. Effervescing arcane lore pulses through your consciousness, a constant pressure craving release. When will you know enough magic to storm the ramparts of reality itself?',
  },
})

export const WizardClassTraitsSection = Content.linkEntity(WizardSection, ClassWizard.Wizard)

export const WizardOverviewSection = Content.defineSection('classes/wizard-overview', {
  parent: WizardSection,
  content: {
    name: 'Wizard Overview',
    description:
      '**Characteristics:** Your powers are all about affecting multiple targets at the same time—sometimes two or three foes, sometimes everyone in a room. In addition, you are the master of utility spells that let you avoid or overcome many obstacles, from flying across chasms to halting the flow of time.\n\n' +
      '**Religion:** Wizards favor deities of magic, art, knowledge, and secrets, such as Corellon, Ioun, and Vecna.\n\n' +
      '**Races:** Eladrin, humans, and half-elves esteem and excel at the practice of arcane magic.',
  },
})

export const CreatingAWizardSection = Content.defineSection('classes/creating-a-wizard', {
  parent: WizardSection,
  content: {
    name: 'Creating a Wizard',
    description:
      'Wizards have a range of powers, but tend to specialize in one of two character builds: control wizard or war wizard. Every wizard relies on [Intelligence](characteristic:intelligence) for attack powers, and secondarily on [Wisdom](characteristic:wisdom), [Dexterity](characteristic:dexterity), and sometimes [Constitution](characteristic:constitution).',
  },
})

export const ControlWizardSection = Content.defineSection('classes/control-wizard', {
  parent: CreatingAWizardSection,
  content: {
    name: 'Control Wizard',
    description:
      'Your favorite powers restrict your enemies in various ways—crushing them in the coils of a lightning serpent, trapping them in a cloud of noxious vapor, or encasing them in ice. [Intelligence](characteristic:intelligence) drives your attack powers, so make it your highest ability score. [Wisdom](characteristic:wisdom) can help you maintain control over your enemies if you choose the [orb of imposition](trait:wizard/implement-mastery/orb-of-imposition) form of Implement Mastery, so it should be your second-best score. Make [Dexterity](characteristic:dexterity) your third best score. Putting a good score in [Constitution](characteristic:constitution) can help you stay alive by increasing your [hit points](characteristic:hit-points) and [healing surges](characteristic:healing-surges), as well as contributing to your [Fortitude](characteristic:fortitude) defense. If you choose the [staff of defense](trait:wizard/implement-mastery/staff-of-defense) form of Implement Mastery, your Constitution can also help your other defenses. Select powers that help you control the battlefield and make the best use of your high Wisdom score.\n\n' +
      '**Suggested Feat:** [Improved Initiative](trait:feat/improved-initiative) (Human feat: [Human Perseverance](trait:feat/human-perseverance))\n\n' +
      '**Suggested Skills:** [Arcana](characteristic:skill/arcana), [Diplomacy](characteristic:skill/diplomacy), [Insight](characteristic:skill/insight), [Nature](characteristic:skill/nature)\n\n' +
      '**Suggested At-Will Powers:** _[cloud of daggers](ability:wizard/power/cloud-of-daggers)_, _[thunderwave](ability:wizard/power/thunderwave)_\n\n' +
      '**Suggested Encounter Power:** _[icy terrain](ability:wizard/power/icy-terrain)_\n\n' +
      '**Suggested Daily Power:** _[sleep](ability:wizard/power/sleep)_',
  },
})

export const WarWizardSection = Content.defineSection('classes/war-wizard', {
  parent: CreatingAWizardSection,
  content: {
    name: 'War Wizard',
    description:
      'Your delight is in powers that deal damage—lots of damage, to many foes at a time. Enormous bursts of fire, searing bolts of lightning, and waves of caustic acid are your weapons. [Intelligence](characteristic:intelligence) is your most important ability score. [Dexterity](characteristic:dexterity) should be your second-best score, and it is important if you choose the [wand of accuracy](trait:wizard/implement-mastery/wand-of-accuracy) form of Implement Mastery. Make [Wisdom](characteristic:wisdom) your third-best score. You might instead choose the [staff of defense](trait:wizard/implement-mastery/staff-of-defense) form of Implement Mastery, which lets your [Constitution](characteristic:constitution) aid your defenses against some attacks. Even if you don’t, Constitution increases your [hit points](characteristic:hit-points), [healing surges](characteristic:healing-surges), and [Fortitude](characteristic:fortitude) defense. Select powers that deal lots of damage and that make the best use of your high Dexterity score.\n\n' +
      '**Suggested Feat:** [Expanded Spellbook](trait:feat/expanded-spellbook) (Human feat: [Action Surge](trait:feat/action-surge))\n\n' +
      '**Suggested Skills:** [Arcana](characteristic:skill/arcana), [Dungeoneering](characteristic:skill/dungeoneering), [History](characteristic:skill/history), [Religion](characteristic:skill/religion)\n\n' +
      '**Suggested At-Will Powers:** _[magic missile](ability:wizard/power/magic-missile)_, _[scorching burst](ability:wizard/power/scorching-burst)_\n\n' +
      '**Suggested Encounter Power:** _[burning hands](ability:wizard/power/burning-hands)_\n\n' +
      '**Suggested Daily Power:** _[acid arrow](ability:wizard/power/acid-arrow)_',
  },
})

export const WizardImplementsSection = Content.defineSection('classes/wizard-implements', {
  parent: WizardSection,
  content: {
    name: 'Implements',
    description:
      'Wizards make use of orbs, staffs, and wands to help channel and direct their arcane powers. Every wizard has mastery of one type of implement (see “[Class Features](content:classes/wizard-class-features)”). Without an implement, a wizard can still use his or her powers. A wizard wielding a magic orb, staff, or wand can add its enhancement bonus to the attack rolls and the damage rolls of wizard powers, as well as wizard paragon path powers, that have the implement keyword.',
  },
})

export const WizardClassFeaturesSection = Content.defineSection('classes/wizard-class-features', {
  parent: WizardSection,
  content: { name: 'Wizard Class Features', description: 'You have the following class features.' },
})

export const ArcaneImplementMasterySection = Content.defineSection('classes/arcane-implement-mastery', {
  parent: WizardClassFeaturesSection,
  content: {
    name: 'Arcane Implement Mastery',
    description:
      'You specialize in the use of one kind of implement to gain additional abilities when you wield it. Choose one of the following forms of implement mastery.',
  },
})

export const OrbOfImpositionSection = Content.linkEntity(ArcaneImplementMasterySection, ClassWizard.OrbOfImposition)
export const StaffOfDefenseSection = Content.linkEntity(ArcaneImplementMasterySection, ClassWizard.StaffOfDefense)
export const WandOfAccuracySection = Content.linkEntity(ArcaneImplementMasterySection, ClassWizard.WandOfAccuracy)
export const CantripsSection = Content.linkEntity(WizardClassFeaturesSection, ClassWizard.WizardCantrips)
export const RitualCastingSection = Content.linkEntity(WizardClassFeaturesSection, ClassWizard.RitualCasting)
export const SpellbookSection = Content.linkEntity(WizardClassFeaturesSection, ClassWizard.Spellbook)

export const WizardsAndRitualsSection = Content.defineSection('classes/wizards-and-rituals', {
  parent: WizardSection,
  content: {
    name: 'Wizards and Rituals',
    description:
      'A wizard’s spells are potent in combat and useful in a variety of challenge encounters and other situations, but the wizard is also the undisputed master of magical rituals.\n\n' +
      'As you gain levels, you automatically gain access to new rituals, but you can also buy new rituals or acquire them in the course of your adventures. Higher-level rituals let you seal or open doors, view places or people from a distance, or open portals to other places.',
  },
})

export const WizardPowersSection = Content.defineSection('classes/wizard-powers', {
  parent: WizardSection,
  content: {
    name: 'Wizard Powers',
    description: 'Your arcane powers are called spells, and in the minds of most people in the world, they define what magic is.',
  },
})

export const WizardPowersClassFeaturesSection = Content.defineSection('classes/wizard-powers-class-features', {
  parent: WizardPowersSection,
  content: { name: 'Class Features' },
})

export const GhostSoundSection = Content.linkEntity(WizardPowersClassFeaturesSection, WizardPowers.GhostSound)
export const LightSection = Content.linkEntity(WizardPowersClassFeaturesSection, WizardPowers.Light)
export const MageHandSection = Content.linkEntity(WizardPowersClassFeaturesSection, WizardPowers.MageHand)

export const PrestidigitationSection = Content.linkEntity(WizardPowersClassFeaturesSection, WizardPowers.Prestidigitation)

export const WizardLevel1AtWillSpellsSection = Content.defineSection('classes/wizard-level-1-at-will-spells', {
  parent: WizardPowersSection,
  content: { name: 'Level 1 At-Will Spells' },
})

export const CloudOfDaggersSection = Content.linkEntity(WizardLevel1AtWillSpellsSection, WizardPowers.CloudOfDaggers)
export const MagicMissileSection = Content.linkEntity(WizardLevel1AtWillSpellsSection, WizardPowers.MagicMissile)
export const RayOfFrostSection = Content.linkEntity(WizardLevel1AtWillSpellsSection, WizardPowers.RayOfFrost)
export const ScorchingBurstSection = Content.linkEntity(WizardLevel1AtWillSpellsSection, WizardPowers.ScorchingBurst)
export const ThunderwaveSection = Content.linkEntity(WizardLevel1AtWillSpellsSection, WizardPowers.Thunderwave)

export const WizardLevel1EncounterSpellsSection = Content.defineSection('classes/wizard-level-1-encounter-spells', {
  parent: WizardPowersSection,
  content: { name: 'Level 1 Encounter Spells' },
})

export const BurningHandsSection = Content.linkEntity(WizardLevel1EncounterSpellsSection, WizardPowers.BurningHands)
export const ChillStrikeSection = Content.linkEntity(WizardLevel1EncounterSpellsSection, WizardPowers.ChillStrike)
export const ForceOrbSection = Content.linkEntity(WizardLevel1EncounterSpellsSection, WizardPowers.ForceOrb)
export const IcyTerrainSection = Content.linkEntity(WizardLevel1EncounterSpellsSection, WizardPowers.IcyTerrain)
export const RayOfEnfeeblementSection = Content.linkEntity(WizardLevel1EncounterSpellsSection, WizardPowers.RayOfEnfeeblement)

export const WizardLevel1DailySpellsSection = Content.defineSection('classes/wizard-level-1-daily-spells', {
  parent: WizardPowersSection,
  content: { name: 'Level 1 Daily Spells' },
})

export const AcidArrowSection = Content.linkEntity(WizardLevel1DailySpellsSection, WizardPowers.AcidArrow)
export const FlamingSphereSection = Content.linkEntity(WizardLevel1DailySpellsSection, WizardPowers.FlamingSphere)
export const FreezingCloudSection = Content.linkEntity(WizardLevel1DailySpellsSection, WizardPowers.FreezingCloud)
export const SleepSection = Content.linkEntity(WizardLevel1DailySpellsSection, WizardPowers.Sleep)

export const WizardLevel2UtilitySpellsSection = Content.defineSection('classes/wizard-level-2-utility-spells', {
  parent: WizardPowersSection,
  content: { name: 'Level 2 Utility Spells' },
})

export const ExpeditiousRetreatSection = Content.linkEntity(WizardLevel2UtilitySpellsSection, WizardPowers.ExpeditiousRetreat)
export const FeatherFallSection = Content.linkEntity(WizardLevel2UtilitySpellsSection, WizardPowers.FeatherFall)
export const JumpSection = Content.linkEntity(WizardLevel2UtilitySpellsSection, WizardPowers.Jump)
export const ShieldSection = Content.linkEntity(WizardLevel2UtilitySpellsSection, WizardPowers.Shield)

export const WizardLevel3EncounterSpellsSection = Content.defineSection('classes/wizard-level-3-encounter-spells', {
  parent: WizardPowersSection,
  content: { name: 'Level 3 Encounter Spells' },
})

export const ColorSpraySection = Content.linkEntity(WizardLevel3EncounterSpellsSection, WizardPowers.ColorSpray)
export const FireShroudSection = Content.linkEntity(WizardLevel3EncounterSpellsSection, WizardPowers.FireShroud)
export const IcyRaysSection = Content.linkEntity(WizardLevel3EncounterSpellsSection, WizardPowers.IcyRays)
export const ShockSphereSection = Content.linkEntity(WizardLevel3EncounterSpellsSection, WizardPowers.ShockSphere)

export const WizardLevel5DailySpellsSection = Content.defineSection('classes/wizard-level-5-daily-spells', {
  parent: WizardPowersSection,
  content: { name: 'Level 5 Daily Spells' },
})

export const BigbysIcyGraspSection = Content.linkEntity(WizardLevel5DailySpellsSection, WizardPowers.BigbysIcyGrasp)
export const FireballSection = Content.linkEntity(WizardLevel5DailySpellsSection, WizardPowers.Fireball)
export const StinkingCloudSection = Content.linkEntity(WizardLevel5DailySpellsSection, WizardPowers.StinkingCloud)
export const WebSection = Content.linkEntity(WizardLevel5DailySpellsSection, WizardPowers.Web)

export const WizardLevel6UtilitySpellsSection = Content.defineSection('classes/wizard-level-6-utility-spells', {
  parent: WizardPowersSection,
  content: { name: 'Level 6 Utility Spells' },
})

export const DimensionDoorSection = Content.linkEntity(WizardLevel6UtilitySpellsSection, WizardPowers.DimensionDoor)
export const DisguiseSelfSection = Content.linkEntity(WizardLevel6UtilitySpellsSection, WizardPowers.DisguiseSelf)
export const DispelMagicSection = Content.linkEntity(WizardLevel6UtilitySpellsSection, WizardPowers.DispelMagic)
export const InvisibilitySection = Content.linkEntity(WizardLevel6UtilitySpellsSection, WizardPowers.Invisibility)
export const LevitateSection = Content.linkEntity(WizardLevel6UtilitySpellsSection, WizardPowers.Levitate)
export const WallOfFogSection = Content.linkEntity(WizardLevel6UtilitySpellsSection, WizardPowers.WallOfFog)

export const WizardLevel7EncounterSpellsSection = Content.defineSection('classes/wizard-level-7-encounter-spells', {
  parent: WizardPowersSection,
  content: { name: 'Level 7 Encounter Spells' },
})

export const FireBurstSection = Content.linkEntity(WizardLevel7EncounterSpellsSection, WizardPowers.FireBurst)
export const LightningBoltSection = Content.linkEntity(WizardLevel7EncounterSpellsSection, WizardPowers.LightningBolt)
export const SpectralRamSection = Content.linkEntity(WizardLevel7EncounterSpellsSection, WizardPowers.SpectralRam)
export const WintersWrathSection = Content.linkEntity(WizardLevel7EncounterSpellsSection, WizardPowers.WintersWrath)

export const WizardLevel9DailySpellsSection = Content.defineSection('classes/wizard-level-9-daily-spells', {
  parent: WizardPowersSection,
  content: { name: 'Level 9 Daily Spells' },
})

export const IceStormSection = Content.linkEntity(WizardLevel9DailySpellsSection, WizardPowers.IceStorm)
export const LightningSerpentSection = Content.linkEntity(WizardLevel9DailySpellsSection, WizardPowers.LightningSerpent)
export const MordenkainensSwordSection = Content.linkEntity(WizardLevel9DailySpellsSection, WizardPowers.MordenkainensSword)
export const WallOfFireSection = Content.linkEntity(WizardLevel9DailySpellsSection, WizardPowers.WallOfFire)

export const WizardLevel10UtilitySpellsSection = Content.defineSection('classes/wizard-level-10-utility-spells', {
  parent: WizardPowersSection,
  content: { name: 'Level 10 Utility Spells' },
})

export const ArcaneGateSection = Content.linkEntity(WizardLevel10UtilitySpellsSection, WizardPowers.ArcaneGate)
export const BlurSection = Content.linkEntity(WizardLevel10UtilitySpellsSection, WizardPowers.Blur)
export const MirrorImageSection = Content.linkEntity(WizardLevel10UtilitySpellsSection, WizardPowers.MirrorImage)
export const ResistanceSection = Content.linkEntity(WizardLevel10UtilitySpellsSection, WizardPowers.Resistance)

export const WizardContent: Array<ContentSection> = [
  WizardSection,
  WizardClassTraitsSection,
  WizardOverviewSection,
  CreatingAWizardSection,
  ControlWizardSection,
  WarWizardSection,
  WizardImplementsSection,
  WizardClassFeaturesSection,
  ArcaneImplementMasterySection,
  OrbOfImpositionSection,
  StaffOfDefenseSection,
  WandOfAccuracySection,
  CantripsSection,
  RitualCastingSection,
  SpellbookSection,
  WizardsAndRitualsSection,
  WizardPowersSection,
  WizardPowersClassFeaturesSection,
  GhostSoundSection,
  LightSection,
  MageHandSection,
  PrestidigitationSection,
  WizardLevel1AtWillSpellsSection,
  CloudOfDaggersSection,
  MagicMissileSection,
  RayOfFrostSection,
  ScorchingBurstSection,
  ThunderwaveSection,
  WizardLevel1EncounterSpellsSection,
  BurningHandsSection,
  ChillStrikeSection,
  ForceOrbSection,
  IcyTerrainSection,
  RayOfEnfeeblementSection,
  WizardLevel1DailySpellsSection,
  AcidArrowSection,
  FlamingSphereSection,
  FreezingCloudSection,
  SleepSection,
  WizardLevel2UtilitySpellsSection,
  ExpeditiousRetreatSection,
  FeatherFallSection,
  JumpSection,
  ShieldSection,
  WizardLevel3EncounterSpellsSection,
  ColorSpraySection,
  FireShroudSection,
  IcyRaysSection,
  ShockSphereSection,
  WizardLevel5DailySpellsSection,
  BigbysIcyGraspSection,
  FireballSection,
  StinkingCloudSection,
  WebSection,
  WizardLevel6UtilitySpellsSection,
  DimensionDoorSection,
  DisguiseSelfSection,
  DispelMagicSection,
  InvisibilitySection,
  LevitateSection,
  WallOfFogSection,
  WizardLevel7EncounterSpellsSection,
  FireBurstSection,
  LightningBoltSection,
  SpectralRamSection,
  WintersWrathSection,
  WizardLevel9DailySpellsSection,
  IceStormSection,
  LightningSerpentSection,
  MordenkainensSwordSection,
  WallOfFireSection,
  WizardLevel10UtilitySpellsSection,
  ArcaneGateSection,
  BlurSection,
  MirrorImageSection,
  ResistanceSection,
]
