import { Content } from '@simulacrum/ruleset'
import { ContentSection } from '@simulacrum/ruleset/content'
import * as Armor from '@simulacrum/ruleset-dnd4e/armor'

export const EquipmentSection = Content.defineSection('equipment', {
  content: {
    name: 'Equipment',
    description: `When you leave the safety of a city or other refuge for the wilderness and the unknown, you must be prepared. Being ready means you need protection, arms, and tools to see you through potential challenges, dangers, and hardships. An unprepared explorer all too often winds up injured or lost—or worse—so gear up for the hazards you expect on your adventures.

When you create a 1st-level character, you start with basic clothing and 100 gold pieces to spend on armor, weapons, and adventuring gear. This is an abstraction; your character probably doesn’t walk into a store one day with a bag of coins—unless you just came into an inheritance or won a tournament of some sort. Rather, the items you start with, and any gold you have left over, might come your way as gifts from family, gear used during military service, equipment issued by a patron, or even something you made yourself.

As you go up in level, you acquire more gold that you can spend, not just on mundane gear, but on fabulous magic items as well.

Here’s an overview of the contents of this chapter.

- **[Armor and Shields](content:equipment/armor-and-shields):** Essential gear for protection in combat.
- **[Weapons](content:equipment/weapons):** The basic tools of combat for many characters, from swords to polearms.
- **[Adventuring Gear](content:equipment/adventuring-gear):** The tools of the adventuring trade. Look in this section for everburning torches, flasks of oil, backpacks, and spellbooks. This section also discusses arcane implements and holy symbols, useful for the powers of some classes.
- **[Magic Items](content:equipment/magic-items):** When you have the gold to spend on magic items, this section shows you what’s available. You’ll find magic weapons, armor, and more.`,
  },
})

export const CoinsAndCurrencySection = Content.defineSection('equipment/coins-and-currency', {
  parent: EquipmentSection,
  content: {
    name: 'Coins and Currency',
    description: `Merchants and adventurers alike use the gold piece (gp) as the standard unit of currency for most transactions. The exchange of large amounts of money might be handled by letters of credit or gems and jewelry, but the value is always measured in gold pieces.

The common people of the world deal more widely in the silver piece (sp) and the copper piece (cp). A gold piece is worth 10 silver pieces, and a silver piece is worth 10 copper pieces.

People use copper, silver, and gold coins daily. Many of the world’s ancient empires also minted platinum pieces, and merchants still accept them even if most people never see them. They’re most common in ancient treasure hoards. A platinum piece is worth 100 gold pieces.

A coin is about an inch across, and weighs about a third of an ounce (50 coins to the pound).

Gems and jewelry are a more portable form of wealth favored by adventurers. Among commoners, “portable wealth” usually means cattle (with one cow worth about 10 gp in trade).

**Astral Diamonds:** In fantastic realms beyond the natural world—in the City of Brass in the Elemental Chaos, the Bright City in the Astral Sea, the city of Sigil, and similar markets—the astral diamond (ad) is used as currency for transactions involving staggering amounts of wealth. One astral diamond is worth 100 platinum pieces, or 10,000 gold pieces.

An astral diamond weighs one-tenth as much as a coin (500 astral diamonds weigh 1 pound).

| Monetary Unit | cp | sp | gp | pp | ad | Weight |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Copper piece (cp) | 1 | 1/10 | 1/100 | 1/10,000 | 1/1,000,000 | 1/50 lb. |
| Silver piece (sp) | 10 | 1 | 1/10 | 1/1,000 | 1/100,000 | 1/50 lb. |
| Gold piece (gp) | 100 | 10 | 1 | 1/100 | 1/10,000 | 1/50 lb. |
| Platinum piece (pp) | 10,000 | 1,000 | 100 | 1 | 1/100 | 1/50 lb. |
| Astral diamond (ad) | 1,000,000 | 100,000 | 10,000 | 100 | 1 | 1/500 lb. |`,
  },
})

export const ArmorAndShieldsSection = Content.defineSection('equipment/armor-and-shields', {
  parent: EquipmentSection,
  content: {
    name: 'Armor and Shields',
    description: `Armor provides a barrier between you and your foes—or, put more bluntly, between you and death. Every class provides access to one or more armor proficiencies, and it’s in your best interest to wear the finest armor you can. This section includes information on shields, which improve your defensive capabilities.`,
  },
})

export const ArmorTypesSection = Content.defineSection('equipment/armor-types', {
  parent: ArmorAndShieldsSection,
  content: {
    name: 'Armor Types',
    description: `Armor is grouped into categories. These categories can help you decide what armor is best for you.

Your class tells you what kinds of armor you’re proficient with. You can take [feats](content:feats) to learn the proper use of other kinds of armor. If you wear armor you’re not proficient with, it makes you clumsy and uncoordinated: You take a –2 penalty to attack rolls and to your [Reflex](characteristic:reflex) defense.

Putting on a suit of armor always takes at least 5 minutes, which means that it’s an activity you can undertake only outside combat (likely while you’re taking a short rest).

Armor is defined as either light or heavy. **Light armor** is easy to move in if you’re proficient with it. Cloth armor, leather armor, and hide armor are light armor. When you wear light armor, you add either your [Intelligence](characteristic:intelligence) or your [Dexterity](characteristic:dexterity) modifier to your [Armor Class](characteristic:armor-class), whichever is higher. **Heavy armor** is more restrictive, so your natural agility matters less. When you wear heavy armor, you don’t add an ability score modifier to your AC. Chainmail, scale armor, and plate armor are heavy armor.

Certain kinds of armor are made according to arcane and esoteric methods that involve weaving magic into the substance of the armor. These **masterwork armors** never appear except as magic armor (see [page 227](content:equipment/magic-items-armor)), and even then only at the highest levels (16th and above). The various kinds of masterwork armor fall into the same categories as mundane armor and have similar statistics, but they have a higher armor bonus than their mundane counterparts. The cost of masterwork armor is included in the cost of magic armor.`,
  },
})

export const ClothArmorSection = Content.linkEntity(ArmorTypesSection, Armor.ClothArmor)
export const LeatherArmorSection = Content.linkEntity(ArmorTypesSection, Armor.LeatherArmor)
export const HideArmorSection = Content.linkEntity(ArmorTypesSection, Armor.HideArmor)
export const ChainmailSection = Content.linkEntity(ArmorTypesSection, Armor.Chainmail)
export const ScaleArmorSection = Content.linkEntity(ArmorTypesSection, Armor.ScaleArmor)
export const PlateArmorSection = Content.linkEntity(ArmorTypesSection, Armor.PlateArmor)
export const LeatherProficiencySection = Content.linkEntity(ArmorTypesSection, Armor.LeatherProficiency)
export const HideProficiencySection = Content.linkEntity(ArmorTypesSection, Armor.HideProficiency)
export const ChainmailProficiencySection = Content.linkEntity(ArmorTypesSection, Armor.ChainmailProficiency)
export const ScaleProficiencySection = Content.linkEntity(ArmorTypesSection, Armor.ScaleProficiency)
export const PlateProficiencySection = Content.linkEntity(ArmorTypesSection, Armor.PlateProficiency)

export const ChoosingArmorSection = Content.defineSection('equipment/choosing-armor', {
  parent: ArmorAndShieldsSection,
  content: {
    name: 'Choosing Armor',
    description: `There are a few different aspects to determining your armor choice. Decide what you want your character to be able to do within your class role, and think about your ability scores and how they affect your [Armor Class](characteristic:armor-class). Take a look at an armor’s encumbrance (light or heavy), and think about its check penalty and speed. You might be able to have the same AC with more mobility, which could be a better choice for your character and your party. Your decision to use a shield rather than a two-handed weapon, or vice versa, might also influence whether you choose a certain suit of armor, so include that factor in your decision making.`,
  },
})

export const ShieldTypesSection = Content.defineSection('equipment/shield-types', {
  parent: ArmorAndShieldsSection,
  content: {
    name: 'Shield Types',
    description: `As with armor, you need the proper shield proficiency to use a shield effectively. When you use a shield, you strap it to an arm and sometimes use the hand on that arm—your shield arm and shield hand. Shields grant a shield bonus that you add to your [AC](characteristic:armor-class) and to your [Reflex](characteristic:reflex) defense. If you’re not proficient with a shield, you don’t gain the shield bonus to your AC or Reflex defense.`,
  },
})

export const LightShieldSection = Content.linkEntity(ShieldTypesSection, Armor.LightShield)
export const HeavyShieldSection = Content.linkEntity(ShieldTypesSection, Armor.HeavyShield)
export const LightShieldProficiencySection = Content.linkEntity(ShieldTypesSection, Armor.LightShieldProficiency)
export const HeavyShieldProficiencySection = Content.linkEntity(ShieldTypesSection, Armor.HeavyShieldProficiency)

export const ReadingTheArmorTableSection = Content.defineSection('equipment/reading-the-armor-table', {
  parent: ArmorAndShieldsSection,
  content: {
    name: 'Reading the Armor Table',
    description: `An armor or a shield entry on the Armor table contains the following information.

**Armor Bonus:** Armor provides this bonus to [AC](characteristic:armor-class).

**Shield Bonus:** Shields provide this bonus to AC and [Reflex](characteristic:reflex) defense.

**Minimum Enhancement Bonus:** Masterwork armor requires a minimum enhancement bonus, as shown in this entry.

**Check:** You take this penalty to all [Strength](characteristic:strength)-, [Dexterity](characteristic:dexterity)-, and [Constitution](characteristic:constitution)-based skill checks when you wear the armor. You don’t take the penalty to ability checks (such as a Strength check to break down a door or a Dexterity check to determine initiative in combat).

**Speed:** You take this penalty to your [speed](characteristic:speed) (in squares) when wearing the armor.

**Price:** The item’s cost in gold pieces. See individual magic items for their base market price and appropriate levels. The cost of masterwork armor is included in the cost of magic armor of 16th level or higher.

**Weight:** The armor’s weight.`,
  },
})

export const ArmorTableSection = Content.defineSection('equipment/armor', {
  parent: ArmorAndShieldsSection,
  content: {
    name: 'Armor',
    description: `| Cloth Armor (Light) | Armor Bonus | Minimum Enhancement Bonus | Check | Speed | Price (gp) | Weight |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Cloth armor (basic clothing) | — | +0 | — | — | 1 | 4 lb. |
| Feyweave armor | +1 | +4 | — | — | special | 5 lb. |
| Starweave armor | +2 | +6 | — | — | special | 3 lb. |

| Leather Armor (Light) | Armor Bonus | Minimum Enhancement Bonus | Check | Speed | Price (gp) | Weight |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Leather armor | +2 | — | — | — | 25 | 15 lb. |
| Feyleather armor | +3 | +4 | — | — | special | 15 lb. |
| Starleather armor | +4 | +6 | — | — | special | 15 lb. |

| Hide Armor (Light) | Armor Bonus | Minimum Enhancement Bonus | Check | Speed | Price (gp) | Weight |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Hide armor | +3 | — | –1 | — | 30 | 25 lb. |
| Darkhide armor | +4 | +4 | –1 | — | special | 25 lb. |
| Elderhide armor | +5 | +6 | –1 | — | special | 25 lb. |

| Chainmail (Heavy) | Armor Bonus | Minimum Enhancement Bonus | Check | Speed | Price (gp) | Weight |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Chainmail | +6 | — | –1 | –1 | 40 | 40 lb. |
| Forgemail | +9 | +4 | –1 | –1 | special | 40 lb. |
| Spiritmail | +12 | +6 | –1 | –1 | special | 40 lb. |

| Scale Armor (Heavy) | Armor Bonus | Minimum Enhancement Bonus | Check | Speed | Price (gp) | Weight |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Scale armor | +7 | — | — | –1 | 45 | 45 lb. |
| Wyrmscale armor | +10 | +4 | — | –1 | special | 45 lb. |
| Elderscale armor | +13 | +6 | — | –1 | special | 45 lb. |

| Plate Armor (Heavy) | Armor Bonus | Minimum Enhancement Bonus | Check | Speed | Price (gp) | Weight |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Plate armor | +8 | — | –2 | –1 | 50 | 50 lb. |
| Warplate armor | +11 | +4 | –2 | –1 | special | 50 lb. |
| Godplate armor | +14 | +6 | –2 | –1 | special | 50 lb. |

| Shields | Shield Bonus | Minimum Enhancement Bonus | Check | Speed | Price (gp) | Weight |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Light shield | +1 | — | — | — | 5 | 6 lb. |
| Heavy shield | +2 | — | –2 | — | 10 | 15 lb. |`,
  },
})

export const WeaponsSection = Content.defineSection('equipment/weapons', {
  parent: EquipmentSection,
  content: {
    name: 'Weapons',
    description: `When you confront villains and monsters in their lairs, you often end up in situations that can be resolved only with arms and magic. If you don’t have magical powers, you had better have a weapon or two. In fact, you might want a weapon to back up or even augment your powers.`,
  },
})

export const WeaponCategoriesSection = Content.defineSection('equipment/weapon-categories', {
  parent: WeaponsSection,
  content: {
    name: 'Weapon Categories',
    description: `Weapons fall into four categories. **Improvised weapons** aren’t weapons you train with—they’re objects you pick up to hit someone with. Punching or kicking someone is also considered an improvised weapon. **Simple weapons** are basic, requiring little more skill than lifting and hitting with the business end. **Military weapons** are designed for skilled users. Balance and precision are important factors when using military weapons, and someone without the proper training can’t use them effectively. **Superior weapons** are even more effective than military weapons but require special training to use. You can learn to use a superior weapon by taking the [Weapon Proficiency](trait:feat/weapon-proficiency) feat.

Weapons in all four categories are further categorized as **melee weapons**, which you use to attack foes within reach of the weapon, or **ranged weapons**, which you use to fire at more distant enemies. You can’t use a ranged weapon as a melee weapon. A melee weapon with the heavy thrown or the light thrown property counts as a ranged weapon when thrown and can be used with ranged attack powers that have the weapon keyword.

Finally, weapons are classified as either **one-handed** or **two-handed**. A one-handed weapon is light enough or balanced enough to be used in one hand. A two-handed weapon is too heavy or unbalanced to use without two hands. Bows and some other weapons require two hands because of their construction.

Some one-handed weapons are light enough for you to use in your off hand while holding another one-handed weapon in your other hand. Doing this doesn’t let you make multiple attacks in a round (unless you have powers that let you do so), but you can attack with either weapon. Other one-handed weapons are large enough that you can keep a good grip on them with two hands and deal extra damage by using them as two-handed weapons.`,
  },
})

