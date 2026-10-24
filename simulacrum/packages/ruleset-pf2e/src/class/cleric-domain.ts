import { Archetypes, CharacterOptions, Effects, Traits } from '@simulacrum/ruleset'
import { ClassFeat, ClericFeat, Feat, FeatLevel1 } from '@simulacrum/ruleset-pf2e/archetype'
import { FocusPoints } from '@simulacrum/ruleset-pf2e/spellcasting'
import * as FocusSpells from '@simulacrum/ruleset-pf2e/class/cleric-focus-spell'

export const ClericDomain = Archetypes.defineTraitArchetype('cleric/domain', { name: 'Domain' })

export const AirDomain = Traits.defineTrait('cleric/domain/air', {
  name: 'Air Domain',
  description: '**Domain Spell** _pushing gust_\n\n**Advanced Domain Spell** _disperse into air_\n\nYou can control winds and the weather.',
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.PushingGust)],
})

export const AmbitionDomain = Traits.defineTrait('cleric/domain/ambition', {
  name: 'Ambition Domain',
  description:
    '**Domain Spell** _ignite ambition_\n\n**Advanced Domain Spell** _competitive edge_\n\nYou strive to keep up with and outpace the competition.',
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.IgniteAmbition)],
})

export const CitiesDomain = Traits.defineTrait('cleric/domain/cities', {
  name: 'Cities Domain',
  description:
    '**Domain Spell** _face in the crowd_\n\n**Advanced Domain Spell** _pulse of civilization_\n\nYou have powers over urban environments and denizens.',
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.FaceInTheCrowd)],
})

export const ConfidenceDomain = Traits.defineTrait('cleric/domain/confidence', {
  name: 'Confidence Domain',
  description: '**Domain Spell** _veil of confidence_\n\n**Advanced Domain Spell** _delusional pride_\n\nYou overcome your fear and project pride.',
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.VeilOfConfidence)],
})

export const CreationDomain = Traits.defineTrait('cleric/domain/creation', {
  name: 'Creation Domain',
  description:
    '**Domain Spell** _creative splash_\n\n**Advanced Domain Spell** _artistic flourish_\n\nYou have divine abilities related to crafting and art.',
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.CreativeSplash)],
})

export const DarknessDomain = Traits.defineTrait('cleric/domain/darkness', {
  name: 'Darkness Domain',
  description:
    '**Domain Spell** _cloak of shadow_\n\n**Advanced Domain Spell** _darkened sight_\n\nYou operate in the darkness and take away the light.',
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.CloakOfShadow)],
})

export const DeathDomain = Traits.defineTrait('cleric/domain/death', {
  name: 'Death Domain',
  description:
    "**Domain Spell** _death's call_\n\n**Advanced Domain Spell** _eradicate undeath_\n\nYou have the power to end lives and destroy undead.",
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.DeathsCall)],
})

export const DestructionDomain = Traits.defineTrait('cleric/domain/destruction', {
  name: 'Destruction Domain',
  description: '**Domain Spell** _cry of destruction_\n\n**Advanced Domain Spell** _destructive aura_\n\nYou are a conduit for divine devastation.',
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.CryOfDestruction)],
})

export const DreamsDomain = Traits.defineTrait('cleric/domain/dreams', {
  name: 'Dreams Domain',
  description: "**Domain Spell** _sweet dream_\n\n**Advanced Domain Spell** _dreamer's call_\n\nYou have the power to enter and manipulate dreams.",
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.SweetDream)],
})

export const EarthDomain = Traits.defineTrait('cleric/domain/earth', {
  name: 'Earth Domain',
  description: '**Domain Spell** _hurtling stone_\n\n**Advanced Domain Spell** _localized quake_\n\nYou control soil and stone.',
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.HurtlingStone)],
})

export const FamilyDomain = Traits.defineTrait('cleric/domain/family', {
  name: 'Family Domain',
  description:
    '**Domain Spell** _soothing words_\n\n**Advanced Domain Spell** _unity_\n\nYou aid and protect your family and community more effectively.',
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.SoothingWords)],
})

export const FateDomain = Traits.defineTrait('cleric/domain/fate', {
  name: 'Fate Domain',
  description: '**Domain Spell** _read fate_\n\n**Advanced Domain Spell** _tempt fate_\n\nYou see and understand hidden inevitabilities.',
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.ReadFate)],
})

export const FireDomain = Traits.defineTrait('cleric/domain/fire', {
  name: 'Fire Domain',
  description: '**Domain Spell** _fire ray_\n\n**Advanced Domain Spell** _flame barrier_\n\nYou control flame.',
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.FireRay)],
})

export const FreedomDomain = Traits.defineTrait('cleric/domain/freedom', {
  name: 'Freedom Domain',
  description:
    '**Domain Spell** _unimpeded stride_\n\n**Advanced Domain Spell** _word of freedom_\n\nYou liberate yourself and others from shackles and constraints.',
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.UnimpededStride)],
})

