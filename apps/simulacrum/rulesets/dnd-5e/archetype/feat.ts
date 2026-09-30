import { Archetypes, Traits } from '@simulacrum/common'
import { CharacterOptions } from '@simulacrum/common/character'

// FUTURE these are stubs: many feats come with choices of their own (e.g. which ability scores to increase)
export const Feat = Archetypes.defineArchetype('bf1fffc2-058b-42c0-8ca5-8ad3572a02c8', { name: 'Feat' })

export const SelectFeat = CharacterOptions.selectTraitOption('6e9fbd65-0695-4e5b-bb51-b3df8adc19d0', { archetypes: [Feat] })

export const AbilityScoreImprovement = Traits.defineTrait('e4ec41fd-ed1e-48a3-8ead-76f903f1d560', {
  name: 'Ability Score Improvement',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Actor = Traits.defineTrait('ac27ff9b-ca7d-4fd5-a877-22a209e0709f', {
  name: 'Actor',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Athlete = Traits.defineTrait('4d529d41-2841-4c8c-962f-511fcf815cd9', {
  name: 'Athlete',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Charger = Traits.defineTrait('7e77f1d3-c7a7-4e1a-b9ed-08c82f7eb4b9', {
  name: 'Charger',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Chef = Traits.defineTrait('a2dead8d-c560-44ee-8d61-470da9819f2d', {
  name: 'Chef',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const CrossbowExpert = Traits.defineTrait('5206b86a-13b9-48b0-884a-628150d5a2de', {
  name: 'Crossbow Expert',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Crusher = Traits.defineTrait('191ad8e6-f25e-460b-a9b9-5febbd9fd293', {
  name: 'Crusher',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const DefensiveDuelist = Traits.defineTrait('8b62137e-b412-473c-a4db-199aba4c547d', {
  name: 'Defensive Duelist',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const DualWielder = Traits.defineTrait('56bfbe77-251e-45f4-9151-6aad431b5561', {
  name: 'Dual Wielder',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Durable = Traits.defineTrait('0ad74037-20b2-4346-bd66-ecaccd5a1415', {
  name: 'Durable',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const ElementalAdept = Traits.defineTrait('c047525c-e375-4ab6-9816-82c754fe1250', {
  name: 'Elemental Adept',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const FeyTouched = Traits.defineTrait('69f8e3ad-cef2-4d99-834e-024b7345e7d5', {
  name: 'Fey-Touched',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Grappler = Traits.defineTrait('663dde70-88db-4bfa-84f4-e527b4e8762f', {
  name: 'Grappler',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const GreatWeaponMaster = Traits.defineTrait('aba1b40a-7e27-466f-ab46-def9efc13e56', {
  name: 'Great Weapon Master',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const HeavilyArmored = Traits.defineTrait('72922223-43ea-4b1b-838c-5fc3a39c936b', {
  name: 'Heavily Armored',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const HeavyArmorMaster = Traits.defineTrait('e7153903-80e7-496a-b7ae-0584a94d4d08', {
  name: 'Heavy Armor Master',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const InspiringLeader = Traits.defineTrait('4f15cfc6-a86c-41ba-bc97-082065c690c6', {
  name: 'Inspiring Leader',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const KeenMind = Traits.defineTrait('c4080db0-212b-4344-bb3e-d1cc699c472d', {
  name: 'Keen Mind',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const LightlyArmored = Traits.defineTrait('8a909a9f-fef8-4b53-9671-8c253aa40545', {
  name: 'Lightly Armored',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const MageSlayer = Traits.defineTrait('b0ddde96-a16f-4850-bf4c-3db3d9b43e46', {
  name: 'Mage Slayer',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const MartialWeaponTraining = Traits.defineTrait('445412d0-791d-4bb3-a4b6-97b64b92f6a7', {
  name: 'Martial Weapon Training',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const MediumArmorMaster = Traits.defineTrait('9834685b-1949-44c5-b269-129507127669', {
  name: 'Medium Armor Master',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const ModeratelyArmored = Traits.defineTrait('94caf822-101e-4ff0-963f-1ad78a0603dd', {
  name: 'Moderately Armored',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const MountedCombatant = Traits.defineTrait('7b2f8a31-e2d3-4952-85ce-a509e26ae1ba', {
  name: 'Mounted Combatant',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Observant = Traits.defineTrait('f7c6d96a-3109-4fc3-9d65-a12229ab99ed', {
  name: 'Observant',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Piercer = Traits.defineTrait('a0314547-0370-4073-900c-ade51477e3ea', {
  name: 'Piercer',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Poisoner = Traits.defineTrait('12f5b114-68ad-48ff-b5ef-25bd027afddf', {
  name: 'Poisoner',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const PolearmMaster = Traits.defineTrait('ef908a88-e254-4521-8c5f-78a40458cbff', {
  name: 'Polearm Master',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Resilient = Traits.defineTrait('8084e60d-64fa-4d93-bab8-8680a2235bbe', {
  name: 'Resilient',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const RitualCaster = Traits.defineTrait('792c0974-de34-4fe5-a691-098884f2f80e', {
  name: 'Ritual Caster',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Sentinel = Traits.defineTrait('14e12a7d-8dd7-4a95-8757-b2b374e86025', {
  name: 'Sentinel',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const ShadowTouched = Traits.defineTrait('4456e896-f607-47b6-8cf6-a5aa32355f9d', {
  name: 'Shadow-Touched',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Sharpshooter = Traits.defineTrait('9598342e-eb5f-48a7-ac8a-1a94bd7e03f7', {
  name: 'Sharpshooter',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const ShieldMaster = Traits.defineTrait('d0e44b82-e3ab-4d5f-9770-50bc1449ce8d', {
  name: 'Shield Master',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const SkillExpert = Traits.defineTrait('2b95392c-2c87-4989-b583-9855f19bfe0e', {
  name: 'Skill Expert',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Skulker = Traits.defineTrait('0e9b8aea-1b03-44d7-8a34-ed8e7971e1f5', {
  name: 'Skulker',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Slasher = Traits.defineTrait('c86ff0f9-2982-4133-8e8f-7d1091b23336', {
  name: 'Slasher',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Speedy = Traits.defineTrait('26cddab4-08e4-45a2-a2ba-d89df5909200', {
  name: 'Speedy',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const SpellSniper = Traits.defineTrait('cce1df16-aa18-42b8-8dac-d24e0a3ecb47', {
  name: 'Spell Sniper',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Telekinetic = Traits.defineTrait('e0e27554-d41e-4347-a54b-e054ad86d718', {
  name: 'Telekinetic',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const Telepathic = Traits.defineTrait('859c8ad7-945d-4632-a630-fd431a43bc2a', {
  name: 'Telepathic',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const WarCaster = Traits.defineTrait('2c4583ef-0188-4430-ad1f-6b8e2c333a85', {
  name: 'War Caster',
  description: '',
  archetypes: [Feat],
  effects: [],
})

export const WeaponMaster = Traits.defineTrait('b62fa3bb-cc3f-4e60-a52a-bddec85bcb69', {
  name: 'Weapon Master',
  description: '',
  archetypes: [Feat],
  effects: [],
})