export const WeaponGroupsSection = Content.defineSection('equipment/weapon-groups', {
  parent: WeaponsSection,
  content: {
    name: 'Weapon Groups',
    description: `Weapon groups are families of weapons that share certain properties. They’re wielded similarly and are equally suited to certain kinds of attacks. In game terms, some powers and feats work only when you’re attacking with a weapon in a specific group.

If a weapon falls into more than one group, you can use it with powers that require a weapon from any of its groups. For example, the halberd is both an axe and a polearm, so you can use it with powers that give you an additional benefit when you wield an axe or a polearm.

**Axe:** Axes are weapons that have bladed, heavy heads and deal vicious cuts. An axe’s weight makes it fine for delivering crushing blows.

**Bow:** A bow is a shaft of strong, supple material with a string stretched between its two ends. It’s a projectile weapon that you use to fire arrows. Bows take training to use effectively, and they can be extremely deadly in expert hands.

**Crossbow:** Essentially a small metal bow mounted on a stock and equipped with a mechanical trigger, a crossbow is a point-and-shoot projectile weapon. Crossbows are popular because they require little training to master, yet the heavy pull of the metal bow gives them substantial power.

**Flail:** Weapons in the flail group have a flexible material, usually a length of chain, between a solid handle and the damage-dealing end of the weapon.

**Hammer:** A hammer has a blunt, heavy head with one or more flat striking surfaces attached to a haft.

**Heavy Blade:** Blades are balanced edged weapons. Heavy blades share some of the precision of light blades and some of the mass of axes. Heavy blades are used primarily for slashing cuts rather than stabs and thrusts.

**Light Blade:** Light blades reward accuracy as much as force. Pinpoint attacks, lunges, and agile defenses are the strong points of these weapons.

**Mace:** Much like hammers, maces are blunt weapons that have a heavier head than handle, but they’re more balanced than hammers. They’re useful for delivering crushing blows.

**Pick:** Weighted toward the top like a mace or an axe, a pick has a long, pointed head made to pierce and create deep wounds.

**Polearm:** Polearms are weapons mounted at the end of long hafts. All polearms also fall into another category of weapon, usually axe, heavy blade, or spear. Polearms are reach weapons.

**Sling:** Slings are leather straps used to hurl stones or metal pellets. They are projectile weapons.

**Spear:** Consisting of a stabbing head on the end of a long shaft, a spear is great for lunging attacks.

**Staff:** In its most basic form, a staff is a long piece of wood or some other substance, roughly the same diameter along its whole length.

**Unarmed:** When you punch, kick, elbow, knee, or even head butt an opponent, you’re making an unarmed strike. A simple unarmed attack is treated as an improvised weapon. Creatures that have natural weapons such as claws or bite attacks are proficient with those natural weapons.`,
  },
})

export const ChoosingWeaponsSection = Content.defineSection('equipment/choosing-weapons', {
  parent: WeaponsSection,
  content: {
    name: 'Choosing Weapons',
    description: `If you belong to a class whose powers don’t include weapon keywords, just pick weapons that you’re proficient with and that you’d like to use. If you’re a fighter or a member of any other class that has powers linked to particular weapon groups, you care more about weapons than other characters might. Be sure to consider the powers you’d like to use when choosing your weapons, and vice versa.

You want to have an option for melee combat as well as ranged combat, even if you’re not as effective at one or the other. Be sure to choose at least one of each kind of weapon. When that flying monster makes its getaway, you don’t want to be left standing around with nothing to do but hurl insults at it.`,
  },
})

export const WeaponPropertiesSection = Content.defineSection('equipment/weapon-properties', {
  parent: WeaponsSection,
  content: {
    name: 'Weapon Properties',
    description: `Weapon properties define additional characteristics shared by weapons that might be in different groups.

**Heavy Thrown:** You hurl a thrown weapon from your hand, rather than using it to loose a projectile. A [ranged basic attack](ability:common/ranged-basic-attack) with a heavy thrown weapon uses your [Strength](characteristic:strength) instead of your [Dexterity](characteristic:dexterity) for the attack and damage rolls.

**High Crit:** A high crit weapon deals more damage when you score a critical hit with it. A critical hit deals maximum weapon damage and an extra 1[W] at 1st–10th levels, an extra 2[W] at 11th–20th levels, and an extra 3[W] at 21st–30th levels. This extra damage is in addition to any critical damage the weapon supplies if it is a magic weapon.

**Light Thrown:** A ranged basic attack with a light thrown weapon uses your Dexterity. Light thrown weapons don’t deal as much damage as heavy thrown weapons, but some powers let you hurl several of them at once or in rapid succession.

**Load:** Ranged weapons that loose projectiles, including bows, crossbows, and slings, take some time to load. When a weapon shows “load free” on the Ranged Weapons table, that means you draw and load ammunition as a free action, effectively part of the action used to attack with the weapon. Any weapon that has the load property requires two hands to load, even if you can use only one hand to attack with it. (The sling, for example, is a one-handed weapon, but you need a free hand to load it.) The crossbow is “load minor,” which means it requires a minor action to load a bolt into the weapon. If a power allows you to hit multiple targets, the additional load time is accounted for in the power.

**Off-Hand:** An off-hand weapon is light enough that you can hold it and attack effectively with it while holding a weapon in your main hand. You can’t attack with both weapons in the same turn, unless you have a power that lets you do so, but you can attack with either weapon.

**Reach:** With a reach weapon, you can attack enemies that are 2 squares away from you as well as adjacent enemies, with no attack penalty. You can still make opportunity attacks only against adjacent enemies. Likewise, you can flank only an adjacent enemy.

**Small:** This property describes a two-handed or a versatile weapon that a Small character can use in the same way a Medium character can. A halfling can use a shortbow, for example, even though halflings can’t normally use two-handed weapons.

**Versatile:** Versatile weapons are one-handed, but you can use them two-handed. If you do, you deal an extra 1 point of damage when you roll damage for the weapon.

A Small character such as a halfling must use a versatile weapon two-handed and doesn’t deal extra damage.`,
  },
})

export const StrengthOrDexteritySection = Content.defineSection('equipment/strength-or-dexterity', {
  parent: WeaponsSection,
  content: {
    name: 'Strength or Dexterity?',
    description: `As a rule, the attack you’re making determines the ability you use with the attack. When you use a power, the power tells you whether you’re making a [Strength](characteristic:strength) attack, a [Dexterity](characteristic:dexterity) attack, or an attack based on a different ability. When you make a basic attack, though, the ability you use depends on the weapon you’re wielding.

A basic attack with a melee weapon is always a Strength attack. A basic attack with a ranged weapon is usually a Dexterity attack, unless the weapon you’re using has the heavy thrown property (see “[Weapon Properties](content:equipment/weapon-properties)”).`,
  },
})

export const MeleeWeaponsSection = Content.defineSection('equipment/melee-weapons', {
  parent: WeaponsSection,
  content: {
    name: 'Melee Weapons',
    description: `**Simple Melee Weapons**

_One-Handed_

| Weapon | Prof. | Damage | Range | Price | Weight | Group | Properties |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Club | +2 | 1d6 | — | 1 gp | 3 lb. | Mace | — |
| Dagger | +3 | 1d4 | 5/10 | 1 gp | 1 lb. | Light blade | Off-hand, light thrown |
| Javelin | +2 | 1d6 | 10/20 | 5 gp | 2 lb. | Spear | Heavy thrown |
| Mace | +2 | 1d8 | — | 5 gp | 6 lb. | Mace | Versatile |
| Sickle | +2 | 1d6 | — | 2 gp | 2 lb. | Light blade | Off-hand |
| Spear | +2 | 1d8 | — | 5 gp | 6 lb. | Spear | Versatile |

_Two-Handed_

| Weapon | Prof. | Damage | Range | Price | Weight | Group | Properties |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Greatclub | +2 | 2d4 | — | 1 gp | 10 lb. | Mace | — |
| Morningstar | +2 | 1d10 | — | 10 gp | 8 lb. | Mace | — |
| Quarterstaff | +2 | 1d8 | — | 5 gp | 4 lb. | Staff | — |
| Scythe | +2 | 2d4 | — | 5 gp | 10 lb. | Heavy blade | — |

**Military Melee Weapons**

_One-Handed_

| Weapon | Prof. | Damage | Range | Price | Weight | Group | Properties |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Battleaxe | +2 | 1d10 | — | 15 gp | 6 lb. | Axe | Versatile |
| Flail | +2 | 1d10 | — | 10 gp | 5 lb. | Flail | Versatile |
| Handaxe | +2 | 1d6 | 5/10 | 5 gp | 3 lb. | Axe | Off-hand, heavy thrown |
| Longsword | +3 | 1d8 | — | 15 gp | 4 lb. | Heavy blade | Versatile |
| Scimitar | +2 | 1d8 | — | 10 gp | 4 lb. | Heavy blade | High crit |
| Short sword | +3 | 1d6 | — | 10 gp | 2 lb. | Light blade | Off-hand |
| Throwing hammer | +2 | 1d6 | 5/10 | 5 gp | 2 lb. | Hammer | Off-hand, heavy thrown |
| Warhammer | +2 | 1d10 | — | 15 gp | 5 lb. | Hammer | Versatile |
| War pick | +2 | 1d8 | — | 15 gp | 6 lb. | Pick | High crit, versatile |

_Two-Handed_

| Weapon | Prof. | Damage | Range | Price | Weight | Group | Properties |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Falchion | +3 | 2d4 | — | 25 gp | 7 lb. | Heavy blade | High crit |
| Glaive | +2 | 2d4 | — | 25 gp | 10 lb. | Heavy blade, polearm | Reach |
| Greataxe | +2 | 1d12 | — | 30 gp | 12 lb. | Axe | High crit |
| Greatsword | +3 | 1d10 | — | 30 gp | 8 lb. | Heavy blade | — |
| Halberd | +2 | 1d10 | — | 25 gp | 12 lb. | Axe, polearm | Reach |
| Heavy flail | +2 | 2d6 | — | 25 gp | 10 lb. | Flail | — |
| Longspear | +2 | 1d10 | — | 10 gp | 9 lb. | Polearm, spear | Reach |
| Maul | +2 | 2d6 | — | 30 gp | 12 lb. | Hammer | — |

**Superior Melee Weapons**

_One-Handed_

| Weapon | Prof. | Damage | Range | Price | Weight | Group | Properties |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Bastard sword | +3 | 1d10 | — | 30 gp | 6 lb. | Heavy blade | Versatile |
| Katar | +3 | 1d6 | — | 3 gp | 1 lb. | Light blade | Off-hand, high crit |
| Rapier | +3 | 1d8 | — | 25 gp | 2 lb. | Light blade | — |

_Two-Handed_

| Weapon | Prof. | Damage | Range | Price | Weight | Group | Properties |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Spiked chain | +3 | 2d4 | — | 30 gp | 10 lb. | Flail | Reach |

**Improvised Melee Weapons**

_One-Handed_

| Weapon | Prof. | Damage | Range | Price | Weight | Group | Properties |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Any* | n/a | 1d4 | — | — | 1–5 lb. | None | — |
| Unarmed attack | n/a | 1d4 | — | — | — | Unarmed | — |

_Two-Handed_

| Weapon | Prof. | Damage | Range | Price | Weight | Group | Properties |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Any* | n/a | 1d8 | — | — | 6–12 lb. | None | — |

\\* Improvised weapons include anything you happen to pick up, from a rock to a chair.`,
  },
})

export const ReadingTheWeaponTablesSection = Content.defineSection('equipment/reading-the-weapon-tables', {
  parent: WeaponsSection,
  content: {
    name: 'Reading the Weapon Tables',
    description: `A weapon entry contains the following information, organized in columns on the weapon tables.

**Weapon:** The weapon’s name.

**Prof.:** Proficiency with a weapon gives you a proficiency bonus to attack rolls, which appears in this column if applicable. Some weapons are more accurate than others, as reflected here. If you’re not proficient with the weapon, you don’t gain this bonus.

**Damage:** The weapon’s damage die. When a power deals a number of weapon damage dice (such as 4[W]), you roll the number of the dice indicated by this entry. If the weapon’s damage die is an expression of multiple dice, roll that number of dice the indicated number of times. For example, a falchion (which has a damage die of 2d4) deals 8d4 damage when used with a power that deals 4[W] on a hit.

**Range:** Weapons that can strike at a distance have range. The number before the slash indicates the normal range (in squares) for an attack. The number after the slash indicates the long range for an attack; an attack at long range takes a –2 penalty to the attack roll. Squares beyond the second number are considered to be out of range and can’t be targeted with this weapon. If a melee weapon has a range entry, it can be thrown and belongs to either the light thrown or the heavy thrown category. An entry of “—” indicates that the weapon can’t be used at range.

**Price:** The weapon’s cost in gold pieces. An entry of “—” indicates that the item has no cost.

**Weight:** The weapon’s weight in pounds.

**Group and Properties:** These terms are explained on [pages 215–217](content:equipment/weapon-groups).`,
  },
})

export const RangedWeaponsSection = Content.defineSection('equipment/ranged-weapons', {
  parent: WeaponsSection,
  content: {
    name: 'Ranged Weapons',
    description: `**Simple Ranged Weapons**

_One-Handed_

| Weapon | Prof. | Damage | Range | Price | Weight | Group | Properties |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Hand crossbow | +2 | 1d6 | 10/20 | 25 gp | 2 lb. | Crossbow | Load free |
| Sling | +2 | 1d6 | 10/20 | 1 gp | 0 lb. | Sling | Load free |

_Two-Handed_

| Weapon | Prof. | Damage | Range | Price | Weight | Group | Properties |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Crossbow | +2 | 1d8 | 15/30 | 25 gp | 4 lb. | Crossbow | Load minor |

**Military Ranged Weapons**

_Two-Handed_

| Weapon | Prof. | Damage | Range | Price | Weight | Group | Properties |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Longbow | +2 | 1d10 | 20/40 | 30 gp | 3 lb. | Bow | Load free |
| Shortbow | +2 | 1d8 | 15/30 | 25 gp | 2 lb. | Bow | Load free, small |

**Superior Ranged Weapons**

_One-Handed_

| Weapon | Prof. | Damage | Range | Price | Weight | Group | Properties |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Shuriken (5) | +3 | 1d4 | 6/12 | 1 gp | 1/2 lb. | Light blade | Light thrown |

**Improvised Ranged Weapons**

_One-Handed_

| Weapon | Prof. | Damage | Range | Price | Weight | Group | Properties |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Any* | n/a | 1d4 | 5/10 | — | 1 lb. | None | — |

\\* Improvised weapons include anything you happen to pick up, from a rock to a chair.`,
  },
})

