import { Tags, Attributes, CharacterOptions, CharacterEffects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { ResourcePool } from '@simulacrum/ruleset/resource-pool'
import { ClassFeat, ClericFeat, Feat, FeatLevel1, FeatLevel8 } from '@simulacrum/ruleset-pf2e/tag'
import { FocusPoints } from '@simulacrum/ruleset-pf2e/spellcasting'
import * as FocusSpells from '@simulacrum/ruleset-pf2e/class/cleric-focus-spell'

export const ClericDomain = Tags.defineTraitTag('cleric/domain', { name: 'Domain' })

export const AirDomain = Traits.defineTrait('cleric/domain/air', {
  name: 'Air Domain',
  description: '**Domain Spell** _pushing gust_\n\n**Advanced Domain Spell** _disperse into air_\n\nYou can control winds and the weather.',
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.PushingGust)],
})

export const AmbitionDomain = Traits.defineTrait('cleric/domain/ambition', {
  name: 'Ambition Domain',
  description:
    '**Domain Spell** _ignite ambition_\n\n**Advanced Domain Spell** _competitive edge_\n\nYou strive to keep up with and outpace the competition.',
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.IgniteAmbition)],
})

export const CitiesDomain = Traits.defineTrait('cleric/domain/cities', {
  name: 'Cities Domain',
  description:
    '**Domain Spell** _face in the crowd_\n\n**Advanced Domain Spell** _pulse of civilization_\n\nYou have powers over urban environments and denizens.',
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.FaceInTheCrowd)],
})

export const ConfidenceDomain = Traits.defineTrait('cleric/domain/confidence', {
  name: 'Confidence Domain',
  description: '**Domain Spell** _veil of confidence_\n\n**Advanced Domain Spell** _delusional pride_\n\nYou overcome your fear and project pride.',
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.VeilOfConfidence)],
})

export const CreationDomain = Traits.defineTrait('cleric/domain/creation', {
  name: 'Creation Domain',
  description:
    '**Domain Spell** _creative splash_\n\n**Advanced Domain Spell** _artistic flourish_\n\nYou have divine abilities related to crafting and art.',
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.CreativeSplash)],
})

export const DarknessDomain = Traits.defineTrait('cleric/domain/darkness', {
  name: 'Darkness Domain',
  description:
    '**Domain Spell** _cloak of shadow_\n\n**Advanced Domain Spell** _darkened sight_\n\nYou operate in the darkness and take away the light.',
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.CloakOfShadow)],
})

export const DeathDomain = Traits.defineTrait('cleric/domain/death', {
  name: 'Death Domain',
  description:
    "**Domain Spell** _death's call_\n\n**Advanced Domain Spell** _eradicate undeath_\n\nYou have the power to end lives and destroy undead.",
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.DeathsCall)],
})

export const DestructionDomain = Traits.defineTrait('cleric/domain/destruction', {
  name: 'Destruction Domain',
  description: '**Domain Spell** _cry of destruction_\n\n**Advanced Domain Spell** _destructive aura_\n\nYou are a conduit for divine devastation.',
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.CryOfDestruction)],
})

export const DreamsDomain = Traits.defineTrait('cleric/domain/dreams', {
  name: 'Dreams Domain',
  description: "**Domain Spell** _sweet dream_\n\n**Advanced Domain Spell** _dreamer's call_\n\nYou have the power to enter and manipulate dreams.",
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.SweetDream)],
})

export const EarthDomain = Traits.defineTrait('cleric/domain/earth', {
  name: 'Earth Domain',
  description: '**Domain Spell** _hurtling stone_\n\n**Advanced Domain Spell** _localized quake_\n\nYou control soil and stone.',
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.HurtlingStone)],
})

export const FamilyDomain = Traits.defineTrait('cleric/domain/family', {
  name: 'Family Domain',
  description:
    '**Domain Spell** _soothing words_\n\n**Advanced Domain Spell** _unity_\n\nYou aid and protect your family and community more effectively.',
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.SoothingWords)],
})

export const FateDomain = Traits.defineTrait('cleric/domain/fate', {
  name: 'Fate Domain',
  description: '**Domain Spell** _read fate_\n\n**Advanced Domain Spell** _tempt fate_\n\nYou see and understand hidden inevitabilities.',
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.ReadFate)],
})

