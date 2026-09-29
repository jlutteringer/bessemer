import { Archetypes, Traits } from '@simulacrum/common'
import { CharacterOptions } from '@simulacrum/common/character'

export const WeaponMastery = Archetypes.defineArchetype('2535c616-10b0-4869-bb2c-96706e84dc32', { name: 'Weapon Mastery' })

export const SelectWeaponMastery = CharacterOptions.selectTraitOption('d84e1ab9-09e8-4bf0-a0ff-5d5aa5ff6675', { archetypes: [WeaponMastery] })

export const Club = Traits.defineTrait('b5acca7f-ad58-48e5-ad98-c49bba1f2f1f', {
  name: 'Club',
  description: 'Mastery: Slow',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Dagger = Traits.defineTrait('0e59e1d8-4474-4a63-ab6c-74097e1dbb37', {
  name: 'Dagger',
  description: 'Mastery: Nick',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Greatclub = Traits.defineTrait('b4285176-728a-4dd9-ab2e-22c0f5df98f7', {
  name: 'Greatclub',
  description: 'Mastery: Push',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Handaxe = Traits.defineTrait('a37f5c25-c4ea-42e3-ba36-e0972200fff2', {
  name: 'Handaxe',
  description: 'Mastery: Vex',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Javelin = Traits.defineTrait('15f6582c-0f1f-43fa-a661-5d48bea7985a', {
  name: 'Javelin',
  description: 'Mastery: Slow',
  archetypes: [WeaponMastery],
  effects: [],
})

export const LightHammer = Traits.defineTrait('d2dfa574-1dfe-455c-9c5d-c8a571731f62', {
  name: 'Light Hammer',
  description: 'Mastery: Nick',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Mace = Traits.defineTrait('6d83a4ec-ce1b-464f-9223-a3cd542f08ac', {
  name: 'Mace',
  description: 'Mastery: Sap',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Quarterstaff = Traits.defineTrait('dce3e3c1-785b-47cf-a671-f27cf6b97c2e', {
  name: 'Quarterstaff',
  description: 'Mastery: Topple',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Sickle = Traits.defineTrait('bf23a753-7c07-435d-8c58-eba865e5dc85', {
  name: 'Sickle',
  description: 'Mastery: Nick',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Spear = Traits.defineTrait('285cf871-0226-41a0-9744-7df65b342ec1', {
  name: 'Spear',
  description: 'Mastery: Sap',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Dart = Traits.defineTrait('b5e67742-6249-4418-8944-61e982bdc2f5', {
  name: 'Dart',
  description: 'Mastery: Vex',
  archetypes: [WeaponMastery],
  effects: [],
})

export const LightCrossbow = Traits.defineTrait('15503758-e79b-4f77-a4f4-4ffce0f032d0', {
  name: 'Light Crossbow',
  description: 'Mastery: Slow',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Shortbow = Traits.defineTrait('a57aadf2-5216-4576-be40-9b78adcb9cdd', {
  name: 'Shortbow',
  description: 'Mastery: Vex',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Sling = Traits.defineTrait('ee7587ea-564b-4023-874c-d11ecae71588', {
  name: 'Sling',
  description: 'Mastery: Slow',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Battleaxe = Traits.defineTrait('063a736b-8e0e-4434-b65c-74e5e318e2ee', {
  name: 'Battleaxe',
  description: 'Mastery: Topple',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Flail = Traits.defineTrait('bf2025f0-90ac-45ed-b6c5-effa08f3809a', {
  name: 'Flail',
  description: 'Mastery: Sap',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Glaive = Traits.defineTrait('5c27b824-010a-4ac8-9a6c-f1bf7fefc130', {
  name: 'Glaive',
  description: 'Mastery: Graze',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Greataxe = Traits.defineTrait('3ea8cd4b-69c0-4921-8a4f-d8de996b4191', {
  name: 'Greataxe',
  description: 'Mastery: Cleave',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Greatsword = Traits.defineTrait('82569b9c-c607-4bf7-9f29-65c77b0ec1cb', {
  name: 'Greatsword',
  description: 'Mastery: Graze',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Halberd = Traits.defineTrait('c3f8081b-f941-4529-a17e-a84914338fc5', {
  name: 'Halberd',
  description: 'Mastery: Cleave',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Lance = Traits.defineTrait('e3bf5e87-dba6-4208-ac24-4d8958c481c2', {
  name: 'Lance',
  description: 'Mastery: Topple',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Longsword = Traits.defineTrait('ec8fda40-f506-48c5-ae3e-ab2330202d1c', {
  name: 'Longsword',
  description: 'Mastery: Sap',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Maul = Traits.defineTrait('a89b05a2-1be0-47d5-b550-093503f9963d', {
  name: 'Maul',
  description: 'Mastery: Topple',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Morningstar = Traits.defineTrait('cece5784-dde3-4f86-9f48-bc82bd56a15c', {
  name: 'Morningstar',
  description: 'Mastery: Sap',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Pike = Traits.defineTrait('854ef0f0-c92f-4e78-9d1c-544864d96c0e', {
  name: 'Pike',
  description: 'Mastery: Push',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Rapier = Traits.defineTrait('47a6a5fe-1d89-4e5e-a865-d17a36b2fd89', {
  name: 'Rapier',
  description: 'Mastery: Vex',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Scimitar = Traits.defineTrait('a8c30afe-2814-4458-8b00-6d5a90b30750', {
  name: 'Scimitar',
  description: 'Mastery: Nick',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Shortsword = Traits.defineTrait('d18e7f95-1e2c-4558-a06d-b3aa552ca4df', {
  name: 'Shortsword',
  description: 'Mastery: Vex',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Trident = Traits.defineTrait('fb819ffa-451f-4edc-a1d2-b7a2852cd2a8', {
  name: 'Trident',
  description: 'Mastery: Topple',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Warhammer = Traits.defineTrait('4d2e4a12-bacb-4e04-bf43-ad09522445b6', {
  name: 'Warhammer',
  description: 'Mastery: Push',
  archetypes: [WeaponMastery],
  effects: [],
})

export const WarPick = Traits.defineTrait('993baa79-a123-4ce9-9f86-b009a4095c6a', {
  name: 'War Pick',
  description: 'Mastery: Sap',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Whip = Traits.defineTrait('a41039c8-9de9-4bad-8def-e49bc87fee30', {
  name: 'Whip',
  description: 'Mastery: Slow',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Blowgun = Traits.defineTrait('c087855b-59ba-4619-89d4-37b5e38838ae', {
  name: 'Blowgun',
  description: 'Mastery: Vex',
  archetypes: [WeaponMastery],
  effects: [],
})

export const HandCrossbow = Traits.defineTrait('5be38eba-d896-4d34-b52d-7a7879cc84d6', {
  name: 'Hand Crossbow',
  description: 'Mastery: Vex',
  archetypes: [WeaponMastery],
  effects: [],
})

export const HeavyCrossbow = Traits.defineTrait('f704df01-0b3b-4ba7-b1d8-b3f278fdd9f2', {
  name: 'Heavy Crossbow',
  description: 'Mastery: Push',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Longbow = Traits.defineTrait('f7119d9f-fb77-4048-9405-63002208c60d', {
  name: 'Longbow',
  description: 'Mastery: Slow',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Musket = Traits.defineTrait('07cfd942-bc39-4de6-97d3-11378a2515b4', {
  name: 'Musket',
  description: 'Mastery: Slow',
  archetypes: [WeaponMastery],
  effects: [],
})

export const Pistol = Traits.defineTrait('761acdf2-56b7-4d37-b3e3-d6f613b7853a', {
  name: 'Pistol',
  description: 'Mastery: Vex',
  archetypes: [WeaponMastery],
  effects: [],
})