export const WeaponsAndSizeSection = Content.defineSection('equipment/weapons-and-size', {
  parent: WeaponsSection,
  content: {
    name: 'Weapons and Size',
    description: `The weapon tables assume a Medium wielder, which includes almost all player characters. Characters and creatures that are smaller or larger than Medium have special rules.

**Small** characters use the same weapons that Medium creatures do. However, a Small character (such as a halfling) can’t use a two-handed weapon. When a Small character uses a versatile weapon, he or she must wield it two-handed and doesn’t deal any extra damage for doing so.

**Large**, **Huge**, and **Gargantuan** creatures use weapons that are specially sized for them. Each size category larger than Medium increases the weapon’s damage die by one size.

**One-Handed**

1d4 ➛ 1d6 ➛ 1d8 ➛ 1d10 ➛ 1d12 ➛ 2d6 ➛ 2d8 ➛ 2d10

**Two-Handed**

1d8 ➛ 2d4 ➛ 1d10 ➛ 1d12 ➛ 2d6 ➛ 2d8 ➛ 2d10

Thus, a longsword sized for a Large fire giant deals 1d10 weapon damage instead of 1d8, and a Large quarterstaff deals 2d4 weapon damage.

Large creatures can use two-handed weapons intended for creatures one size category smaller than themselves and treat them as one-handed weapons. A fire giant (Large) can use a human’s greatsword with one hand, and a fire titan (Huge) can use a fire giant’s greatsword with one hand. A creature can’t use an undersized one-handed weapon at all; its hand is too large to effectively hold the weapon’s small grip.

Creatures can’t use weapons designed for creatures larger than themselves. A human can’t fit his or her hands properly around the hilt of a fire giant’s dagger, let alone use it as an effective weapon.

When a creature that has a natural reach uses a reach weapon, the weapon increases the creature’s natural reach by 1 square.`,
  },
})

export const SilveredWeaponsSection = Content.defineSection('equipment/silvered-weapons', {
  parent: WeaponsSection,
  content: {
    name: 'Silvered Weapons',
    description: `Some monsters, such as werewolves, are susceptible to attacks made by silvered weapons. A single weapon, 30 arrows, 10 crossbow bolts, 20 sling bullets, or 5 shuriken can be silvered at a cost of 500 gp. This cost represents not only the price of the silver, but the time and expertise needed to add silver to a weapon without making it less effective.`,
  },
})

export const SellingEquipmentSection = Content.defineSection('equipment/selling-equipment', {
  parent: WeaponsSection,
  content: {
    name: 'Selling Equipment',
    description: `You cannot sell mundane armor, weapons, or adventuring gear unless your DM allows, in which case you receive one-fifth of an item’s market price. Art objects or fine goods that have a specific value, such as a gold dagger worth 100 gp, bring their full price.`,
  },
})

export const AdventuringGearSection = Content.defineSection('equipment/adventuring-gear', {
  parent: EquipmentSection,
  content: {
    name: 'Adventuring Gear',
    description: `From meals to torches, adventuring gear is essential to your party’s success. You’re assumed to start with basic clothing, and before your first adventure, you should equip yourself with weapons, armor, and other gear.

**Standard Adventurer’s Kit:** This kit includes all the items grouped beneath its entry on the table: a backpack, a bedroll, flint and steel, a belt pouch, two sunrods, ten days’ worth of trail rations, 50 feet of hempen rope, and a waterskin.

**Ammunition:** Arrows come in a quiver that holds thirty, crossbow bolts come in a case that holds twenty, and sling bullets come in a pouch that holds twenty. Ammunition is used up when you fire it from a projectile weapon.

**Arcane Implement:** Wizards use orbs, staffs, or wands as focus items for their spells, while warlocks use rods or wands. Using a nonmagical implement confers no benefit. You can purchase a magic implement to gain an enhancement bonus to attack rolls and damage rolls with your arcane powers. A staff implement can also function as a quarterstaff.

**Climber’s Kit:** This kit includes all the items grouped beneath its entry: a grappling hook, a small hammer, and ten pitons. When you use a climber’s kit, you gain a +2 bonus to [Athletics](characteristic:skill/athletics) checks for climbing.

**Everburning Torch:** This torch never stops burning. It sheds magical light but no heat, so you can stow it in a bag or a pouch. You can’t set fire to anything with it.

**Holy Symbol:** This is a finely crafted symbol of precious metal that clerics and paladins use as a focus for their prayers. Using a nonmagical holy symbol confers no benefit. You can purchase a magic holy symbol to gain an enhancement bonus to attack rolls and damage rolls when using your divine powers.

**Journeybread:** This magic bread fills the stomach and provides all necessary nutrients with only a few small bites, so you can carry food for a long journey without weighing yourself down.

**Ritual Book:** Ritual casters use a ritual book to store the rituals they have mastered.

**Ritual Components:** These items are needed by ritual casters. You purchase as many gold pieces worth of components as you need or can afford. See [Chapter 10](content:rituals) for more information.

**Spellbook:** Wizards keep the daily spells, the utility spells, and the rituals they’ve learned in a spellbook.

**Sunrod:** This minor magic item sheds bright light to a radius of 20 squares for 4 hours before burning out.

**Thieves’ Tools:** To use the [Thievery](characteristic:skill/thievery) skill properly, you need the right picks and pries, skeleton keys, clamps, and so on. Thieves’ tools grant a +2 bonus to Thievery checks to open a lock or to disarm a trap.

| Item | Price | Weight |
| :--- | :--- | :--- |
| Standard adventurer’s kit | 15 gp | 33 lb. |
| Backpack (empty) | 2 gp | 2 lb. |
| Bedroll | 1 sp | 5 lb. |
| Flint and steel | 1 gp | — |
| Pouch, belt (empty) | 1 gp | 1/2 lb. |
| Rations, trail (10 days) | 5 gp | 10 lb. |
| Rope, hempen (50 ft.) | 1 gp | 10 lb. |
| Sunrods (2) | 4 gp | 2 lb. |
| Waterskin | 1 gp | 4 lb. |
| Ammunition | | |
| Arrows (30) | 1 gp | 3 lb. |
| Crossbow bolts (20) | 1 gp | 2 lb. |
| Sling bullets (20) | 1 gp | 5 lb. |
| Arcane implement | | |
| Orb | 15 gp | 2 lb. |
| Rod | 12 gp | 2 lb. |
| Staff | 5 gp | 4 lb. |
| Wand | 7 gp | — |
| Candle | 1 cp | — |
| Chain (10 ft.) | 30 gp | 2 lb. |
| Chest (empty) | 2 gp | 25 lb. |
| Climber’s kit | 2 gp | 11 lb. |
| Grappling hook | 1 gp | 4 lb. |
| Hammer | 5 sp | 2 lb. |
| Pitons (10) | 5 sp | 5 lb. |
| Everburning torch | 50 gp | 1 lb. |
| Fine clothing | 30 gp | 6 lb. |
| Flask (empty) | 3 cp | 1 lb. |
| Holy symbol | 10 gp | 1 lb. |
| Journeybread (10 days) | 50 gp | 1 lb. |
| Lantern | 7 gp | 2 lb. |
| Ritual book | 50 gp | 3 lb. |
| Ritual components | Varies | — |
| Rope, silk (50 ft.) | 10 gp | 5 lb. |
| Spellbook | 50 gp | 3 lb. |
| Tent | 10 gp | 20 lb. |
| Thieves’ tools | 20 gp | 1 lb. |
| Torch | 1 sp | 1 lb. |`,
  },
})

export const FoodDrinkAndLodgingSection = Content.defineSection('equipment/food-drink-and-lodging', {
  parent: AdventuringGearSection,
  content: {
    name: 'Food, Drink, and Lodging',
    description: `When you’re not traveling in the wilderness, you can enjoy the comforts of a village or a town—a soft bed at an inn and hot meals brought to your table.

| Item | Price |
| :--- | :--- |
| Food | |
| Meal, common | 2 sp |
| Meal, feast | 5 gp |
| Drink | |
| Ale, pitcher | 2 sp |
| Wine, bottle | 5 gp |
| Inn stay (per day) | |
| Typical room | 5 sp |
| Luxury room | 2 gp |`,
  },
})

export const MountsAndTransportSection = Content.defineSection('equipment/mounts-and-transport', {
  parent: AdventuringGearSection,
  content: {
    name: 'Mounts and Transport',
    description: `As described in [Chapter 8](content:adventuring), mounts and vehicles can improve your speed or increase the amount you can carry when you travel. This table shows the price for various kinds of transport, as well as the weight of each can carry. For mounts, the carrying capacity shown is the normal load, heavy load, and maximum drag load for the creature (see “[Carrying, Lifting, and Dragging](content:equipment/carrying-lifting-and-dragging),” below). For vehicles, it’s the maximum amount of goods you can haul with the vehicle.

| Mount or Transport | Cost | Carrying Capacity |
| :--- | :--- | :--- |
| Cart or wagon | 20 gp | 1 ton |
| Riding horse* | 75 gp | 237/475/1,187 lb. |
| Rowboat | 50 gp | 600 lb. |
| Sailing ship | 10,000 gp | 150 tons |
| Warhorse* | 680 gp | 262/525/1,312 lb. |

\\* Quadrupeds can carry 25 percent more than bipeds.`,
  },
})

export const CarryingLiftingAndDraggingSection = Content.defineSection('equipment/carrying-lifting-and-dragging', {
  parent: AdventuringGearSection,
  content: {
    name: 'Carrying, Lifting, and Dragging',
    description: `Adventurers carry a lot of gear. When that quantity becomes extreme, it might be enough to slow you down and otherwise hamper your capabilities. The amount you carry should rarely be an issue, and you don’t need to calculate the weight your character is hauling around unless it’s likely to matter.

More often, you’ll need to know how much weight you can push or drag along the ground—are you strong enough to slide the statue covering the trapdoor? This information is contained in your [Strength](characteristic:strength) score.

Multiply your Strength score by 10. That’s the weight, in pounds, that you can carry around without penalty. This amount of weight is considered a **normal load**.

Double that number (Strength × 20). That’s the maximum weight you can lift off the ground. If you try to carry that weight, though, you’re slowed. Carrying such a load requires both hands, so you’re not particularly effective while you’re doing so. This amount of weight is considered a **heavy load**.

Five times your normal load (Strength × 50) is the most weight you can push or drag along the ground. You’re slowed if you try to push or drag more weight than you can carry without penalty, and you can’t push or drag such a heavy load over difficult terrain. This amount of weight is referred to as your **maximum drag load**.

Your DM might rule that you can’t carry certain objects at full speed no matter what your Strength score is, just because they’re so bulky or unwieldy. Your DM can also ask you to make a Strength check to push or to lift something heavy in a stressful situation, such as in the middle of combat.`,
  },
})

export const MagicItemsSection = Content.defineSection('equipment/magic-items', {
  parent: EquipmentSection,
  content: {
    name: 'Magic Items',
    description: `As you gain levels, the mundane equipment you purchased as a starting character becomes less important; it’s overshadowed by the magic items you acquire on your adventures. Magic armor that can cloak you in shadow, magic weapons that burst into flame, magic rings that turn you invisible, or Ioun stones that orbit your head to grant you great capabilities—these items enhance and supplement the powers you gain from your class and enhance your attacks and defenses.

Magic items have levels, just as characters, powers, and monsters do. An item’s level is a general measure of its power and translates to the average level of character using that item. In practice, your character will end up with some items that are three or four levels above your level and others that are several levels below. There’s no restriction on using or acquiring items based on their level, except that you can’t use the [Enchant Magic Item](content:rituals/enchant-magic-item) ritual (page 304) to create an item above your level. If, for some reason, your 10th-level character finds a 20th-level magic sword, you can use it to full effect.

You can sometimes buy magic items just as you can mundane equipment. It’s rare to find a shop or a bazaar that routinely sells magic items, except perhaps the lowest-level items. Some fantastic places, such as the legendary City of Brass in the heart of the Elemental Chaos, have such markets, but those are the exception rather than the rule. Your DM might say that you can track down a seller for the item you want to buy or that you might have to do some searching, but in general you can buy any item you can afford.

You can also use the Enchant Magic Item ritual to create an item of your level or lower. In terms of the economic transaction, creating an item is the same as buying it: You spend money equal to the market price of the item and acquire the item. Some DMs prefer to have characters enchant their own items rather than buy them, particularly for more powerful items.

As you adventure, you’ll come across magic items as part of the treasure you acquire. Often, these are magic items much higher than your level—items you can’t enchant and can’t easily afford to buy. Ideally, these are items that someone in your party can use effectively, which makes them very rewarding treasure.

If you find a magic item you don’t want to keep, or you find an item that replaces an item you already have, you might end up either selling the item or disenchanting it (with the Disenchant Magic Item ritual; see page 304). This isn’t a favorable transaction for you—the sale price of a magic item, or the value of residuum you get from disenchanting it, is only one-fifth the normal price of the item. That means selling an item gives you enough money or residuum to buy or enchant an item that’s five levels lower than the original item.`,
  },
})

export const IdentifyingMagicItemsSection = Content.defineSection('equipment/identifying-magic-items', {
  parent: MagicItemsSection,
  content: {
    name: 'Identifying Magic Items',
    description: `Most of the time, you can determine the properties and powers of a magic item during a short rest. In the course of handling the item for a few minutes, you discover what the item is and what it does. You can identify one magic item per short rest.

Some magic items might be a bit harder to identify, such as cursed or nonstandard items, or powerful magical artifacts. Your DM might ask for an [Arcana](characteristic:skill/arcana) check to determine their properties, or you might even need to go on a special quest to find a ritual to identify or to unlock the powers of a unique item.`,
  },
})