export const FireDomain = Traits.defineTrait('cleric/domain/fire', {
  name: 'Fire Domain',
  description: '**Domain Spell** _fire ray_\n\n**Advanced Domain Spell** _flame barrier_\n\nYou control flame.',
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.FireRay)],
})

export const FreedomDomain = Traits.defineTrait('cleric/domain/freedom', {
  name: 'Freedom Domain',
  description:
    '**Domain Spell** _unimpeded stride_\n\n**Advanced Domain Spell** _word of freedom_\n\nYou liberate yourself and others from shackles and constraints.',
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.UnimpededStride)],
})

export const HealingDomain = Traits.defineTrait('cleric/domain/healing', {
  name: 'Healing Domain',
  description: "**Domain Spell** _healer's blessing_\n\n**Advanced Domain Spell** _rebuke death_\n\nYour healing magic is particularly potent.",
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.HealersBlessing)],
})

export const IndulgenceDomain = Traits.defineTrait('cleric/domain/indulgence', {
  name: 'Indulgence Domain',
  description:
    '**Domain Spell** _overstuff_\n\n**Advanced Domain Spell** _take its course_\n\nYou feast mightily and can shake off the effects of overindulging.',
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.Overstuff)],
})

export const KnowledgeDomain = Traits.defineTrait('cleric/domain/knowledge', {
  name: 'Knowledge Domain',
  description: '**Domain Spell** _scholarly recollection_\n\n**Advanced Domain Spell** _know the enemy_\n\nYou receive divine insights.',
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.ScholarlyRecollection)],
})

export const LuckDomain = Traits.defineTrait('cleric/domain/luck', {
  name: 'Luck Domain',
  description: '**Domain Spell** _bit of luck_\n\n**Advanced Domain Spell** _lucky break_\n\nYou’re unnaturally lucky and keep out of harm’s way.',
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.BitOfLuck)],
})

export const MagicDomain = Traits.defineTrait('cleric/domain/magic', {
  name: 'Magic Domain',
  description: "**Domain Spell** _magic's vessel_\n\n**Advanced Domain Spell** _mystic beacon_\n\nYou perform the unexpected and inexplicable.",
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.MagicsVessel)],
})

export const MightDomain = Traits.defineTrait('cleric/domain/might', {
  name: 'Might Domain',
  description:
    '**Domain Spell** _athletic rush_\n\n**Advanced Domain Spell** _enduring might_\n\nYour physical power is bolstered by divine strength.',
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.AthleticRush)],
})

export const MoonDomain = Traits.defineTrait('cleric/domain/moon', {
  name: 'Moon Domain',
  description: '**Domain Spell** _moonbeam_\n\n**Advanced Domain Spell** _touch of the moon_\n\nYou command powers associated with the moon.',
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.Moonbeam)],
})

export const NatureDomain = Traits.defineTrait('cleric/domain/nature', {
  name: 'Nature Domain',
  description: "**Domain Spell** _vibrant thorns_\n\n**Advanced Domain Spell** _nature's bounty_\n\nYou hold power over animals and plants.",
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.VibrantThorns)],
})

export const NightmaresDomain = Traits.defineTrait('cleric/domain/nightmares', {
  name: 'Nightmares Domain',
  description: '**Domain Spell** _waking nightmare_\n\n**Advanced Domain Spell** _shared nightmare_\n\nYou fill minds with horror and dread.',
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.WakingNightmare)],
})

export const PainDomain = Traits.defineTrait('cleric/domain/pain', {
  name: 'Pain Domain',
  description:
    '**Domain Spell** _savor the sting_\n\n**Advanced Domain Spell** _retributive pain_\n\nYou punish those who displease you with the sharp sting of pain.',
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.SavorTheSting)],
})

export const PassionDomain = Traits.defineTrait('cleric/domain/passion', {
  name: 'Passion Domain',
  description:
    '**Domain Spell** _charming touch_\n\n**Advanced Domain Spell** _captivating adoration_\n\nYou evoke passion, whether as love or lust.',
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.CharmingTouch)],
})

