import { Abilities, Effects } from '@simulacrum/common'
import { WeaponMasteryLoadout } from '@simulacrum/rulesets/dnd-5e/loadout'

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

// Each weapon's mastery property, as an ability that takes a Weapon Mastery loadout slot: a character with Weapon Mastery chooses which
// kinds of weapons to use the property of, and can change them after a Long Rest
export const Club = Abilities.defineAbility('weapon-mastery/club', {
  name: 'Club (Slow)',
  effects: [Effects.descriptive(MasteryDescriptions.Slow)],
})

export const Dagger = Abilities.defineAbility('weapon-mastery/dagger', {
  name: 'Dagger (Nick)',
  effects: [Effects.descriptive(MasteryDescriptions.Nick)],
})

export const Greatclub = Abilities.defineAbility('weapon-mastery/greatclub', {
  name: 'Greatclub (Push)',
  effects: [Effects.descriptive(MasteryDescriptions.Push)],
})

export const Handaxe = Abilities.defineAbility('weapon-mastery/handaxe', {
  name: 'Handaxe (Vex)',
  effects: [Effects.descriptive(MasteryDescriptions.Vex)],
})

export const Javelin = Abilities.defineAbility('weapon-mastery/javelin', {
  name: 'Javelin (Slow)',
  effects: [Effects.descriptive(MasteryDescriptions.Slow)],
})

export const LightHammer = Abilities.defineAbility('weapon-mastery/light-hammer', {
  name: 'Light Hammer (Nick)',
  effects: [Effects.descriptive(MasteryDescriptions.Nick)],
})

export const Mace = Abilities.defineAbility('weapon-mastery/mace', {
  name: 'Mace (Sap)',
  effects: [Effects.descriptive(MasteryDescriptions.Sap)],
})

export const Quarterstaff = Abilities.defineAbility('weapon-mastery/quarterstaff', {
  name: 'Quarterstaff (Topple)',
  effects: [Effects.descriptive(MasteryDescriptions.Topple)],
})

export const Sickle = Abilities.defineAbility('weapon-mastery/sickle', {
  name: 'Sickle (Nick)',
  effects: [Effects.descriptive(MasteryDescriptions.Nick)],
})

export const Spear = Abilities.defineAbility('weapon-mastery/spear', {
  name: 'Spear (Sap)',
  effects: [Effects.descriptive(MasteryDescriptions.Sap)],
})

export const Dart = Abilities.defineAbility('weapon-mastery/dart', {
  name: 'Dart (Vex)',
  effects: [Effects.descriptive(MasteryDescriptions.Vex)],
})

export const LightCrossbow = Abilities.defineAbility('weapon-mastery/light-crossbow', {
  name: 'Light Crossbow (Slow)',
  effects: [Effects.descriptive(MasteryDescriptions.Slow)],
})

export const Shortbow = Abilities.defineAbility('weapon-mastery/shortbow', {
  name: 'Shortbow (Vex)',
  effects: [Effects.descriptive(MasteryDescriptions.Vex)],
})

export const Sling = Abilities.defineAbility('weapon-mastery/sling', {
  name: 'Sling (Slow)',
  effects: [Effects.descriptive(MasteryDescriptions.Slow)],
})

export const Battleaxe = Abilities.defineAbility('weapon-mastery/battleaxe', {
  name: 'Battleaxe (Topple)',
  effects: [Effects.descriptive(MasteryDescriptions.Topple)],
})

export const Flail = Abilities.defineAbility('weapon-mastery/flail', {
  name: 'Flail (Sap)',
  effects: [Effects.descriptive(MasteryDescriptions.Sap)],
})

export const Glaive = Abilities.defineAbility('weapon-mastery/glaive', {
  name: 'Glaive (Graze)',
  effects: [Effects.descriptive(MasteryDescriptions.Graze)],
})

export const Greataxe = Abilities.defineAbility('weapon-mastery/greataxe', {
  name: 'Greataxe (Cleave)',
  effects: [Effects.descriptive(MasteryDescriptions.Cleave)],
})

export const Greatsword = Abilities.defineAbility('weapon-mastery/greatsword', {
  name: 'Greatsword (Graze)',
  effects: [Effects.descriptive(MasteryDescriptions.Graze)],
})

export const Halberd = Abilities.defineAbility('weapon-mastery/halberd', {
  name: 'Halberd (Cleave)',
  effects: [Effects.descriptive(MasteryDescriptions.Cleave)],
})

export const Lance = Abilities.defineAbility('weapon-mastery/lance', {
  name: 'Lance (Topple)',
  effects: [Effects.descriptive(MasteryDescriptions.Topple)],
})