export const PricesSection = Content.defineSection('equipment/prices', {
  parent: MagicItemsSection,
  content: {
    name: 'Prices',
    description: `The purchase price of a permanent magic item depends on its level, as shown on the table below. The purchase price of a consumable item (such as a potion or an elixir) is much lower than the price of a permanent item of the same level. The sale price of a magic item (the amount a PC gets from either selling or disenchanting an item) is one-fifth of the purchase price.

Prices shown are the base market price for the items. The actual cost to purchase a magic item depends on supply and demand and might be 10 to 40 percent more than the base market price.

**Magic Item Prices**

| Item Level | Purchase Price (gp) | Sale Price (gp)* |
| :--- | :--- | :--- |
| 1 | 360 | 72 |
| 2 | 520 | 104 |
| 3 | 680 | 136 |
| 4 | 840 | 168 |
| 5 | 1,000 | 200 |

\\* Or equivalent gold piece value of residuum acquired from disenchanting an item`,
  },
})

export const ResiduumSection = Content.defineSection('equipment/residuum', {
  parent: MagicItemsSection,
  content: {
    name: 'Residuum',
    description: `Residuum is the magical substance that results from using the Disenchant Magic Item ritual on an item. It’s a fine, silvery dust that some describe as concentrated magic, useful as a generic component for rituals (see [Chapter 10](content:rituals)). In some exotic locales, residuum is traded as currency, measured by weight and carried in small metal vials. It’s a convenient way to transport large sums of wealth; 10,000 gp worth of residuum weighs as much as a single gold piece and takes up only slightly more space, so 1 pound of residuum is worth 500,000 gp and fits in a belt pouch.`,
  },
})

export const MagicItemCategoriesSection = Content.defineSection('equipment/magic-item-categories', {
  parent: MagicItemsSection,
  content: {
    name: 'Magic Item Categories',
    description: `Magic items fall into seven broad categories: armor, weapons, implements, clothing, rings, wondrous items, and potions. Items in a particular category have similar effects—all magic weapons give you bonuses when you attack with them, and all magic boots have powers relating to movement. Aside from those broad generalities, though, magic items possess a wide variety of powers and properties.

Within the broad category of clothing, items are grouped by kind of clothing—whether you wear the item on your head or your feet, for example. These are called item slots, and they provide a practical limit to the number of magic items you can wear and use. You can benefit from only one magic item that you wear in your arms slot even if, practically speaking, you can wear bracers and carry a shield at the same time. You benefit from the item you put on first; any other item you put in the same item slot doesn’t function for you until you take off the first item. Sometimes there are physical limitations as well—you can’t wear two helms at the same time.

Wondrous items include a variety of useful tools, from a _bag of holding_ to a _flying carpet_. Each item’s description indicates how a character accesses its effects.

All magic armor gives you an enhancement bonus to your [Armor Class](characteristic:armor-class). All magic weapons and implements give you an enhancement bonus to your attack rolls and damage rolls when you use them to make an attack. All magic cloaks, amulets, and other neck slot items give you an enhancement bonus to your [Fortitude](characteristic:fortitude), [Reflex](characteristic:reflex), and [Will](characteristic:will) defenses. Other magic items don’t generally give you bonuses to these numerical statistics, though there are some exceptions.

The rest of this chapter describes a broad selection of magic items of all levels, presented alphabetically within each category.`,
  },
})

export const ReadingAMagicItemSection = Content.defineSection('equipment/reading-a-magic-item', {
  parent: MagicItemsSection,
  content: {
    name: 'Reading a Magic Item',
    description: `Here’s a sample magic item, the _holy avenger_ weapon:

**Holy Avenger** · Level 25+

_The most prized weapon of any paladin._

Lvl 25 +5 625,000 gp

Lvl 30 +6 3,125,000 gp

**Weapon:** Axe, Hammer, Heavy Blade

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d6 radiant damage per plus, and you can spend a healing surge

**Property:** A _holy avenger_ deals an extra 1d10 radiant damage when the power you use to make the attack has the radiant keyword.

**Power (Daily):** Minor Action. You and each ally within 10 squares of you gain a +5 power bonus to Fortitude, Reflex, and Will defenses until the end of your next turn.

**Special:** A _holy avenger_ can be used as a holy symbol. It adds its enhancement bonus to attack rolls and damage rolls and the extra damage granted by its property (if applicable) when used in this manner. You do not gain your weapon proficiency bonus to the attack roll when using a _holy avenger_ as an implement.`,
  },
})

export const NameAndLevelSection = Content.defineSection('equipment/name-and-level', {
  parent: ReadingAMagicItemSection,
  content: {
    name: 'Name and Level',
    description: `The name of the magic item and the item’s level appear on the first line of the description. If an item’s level line ends with a plus sign, that item is available at more than one level, with higher-level versions having a greater enhancement bonus or more potent powers and properties.

The _holy avenger_ is available as a 25th-level item and also comes in a higher-level version.`,
  },
})

export const DescriptionSection = Content.defineSection('equipment/description', {
  parent: ReadingAMagicItemSection,
  content: {
    name: 'Description',
    description: `The next entry gives a brief description of the item, sometimes explaining what it does in plain language, other times offering flavorful information about its appearance, origin, effect, or place in the world. This material isn’t rules text; when you need to know the exact effect, look at the rules text below.`,
  },
})

export const CategoryAndPriceSection = Content.defineSection('equipment/category-and-price', {
  parent: ReadingAMagicItemSection,
  content: {
    name: 'Category and Price',
    description: `The next line or lines indicate the magic item’s various levels and enhancement bonus (if applicable) and the price for each version of the item. For weapons, the line beneath this information tells you which weapon groups can be enchanted with that set of qualities, and for armor, it notes the same for the five types of armor (plus clothing). For implements, it shows the specific kind of implement. For clothing items, the entry appears as “Item Slot:” followed by the appropriate slot.

The magic item’s purchase price is either a single number (for an item with a fixed level) or a list of values, as in the example of _flamedrinker armor_.

The price of a _holy avenger_ (as well as its enhancement bonus) depends on its level. The 25th-level version is a +5 weapon and costs 625,000 gp, and the 30th-level version is a +6 weapon and costs 3,125,000 gp. It’s a weapon, and its characteristics can be applied to axes, hammers, and heavy blades.`,
  },
})

export const EnhancementSection = Content.defineSection('equipment/enhancement', {
  parent: ReadingAMagicItemSection,
  content: {
    name: 'Enhancement',
    description: `For items that give an enhancement bonus, this entry specifies what that bonus applies to: AC, other defenses, or attack rolls and damage rolls.

Magic weapons and implements grant their enhancement bonus to attack rolls and damage rolls only when you use powers delivered through the weapon or the implement (or directly from the weapon or the implement, for items that have attack powers).

For example, a fighter’s attack powers are delivered through a weapon, so he or she adds a magic weapon’s enhancement bonus to attack rolls and damage rolls. A wizard’s attack powers are delivered through an implement (orb, staff, or wand), so he or she adds an implement’s enhancement bonus to attack rolls and damage rolls with those powers.

A power’s description indicates if it functions through the use of a weapon or an implement. Each class description in [Chapter 4](content:classes) indicates which implements (if any) a character of that class is allowed to use when delivering powers. For example, a cleric can wear a holy symbol to use implement powers, while a warlock can wield either a rod or a wand.

A magic item’s level and its enhancement bonus are associated. An item that has a +2 bonus is always between level 6 and level 10.

| Item Level | Enhancement Bonus |
| :--- | :--- |
| 1–5 | +1 |

Because a _holy avenger_ is a magic weapon, its enhancement bonus applies to the user’s weapon attack rolls and damage rolls.`,
  },
})

export const CriticalSection = Content.defineSection('equipment/critical', {
  parent: ReadingAMagicItemSection,
  content: {
    name: 'Critical',
    description: `For magic weapons and implements, this entry describes what happens when you score a critical hit using that item. Just as with an enhancement bonus, this effect only applies for attacks that are delivered through the weapon or the implement. (A wizard’s _[magic missile](ability:wizard/power/magic-missile)_ can’t benefit from the critical hit effect noted for the magic dagger she carries, for example.)

All magic weapons and implements deal one or more extra dice of damage on a critical hit. The number of extra dice is equal to the item’s enhancement bonus, and the die rolled depends on the particular weapon or implement. (The normal critical die is a d6.) Unless noted otherwise, the damage type of this extra damage is the same as the normal damage type for the weapon.

In addition to extra damage, some magic weapons or implements produce other effects on a critical hit. This information is noted in the weapon’s description. An attack that does not deal damage still does not deal damage on a critical hit.

A _holy avenger_ deals an extra 5d6 or an extra 6d6 (depending on its enhancement bonus) damage on a critical hit and also allows the wielder to spend a healing surge.`,
  },
})

export const PropertySection = Content.defineSection('equipment/property', {
  parent: ReadingAMagicItemSection,
  content: {
    name: 'Property',
    description: `Some magic items have a special property that is constantly active (or active under certain conditions). A property doesn’t normally require any action to use, although some properties allow you to turn them off (or on again).

When you’re wielding a _holy avenger_, all your radiant powers deal extra damage when you use the weapon to deliver them. You don’t need to turn this property on or off.`,
  },
})

export const PowerSection = Content.defineSection('equipment/power', {
  parent: ReadingAMagicItemSection,
  content: {
    name: 'Power',
    description: `Some magic items have a special power. This entry, when present in an item description, includes the action required to use the power and the effect of the power. In some cases, it might also indicate the specific conditions under which you can use the power (for instance, only if you’re bloodied).

In general, magic item powers follow the same rules as other powers (in that they have ranges, shapes, and so forth). See “[How to Read a Power](content:classes/how-to-read-a-power),” page 54, for details.

Like racial powers and class powers, magic item powers often have keywords that indicate their damage or effect types. When you use a magic item as part of a racial power or a class power, the keywords of the item’s power and the other power all apply. For instance, if a paladin uses a _flaming sword_ to attack with a power that deals radiant damage, the power deals both fire damage and radiant damage.

Like other powers, magic item powers are sometimes at-will powers, sometimes encounter powers, and sometimes daily powers. Magic item powers have two other categories as well: Healing surge powers are usable every time you spend a healing surge, and consumable powers appear in one-use magic items.

**At-Will:** These powers can be used as often as their action types allow.

**Encounter:** These powers can be used once per encounter and are renewed when their user takes a short rest.

**Daily:** A magic item’s daily power can be used once per day and is renewed when its user takes an extended rest. As with daily powers provided by your class, there is a limit to the number of magic item daily powers you can use on any given day. This limit depends on your level.

At 1st–10th level, you can use one magic item daily power per day.

At 11th–20th level, you can use two magic item daily powers per day.

At 21st–30th level, you can use three magic item daily powers per day.

Each use of a magic item daily power must come from a different magic item. At 11th level, for example, you can use the daily powers provided by two different magic items, but you can’t use two different daily powers from the same magic item. Your character sheet includes boxes to help you keep track of these uses.

Each time you reach a milestone (see [page 259](content:adventuring/milestones)), you gain one additional use of a magic item daily power. This benefit can be used to activate any magic item daily power that you have not already used this day (even if you’ve already used a different daily power from that magic item).

After you take an extended rest, all of your magic item daily powers are renewed, and you start fresh with regard to the number of magic item daily powers you can use per day.

**Healing Surge:** You begin with one use of the power per day, like a daily power. You can renew this item’s power by taking a standard action to funnel your vitality into the item, spending a [healing surge](characteristic:healing-surges) in the process. Spending a healing surge in this way doesn’t restore hit points, and this standard action is separate from the action required to activate the item’s power.

**Consumable:** Some items, particularly potions and elixirs, contain one-use powers that are expended when you use them.

Once per day, you can use a _holy avenger_ to increase the defenses of you and your allies. This power renews when you take an extended rest.`,
  },
})

export const SpecialSection = Content.defineSection('equipment/special', {
  parent: ReadingAMagicItemSection,
  content: {
    name: 'Special',
    description: `If any special rules or restrictions on the item’s use exist, here’s where you’ll find them.`,
  },
})

export const MagicArmorSection = Content.defineSection('equipment/magic-items-armor', {
  parent: MagicItemsSection,
  content: {
    name: 'Armor',
    description: `Magic armor adds an enhancement bonus to AC, so a set of +5 _black iron dragonscale_ adds a total of 15 to the wearer’s [Armor Class](characteristic:armor-class) (10 from the scale armor and 5 from the enhancement bonus). If you’re not proficient with the armor type, you take –2 penalty to attack rolls and to your [Reflex](characteristic:reflex) defense but still gain the enhancement bonus of the magic armor.

The category determines what kind of armors can be enchanted with that particular set of qualities. “Any” includes all armors: cloth, leather, hide, chain, scale, and plate.

You can resize magic armor with the [Enchant Magic Item](content:rituals/enchant-magic-item) ritual (see page 304).

**Magic Armor**

| Lvl | Name | Price (gp) | Categories |
| :--- | :--- | :--- | :--- |
| 1 | Magic +1 | 360 | Any |
| 2 | Dwarven +1 | 520 | Chain, Scale, Plate |
| 2 | Razor +1 | 520 | Scale |
| 3 | Curseforged +1 | 680 | Chain, Scale |
| 3 | Delver’s +1 | 680 | Any |
| 3 | Eladrin +1 | 680 | Chain |
| 3 | Fireburst +1 | 680 | Cloth |
| 3 | Sylvan +1 | 680 | Cloth, Leather, Hide |
| 4 | Black Iron +1 | 840 | Scale, Plate |
| 4 | Bloodcut +1 | 840 | Leather, Hide |
| 4 | Darkleaf +1 | 840 | Cloth, Leather, Hide |
| 5 | Barkskin +1 | 1,000 | Hide, Scale |
| 5 | Battleforged +1 | 1,000 | Plate |
| 5 | Bloodthread +1 | 1,000 | Cloth |
| 5 | Deathcut +1 | 1,000 | Leather, Hide |
| 5 | Exalted +1 | 1,000 | Chain |`,
  },
})

export const BarkskinArmorSection = Content.defineSection('equipment/barkskin-armor', {
  parent: MagicArmorSection,
  content: {
    name: 'Barkskin Armor',
    description: `**Level 5+**

_The enchantment placed upon this armor toughens the material and provides it with a rough texture like tree bark._

Lvl 5 +1 1,000 gp

**Armor:** Hide, Scale

**Enhancement:** AC

**Power (Daily):** [Minor Action](action-type:minor-action). Gain a +2 power bonus to AC until the end of the encounter. Each time an attack hits your AC, reduce this bonus by 1 (minimum 0).

Level 15 or 20: Gain a +3 power bonus.

Level 25 or 30: Gain a +4 power bonus.`,
  },
})