export const PerfectionDomain = Traits.defineTrait('cleric/domain/perfection', {
  name: 'Perfection Domain',
  description:
    '**Domain Spell** _perfected mind_\n\n**Advanced Domain Spell** _perfected body_\n\nYou strive to perfect your mind, body, and spirit.',
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.PerfectedMind)],
})

export const ProtectionDomain = Traits.defineTrait('cleric/domain/protection', {
  name: 'Protection Domain',
  description: "**Domain Spell** _protector's sacrifice_\n\n**Advanced Domain Spell** _protector's sphere_\n\nYou ward yourself and others.",
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.ProtectorsSacrifice)],
})

export const SecrecyDomain = Traits.defineTrait('cleric/domain/secrecy', {
  name: 'Secrecy Domain',
  description: '**Domain Spell** _whispering quiet_\n\n**Advanced Domain Spell** _safeguard secret_\n\nYou protect secrets and keep them hidden.',
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.WhisperingQuiet)],
})

export const SunDomain = Traits.defineTrait('cleric/domain/sun', {
  name: 'Sun Domain',
  description:
    '**Domain Spell** _dazzling flash_\n\n**Advanced Domain Spell** _vital luminance_\n\nYou harness the power of the sun and other light sources, and punish undead.',
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.DazzlingFlash)],
})

export const TravelDomain = Traits.defineTrait('cleric/domain/travel', {
  name: 'Travel Domain',
  description: "**Domain Spell** _agile feet_\n\n**Advanced Domain Spell** _traveler's transit_\n\nYou have power over movement and journeys.",
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.AgileFeet)],
})

export const TrickeryDomain = Traits.defineTrait('cleric/domain/trickery', {
  name: 'Trickery Domain',
  description: "**Domain Spell** _sudden shift_\n\n**Advanced Domain Spell** _trickster's twin_\n\nYou deceive others and cause mischief.",
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.SuddenShift)],
})

export const TruthDomain = Traits.defineTrait('cleric/domain/truth', {
  name: 'Truth Domain',
  description: '**Domain Spell** _word of truth_\n\n**Advanced Domain Spell** _glimpse the truth_\n\nYou pierce lies and discover the truth.',
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.WordOfTruth)],
})

export const TyrannyDomain = Traits.defineTrait('cleric/domain/tyranny', {
  name: 'Tyranny Domain',
  description: '**Domain Spell** _touch of obedience_\n\n**Advanced Domain Spell** _commanding lash_\n\nYou wield power to rule and enslave others.',
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.TouchOfObedience)],
})

export const UndeathDomain = Traits.defineTrait('cleric/domain/undeath', {
  name: 'Undeath Domain',
  description:
    '**Domain Spell** _touch of undeath_\n\n**Advanced Domain Spell** _malignant sustenance_\n\nYour magic carries close ties to the undead.',
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.TouchOfUndeath)],
})

export const WaterDomain = Traits.defineTrait('cleric/domain/water', {
  name: 'Water Domain',
  description: '**Domain Spell** _tidal surge_\n\n**Advanced Domain Spell** _downpour_\n\nYou control water and bodies of water.',
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.TidalSurge)],
})

export const WealthDomain = Traits.defineTrait('cleric/domain/wealth', {
  name: 'Wealth Domain',
  description:
    '**Domain Spell** _appearance of wealth_\n\n**Advanced Domain Spell** _precious metals_\n\nYou hold power over wealth, trade, and treasure.',
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.AppearanceOfWealth)],
})

export const ZealDomain = Traits.defineTrait('cleric/domain/zeal', {
  name: 'Zeal Domain',
  description: '**Domain Spell** _weapon surge_\n\n**Advanced Domain Spell** _zeal for battle_\n\nYour inner fire increases your combat prowess.',
  tags: [ClericDomain],
  effects: [CharacterEffects.gainAbility(FocusSpells.WeaponSurge)],
})

export const SelectClericDomain = CharacterOptions.selectTraitOption('cleric/select-domain', {
  name: 'Domain',
  filter: { tags: [ClericDomain] },
})

