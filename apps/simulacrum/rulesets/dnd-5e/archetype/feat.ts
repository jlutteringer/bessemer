import { Archetypes, Traits } from '@simulacrum/common'
import { CharacterOptions } from '@simulacrum/common/character'

// FUTURE these are stubs: many feats come with choices of their own (e.g. which ability scores to increase)
export const Feat = Archetypes.defineArchetype('feat', { name: 'Feat' })

export const SelectFeat = CharacterOptions.selectTraitOption('feat/select', { archetypes: [Feat] })

export const AbilityScoreImprovement = Traits.defineTrait('feat/ability-score-improvement', {
  name: 'Ability Score Improvement',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Actor = Traits.defineTrait('feat/actor', {
  name: 'Actor',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Athlete = Traits.defineTrait('feat/athlete', {
  name: 'Athlete',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Charger = Traits.defineTrait('feat/charger', {
  name: 'Charger',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Chef = Traits.defineTrait('feat/chef', {
  name: 'Chef',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const CrossbowExpert = Traits.defineTrait('feat/crossbow-expert', {
  name: 'Crossbow Expert',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Crusher = Traits.defineTrait('feat/crusher', {
  name: 'Crusher',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const DefensiveDuelist = Traits.defineTrait('feat/defensive-duelist', {
  name: 'Defensive Duelist',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const DualWielder = Traits.defineTrait('feat/dual-wielder', {
  name: 'Dual Wielder',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Durable = Traits.defineTrait('feat/durable', {
  name: 'Durable',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const ElementalAdept = Traits.defineTrait('feat/elemental-adept', {
  name: 'Elemental Adept',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const FeyTouched = Traits.defineTrait('feat/fey-touched', {
  name: 'Fey-Touched',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Grappler = Traits.defineTrait('feat/grappler', {
  name: 'Grappler',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const GreatWeaponMaster = Traits.defineTrait('feat/great-weapon-master', {
  name: 'Great Weapon Master',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const HeavilyArmored = Traits.defineTrait('feat/heavily-armored', {
  name: 'Heavily Armored',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const HeavyArmorMaster = Traits.defineTrait('feat/heavy-armor-master', {
  name: 'Heavy Armor Master',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const InspiringLeader = Traits.defineTrait('feat/inspiring-leader', {
  name: 'Inspiring Leader',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const KeenMind = Traits.defineTrait('feat/keen-mind', {
  name: 'Keen Mind',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const LightlyArmored = Traits.defineTrait('feat/lightly-armored', {
  name: 'Lightly Armored',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const MageSlayer = Traits.defineTrait('feat/mage-slayer', {
  name: 'Mage Slayer',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const MartialWeaponTraining = Traits.defineTrait('feat/martial-weapon-training', {
  name: 'Martial Weapon Training',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const MediumArmorMaster = Traits.defineTrait('feat/medium-armor-master', {
  name: 'Medium Armor Master',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const ModeratelyArmored = Traits.defineTrait('feat/moderately-armored', {
  name: 'Moderately Armored',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const MountedCombatant = Traits.defineTrait('feat/mounted-combatant', {
  name: 'Mounted Combatant',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Observant = Traits.defineTrait('feat/observant', {
  name: 'Observant',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Piercer = Traits.defineTrait('feat/piercer', {
  name: 'Piercer',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Poisoner = Traits.defineTrait('feat/poisoner', {
  name: 'Poisoner',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const PolearmMaster = Traits.defineTrait('feat/polearm-master', {
  name: 'Polearm Master',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Resilient = Traits.defineTrait('feat/resilient', {
  name: 'Resilient',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const RitualCaster = Traits.defineTrait('feat/ritual-caster', {
  name: 'Ritual Caster',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Sentinel = Traits.defineTrait('feat/sentinel', {
  name: 'Sentinel',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const ShadowTouched = Traits.defineTrait('feat/shadow-touched', {
  name: 'Shadow-Touched',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Sharpshooter = Traits.defineTrait('feat/sharpshooter', {
  name: 'Sharpshooter',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const ShieldMaster = Traits.defineTrait('feat/shield-master', {
  name: 'Shield Master',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const SkillExpert = Traits.defineTrait('feat/skill-expert', {
  name: 'Skill Expert',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Skulker = Traits.defineTrait('feat/skulker', {
  name: 'Skulker',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Slasher = Traits.defineTrait('feat/slasher', {
  name: 'Slasher',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Speedy = Traits.defineTrait('feat/speedy', {
  name: 'Speedy',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const SpellSniper = Traits.defineTrait('feat/spell-sniper', {
  name: 'Spell Sniper',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Telekinetic = Traits.defineTrait('feat/telekinetic', {
  name: 'Telekinetic',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Telepathic = Traits.defineTrait('feat/telepathic', {
  name: 'Telepathic',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const WarCaster = Traits.defineTrait('feat/war-caster', {
  name: 'War Caster',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const WeaponMaster = Traits.defineTrait('feat/weapon-master', {
  name: 'Weapon Master',
  description: '',
  archetypes: [Feat],
  effects: [],
})