export const BattleforgedArmorSection = Content.defineSection('equipment/battleforged-armor', {
  parent: MagicArmorSection,
  content: {
    name: 'Battleforged Armor',
    description: `**Level 5+**

_The dwarves and the dragonborn argue over which race invented this enchanted armor._

Lvl 5 +1 1,000 gp

**Armor:** Plate

**Enhancement:** AC

**Property:** If you use your [second wind](ability:common/second-wind) when you are [bloodied](characteristic:bloodied), regain an extra 1d10 hit points.

Level 15 or 20: Regain an extra 2d10 hit points.

Level 25 or 30: Regain an extra 3d10 hit points.`,
  },
})

export const BlackIronArmorSection = Content.defineSection('equipment/black-iron-armor', {
  parent: MagicArmorSection,
  content: {
    name: 'Black Iron Armor',
    description: `**Level 4+**

_The black metal of this armor glows red when violence flares._

Lvl 4 +1 840 gp

**Armor:** Scale, Plate

**Enhancement:** AC

**Property:** Resist 5 fire and resist 5 necrotic.

Level 14 or 19: Resist 10 fire and resist 10 necrotic.

Level 24 or 29: Resist 15 fire and resist 15 necrotic.`,
  },
})

export const BloodcutArmorSection = Content.defineSection('equipment/bloodcut-armor', {
  parent: MagicArmorSection,
  content: {
    name: 'Bloodcut Armor',
    description: `**Level 4+**

_This armor has a crimson tinge that flares blood red when its power is activated._

Lvl 4 +1 840 gp

**Armor:** Leather, Hide

**Enhancement:** AC

**Power (Healing Surge):** [Minor Action](action-type:minor-action). While you are [bloodied](characteristic:bloodied), use this armor to gain resist 10 to all damage until the end of your next turn.

Level 14 or 19: Resist 15 to all damage.

Level 24 or 29: Resist 20 to all damage.`,
  },
})

export const BloodthreadArmorSection = Content.defineSection('equipment/bloodthread-armor', {
  parent: MagicArmorSection,
  content: {
    name: 'Bloodthread Armor',
    description: `**Level 5+**

_Eladrin master tailors magically weave threads of enchanted blood into the supple cloth used to create this robe or jacket._

Lvl 5 +1 1,000 gp

**Armor:** Cloth

**Enhancement:** AC

**Property:** When you are [bloodied](characteristic:bloodied), you gain a +2 item bonus to AC and saving throws.`,
  },
})

export const CurseforgedArmorSection = Content.defineSection('equipment/curseforged-armor', {
  parent: MagicArmorSection,
  content: {
    name: 'Curseforged Armor',
    description: `**Level 3+**

_In ancient days, the tieflings poured their bitterness into their forges as a lesson to those who would betray them._

Lvl 3 +1 680 gp

**Armor:** Chain, Scale

**Enhancement:** AC

**Power (Daily):** [Immediate Reaction](action-type:immediate-reaction). You can use this power when an enemy hits you with an attack. That enemy takes a –2 penalty to attack rolls (save ends). When the enemy saves against the penalty, the enemy takes a –1 penalty to attack rolls (save ends).

Level 13 or 18: –3 penalty.

Level 23 or 28: –4 penalty.`,
  },
})

export const DarkleafArmorSection = Content.defineSection('equipment/darkleaf-armor', {
  parent: MagicArmorSection,
  content: {
    name: 'Darkleaf Armor',
    description: `**Level 4+**

_Darkleaves from the gravetrees of the Shadowfell give this armor its protective properties._

Lvl 4 +1 840 gp

**Armor:** Cloth, Leather, Hide

**Enhancement:** AC

**Property:** Gain a +2 item bonus to AC against the first attack made against you in each encounter.`,
  },
})

export const DeathcutArmorSection = Content.defineSection('equipment/deathcut-armor', {
  parent: MagicArmorSection,
  content: {
    name: 'Deathcut Armor',
    description: `**Level 5+**

_Crafted from the hides of creatures slain by necromantic magic, this armor radiates unease and offers protection against similar magic._

Lvl 5 +1 1,000 gp

**Armor:** Leather, Hide

**Enhancement:** AC

**Property:** Resist 5 necrotic and resist 5 poison.

**Power (Daily ✦ Necrotic):** [Immediate Reaction](action-type:immediate-reaction). You can use this power when an enemy hits you with a melee attack. Deal 1d10 + [Charisma modifier](characteristic:charisma-modifier) necrotic damage to that enemy.

Level 15 or 20: 2d10 + Charisma modifier necrotic damage.

Level 25 or 30: 3d10 + Charisma modifier necrotic damage.`,
  },
})

export const DwarvenArmorSection = Content.defineSection('equipment/dwarven-armor', {
  parent: MagicArmorSection,
  content: {
    name: 'Dwarven Armor',
    description: `**Level 2+**

_Crafted by the finest dwarf armorsmiths, this armor was once only available to dwarves, though now some armorsmiths will create a set for whoever can pay the price._

Lvl 2 +1 520 gp

**Armor:** Chain, Scale, Plate

**Enhancement:** AC

**Property:** Gain an item bonus to [Endurance](characteristic:skill/endurance) checks equal to the armor’s enhancement bonus.

**Power (Daily ✦ Healing):** [Free Action](action-type:free-action). Regain hit points as if you had spent a [healing surge](characteristic:healing-surges).`,
  },
})

export const DelversArmorSection = Content.defineSection('equipment/delvers-armor', {
  parent: MagicArmorSection,
  content: {
    name: 'Delver’s Armor',
    description: `**Level 3+**

_A popular armor among adventurers, it is relatively easy to make._

Lvl 3 +1 680 gp

**Armor:** Any

**Enhancement:** AC

**Power (Daily):** [Free Action](action-type:free-action). Gain a +2 power bonus to a saving throw you just rolled; use the new result.`,
  },
})

export const EladrinArmorSection = Content.defineSection('equipment/eladrin-armor', {
  parent: MagicArmorSection,
  content: {
    name: 'Eladrin Armor',
    description: `**Level 3+**

_Crafted by master eladrin armorsmiths, the fine links of this chainmail sparkle in even the faintest light._

Lvl 3 +1 680 gp

**Armor:** Chain

**Enhancement:** AC

**Property:** Add 1 square to the maximum distance of any teleport you make.

This armor has no speed or skill check penalties.

Level 13 or 18: +2 squares to teleport distance.

Level 23 or 28: +3 squares to teleport distance.`,
  },
})

export const ExaltedArmorSection = Content.defineSection('equipment/exalted-armor', {
  parent: MagicArmorSection,
  content: {
    name: 'Exalted Armor',
    description: `**Level 5+**

_Clerics and warlords often seek out exalted armor because of its properties that improve their healing powers._

Lvl 5 +1 1,000 gp

**Armor:** Chain

**Enhancement:** AC

**Power (Daily ✦ Healing):** [Minor Action](action-type:minor-action). Until the end of your turn, each character healed by one of your encounter powers or daily powers regains additional hit points equal to 1d10 + your [Charisma modifier](characteristic:charisma-modifier).`,
  },
})

export const FireburstArmorSection = Content.defineSection('equipment/fireburst-armor', {
  parent: MagicArmorSection,
  content: {
    name: 'Fireburst Armor',
    description: `**Level 3+**

_Eladrin master tailors magically weave threads of arcane fire into the supple cloth used to make this robe or jacket._

Lvl 3 +1 680 gp

**Armor:** Cloth

**Enhancement:** AC

**Property:** You automatically succeed on saving throws against ongoing fire damage.

**Power (Daily ✦ Fire):** [Minor Action](action-type:minor-action). Until the end of your next turn, any creature that hits you with a melee attack takes 1d8 + [Charisma modifier](characteristic:charisma-modifier) fire damage.

Level 13 or 18: 2d8 + Charisma modifier fire damage.

Level 23 or 28: 3d8 + Charisma modifier fire damage.`,
  },
})

export const MagicArmorItemSection = Content.defineSection('equipment/magic-armor', {
  parent: MagicArmorSection,
  content: {
    name: 'Magic Armor',
    description: `**Level 1+**

_A set of basic yet effective enchanted armor._

Lvl 1 +1 360 gp

**Armor:** Any

**Enhancement:** AC`,
  },
})

export const RazorArmorSection = Content.defineSection('equipment/razor-armor', {
  parent: MagicArmorSection,
  content: {
    name: 'Razor Armor',
    description: `**Level 2+**

_Jutting spikes and sharp edges cover each scale set into this armor._

Lvl 2 +1 520 gp

**Armor:** Scale

**Enhancement:** AC

**Property:** When an enemy scores a melee critical hit against you, that enemy takes 1d10 + [Dexterity modifier](characteristic:dexterity-modifier) damage.

Level 12 or 17: 2d10 + Dexterity modifier damage.

Level 22 or 27: 3d10 + Dexterity modifier damage.`,
  },
})

export const SylvanArmorSection = Content.defineSection('equipment/sylvan-armor', {
  parent: MagicArmorSection,
  content: {
    name: 'Sylvan Armor',
    description: `**Level 3+**

_This brown and gray armor is favored by those who want to move like a leaf carried along on a forest breeze._

Lvl 3 +1 680 gp

**Armor:** Cloth, Leather, Hide

**Enhancement:** AC

**Property:** Gain an item bonus to [Athletics](characteristic:skill/athletics) checks and [Stealth](characteristic:skill/stealth) checks equal to the armor’s enhancement bonus.`,
  },
})

export const MagicWeaponsSection = Content.defineSection('equipment/magic-items-weapons', {
  parent: MagicItemsSection,
  content: {
    name: 'Weapons',
    description: `A magic weapon adds an enhancement bonus to attack rolls and damage rolls, so a +3 _flameburst longbow_ adds +3 to all attack rolls and damage rolls made with the bow. This bonus does not apply to any ongoing damage or other damage that might be applied to the attack.

If you’re not proficient with the weapon type, you don’t gain the proficiency bonus to attack rolls, but you still gain the enhancement bonus of the magic weapon.

The category determines what kind of weapons can be enchanted with that particular set of qualities. “Any ranged” includes projectile weapons and weapons with the heavy thrown or the light thrown property. “Any” or “Any melee” includes all applicable categories.

**Ammunition:** Ranged weapons such as bows, crossbows, and slings impart their magic to appropriate ammunition fired from them. Ammunition (such as arrows, bolts, or sling stones) doesn’t come in magical versions. You can’t craft (or find) a +1 _flameburst arrow_ or a +3 _sling stone_.

**Thrown Weapons:** Any magic light thrown or heavy thrown weapon, from the lowly +1 _shuriken_ to a +6 _perfect hunter’s spear_, automatically returns to its wielder’s hand after a ranged attack with the weapon is resolved.

Catching a returning thrown weapon is a free action; if you do not wish (or are unable) to catch the weapon, it falls at your feet in your space.

**Magic Weapons**

| Lvl | Name | Price (gp) | Categories |
| :--- | :--- | :--- | :--- |
| 1 | Magic +1 | 360 | Any |
| 2 | Resounding +1 | 520 | Hammer, Flail, Mace, Sling, Staff |
| 2 | Vicious +1 | 520 | Any |
| 3 | Duelist’s +1 | 680 | Light Blade |
| 3 | Flameburst +1 | 680 | Any ranged |
| 3 | Frost +1 | 680 | Any |
| 3 | Pact Blade +1 | 680 | Light Blade |
| 3 | Thundering +1 | 680 | Any |
| 4 | Terror +1 | 840 | Axe, Hammer, Heavy Blade |
| 4 | Thunderburst +1 | 840 | Any ranged |
| 5 | Flaming +1 | 1,000 | Any |
| 5 | Lifedrinker +1 | 1,000 | Any melee |
| 5 | Lightning +1 | 1,000 | Any |`,
  },
})

export const DuelistsWeaponSection = Content.defineSection('equipment/duelists-weapon', {
  parent: MagicWeaponsSection,
  content: {
    name: 'Duelist’s Weapon',
    description: `**Level 3+**

_The favorite weapon of a rogue._

Lvl 3 +1 680 gp

**Weapon:** Light Blade

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d6 damage per plus, or +1d8 damage per plus if you have combat advantage

**Power (Daily):** [Minor Action](action-type:minor-action). You have combat advantage against the next creature you attack with this weapon on this turn.`,
  },
})

export const FlameburstWeaponSection = Content.defineSection('equipment/flameburst-weapon', {
  parent: MagicWeaponsSection,
  content: {
    name: 'Flameburst Weapon',
    description: `**Level 3+**

_This ranged weapon packs a fiery surprise._

Lvl 3 +1 680 gp

**Weapon:** Any ranged

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d6 fire damage per plus

**Power (Daily ✦ Fire):** [Minor Action](action-type:minor-action). The next [ranged basic attack](ability:common/ranged-basic-attack) you make with this weapon before the end of your turn becomes a burst 1 centered on the target. Use your normal attack bonus for the basic attack, but against [Reflex](characteristic:reflex). Instead of normal damage, each target hit takes ongoing 5 fire damage (save ends).

Level 13 or 18: Burst 2; ongoing 10 fire damage.

Level 23 or 28: Burst 3; ongoing 15 fire damage.`,
  },
})

export const FlamingWeaponSection = Content.defineSection('equipment/flaming-weapon', {
  parent: MagicWeaponsSection,
  content: {
    name: 'Flaming Weapon',
    description: `**Level 5+**

_You can will this weapon to burst into flame._

Lvl 5 +1 1,000 gp

**Weapon:** Any

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d6 fire damage per plus

**Power (At-Will ✦ Fire):** [Free Action](action-type:free-action). All damage dealt by this weapon is fire damage. Another free action returns the damage to normal.

**Power (Daily ✦ Fire):** Free Action. Use this power when you hit with the weapon. Deal an extra 1d6 fire damage, and the target takes ongoing 5 fire damage (save ends).

Level 15 or 20: 2d6 fire damage and ongoing 10 fire damage.

Level 25 or 30: 3d6 fire damage and ongoing 15 fire damage.`,
  },
})