export const DomainInitiate = Traits.defineTrait('feat/domain-initiate', {
  name: 'Domain Initiate',
  description:
    '*Cleric*\n\nYour deity bestows a special spell related to their powers. Select one domain—a subject of particular interest to you within your religion—from your deity’s list. You gain an initial domain spell for that domain, a spell unique to the domain and not available to other clerics.\n\nDomain spells are a type of focus spell. It costs 1 Focus Point to cast a focus spell, and you start with a focus pool of 1 Focus Point. You refill your focus pool during your daily preparations, and you can regain 1 Focus Point by spending 10 minutes using the [Refocus](content:spells/refocus) activity to pray to your deity or do service toward their causes.\n\nFocus spells are automatically heightened to half your level rounded up, much like cantrips. Focus spells don’t require spell slots, and can’t be cast using spell slots. Your focus pool can hold one Focus Point for each focus spell you have, up to 3 points. The full rules for focus spells appear [here.](content:spells/focus-spells)\n\n**Special** You can select this feat multiple times, selecting a different domain each time and gaining its domain spell.',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel1],
  repeatable: true,
  effects: [CharacterEffects.gainResourcePool(FocusPoints), CharacterEffects.gainCharacterOption(SelectClericDomain)],
})

export const AdvancedDomainAir = Traits.defineTrait('feat/advanced-domain/air', {
  name: 'Advanced Domain (Air)',
  description: "You gain the air domain's advanced domain spell, _disperse into air_.",
  prerequisites: [Traits.traitPrerequisite(AirDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.DisperseIntoAir)],
})

export const AdvancedDomainAmbition = Traits.defineTrait('feat/advanced-domain/ambition', {
  name: 'Advanced Domain (Ambition)',
  description: "You gain the ambition domain's advanced domain spell, _competitive edge_.",
  prerequisites: [Traits.traitPrerequisite(AmbitionDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.CompetitiveEdge)],
})

export const AdvancedDomainCities = Traits.defineTrait('feat/advanced-domain/cities', {
  name: 'Advanced Domain (Cities)',
  description: "You gain the cities domain's advanced domain spell, _pulse of civilization_.",
  prerequisites: [Traits.traitPrerequisite(CitiesDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.PulseOfCivilization)],
})

export const AdvancedDomainConfidence = Traits.defineTrait('feat/advanced-domain/confidence', {
  name: 'Advanced Domain (Confidence)',
  description: "You gain the confidence domain's advanced domain spell, _delusional pride_.",
  prerequisites: [Traits.traitPrerequisite(ConfidenceDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.DelusionalPride)],
})

export const AdvancedDomainCreation = Traits.defineTrait('feat/advanced-domain/creation', {
  name: 'Advanced Domain (Creation)',
  description: "You gain the creation domain's advanced domain spell, _artistic flourish_.",
  prerequisites: [Traits.traitPrerequisite(CreationDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.ArtisticFlourish)],
})

export const AdvancedDomainDarkness = Traits.defineTrait('feat/advanced-domain/darkness', {
  name: 'Advanced Domain (Darkness)',
  description: "You gain the darkness domain's advanced domain spell, _darkened sight_.",
  prerequisites: [Traits.traitPrerequisite(DarknessDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.DarkenedSight)],
})

export const AdvancedDomainDeath = Traits.defineTrait('feat/advanced-domain/death', {
  name: 'Advanced Domain (Death)',
  description: "You gain the death domain's advanced domain spell, _eradicate undeath_.",
  prerequisites: [Traits.traitPrerequisite(DeathDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.EradicateUndeath)],
})

export const AdvancedDomainDestruction = Traits.defineTrait('feat/advanced-domain/destruction', {
  name: 'Advanced Domain (Destruction)',
  description: "You gain the destruction domain's advanced domain spell, _destructive aura_.",
  prerequisites: [Traits.traitPrerequisite(DestructionDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.DestructiveAura)],
})

export const AdvancedDomainDreams = Traits.defineTrait('feat/advanced-domain/dreams', {
  name: 'Advanced Domain (Dreams)',
  description: "You gain the dreams domain's advanced domain spell, _dreamer's call_.",
  prerequisites: [Traits.traitPrerequisite(DreamsDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.DreamersCall)],
})

export const AdvancedDomainEarth = Traits.defineTrait('feat/advanced-domain/earth', {
  name: 'Advanced Domain (Earth)',
  description: "You gain the earth domain's advanced domain spell, _localized quake_.",
  prerequisites: [Traits.traitPrerequisite(EarthDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.LocalizedQuake)],
})