export const Longsword = Abilities.defineAbility('weapon-mastery/longsword', {
  name: 'Longsword (Sap)',
  effects: [Effects.descriptive(MasteryDescriptions.Sap)],
})

export const Maul = Abilities.defineAbility('weapon-mastery/maul', {
  name: 'Maul (Topple)',
  effects: [Effects.descriptive(MasteryDescriptions.Topple)],
})

export const Morningstar = Abilities.defineAbility('weapon-mastery/morningstar', {
  name: 'Morningstar (Sap)',
  effects: [Effects.descriptive(MasteryDescriptions.Sap)],
})

export const Pike = Abilities.defineAbility('weapon-mastery/pike', {
  name: 'Pike (Push)',
  effects: [Effects.descriptive(MasteryDescriptions.Push)],
})

export const Rapier = Abilities.defineAbility('weapon-mastery/rapier', {
  name: 'Rapier (Vex)',
  effects: [Effects.descriptive(MasteryDescriptions.Vex)],
})

export const Scimitar = Abilities.defineAbility('weapon-mastery/scimitar', {
  name: 'Scimitar (Nick)',
  effects: [Effects.descriptive(MasteryDescriptions.Nick)],
})

export const Shortsword = Abilities.defineAbility('weapon-mastery/shortsword', {
  name: 'Shortsword (Vex)',
  effects: [Effects.descriptive(MasteryDescriptions.Vex)],
})

export const Trident = Abilities.defineAbility('weapon-mastery/trident', {
  name: 'Trident (Topple)',
  effects: [Effects.descriptive(MasteryDescriptions.Topple)],
})

export const Warhammer = Abilities.defineAbility('weapon-mastery/warhammer', {
  name: 'Warhammer (Push)',
  effects: [Effects.descriptive(MasteryDescriptions.Push)],
})

export const WarPick = Abilities.defineAbility('weapon-mastery/war-pick', {
  name: 'War Pick (Sap)',
  effects: [Effects.descriptive(MasteryDescriptions.Sap)],
})

export const Whip = Abilities.defineAbility('weapon-mastery/whip', {
  name: 'Whip (Slow)',
  effects: [Effects.descriptive(MasteryDescriptions.Slow)],
})

export const Blowgun = Abilities.defineAbility('weapon-mastery/blowgun', {
  name: 'Blowgun (Vex)',
  effects: [Effects.descriptive(MasteryDescriptions.Vex)],
})

export const HandCrossbow = Abilities.defineAbility('weapon-mastery/hand-crossbow', {
  name: 'Hand Crossbow (Vex)',
  effects: [Effects.descriptive(MasteryDescriptions.Vex)],
})

export const HeavyCrossbow = Abilities.defineAbility('weapon-mastery/heavy-crossbow', {
  name: 'Heavy Crossbow (Push)',
  effects: [Effects.descriptive(MasteryDescriptions.Push)],
})

export const Longbow = Abilities.defineAbility('weapon-mastery/longbow', {
  name: 'Longbow (Slow)',
  effects: [Effects.descriptive(MasteryDescriptions.Slow)],
})

export const Musket = Abilities.defineAbility('weapon-mastery/musket', {
  name: 'Musket (Slow)',
  effects: [Effects.descriptive(MasteryDescriptions.Slow)],
})

export const Pistol = Abilities.defineAbility('weapon-mastery/pistol', {
  name: 'Pistol (Vex)',
  effects: [Effects.descriptive(MasteryDescriptions.Vex)],
})

export const WeaponMasteries = [
  Club,
  Dagger,
  Greatclub,
  Handaxe,
  Javelin,
  LightHammer,
  Mace,
  Quarterstaff,
  Sickle,
  Spear,
  Dart,
  LightCrossbow,
  Shortbow,
  Sling,
  Battleaxe,
  Flail,
  Glaive,
  Greataxe,
  Greatsword,
  Halberd,
  Lance,
  Longsword,
  Maul,
  Morningstar,
  Pike,
  Rapier,
  Scimitar,
  Shortsword,
  Trident,
  Warhammer,
  WarPick,
  Whip,
  Blowgun,
  HandCrossbow,
  HeavyCrossbow,
  Longbow,
  Musket,
  Pistol,
]

// Access to every weapon's mastery property, for the Weapon Mastery loadout; every character has this, through the ruleset
export const gainWeaponMasteries = () => WeaponMasteries.map((it) => Effects.gainAbility(it, WeaponMasteryLoadout))