export const FrostWeaponSection = Content.defineSection('equipment/frost-weapon', {
  parent: MagicWeaponsSection,
  content: {
    name: 'Frost Weapon',
    description: `**Level 3+**

_A thin layer of frost coats the business end of this weapon._

Lvl 3 +1 680 gp

**Weapon:** Any

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d6 cold damage per plus

**Power (At-Will ✦ Cold):** [Free Action](action-type:free-action). All damage dealt by this weapon is cold damage. Another free action returns the damage to normal.

**Power (Daily ✦ Cold):** Free Action. Use this power when you hit with the weapon. The target takes an extra 1d8 cold damage and is slowed until the end of your next turn.

Level 13 or 18: 2d8 cold damage.

Level 23 or 28: 3d8 cold damage.`,
  },
})

export const LifedrinkerWeaponSection = Content.defineSection('equipment/lifedrinker-weapon', {
  parent: MagicWeaponsSection,
  content: {
    name: 'Lifedrinker Weapon',
    description: `**Level 5+**

_This weapon transfers an enemy’s vitality to you._

Lvl 5 +1 1,000 gp

**Weapon:** Any melee

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d6 necrotic damage per plus

**Property:** When you drop an enemy to 0 [hit points](characteristic:hit-points) or fewer with a melee attack made with this weapon, gain 5 temporary hit points.

Level 15 or 20: Gain 10 temporary hit points.

Level 25 or 30: Gain 15 temporary hit points.`,
  },
})

export const LightningWeaponSection = Content.defineSection('equipment/lightning-weapon', {
  parent: MagicWeaponsSection,
  content: {
    name: 'Lightning Weapon',
    description: `**Level 5+**

_This weapon crackles with dancing lightning._

Lvl 5 +1 1,000 gp

**Weapon:** Any

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d6 lightning damage per plus

**Power (At-Will ✦ Lightning):** [Free Action](action-type:free-action). All damage dealt by this weapon is lightning damage. Another free action returns the damage to normal.

**Power (Daily ✦ Lightning):** Free Action. Use this power when you hit with the weapon. The target and each enemy within 2 squares of the target take 1d6 lightning damage.

Level 15 or 20: 2d6 lightning damage.

Level 25 or 30: 3d6 lightning damage.`,
  },
})

export const MagicWeaponSection = Content.defineSection('equipment/magic-weapon', {
  parent: MagicWeaponsSection,
  content: {
    name: 'Magic Weapon',
    description: `**Level 1+**

_A basic enchanted weapon._

Lvl 1 +1 360 gp

**Weapon:** Any

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d6 damage per plus`,
  },
})

export const PactBladeSection = Content.defineSection('equipment/pact-blade', {
  parent: MagicWeaponsSection,
  content: {
    name: 'Pact Blade',
    description: `**Level 3+**

_Warlocks favor this wickedly sharp blade._

Lvl 3 +1 680 gp

**Weapon:** Light Blade (usually daggers and sickles)

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d6 damage per plus

**Property:** This blade functions as a warlock implement, adding its enhancement bonus to attack rolls and damage rolls for warlock powers that use implements.

**Property:** When a creature you have cursed with your [Warlock’s Curse](trait:warlock/warlocks-curse) makes a melee attack against you, deal damage to the creature equal to the _pact blade’s_ enhancement bonus.

**Special:** You do not gain your weapon proficiency bonus to the attack roll when using a _pact blade_ as an implement.`,
  },
})

export const ResoundingWeaponSection = Content.defineSection('equipment/resounding-weapon', {
  parent: MagicWeaponsSection,
  content: {
    name: 'Resounding Weapon',
    description: `**Level 2+**

_A thundering peal sounds when this weapon hits, dazing its target._

Lvl 2 +1 520 gp

**Weapon:** Hammer, Flail, Mace, Sling, Staff

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d6 thunder damage per plus

**Power (Daily):** [Free Action](action-type:free-action). Use this power when you hit with the weapon. The target is dazed until the end of your next turn.`,
  },
})

export const TerrorWeaponSection = Content.defineSection('equipment/terror-weapon', {
  parent: MagicWeaponsSection,
  content: {
    name: 'Terror Weapon',
    description: `**Level 4+**

_The bite of this weapon sends waves of fear through its target._

Lvl 4 +1 840 gp

**Weapon:** Axe, Hammer, Heavy Blade

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d8 damage per plus

**Power (Daily ✦ Fear):** [Free Action](action-type:free-action). Use this power when you hit with the weapon. The target takes a –2 penalty to all defenses (save ends).`,
  },
})

export const ThunderburstWeaponSection = Content.defineSection('equipment/thunderburst-weapon', {
  parent: MagicWeaponsSection,
  content: {
    name: 'Thunderburst Weapon',
    description: `**Level 4+**

_Suddenly, the projectile explodes in a burst of violent sound._

Lvl 4 +1 840 gp

**Weapon:** Any ranged

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d6 thunder damage per plus

**Power (Daily ✦ Thunder):** [Minor Action](action-type:minor-action). The next [ranged basic attack](ability:common/ranged-basic-attack) you make with this weapon before the end of your turn becomes a burst 1 centered on the target. Use your normal attack bonus for the basic attack, but against [Fortitude](characteristic:fortitude). Each target hit takes thunder damage equal to the normal damage you would deal with a ranged basic attack with the weapon.

Level 14 or 19: Burst 2.

Level 24 or 29: Burst 3.`,
  },
})

export const ThunderingWeaponSection = Content.defineSection('equipment/thundering-weapon', {
  parent: MagicWeaponsSection,
  content: {
    name: 'Thundering Weapon',
    description: `**Level 3+**

_You can unleash a clap of thunder when this weapon hits, carrying your foe away on a wave of deadly sound._

Lvl 3 +1 680 gp

**Weapon:** Any

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d6 thunder damage per plus

**Power (Daily ✦ Thunder):** [Free Action](action-type:free-action). Use this power when you hit with the weapon. Deal an extra 1d8 thunder damage and push the target 1 square.

Level 13 or 18: 2d8 extra thunder damage.

Level 23 or 28: 3d8 extra thunder damage.`,
  },
})

export const ViciousWeaponSection = Content.defineSection('equipment/vicious-weapon', {
  parent: MagicWeaponsSection,
  content: {
    name: 'Vicious Weapon',
    description: `**Level 2+**

_Some wielders claim this weapon takes pleasure in dealing pain._

Lvl 2 +1 520 gp

**Weapon:** Any

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d12 damage per plus`,
  },
})

export const HolySymbolsSection = Content.defineSection('equipment/holy-symbols', {
  parent: MagicItemsSection,
  content: {
    name: 'Holy Symbols',
    description: `If you are a member of a class that can use a holy symbol as an implement, you can apply the enhancement bonus of a holy symbol to the attack rolls and the damage rolls of any of your powers from that class that have the implement keyword, and you can use a holy symbol’s properties and powers. Members of other classes gain no benefit from wearing or holding a holy symbol.

A holy symbol represents your deity and takes the shape of an aspect of the god. (See [pages 21–22](content:making-characters/deities) for the symbols of the good, lawful good, and unaligned deities.) As with most other implements, you can’t make melee attacks with a holy symbol.

Unlike other implements, you need only to wear a holy symbol for its property or power to function. If you are wearing or holding more than one holy symbol, none of your symbols function.

**Holy Symbols**

| Lvl | Name | Price (gp) |
| :--- | :--- | :--- |
| 1 | Magic holy symbol +1 | 360 |
| 2 | Symbol of life +1 | 520 |
| 3 | Symbol of hope +1 | 680 |
| 5 | Symbol of battle +1 | 1,000 |`,
  },
})

export const MagicHolySymbolSection = Content.defineSection('equipment/magic-holy-symbol', {
  parent: HolySymbolsSection,
  content: {
    name: 'Magic Holy Symbol',
    description: `**Level 1+**

_A holy symbol of your god, enchanted with magical power._

Lvl 1 +1 360 gp

**Implement (Holy Symbol)**

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d6 damage per plus`,
  },
})

export const SymbolOfBattleSection = Content.defineSection('equipment/symbol-of-battle', {
  parent: HolySymbolsSection,
  content: {
    name: 'Symbol of Battle',
    description: `**Level 5+**

_This holy symbol is favored by battle clerics and warpriests._

Lvl 5 +1 1,000 gp

**Implement (Holy Symbol)**

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d8 damage per plus

**Power (Daily):** [Free Action](action-type:free-action). Use this power when you hit with an attack using this holy symbol. Deal an extra 1d10 damage.

Level 15 or 20: 2d10 extra damage.

Level 25 or 30: 3d10 extra damage.`,
  },
})

export const SymbolOfHopeSection = Content.defineSection('equipment/symbol-of-hope', {
  parent: HolySymbolsSection,
  content: {
    name: 'Symbol of Hope',
    description: `**Level 3+**

_The power of your faith makes it easier for allies to recover from debilitating effects._

Lvl 3 +1 680 gp

**Implement (Holy Symbol)**

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d6 damage per plus

**Power (Daily):** [Immediate Reaction](action-type:immediate-reaction). You can use this power when you or an ally within 5 squares of you is hit by an effect that a save can end. You or the ally gains a +5 power bonus to saving throws against the effect.`,
  },
})

export const SymbolOfLifeSection = Content.defineSection('equipment/symbol-of-life', {
  parent: HolySymbolsSection,
  content: {
    name: 'Symbol of Life',
    description: `**Level 2+**

_The power of your faith adds energy to your healing prayers._

Lvl 2 +1 520 gp

**Implement (Holy Symbol)**

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d6 damage per plus

**Power (Daily ✦ Healing):** [Minor Action](action-type:minor-action). Until the end of your turn, any character healed by one of your encounter powers or daily powers regains an additional 1d6 hit points.

Level 12 or 17: Regains an additional 2d6 hit points.

Level 22 or 27: Regains an additional 3d6 hit points.`,
  },
})

export const OrbsSection = Content.defineSection('equipment/orbs', {
  parent: MagicItemsSection,
  content: {
    name: 'Orbs',
    description: `If you are a member of a class that can use an orb as an implement, you can apply the enhancement bonus of an orb to the attack rolls and the damage rolls of any of your powers from that class that have the implement keyword, and you can use an orb’s properties and powers. Members of other classes gain no benefit from wielding an orb.

An orb is a heavy, round object, usually made of glass or crystal, of a size to fit comfortably in the palm of your hand. Orbs range in color, from clear glass to solid ebony, with storms of color erupting deep within their depths. As with most other implements, you can’t make melee attacks with an orb.

**Orbs**

| Lvl | Name | Price (gp) |
| :--- | :--- | :--- |
| 1 | Magic orb +1 | 360 |
| 3 | Orb of inevitable continuance +1 | 680 |
| 5 | Orb of sanguinary repercussions +1 | 1,000 |`,
  },
})

export const MagicOrbSection = Content.defineSection('equipment/magic-orb', {
  parent: OrbsSection,
  content: {
    name: 'Magic Orb',
    description: `**Level 1+**

_A standard crystal orb, enchanted to channel arcane energy._

Lvl 1 +1 360 gp

**Implement (Orb)**

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d6 damage per plus`,
  },
})

export const OrbOfInevitableContinuanceSection = Content.defineSection('equipment/orb-of-inevitable-continuance', {
  parent: OrbsSection,
  content: {
    name: 'Orb of Inevitable Continuance',
    description: `**Level 3+**

_A sphere of gray crystal that appears as a ball of solid mist._

Lvl 3 +1 680 gp

**Implement (Orb)**

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d6 damage per plus

**Power (Daily):** [Minor Action](action-type:minor-action). One of your powers that is due to end at the end of this turn instead lasts until the end of your next turn.`,
  },
})

export const OrbOfSanguinaryRepercussionsSection = Content.defineSection('equipment/orb-of-sanguinary-repercussions', {
  parent: OrbsSection,
  content: {
    name: 'Orb of Sanguinary Repercussions',
    description: `**Level 5+**

_A sphere of brilliant crimson._

Lvl 5 +1 1,000 gp

**Implement (Orb)**

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d6 damage per plus, or +1d10 damage per plus against [bloodied](characteristic:bloodied) creatures

**Power (Daily):** [Minor Action](action-type:minor-action). Deal 1d6 + [Intelligence modifier](characteristic:intelligence-modifier) damage to each bloodied creature within 5 squares of you.

Level 15 or 20: 2d6 + Intelligence modifier damage.

Level 25 or 30: 3d6 + Intelligence modifier damage.`,
  },
})

export const RodsSection = Content.defineSection('equipment/rods', {
  parent: MagicItemsSection,
  content: {
    name: 'Rods',
    description: `If you are a member of a class that can use a rod as an implement, you can apply its enhancement bonus to the attack and damage rolls of any of your powers from that class that have the implement keyword, and you can use a rod’s properties and powers. Members of other classes gain no benefit from wielding a rod.

A rod is a short, heavy cylinder, typically covered in mystic runes or inscribed crystals. As with most other implements, you can’t make melee attacks with a rod.

**Rods**

| Lvl | Name | Price (gp) |
| :--- | :--- | :--- |
| 1 | Magic rod +1 | 360 |
| 2 | Rod of dark reward +1 | 520 |
| 3 | Rod of corruption +1 | 680 |
| 5 | Rod of reaving +1 | 1,000 |`,
  },
})

export const MagicRodSection = Content.defineSection('equipment/magic-rod', {
  parent: RodsSection,
  content: {
    name: 'Magic Rod',
    description: `**Level 1+**

_A standard rod, enchanted so as to channel arcane energy._

Lvl 1 +1 360 gp

**Implement (Rod)**

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d6 damage per plus`,
  },
})

export const RodOfCorruptionSection = Content.defineSection('equipment/rod-of-corruption', {
  parent: RodsSection,
  content: {
    name: 'Rod of Corruption',
    description: `**Level 3+**

_This rod magnifies and multiplies your Warlock’s Curse._

Lvl 3 +1 680 gp

**Implement (Rod)**

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d6 damage per plus

**Property:** Whenever your pact boon is triggered, instead of taking its normal benefit you can transfer your [Warlock’s Curse](trait:warlock/warlocks-curse) to each enemy within 5 squares of the original target.`,
  },
})