export const AdvancedDomainFamily = Traits.defineTrait('feat/advanced-domain/family', {
  name: 'Advanced Domain (Family)',
  description: "You gain the family domain's advanced domain spell, _unity_.",
  prerequisites: [Traits.traitPrerequisite(FamilyDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.Unity)],
})

export const AdvancedDomainFate = Traits.defineTrait('feat/advanced-domain/fate', {
  name: 'Advanced Domain (Fate)',
  description: "You gain the fate domain's advanced domain spell, _tempt fate_.",
  prerequisites: [Traits.traitPrerequisite(FateDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.TemptFate)],
})

export const AdvancedDomainFire = Traits.defineTrait('feat/advanced-domain/fire', {
  name: 'Advanced Domain (Fire)',
  description: "You gain the fire domain's advanced domain spell, _flame barrier_.",
  prerequisites: [Traits.traitPrerequisite(FireDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.FlameBarrier)],
})

export const AdvancedDomainFreedom = Traits.defineTrait('feat/advanced-domain/freedom', {
  name: 'Advanced Domain (Freedom)',
  description: "You gain the freedom domain's advanced domain spell, _word of freedom_.",
  prerequisites: [Traits.traitPrerequisite(FreedomDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.WordOfFreedom)],
})

export const AdvancedDomainHealing = Traits.defineTrait('feat/advanced-domain/healing', {
  name: 'Advanced Domain (Healing)',
  description: "You gain the healing domain's advanced domain spell, _rebuke death_.",
  prerequisites: [Traits.traitPrerequisite(HealingDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.RebukeDeath)],
})

export const AdvancedDomainIndulgence = Traits.defineTrait('feat/advanced-domain/indulgence', {
  name: 'Advanced Domain (Indulgence)',
  description: "You gain the indulgence domain's advanced domain spell, _take its course_.",
  prerequisites: [Traits.traitPrerequisite(IndulgenceDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.TakeItsCourse)],
})

export const AdvancedDomainKnowledge = Traits.defineTrait('feat/advanced-domain/knowledge', {
  name: 'Advanced Domain (Knowledge)',
  description: "You gain the knowledge domain's advanced domain spell, _know the enemy_.",
  prerequisites: [Traits.traitPrerequisite(KnowledgeDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.KnowTheEnemy)],
})

export const AdvancedDomainLuck = Traits.defineTrait('feat/advanced-domain/luck', {
  name: 'Advanced Domain (Luck)',
  description: "You gain the luck domain's advanced domain spell, _lucky break_.",
  prerequisites: [Traits.traitPrerequisite(LuckDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.LuckyBreak)],
})

export const AdvancedDomainMagic = Traits.defineTrait('feat/advanced-domain/magic', {
  name: 'Advanced Domain (Magic)',
  description: "You gain the magic domain's advanced domain spell, _mystic beacon_.",
  prerequisites: [Traits.traitPrerequisite(MagicDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.MysticBeacon)],
})

export const AdvancedDomainMight = Traits.defineTrait('feat/advanced-domain/might', {
  name: 'Advanced Domain (Might)',
  description: "You gain the might domain's advanced domain spell, _enduring might_.",
  prerequisites: [Traits.traitPrerequisite(MightDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.EnduringMight)],
})

export const AdvancedDomainMoon = Traits.defineTrait('feat/advanced-domain/moon', {
  name: 'Advanced Domain (Moon)',
  description: "You gain the moon domain's advanced domain spell, _touch of the moon_.",
  prerequisites: [Traits.traitPrerequisite(MoonDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.TouchOfTheMoon)],
})

export const AdvancedDomainNature = Traits.defineTrait('feat/advanced-domain/nature', {
  name: 'Advanced Domain (Nature)',
  description: "You gain the nature domain's advanced domain spell, _nature's bounty_.",
  prerequisites: [Traits.traitPrerequisite(NatureDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.NaturesBounty)],
})

export const AdvancedDomainNightmares = Traits.defineTrait('feat/advanced-domain/nightmares', {
  name: 'Advanced Domain (Nightmares)',
  description: "You gain the nightmares domain's advanced domain spell, _shared nightmare_.",
  prerequisites: [Traits.traitPrerequisite(NightmaresDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.SharedNightmare)],
})