export const HealingDomain = Traits.defineTrait('cleric/domain/healing', {
  name: 'Healing Domain',
  description: "**Domain Spell** _healer's blessing_\n\n**Advanced Domain Spell** _rebuke death_\n\nYour healing magic is particularly potent.",
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.HealersBlessing)],
})

export const IndulgenceDomain = Traits.defineTrait('cleric/domain/indulgence', {
  name: 'Indulgence Domain',
  description:
    '**Domain Spell** _overstuff_\n\n**Advanced Domain Spell** _take its course_\n\nYou feast mightily and can shake off the effects of overindulging.',
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.Overstuff)],
})

export const KnowledgeDomain = Traits.defineTrait('cleric/domain/knowledge', {
  name: 'Knowledge Domain',
  description: '**Domain Spell** _scholarly recollection_\n\n**Advanced Domain Spell** _know the enemy_\n\nYou receive divine insights.',
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.ScholarlyRecollection)],
})

export const LuckDomain = Traits.defineTrait('cleric/domain/luck', {
  name: 'Luck Domain',
  description: '**Domain Spell** _bit of luck_\n\n**Advanced Domain Spell** _lucky break_\n\nYou’re unnaturally lucky and keep out of harm’s way.',
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.BitOfLuck)],
})

export const MagicDomain = Traits.defineTrait('cleric/domain/magic', {
  name: 'Magic Domain',
  description: "**Domain Spell** _magic's vessel_\n\n**Advanced Domain Spell** _mystic beacon_\n\nYou perform the unexpected and inexplicable.",
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.MagicsVessel)],
})

export const MightDomain = Traits.defineTrait('cleric/domain/might', {
  name: 'Might Domain',
  description:
    '**Domain Spell** _athletic rush_\n\n**Advanced Domain Spell** _enduring might_\n\nYour physical power is bolstered by divine strength.',
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.AthleticRush)],
})

export const MoonDomain = Traits.defineTrait('cleric/domain/moon', {
  name: 'Moon Domain',
  description: '**Domain Spell** _moonbeam_\n\n**Advanced Domain Spell** _touch of the moon_\n\nYou command powers associated with the moon.',
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.Moonbeam)],
})

export const NatureDomain = Traits.defineTrait('cleric/domain/nature', {
  name: 'Nature Domain',
  description: "**Domain Spell** _vibrant thorns_\n\n**Advanced Domain Spell** _nature's bounty_\n\nYou hold power over animals and plants.",
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.VibrantThorns)],
})

export const NightmaresDomain = Traits.defineTrait('cleric/domain/nightmares', {
  name: 'Nightmares Domain',
  description: '**Domain Spell** _waking nightmare_\n\n**Advanced Domain Spell** _shared nightmare_\n\nYou fill minds with horror and dread.',
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.WakingNightmare)],
})

export const PainDomain = Traits.defineTrait('cleric/domain/pain', {
  name: 'Pain Domain',
  description:
    '**Domain Spell** _savor the sting_\n\n**Advanced Domain Spell** _retributive pain_\n\nYou punish those who displease you with the sharp sting of pain.',
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.SavorTheSting)],
})

export const PassionDomain = Traits.defineTrait('cleric/domain/passion', {
  name: 'Passion Domain',
  description:
    '**Domain Spell** _charming touch_\n\n**Advanced Domain Spell** _captivating adoration_\n\nYou evoke passion, whether as love or lust.',
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.CharmingTouch)],
})

export const PerfectionDomain = Traits.defineTrait('cleric/domain/perfection', {
  name: 'Perfection Domain',
  description:
    '**Domain Spell** _perfected mind_\n\n**Advanced Domain Spell** _perfected body_\n\nYou strive to perfect your mind, body, and spirit.',
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.PerfectedMind)],
})

export const ProtectionDomain = Traits.defineTrait('cleric/domain/protection', {
  name: 'Protection Domain',
  description: "**Domain Spell** _protector's sacrifice_\n\n**Advanced Domain Spell** _protector's sphere_\n\nYou ward yourself and others.",
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.ProtectorsSacrifice)],
})

export const SecrecyDomain = Traits.defineTrait('cleric/domain/secrecy', {
  name: 'Secrecy Domain',
  description: '**Domain Spell** _whispering quiet_\n\n**Advanced Domain Spell** _safeguard secret_\n\nYou protect secrets and keep them hidden.',
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.WhisperingQuiet)],
})

export const SunDomain = Traits.defineTrait('cleric/domain/sun', {
  name: 'Sun Domain',
  description:
    '**Domain Spell** _dazzling flash_\n\n**Advanced Domain Spell** _vital luminance_\n\nYou harness the power of the sun and other light sources, and punish undead.',
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.DazzlingFlash)],
})