export const RodOfDarkRewardSection = Content.defineSection('equipment/rod-of-dark-reward', {
  parent: RodsSection,
  content: {
    name: 'Rod of Dark Reward',
    description: `**Level 2+**

_This rod channels your Warlock’s Curse while adding to your defenses._

Lvl 2 +1 520 gp

**Implement (Rod)**

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d6 damage per plus

**Property:** Whenever you place a [Warlock’s Curse](trait:warlock/warlocks-curse) on an enemy, you gain a +1 power bonus to AC until the start of your next turn.`,
  },
})

export const RodOfReavingSection = Content.defineSection('equipment/rod-of-reaving', {
  parent: RodsSection,
  content: {
    name: 'Rod of Reaving',
    description: `**Level 5+**

_This rod enhances the damage dealt to those suffering your Warlock’s Curse._

Lvl 5 +1 1,000 gp

**Implement (Rod)**

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d8 damage per plus

**Property:** When you place your [Warlock’s Curse](trait:warlock/warlocks-curse) on a target, the creature takes damage equal to the rod’s enhancement bonus.`,
  },
})

export const StaffsSection = Content.defineSection('equipment/staffs', {
  parent: MagicItemsSection,
  content: {
    name: 'Staffs',
    description: `A staff is a shaft of wood as tall or slightly taller than you are, sometimes crowned with a decorative crystal or some other arcane fetish. Fashioned either as a quarterstaff or a walking staff, it is also imbued with arcane enchantments so that you can channel your spells through it. Unlike other implements, a staff also functions as a melee weapon (treat it as a quarterstaff). When used in melee, a staff applies its enhancement bonus and critical damage dice just as a weapon does.

However, you must be a member of a class that can use a staff as an implement to apply the enhancement bonus of a staff to the attack rolls and the damage rolls of any of your powers from that class that have the implement keyword and to use a staff’s properties and powers. If your class can’t normally use staffs as implements, or if you’re not using an implement power, a staff is simply a magic quarterstaff.

For example, a cleric could pick up and use a +3 _staff of fiery might_ as a melee weapon: He would add 3 to his melee attack rolls and damage rolls, and if he scored a critical hit with the staff, he would add 3d10 fire damage. However, he couldn’t use the staff’s power in conjunction with a cleric power that had the fire keyword, because cleric powers can’t be cast through staffs.

**Staffs**

| Lvl | Name | Price (gp) |
| :--- | :--- | :--- |
| 1 | Magic staff +1 | 360 |
| 2 | Staff of fiery might +1 | 520 |
| 3 | Staff of the war mage +1 | 680 |
| 4 | Staff of winter +1 | 840 |
| 5 | Staff of storms +1 | 1,000 |`,
  },
})

export const MagicStaffSection = Content.defineSection('equipment/magic-staff', {
  parent: StaffsSection,
  content: {
    name: 'Magic Staff',
    description: `**Level 1+**

_A basic staff, enchanted to channel arcane energy._

Lvl 1 +1 360 gp

**Implement (Staff)**

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d6 damage per plus`,
  },
})

export const StaffOfFieryMightSection = Content.defineSection('equipment/staff-of-fiery-might', {
  parent: StaffsSection,
  content: {
    name: 'Staff of Fiery Might',
    description: `**Level 2+**

_This staff is engraved with fire symbols and is warm to the touch. It makes fire spells more potent._

Lvl 2 +1 520 gp

**Implement (Staff)**

**Enhancement:** Attack rolls and damage rolls

**Critical:** 1d8 fire damage per plus

**Power (Daily):** [Free Action](action-type:free-action). Use this power when using a power that has the fire keyword. After rolling damage, you can reroll a number of damage dice equal to or less than the staff’s enhancement bonus. You must keep the new results, and you can’t reroll any die more than once.`,
  },
})

export const StaffOfStormsSection = Content.defineSection('equipment/staff-of-storms', {
  parent: StaffsSection,
  content: {
    name: 'Staff of Storms',
    description: `**Level 5+**

_This staff, covered in lightning runes, enhances the power of lightning and thunder spells._

Lvl 5 +1 1,000 gp

**Implement (Staff)**

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d6 lightning or thunder damage per plus

**Power (Daily ✦ Lightning, Thunder):** [Free Action](action-type:free-action). Use this power when using a power that has the lightning or the thunder keyword. After resolving the power, deal 1d8 lightning and thunder damage to every creature in a close blast 3.

Level 15 or 20: 2d8 lightning and thunder damage.

Level 25 or 30: 3d8 lightning and thunder damage.`,
  },
})

export const StaffOfTheWarMageSection = Content.defineSection('equipment/staff-of-the-war-mage', {
  parent: StaffsSection,
  content: {
    name: 'Staff of the War Mage',
    description: `**Level 3+**

_This staff, topped with a red crystal, enhances the size of your blast and burst spells._

Lvl 3 +1 680 gp

**Implement (Staff)**

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d8 damage per plus

**Power (Daily):** [Free Action](action-type:free-action). Use this power when using a power that has a blast or a burst effect. Increase the size of the blast or the burst by 1.`,
  },
})

export const StaffOfWinterSection = Content.defineSection('equipment/staff-of-winter', {
  parent: StaffsSection,
  content: {
    name: 'Staff of Winter',
    description: `**Level 4+**

_This staff is engraved with winter symbols and is cold to the touch. It adds to the effect of your cold spells._

Lvl 4 +1 840 gp

**Implement (Staff)**

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d6 cold damage per plus

**Power (Daily):** [Free Action](action-type:free-action). Use this power when using a power that has the cold keyword. After you resolve the power, all enemies within 3 squares of you are immobilized (save ends).`,
  },
})

export const WandsSection = Content.defineSection('equipment/wands', {
  parent: MagicItemsSection,
  content: {
    name: 'Wands',
    description: `A wand is a slender, tapered piece of wood, enchanted to channel arcane energy. If you are a member of a class that can use a wand as an implement, you can apply the enhancement bonus of a wand to the attack rolls and the damage rolls of any of your powers from that class that have the implement keyword, and you can use a wand’s properties and powers. Members of other classes gain no benefit from wielding a wand.

Using a wand’s power works like using the power normally. To do so, you need to be able to use at least one power from the same power source as the wand. For example, a rogue who has picked up at least one wizard power through multiclassing feats could use a wizard power in a wand, since each knows one power that uses the arcane power source. Several wands appear below, but you can also design your own.

A wand can contain an encounter power of any class capable of using wands. When you craft a wand, you can choose any encounter power that you know or that is available to your class. You can’t choose anything other than a class power (you can’t choose a paragon path power, for instance).

| Wand Level | Power Level |
| :--- | :--- |
| 3 | 1 |

**Wands**

| Lvl | Name | Price (gp) |
| :--- | :--- | :--- |
| 1 | Magic wand +1 | 360 |
| 3 | Wand of (power level 1) +1 | 680 |
| 3 | Wand of ray of enfeeblement +1 | 680 |
| 3 | Wand of witchfire +1 | 680 |`,
  },
})

export const MagicWandSection = Content.defineSection('equipment/magic-wand', {
  parent: WandsSection,
  content: {
    name: 'Magic Wand',
    description: `**Level 1+**

_A basic wand, enchanted so as to channel arcane energy._

Lvl 1 +1 360 gp

**Implement (Wand)**

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d6 damage per plus`,
  },
})

export const WandOfRayOfEnfeeblementSection = Content.defineSection('equipment/wand-of-ray-of-enfeeblement', {
  parent: WandsSection,
  content: {
    name: 'Wand of Ray of Enfeeblement',
    description: `**Level 3+**

_This wand carries the wizard spell ray of enfeeblement._

Lvl 3 +1 680 gp

**Implement (Wand)**

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d6 damage per plus

**Power (Daily ✦ Arcane, Implement, Necrotic):** [Standard Action](action-type:standard-action). As the wizard’s _[ray of enfeeblement](ability:wizard/power/ray-of-enfeeblement)_ power.`,
  },
})

export const WandOfWitchfireSection = Content.defineSection('equipment/wand-of-witchfire', {
  parent: WandsSection,
  content: {
    name: 'Wand of Witchfire',
    description: `**Level 3+**

_This wand carries the warlock spell witchfire._

Lvl 3 +1 680 gp

**Implement (Wand)**

**Enhancement:** Attack rolls and damage rolls

**Critical:** +1d6 damage per plus

**Power (Daily ✦ Arcane, Fire, Implement):** [Standard Action](action-type:standard-action). As the warlock’s _[witchfire](ability:warlock/power/witchfire)_ power.`,
  },
})

export const ArmsSlotItemsSection = Content.defineSection('equipment/arms-slot-items', {
  parent: MagicItemsSection,
  content: {
    name: 'Arms Slot Items',
    description: `Shields and bracers contain powers that protect you from harm or that turn an attack against you into an immediate attack against your enemy. A set of qualities that pertains to a magic shield can be applied to either a light shield or a heavy shield.

**Arms Slot Items**

| Lvl | Name | Price (gp) |
| :--- | :--- | :--- |
| 2 | Bracers of mighty striking (heroic tier) | 520 |
| 3 | Bracers of the perfect shot (heroic tier) | 680 |
| 3 | Shield of protection (heroic tier) | 680 |
| 5 | Bashing shield (heroic tier) | 1,000 |`,
  },
})

export const BashingShieldSection = Content.defineSection('equipment/bashing-shield', {
  parent: ArmsSlotItemsSection,
  content: {
    name: 'Bashing Shield',
    description: `**Level 5+**

_This stout shield can be used to force your opponents back._

Lvl 5 1,000 gp

**Item Slot:** Arms

**Power (Daily):** [Free Action](action-type:free-action). Use this power when you hit an enemy with a melee attack. Push the enemy 1d4 squares after applying the attack’s effects.

Level 15: Push 2d4 squares.

Level 25: Push 3d4 squares.`,
  },
})

export const BracersOfMightyStrikingSection = Content.defineSection('equipment/bracers-of-mighty-striking', {
  parent: ArmsSlotItemsSection,
  content: {
    name: 'Bracers of Mighty Striking',
    description: `**Level 2+**

_These enchanted armbands increase the damage you deal with a melee attack._

Lvl 2 520 gp

**Item Slot:** Arms

**Property:** When you hit with a [melee basic attack](ability:common/melee-basic-attack), you gain a +2 item bonus to the damage roll.

Level 12: +4 item bonus.

Level 22: +6 item bonus.`,
  },
})

export const BracersOfThePerfectShotSection = Content.defineSection('equipment/bracers-of-the-perfect-shot', {
  parent: ArmsSlotItemsSection,
  content: {
    name: 'Bracers of the Perfect Shot',
    description: `**Level 3+**

_These enchanted armbands increase the damage you deal with a ranged attack._

Lvl 3 680 gp

**Item Slot:** Arms

**Property:** When you hit with a [ranged basic attack](ability:common/ranged-basic-attack), you gain a +2 item bonus to the damage roll.

Level 13: +4 item bonus.

Level 23: +6 item bonus.`,
  },
})

export const ShieldOfProtectionSection = Content.defineSection('equipment/shield-of-protection', {
  parent: ArmsSlotItemsSection,
  content: {
    name: 'Shield of Protection',
    description: `**Level 3+**

_This enchanted shield can be activated to provide you and an ally with magical protection for a short time._

Lvl 3 680 gp

**Item Slot:** Arms

**Power (Daily):** [Standard Action](action-type:standard-action). You and an adjacent ally gain resist 10 to all damage until the end of your next turn.

Level 13: Resist 15 to all damage.

Level 23: Resist 20 to all damage.`,
  },
})

export const FeetSlotItemsSection = Content.defineSection('equipment/feet-slot-items', {
  parent: MagicItemsSection,
  content: {
    name: 'Feet Slot Items',
    description: `Boots and greaves contain powers that enhance your speed, provide additional movement, or otherwise assist you in movement-related situations.

**Feet Slot Items**

| Lvl | Name | Price (gp) |
| :--- | :--- | :--- |
| 2 | Acrobat boots | 520 |
| 3 | Catstep boots | 680 |
| 4 | Wavestrider boots | 840 |
| 5 | Boots of spider climbing | 1,000 |`,
  },
})

export const AcrobatBootsSection = Content.defineSection('equipment/acrobat-boots', {
  parent: FeetSlotItemsSection,
  content: {
    name: 'Acrobat Boots',
    description: `**Level 2**

_These enchanted boots enhance your acrobatic skills._

**Item Slot:** Feet · 520 gp

**Property:** Gain a +1 item bonus to [Acrobatics](characteristic:skill/acrobatics) checks.

**Power (At-Will):** [Minor Action](action-type:minor-action). Stand up from prone.`,
  },
})

export const BootsOfSpiderClimbingSection = Content.defineSection('equipment/boots-of-spider-climbing', {
  parent: FeetSlotItemsSection,
  content: {
    name: 'Boots of Spider Climbing',
    description: `**Level 5**

_These enchanted boots enhance your ability to climb._

**Item Slot:** Feet · 1,000 gp

**Property:** When you make an [Athletics](characteristic:skill/athletics) check to climb, you can climb at your normal speed instead of one-half your speed.

**Power (Daily):** [Move Action](action-type:move-action). On this move action, you move with a climb speed equal to your speed.`,
  },
})

export const CatstepBootsSection = Content.defineSection('equipment/catstep-boots', {
  parent: FeetSlotItemsSection,
  content: {
    name: 'Catstep Boots',
    description: `**Level 3**

_These enchanted boots reduce falling damage and enhance your acrobatics and athletics skills._

**Item Slot:** Feet · 680 gp

**Property:** When you fall or jump down, you take only half normal falling damage and always land on your feet.

**Power (Daily):** [Free Action](action-type:free-action). Gain a +5 power bonus to your next [Acrobatics](characteristic:skill/acrobatics) check or [Athletics](characteristic:skill/athletics) check.`,
  },
})

export const WavestriderBootsSection = Content.defineSection('equipment/wavestrider-boots', {
  parent: FeetSlotItemsSection,
  content: {
    name: 'Wavestrider Boots',
    description: `**Level 4**

_These enchanted boots allow you to walk across liquid as if it were solid land._

**Item Slot:** Feet · 840 gp

**Property:** If you begin your turn standing on a solid surface, you can move across liquid as if it were normal terrain. If you are still on liquid at the end of your turn, you fall in.

**Power (Daily):** [Minor Action](action-type:minor-action). You can move across liquid surfaces as if they were normal terrain until the end of the encounter.`,
  },
})