export const AdvancedDomainPain = Traits.defineTrait('feat/advanced-domain/pain', {
  name: 'Advanced Domain (Pain)',
  description: "You gain the pain domain's advanced domain spell, _retributive pain_.",
  prerequisites: [Traits.traitPrerequisite(PainDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.RetributivePain)],
})

export const AdvancedDomainPassion = Traits.defineTrait('feat/advanced-domain/passion', {
  name: 'Advanced Domain (Passion)',
  description: "You gain the passion domain's advanced domain spell, _captivating adoration_.",
  prerequisites: [Traits.traitPrerequisite(PassionDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.CaptivatingAdoration)],
})

export const AdvancedDomainPerfection = Traits.defineTrait('feat/advanced-domain/perfection', {
  name: 'Advanced Domain (Perfection)',
  description: "You gain the perfection domain's advanced domain spell, _perfected body_.",
  prerequisites: [Traits.traitPrerequisite(PerfectionDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.PerfectedBody)],
})

export const AdvancedDomainProtection = Traits.defineTrait('feat/advanced-domain/protection', {
  name: 'Advanced Domain (Protection)',
  description: "You gain the protection domain's advanced domain spell, _protector's sphere_.",
  prerequisites: [Traits.traitPrerequisite(ProtectionDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.ProtectorsSphere)],
})

export const AdvancedDomainSecrecy = Traits.defineTrait('feat/advanced-domain/secrecy', {
  name: 'Advanced Domain (Secrecy)',
  description: "You gain the secrecy domain's advanced domain spell, _safeguard secret_.",
  prerequisites: [Traits.traitPrerequisite(SecrecyDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.SafeguardSecret)],
})

export const AdvancedDomainSun = Traits.defineTrait('feat/advanced-domain/sun', {
  name: 'Advanced Domain (Sun)',
  description: "You gain the sun domain's advanced domain spell, _vital luminance_.",
  prerequisites: [Traits.traitPrerequisite(SunDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.VitalLuminance)],
})

export const AdvancedDomainTravel = Traits.defineTrait('feat/advanced-domain/travel', {
  name: 'Advanced Domain (Travel)',
  description: "You gain the travel domain's advanced domain spell, _traveler's transit_.",
  prerequisites: [Traits.traitPrerequisite(TravelDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.TravelersTransit)],
})

export const AdvancedDomainTrickery = Traits.defineTrait('feat/advanced-domain/trickery', {
  name: 'Advanced Domain (Trickery)',
  description: "You gain the trickery domain's advanced domain spell, _trickster's twin_.",
  prerequisites: [Traits.traitPrerequisite(TrickeryDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.TrickstersTwin)],
})

export const AdvancedDomainTruth = Traits.defineTrait('feat/advanced-domain/truth', {
  name: 'Advanced Domain (Truth)',
  description: "You gain the truth domain's advanced domain spell, _glimpse the truth_.",
  prerequisites: [Traits.traitPrerequisite(TruthDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.GlimpseTheTruth)],
})

export const AdvancedDomainTyranny = Traits.defineTrait('feat/advanced-domain/tyranny', {
  name: 'Advanced Domain (Tyranny)',
  description: "You gain the tyranny domain's advanced domain spell, _commanding lash_.",
  prerequisites: [Traits.traitPrerequisite(TyrannyDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.CommandingLash)],
})

export const AdvancedDomainUndeath = Traits.defineTrait('feat/advanced-domain/undeath', {
  name: 'Advanced Domain (Undeath)',
  description: "You gain the undeath domain's advanced domain spell, _malignant sustenance_.",
  prerequisites: [Traits.traitPrerequisite(UndeathDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.MalignantSustenance)],
})

export const AdvancedDomainWater = Traits.defineTrait('feat/advanced-domain/water', {
  name: 'Advanced Domain (Water)',
  description: "You gain the water domain's advanced domain spell, _downpour_.",
  prerequisites: [Traits.traitPrerequisite(WaterDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.Downpour)],
})

export const AdvancedDomainWealth = Traits.defineTrait('feat/advanced-domain/wealth', {
  name: 'Advanced Domain (Wealth)',
  description: "You gain the wealth domain's advanced domain spell, _precious metals_.",
  prerequisites: [Traits.traitPrerequisite(WealthDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.PreciousMetals)],
})

