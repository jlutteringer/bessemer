import { Archetypes, Traits } from '@simulacrum/common'
import { CharacterOptions } from '@simulacrum/common/character'

// Descriptions of each weapon mastery property, shared by every weapon that has it
const MasteryDescriptions = {
  Cleave:
    "<p>Once per turn, when you hit a creature with a melee attack using this weapon, you can make another melee attack with it against a different creature within 5 feet of the first. That second hit deals the weapon's damage without adding your ability modifier, unless the modifier is negative.</p>",
  Graze:
    "<p>If your attack with this weapon misses, the target still takes damage equal to the ability modifier you used for the attack. The damage is the weapon's damage type and can only be increased by raising that modifier.</p>",
  Nick: '<p>When you make the extra attack granted by the <strong>Light</strong> property, you can make it as part of the Attack action instead of as a Bonus Action. You can do this once per turn.</p>',
  Push: '<p>If you hit a creature with this weapon, you can push it up to 10 feet straight away from you, provided it is Large or smaller.</p>',
  Sap: '<p>If you hit a creature with this weapon, it has <strong>Disadvantage</strong> on its next attack roll before the start of your next turn.</p>',
  Slow: "<p>If you hit a creature with this weapon and deal damage, you can reduce its Speed by 10 feet until the start of your next turn. Hitting it again doesn't reduce its Speed any further.</p>",
  Topple:
    '<p>If you hit a creature with this weapon, you can force it to make a Constitution saving throw (DC 8 + the ability modifier used for the attack + your Proficiency Bonus). On a failure, it has the <strong>Prone</strong> condition.</p>',
  Vex: '<p>If you hit a creature with this weapon and deal damage, you have <strong>Advantage</strong> on your next attack roll against that creature before the end of your next turn.</p>',
}

export const WeaponMastery = Archetypes.defineArchetype('weapon-mastery', { name: 'Weapon Mastery' })

export const SelectWeaponMastery = CharacterOptions.selectTraitOption('weapon-mastery/select', { archetypes: [WeaponMastery] })