export const HandsSlotItemsSection = Content.defineSection('equipment/hands-slot-items', {
  parent: MagicItemsSection,
  content: {
    name: 'Hands Slot Items',
    description: `Gloves and gauntlets contain powers that assist with skill checks, increase attack and damage rolls, and even allow you to reroll in some situations.

**Hands Slot Items**

| Lvl | Name | Price (gp) |
| :--- | :--- | :--- |
| 1 | Burglar’s gloves | 360 |
| 3 | Gloves of piercing | 680 |
| 5 | Gauntlets of ogre power | 1,000 |`,
  },
})

export const BurglarsGlovesSection = Content.defineSection('equipment/burglars-gloves', {
  parent: HandsSlotItemsSection,
  content: {
    name: 'Burglar’s Gloves',
    description: `**Level 1**

_These fingerless black gloves are embroidered with dark red sigils and improve your thievery skills._

**Item Slot:** Hands · 360 gp

**Property:** Gain a +1 item bonus to [Thievery](characteristic:skill/thievery) checks.`,
  },
})

export const GauntletsOfOgrePowerSection = Content.defineSection('equipment/gauntlets-of-ogre-power', {
  parent: HandsSlotItemsSection,
  content: {
    name: 'Gauntlets of Ogre Power',
    description: `**Level 5**

_These oversized armored gloves increase your strength and can be activated to increase your damage._

**Item Slot:** Hands · 1,000 gp

**Property:** Gain a +1 item bonus to [Athletics](characteristic:skill/athletics) checks and [Strength](characteristic:strength) ability checks (but not Strength attacks).

**Power (Daily):** [Free Action](action-type:free-action). Use this power when you hit with a melee attack. Add a +5 power bonus to the damage roll.`,
  },
})

export const GlovesOfPiercingSection = Content.defineSection('equipment/gloves-of-piercing', {
  parent: HandsSlotItemsSection,
  content: {
    name: 'Gloves of Piercing',
    description: `**Level 3**

_These enchanted gloves can be activated to ignore an opponent’s resistances for a short time._

**Item Slot:** Hands · 680 gp

**Power (Daily):** [Minor Action](action-type:minor-action). Until the end of the encounter, your attacks ignore any resistance of 10 or lower.`,
  },
})

export const HeadSlotItemsSection = Content.defineSection('equipment/head-slot-items', {
  parent: MagicItemsSection,
  content: {
    name: 'Head Slot Items',
    description: `These items contain powers that enhance [Intelligence](characteristic:intelligence)-based and [Wisdom](characteristic:wisdom)-based skills, increase damage, and enhance senses.`,
  },
})

export const NeckSlotItemsSection = Content.defineSection('equipment/neck-slot-items', {
  parent: MagicItemsSection,
  content: {
    name: 'Neck Slot Items',
    description: `Amulets and cloaks grant an enhancement bonus to [Fortitude](characteristic:fortitude), [Reflex](characteristic:reflex), and [Will](characteristic:will) defense.

**Neck Slot Items**

| Lvl | Name | Price (gp) |
| :--- | :--- | :--- |
| 1 | Amulet of protection +1 | 360 |
| 2 | Cloak of resistance +1 | 520 |
| 3 | Amulet of health +1 | 680 |
| 3 | Safewing amulet +1 | 680 |`,
  },
})

export const AmuletOfHealthSection = Content.defineSection('equipment/amulet-of-health', {
  parent: NeckSlotItemsSection,
  content: {
    name: 'Amulet of Health',
    description: `**Level 3+**

_This golden amulet increases your defenses and resists poison._

Lvl 3 +1 680 gp

**Item Slot:** Neck

**Enhancement:** Fortitude, Reflex, and Will

**Property:** Gain resist 5 poison.

Level 13 or 18: Resist 10 poison.

Level 23 or 28: Resist 15 poison.`,
  },
})

export const AmuletOfProtectionSection = Content.defineSection('equipment/amulet-of-protection', {
  parent: NeckSlotItemsSection,
  content: {
    name: 'Amulet of Protection',
    description: `**Level 1+**

_This light blue amulet increases your defenses._

Lvl 1 +1 360 gp

**Item Slot:** Neck

**Enhancement:** Fortitude, Reflex, and Will`,
  },
})

export const CloakOfResistanceSection = Content.defineSection('equipment/cloak-of-resistance', {
  parent: NeckSlotItemsSection,
  content: {
    name: 'Cloak of Resistance',
    description: `**Level 2+**

_This crimson-hemmed cloak can be activated to provide minor resistance to all attacks._

Lvl 2 +1 520 gp

**Item Slot:** Neck

**Enhancement:** Fortitude, Reflex, and Will

**Power (Daily):** [Minor Action](action-type:minor-action). Gain resist 5 to all damage until the start of your next turn.

Level 12 or 17: Resist 10 to all damage.

Level 22 or 27: Resist 15 to all damage.`,
  },
})

export const SafewingAmuletSection = Content.defineSection('equipment/safewing-amulet', {
  parent: NeckSlotItemsSection,
  content: {
    name: 'Safewing Amulet',
    description: `**Level 3+**

_This orange amulet reduces the damage you suffer when falling._

Lvl 3 +1 680 gp

**Item Slot:** Neck

**Enhancement:** Fortitude, Reflex, and Will

**Property:** When falling, reduce the distance by 10 feet for every plus (–10 feet for +1, –20 feet for +2, and so on) for the purpose of calculating damage. You always land on your feet after a fall.`,
  },
})

export const RingsSection = Content.defineSection('equipment/rings', {
  parent: MagicItemsSection,
  content: {
    name: 'Rings',
    description: `Magic rings provide properties and powers that aid characters in a variety of ways, from healing and skill use to flying and teleportation. A character can wear and gain the benefit of up to two magic rings (one on each hand). If you are wearing more than two magic rings, none of your magic rings function.`,
  },
})

export const WaistSlotItemsSection = Content.defineSection('equipment/waist-slot-items', {
  parent: MagicItemsSection,
  content: {
    name: 'Waist Slot Items',
    description: `Belts contain powers that improve [Strength](characteristic:strength)-based skills, healing, and resistances.

**Waist Slot Items**

| Lvl | Name | Price (gp) |
| :--- | :--- | :--- |
| 2 | Belt of vigor (heroic tier) | 520 |
| 5 | Ironskin belt (heroic tier) | 1,000 |`,
  },
})

export const BeltOfVigorSection = Content.defineSection('equipment/belt-of-vigor', {
  parent: WaistSlotItemsSection,
  content: {
    name: 'Belt of Vigor',
    description: `**Level 2+**

_This chain metal belt improves your recuperative abilities._

Lvl 2 520 gp

**Item Slot:** Waist

**Property:** You gain a +1 item bonus to your [healing surge value](characteristic:surge-value).

Level 12: +2 item bonus.

Level 22: +3 item bonus.`,
  },
})

export const IronskinBeltSection = Content.defineSection('equipment/ironskin-belt', {
  parent: WaistSlotItemsSection,
  content: {
    name: 'Ironskin Belt',
    description: `**Level 5+**

_The first of these belts of chain links was forged by a dwarf armorsmith enslaved by fire giants. It can be activated to provide protection against weapon attacks._

Lvl 5 1,000 gp

**Item Slot:** Waist

**Power (Daily):** [Minor Action](action-type:minor-action). Gain resist 5 to all weapon damage until the end of your next turn.

Level 15: Resist 10 to all weapon damage.

Level 25: Resist 15 to all weapon damage.`,
  },
})

export const WondrousItemsSection = Content.defineSection('equipment/wondrous-items', {
  parent: MagicItemsSection,
  content: {
    name: 'Wondrous Items',
    description: `This category includes some of the most useful and interesting items in the game. They don’t take up item slots and don’t fall into any other classification.

**Wondrous Items**

| Lvl | Name | Price (gp) |
| :--- | :--- | :--- |
| 4 | Everlasting provisions | 840 |
| 5 | Bag of holding | 1,000 |`,
  },
})

export const BagOfHoldingSection = Content.defineSection('equipment/bag-of-holding', {
  parent: WondrousItemsSection,
  content: {
    name: 'Bag of Holding',
    description: `**Level 5**

_This item appears to be a simple sack of brown canvas._

**Wondrous Item** · 1,000 gp

**Property:** This bag can hold up to 200 pounds in weight or 20 cubic feet in volume, but it always weighs only 1 pound.

Drawing an item from a _bag of holding_ is a minor action.`,
  },
})

export const EverlastingProvisionsSection = Content.defineSection('equipment/everlasting-provisions', {
  parent: WondrousItemsSection,
  content: {
    name: 'Everlasting Provisions',
    description: `**Level 4**

_This plain basket radiates delicious smells._

**Wondrous Item** · 840 gp

**Property:** After an extended rest, you open the basket, creating enough food and water to feed five Medium or Small creatures (or one Large creature) for 24 hours.`,
  },
})

export const PotionsSection = Content.defineSection('equipment/potions', {
  parent: MagicItemsSection,
  content: {
    name: 'Potions',
    description: `A potion is a magic liquid that produces its effects when imbibed. Drinking a potion is usually a minor action. Administering a potion to an unconscious creature is usually a standard action. Drawing a potion out of your pack is a minor action.

Potions that restore health or even life are useful to adventurers in dire emergencies. These consumables are not as effective as the healing powers of a cleric or a warlord, but many adventurers find it useful to carry one or two healing potions with them on their journeys.

**Potions**

| Lvl | Name | Price (gp) |
| :--- | :--- | :--- |
| 5 | Potion of healing | 50 |`,
  },
})

export const PotionOfHealingSection = Content.defineSection('equipment/potion-of-healing', {
  parent: PotionsSection,
  content: {
    name: 'Potion of Healing',
    description: `**Level 5**

_This simple potion draws on the body’s natural healing ability to cure your wounds._

**Potion** · 50 gp

**Power (Consumable ✦ Healing):** [Minor Action](action-type:minor-action). Drink this potion and spend a [healing surge](characteristic:healing-surges). Instead of the hit points you would normally regain, you regain 10 hit points.`,
  },
})

export const EquipmentContent: Array<ContentSection> = [
  EquipmentSection,
  CoinsAndCurrencySection,
  ArmorAndShieldsSection,
  ArmorTypesSection,
  ClothArmorSection,
  LeatherArmorSection,
  HideArmorSection,
  ChainmailSection,
  ScaleArmorSection,
  PlateArmorSection,
  LeatherProficiencySection,
  HideProficiencySection,
  ChainmailProficiencySection,
  ScaleProficiencySection,
  PlateProficiencySection,
  ChoosingArmorSection,
  ShieldTypesSection,
  LightShieldSection,
  HeavyShieldSection,
  LightShieldProficiencySection,
  HeavyShieldProficiencySection,
  ReadingTheArmorTableSection,
  ArmorTableSection,
  WeaponsSection,
  WeaponCategoriesSection,
  WeaponGroupsSection,
  ChoosingWeaponsSection,
  WeaponPropertiesSection,
  StrengthOrDexteritySection,
  MeleeWeaponsSection,
  RangedWeaponsSection,
  ReadingTheWeaponTablesSection,
  WeaponsAndSizeSection,
  SilveredWeaponsSection,
  SellingEquipmentSection,
  AdventuringGearSection,
  FoodDrinkAndLodgingSection,
  MountsAndTransportSection,
  CarryingLiftingAndDraggingSection,
  MagicItemsSection,
  IdentifyingMagicItemsSection,
  PricesSection,
  ResiduumSection,
  MagicItemCategoriesSection,
  ReadingAMagicItemSection,
  NameAndLevelSection,
  DescriptionSection,
  CategoryAndPriceSection,
  EnhancementSection,
  CriticalSection,
  PropertySection,
  PowerSection,
  SpecialSection,
  MagicArmorSection,
  BarkskinArmorSection,
  BattleforgedArmorSection,
  BlackIronArmorSection,
  BloodcutArmorSection,
  BloodthreadArmorSection,
  CurseforgedArmorSection,
  DarkleafArmorSection,
  DeathcutArmorSection,
  DwarvenArmorSection,
  DelversArmorSection,
  EladrinArmorSection,
  ExaltedArmorSection,
  FireburstArmorSection,
  MagicArmorItemSection,
  RazorArmorSection,
  SylvanArmorSection,
  MagicWeaponsSection,
  DuelistsWeaponSection,
  FlameburstWeaponSection,
  FlamingWeaponSection,
  FrostWeaponSection,
  LifedrinkerWeaponSection,
  LightningWeaponSection,
  MagicWeaponSection,
  PactBladeSection,
  ResoundingWeaponSection,
  TerrorWeaponSection,
  ThunderburstWeaponSection,
  ThunderingWeaponSection,
  ViciousWeaponSection,
  HolySymbolsSection,
  MagicHolySymbolSection,
  SymbolOfBattleSection,
  SymbolOfHopeSection,
  SymbolOfLifeSection,
  OrbsSection,
  MagicOrbSection,
  OrbOfInevitableContinuanceSection,
  OrbOfSanguinaryRepercussionsSection,
  RodsSection,
  MagicRodSection,
  RodOfCorruptionSection,
  RodOfDarkRewardSection,
  RodOfReavingSection,
  StaffsSection,
  MagicStaffSection,
  StaffOfFieryMightSection,
  StaffOfStormsSection,
  StaffOfTheWarMageSection,
  StaffOfWinterSection,
  WandsSection,
  MagicWandSection,
  WandOfRayOfEnfeeblementSection,
  WandOfWitchfireSection,
  ArmsSlotItemsSection,
  BashingShieldSection,
  BracersOfMightyStrikingSection,
  BracersOfThePerfectShotSection,
  ShieldOfProtectionSection,
  FeetSlotItemsSection,
  AcrobatBootsSection,
  BootsOfSpiderClimbingSection,
  CatstepBootsSection,
  WavestriderBootsSection,
  HandsSlotItemsSection,
  BurglarsGlovesSection,
  GauntletsOfOgrePowerSection,
  GlovesOfPiercingSection,
  HeadSlotItemsSection,
  NeckSlotItemsSection,
  AmuletOfHealthSection,
  AmuletOfProtectionSection,
  CloakOfResistanceSection,
  SafewingAmuletSection,
  RingsSection,
  WaistSlotItemsSection,
  BeltOfVigorSection,
  IronskinBeltSection,
  WondrousItemsSection,
  BagOfHoldingSection,
  EverlastingProvisionsSection,
  PotionsSection,
  PotionOfHealingSection,
]