export const TravelDomain = Traits.defineTrait('cleric/domain/travel', {
  name: 'Travel Domain',
  description: "**Domain Spell** _agile feet_\n\n**Advanced Domain Spell** _traveler's transit_\n\nYou have power over movement and journeys.",
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.AgileFeet)],
})

export const TrickeryDomain = Traits.defineTrait('cleric/domain/trickery', {
  name: 'Trickery Domain',
  description: "**Domain Spell** _sudden shift_\n\n**Advanced Domain Spell** _trickster's twin_\n\nYou deceive others and cause mischief.",
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.SuddenShift)],
})

export const TruthDomain = Traits.defineTrait('cleric/domain/truth', {
  name: 'Truth Domain',
  description: '**Domain Spell** _word of truth_\n\n**Advanced Domain Spell** _glimpse the truth_\n\nYou pierce lies and discover the truth.',
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.WordOfTruth)],
})

export const TyrannyDomain = Traits.defineTrait('cleric/domain/tyranny', {
  name: 'Tyranny Domain',
  description: '**Domain Spell** _touch of obedience_\n\n**Advanced Domain Spell** _commanding lash_\n\nYou wield power to rule and enslave others.',
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.TouchOfObedience)],
})

export const UndeathDomain = Traits.defineTrait('cleric/domain/undeath', {
  name: 'Undeath Domain',
  description:
    '**Domain Spell** _touch of undeath_\n\n**Advanced Domain Spell** _malignant sustenance_\n\nYour magic carries close ties to the undead.',
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.TouchOfUndeath)],
})

export const WaterDomain = Traits.defineTrait('cleric/domain/water', {
  name: 'Water Domain',
  description: '**Domain Spell** _tidal surge_\n\n**Advanced Domain Spell** _downpour_\n\nYou control water and bodies of water.',
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.TidalSurge)],
})

export const WealthDomain = Traits.defineTrait('cleric/domain/wealth', {
  name: 'Wealth Domain',
  description:
    '**Domain Spell** _appearance of wealth_\n\n**Advanced Domain Spell** _precious metals_\n\nYou hold power over wealth, trade, and treasure.',
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.AppearanceOfWealth)],
})

export const ZealDomain = Traits.defineTrait('cleric/domain/zeal', {
  name: 'Zeal Domain',
  description: '**Domain Spell** _weapon surge_\n\n**Advanced Domain Spell** _zeal for battle_\n\nYour inner fire increases your combat prowess.',
  archetypes: [ClericDomain],
  effects: [Effects.gainAbility(FocusSpells.WeaponSurge)],
})

export const SelectClericDomain = CharacterOptions.selectTraitOption('cleric/select-domain', {
  name: 'Domain',
  filter: { archetypes: [ClericDomain] },
})

export const DomainInitiate = Traits.defineTrait('feat/domain-initiate', {
  name: 'Domain Initiate',
  description:
    '*Cleric*\n\nYour deity bestows a special spell related to their powers. Select one domain—a subject of particular interest to you within your religion—from your deity’s list. You gain an initial domain spell for that domain, a spell unique to the domain and not available to other clerics.\n\nDomain spells are a type of focus spell. It costs 1 Focus Point to cast a focus spell, and you start with a focus pool of 1 Focus Point. You refill your focus pool during your daily preparations, and you can regain 1 Focus Point by spending 10 minutes using the [Refocus](content:spells/refocus) activity to pray to your deity or do service toward their causes.\n\nFocus spells are automatically heightened to half your level rounded up, much like cantrips. Focus spells don’t require spell slots, and can’t be cast using spell slots. Your focus pool can hold one Focus Point for each focus spell you have, up to 3 points. The full rules for focus spells appear [here.](content:spells/focus-spells)\n\n**Special** You can select this feat multiple times, selecting a different domain each time and gaining its domain spell.',
  archetypes: [Feat, ClassFeat, ClericFeat, FeatLevel1],
  repeatable: true,
  effects: [Effects.gainResourcePool(FocusPoints), Effects.gainCharacterOption(SelectClericDomain)],
})

export const AllClericDomainEntities = [
  ClericDomain,
  AirDomain,
  AmbitionDomain,
  CitiesDomain,
  ConfidenceDomain,
  CreationDomain,
  DarknessDomain,
  DeathDomain,
  DestructionDomain,
  DreamsDomain,
  EarthDomain,
  FamilyDomain,
  FateDomain,
  FireDomain,
  FreedomDomain,
  HealingDomain,
  IndulgenceDomain,
  KnowledgeDomain,
  LuckDomain,
  MagicDomain,
  MightDomain,
  MoonDomain,
  NatureDomain,
  NightmaresDomain,
  PainDomain,
  PassionDomain,
  PerfectionDomain,
  ProtectionDomain,
  SecrecyDomain,
  SunDomain,
  TravelDomain,
  TrickeryDomain,
  TruthDomain,
  TyrannyDomain,
  UndeathDomain,
  WaterDomain,
  WealthDomain,
  ZealDomain,
  DomainInitiate,
]
