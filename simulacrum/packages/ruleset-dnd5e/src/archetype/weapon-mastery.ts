import { Abilities, Effects } from '@simulacrum/ruleset'
import { WeaponMasteryLoadout } from '@simulacrum/ruleset-dnd5e/loadout'

// Descriptions of each weapon mastery property, shared by every weapon that has it
const MasteryDescriptions = {
  Cleave:
    "Once per turn, when you hit a creature with a melee attack using this weapon, you can make another melee attack with it against a different creature within 5 feet of the first. That second hit deals the weapon's damage without adding your ability modifier, unless the modifier is negative.",
  Graze:
    "If your attack with this weapon misses, the target still takes damage equal to the ability modifier you used for the attack. The damage is the weapon's damage type and can only be increased by raising that modifier.",
  Nick: 'When you make the extra attack granted by the **Light** property, you can make it as part of the Attack action instead of as a Bonus Action. You can do this once per turn.',
  Push: 'If you hit a creature with this weapon, you can push it up to 10 feet straight away from you, provided it is Large or smaller.',
  Sap: 'If you hit a creature with this weapon, it has **Disadvantage** on its next attack roll before the start of your next turn.',
  Slow: "If you hit a creature with this weapon and deal damage, you can reduce its Speed by 10 feet until the start of your next turn. Hitting it again doesn't reduce its Speed any further.",
  Topple:
    'If you hit a creature with this weapon, you can force it to make a Constitution saving throw (DC 8 + the ability modifier used for the attack + your Proficiency Bonus). On a failure, it has the **Prone** condition.',
  Vex: 'If you hit a creature with this weapon and deal damage, you have **Advantage** on your next attack roll against that creature before the end of your next turn.',
}

// Each weapon's mastery property, as an ability that takes a Weapon Mastery loadout slot: a character with Weapon Mastery chooses which
// kinds of weapons to use the property of, and can change them after a Long Rest
export const Club = Abilities.defineAbility('weapon-mastery/club', {
  name: 'Club (Slow)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Slow)],
})

export const Dagger = Abilities.defineAbility('weapon-mastery/dagger', {
  name: 'Dagger (Nick)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Nick)],
})

export const Greatclub = Abilities.defineAbility('weapon-mastery/greatclub', {
  name: 'Greatclub (Push)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Push)],
})

export const Handaxe = Abilities.defineAbility('weapon-mastery/handaxe', {
  name: 'Handaxe (Vex)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Vex)],
})

export const Javelin = Abilities.defineAbility('weapon-mastery/javelin', {
  name: 'Javelin (Slow)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Slow)],
})

export const LightHammer = Abilities.defineAbility('weapon-mastery/light-hammer', {
  name: 'Light Hammer (Nick)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Nick)],
})

export const Mace = Abilities.defineAbility('weapon-mastery/mace', {
  name: 'Mace (Sap)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Sap)],
})

export const Quarterstaff = Abilities.defineAbility('weapon-mastery/quarterstaff', {
  name: 'Quarterstaff (Topple)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Topple)],
})

export const Sickle = Abilities.defineAbility('weapon-mastery/sickle', {
  name: 'Sickle (Nick)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Nick)],
})

export const Spear = Abilities.defineAbility('weapon-mastery/spear', {
  name: 'Spear (Sap)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Sap)],
})

export const Dart = Abilities.defineAbility('weapon-mastery/dart', {
  name: 'Dart (Vex)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Vex)],
})

export const LightCrossbow = Abilities.defineAbility('weapon-mastery/light-crossbow', {
  name: 'Light Crossbow (Slow)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Slow)],
})

export const Shortbow = Abilities.defineAbility('weapon-mastery/shortbow', {
  name: 'Shortbow (Vex)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Vex)],
})

export const Sling = Abilities.defineAbility('weapon-mastery/sling', {
  name: 'Sling (Slow)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Slow)],
})

export const Battleaxe = Abilities.defineAbility('weapon-mastery/battleaxe', {
  name: 'Battleaxe (Topple)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Topple)],
})

export const Flail = Abilities.defineAbility('weapon-mastery/flail', {
  name: 'Flail (Sap)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Sap)],
})

export const Glaive = Abilities.defineAbility('weapon-mastery/glaive', {
  name: 'Glaive (Graze)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Graze)],
})

export const Greataxe = Abilities.defineAbility('weapon-mastery/greataxe', {
  name: 'Greataxe (Cleave)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Cleave)],
})

export const Greatsword = Abilities.defineAbility('weapon-mastery/greatsword', {
  name: 'Greatsword (Graze)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Graze)],
})

export const Halberd = Abilities.defineAbility('weapon-mastery/halberd', {
  name: 'Halberd (Cleave)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Cleave)],
})

export const Lance = Abilities.defineAbility('weapon-mastery/lance', {
  name: 'Lance (Topple)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Topple)],
})

export const Longsword = Abilities.defineAbility('weapon-mastery/longsword', {
  name: 'Longsword (Sap)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Sap)],
})

export const Maul = Abilities.defineAbility('weapon-mastery/maul', {
  name: 'Maul (Topple)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Topple)],
})

export const Morningstar = Abilities.defineAbility('weapon-mastery/morningstar', {
  name: 'Morningstar (Sap)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Sap)],
})

export const Pike = Abilities.defineAbility('weapon-mastery/pike', {
  name: 'Pike (Push)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Push)],
})

export const Rapier = Abilities.defineAbility('weapon-mastery/rapier', {
  name: 'Rapier (Vex)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Vex)],
})

export const Scimitar = Abilities.defineAbility('weapon-mastery/scimitar', {
  name: 'Scimitar (Nick)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Nick)],
})

export const Shortsword = Abilities.defineAbility('weapon-mastery/shortsword', {
  name: 'Shortsword (Vex)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Vex)],
})

export const Trident = Abilities.defineAbility('weapon-mastery/trident', {
  name: 'Trident (Topple)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Topple)],
})

export const Warhammer = Abilities.defineAbility('weapon-mastery/warhammer', {
  name: 'Warhammer (Push)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Push)],
})

export const WarPick = Abilities.defineAbility('weapon-mastery/war-pick', {
  name: 'War Pick (Sap)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Sap)],
})

export const Whip = Abilities.defineAbility('weapon-mastery/whip', {
  name: 'Whip (Slow)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Slow)],
})

export const Blowgun = Abilities.defineAbility('weapon-mastery/blowgun', {
  name: 'Blowgun (Vex)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Vex)],
})

export const HandCrossbow = Abilities.defineAbility('weapon-mastery/hand-crossbow', {
  name: 'Hand Crossbow (Vex)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Vex)],
})

export const HeavyCrossbow = Abilities.defineAbility('weapon-mastery/heavy-crossbow', {
  name: 'Heavy Crossbow (Push)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Push)],
})

export const Longbow = Abilities.defineAbility('weapon-mastery/longbow', {
  name: 'Longbow (Slow)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Slow)],
})

export const Musket = Abilities.defineAbility('weapon-mastery/musket', {
  name: 'Musket (Slow)',
  loadout: WeaponMasteryLoadout,
  effects: [Effects.descriptive(MasteryDescriptions.Slow)],
})

export const Pistol = Abilities.defineAbility('weapon-mastery/pistol', {
  name: 'Pistol (Vex)',
  loadout: WeaponMasteryLoadout,
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