export const AdvancedDomainZeal = Traits.defineTrait('feat/advanced-domain/zeal', {
  name: 'Advanced Domain (Zeal)',
  description: "You gain the zeal domain's advanced domain spell, _zeal for battle_.",
  prerequisites: [Traits.traitPrerequisite(ZealDomain)],
  effects: [CharacterEffects.gainAbility(FocusSpells.ZealForBattle)],
})

export const SelectAdvancedDomain = CharacterOptions.selectTraitOption('feat/advanced-domain/select', {
  name: 'Advanced Domain',
  filter: {
    specificOptions: [
      AdvancedDomainAir,
      AdvancedDomainAmbition,
      AdvancedDomainCities,
      AdvancedDomainConfidence,
      AdvancedDomainCreation,
      AdvancedDomainDarkness,
      AdvancedDomainDeath,
      AdvancedDomainDestruction,
      AdvancedDomainDreams,
      AdvancedDomainEarth,
      AdvancedDomainFamily,
      AdvancedDomainFate,
      AdvancedDomainFire,
      AdvancedDomainFreedom,
      AdvancedDomainHealing,
      AdvancedDomainIndulgence,
      AdvancedDomainKnowledge,
      AdvancedDomainLuck,
      AdvancedDomainMagic,
      AdvancedDomainMight,
      AdvancedDomainMoon,
      AdvancedDomainNature,
      AdvancedDomainNightmares,
      AdvancedDomainPain,
      AdvancedDomainPassion,
      AdvancedDomainPerfection,
      AdvancedDomainProtection,
      AdvancedDomainSecrecy,
      AdvancedDomainSun,
      AdvancedDomainTravel,
      AdvancedDomainTrickery,
      AdvancedDomainTruth,
      AdvancedDomainTyranny,
      AdvancedDomainUndeath,
      AdvancedDomainWater,
      AdvancedDomainWealth,
      AdvancedDomainZeal,
    ],
  },
})

export const AdvancedDomain = Traits.defineTrait('feat/advanced-domain', {
  name: 'Advanced Domain',
  description:
    '*Cleric*\n\n**Prerequisites** [Domain Initiate](trait:feat/domain-initiate)\n\nYour prayers have unlocked deeper secrets of your deity’s domain. You gain an advanced domain spell from one of your domains for which you have an initial domain spell.\n\n**Special** You can select this feat multiple times. Each time, you must select a different advanced domain spell.',
  tags: [Feat, ClassFeat, ClericFeat, FeatLevel8],
  prerequisites: [Traits.traitPrerequisite(DomainInitiate)],
  repeatable: true,
  effects: [
    CharacterEffects.gainCharacterOption(SelectAdvancedDomain),
    CharacterEffects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
  ],
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
  AdvancedDomainAir,
  AdvancedDomainAmbition,
  AdvancedDomainCities,
  AdvancedDomainConfidence,
  AdvancedDomainCreation,
  AdvancedDomainDarkness,
  AdvancedDomainDeath,
  AdvancedDomainDestruction,
  AdvancedDomainDreams,
  AdvancedDomainEarth,
  AdvancedDomainFamily,
  AdvancedDomainFate,
  AdvancedDomainFire,
  AdvancedDomainFreedom,
  AdvancedDomainHealing,
  AdvancedDomainIndulgence,
  AdvancedDomainKnowledge,
  AdvancedDomainLuck,
  AdvancedDomainMagic,
  AdvancedDomainMight,
  AdvancedDomainMoon,
  AdvancedDomainNature,
  AdvancedDomainNightmares,
  AdvancedDomainPain,
  AdvancedDomainPassion,
  AdvancedDomainPerfection,
  AdvancedDomainProtection,
  AdvancedDomainSecrecy,
  AdvancedDomainSun,
  AdvancedDomainTravel,
  AdvancedDomainTrickery,
  AdvancedDomainTruth,
  AdvancedDomainTyranny,
  AdvancedDomainUndeath,
  AdvancedDomainWater,
  AdvancedDomainWealth,
  AdvancedDomainZeal,
  SelectAdvancedDomain,
  AdvancedDomain,
]