export const Club = Traits.defineTrait('weapon-mastery/club', {
  name: 'Club (Slow)',
  description: MasteryDescriptions.Slow,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Dagger = Traits.defineTrait('weapon-mastery/dagger', {
  name: 'Dagger (Nick)',
  description: MasteryDescriptions.Nick,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Greatclub = Traits.defineTrait('weapon-mastery/greatclub', {
  name: 'Greatclub (Push)',
  description: MasteryDescriptions.Push,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Handaxe = Traits.defineTrait('weapon-mastery/handaxe', {
  name: 'Handaxe (Vex)',
  description: MasteryDescriptions.Vex,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Javelin = Traits.defineTrait('weapon-mastery/javelin', {
  name: 'Javelin (Slow)',
  description: MasteryDescriptions.Slow,
  archetypes: [WeaponMastery],
  effects: [],
})

export const LightHammer = Traits.defineTrait('weapon-mastery/light-hammer', {
  name: 'Light Hammer (Nick)',
  description: MasteryDescriptions.Nick,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Mace = Traits.defineTrait('weapon-mastery/mace', {
  name: 'Mace (Sap)',
  description: MasteryDescriptions.Sap,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Quarterstaff = Traits.defineTrait('weapon-mastery/quarterstaff', {
  name: 'Quarterstaff (Topple)',
  description: MasteryDescriptions.Topple,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Sickle = Traits.defineTrait('weapon-mastery/sickle', {
  name: 'Sickle (Nick)',
  description: MasteryDescriptions.Nick,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Spear = Traits.defineTrait('weapon-mastery/spear', {
  name: 'Spear (Sap)',
  description: MasteryDescriptions.Sap,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Dart = Traits.defineTrait('weapon-mastery/dart', {
  name: 'Dart (Vex)',
  description: MasteryDescriptions.Vex,
  archetypes: [WeaponMastery],
  effects: [],
})

export const LightCrossbow = Traits.defineTrait('weapon-mastery/light-crossbow', {
  name: 'Light Crossbow (Slow)',
  description: MasteryDescriptions.Slow,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Shortbow = Traits.defineTrait('weapon-mastery/shortbow', {
  name: 'Shortbow (Vex)',
  description: MasteryDescriptions.Vex,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Sling = Traits.defineTrait('weapon-mastery/sling', {
  name: 'Sling (Slow)',
  description: MasteryDescriptions.Slow,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Battleaxe = Traits.defineTrait('weapon-mastery/battleaxe', {
  name: 'Battleaxe (Topple)',
  description: MasteryDescriptions.Topple,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Flail = Traits.defineTrait('weapon-mastery/flail', {
  name: 'Flail (Sap)',
  description: MasteryDescriptions.Sap,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Glaive = Traits.defineTrait('weapon-mastery/glaive', {
  name: 'Glaive (Graze)',
  description: MasteryDescriptions.Graze,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Greataxe = Traits.defineTrait('weapon-mastery/greataxe', {
  name: 'Greataxe (Cleave)',
  description: MasteryDescriptions.Cleave,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Greatsword = Traits.defineTrait('weapon-mastery/greatsword', {
  name: 'Greatsword (Graze)',
  description: MasteryDescriptions.Graze,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Halberd = Traits.defineTrait('weapon-mastery/halberd', {
  name: 'Halberd (Cleave)',
  description: MasteryDescriptions.Cleave,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Lance = Traits.defineTrait('weapon-mastery/lance', {
  name: 'Lance (Topple)',
  description: MasteryDescriptions.Topple,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Longsword = Traits.defineTrait('weapon-mastery/longsword', {
  name: 'Longsword (Sap)',
  description: MasteryDescriptions.Sap,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Maul = Traits.defineTrait('weapon-mastery/maul', {
  name: 'Maul (Topple)',
  description: MasteryDescriptions.Topple,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Morningstar = Traits.defineTrait('weapon-mastery/morningstar', {
  name: 'Morningstar (Sap)',
  description: MasteryDescriptions.Sap,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Pike = Traits.defineTrait('weapon-mastery/pike', {
  name: 'Pike (Push)',
  description: MasteryDescriptions.Push,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Rapier = Traits.defineTrait('weapon-mastery/rapier', {
  name: 'Rapier (Vex)',
  description: MasteryDescriptions.Vex,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Scimitar = Traits.defineTrait('weapon-mastery/scimitar', {
  name: 'Scimitar (Nick)',
  description: MasteryDescriptions.Nick,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Shortsword = Traits.defineTrait('weapon-mastery/shortsword', {
  name: 'Shortsword (Vex)',
  description: MasteryDescriptions.Vex,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Trident = Traits.defineTrait('weapon-mastery/trident', {
  name: 'Trident (Topple)',
  description: MasteryDescriptions.Topple,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Warhammer = Traits.defineTrait('weapon-mastery/warhammer', {
  name: 'Warhammer (Push)',
  description: MasteryDescriptions.Push,
  archetypes: [WeaponMastery],
  effects: [],
})

export const WarPick = Traits.defineTrait('weapon-mastery/war-pick', {
  name: 'War Pick (Sap)',
  description: MasteryDescriptions.Sap,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Whip = Traits.defineTrait('weapon-mastery/whip', {
  name: 'Whip (Slow)',
  description: MasteryDescriptions.Slow,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Blowgun = Traits.defineTrait('weapon-mastery/blowgun', {
  name: 'Blowgun (Vex)',
  description: MasteryDescriptions.Vex,
  archetypes: [WeaponMastery],
  effects: [],
})

export const HandCrossbow = Traits.defineTrait('weapon-mastery/hand-crossbow', {
  name: 'Hand Crossbow (Vex)',
  description: MasteryDescriptions.Vex,
  archetypes: [WeaponMastery],
  effects: [],
})

export const HeavyCrossbow = Traits.defineTrait('weapon-mastery/heavy-crossbow', {
  name: 'Heavy Crossbow (Push)',
  description: MasteryDescriptions.Push,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Longbow = Traits.defineTrait('weapon-mastery/longbow', {
  name: 'Longbow (Slow)',
  description: MasteryDescriptions.Slow,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Musket = Traits.defineTrait('weapon-mastery/musket', {
  name: 'Musket (Slow)',
  description: MasteryDescriptions.Slow,
  archetypes: [WeaponMastery],
  effects: [],
})

export const Pistol = Traits.defineTrait('weapon-mastery/pistol', {
  name: 'Pistol (Vex)',
  description: MasteryDescriptions.Vex,
  archetypes: [WeaponMastery],
  effects: [],
})
