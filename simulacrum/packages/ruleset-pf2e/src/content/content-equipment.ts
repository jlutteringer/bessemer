import { Content } from '@simulacrum/ruleset'
import * as Characteristic from '@simulacrum/ruleset-pf2e/characteristic'
import * as Armor from '@simulacrum/ruleset-pf2e/armor'

export const EquipmentSection = Content.defineSection('equipment', {
  content: {
    name: 'Equipment',
    description:
      "To make your mark on the world, you'll need to have the right equipment, including armor, weapons, and other gear. This chapter presents the various equipment that you can purchase during character creation. You can usually find these items for sale in most cities and other large settlements. Your character starts out with **15 gold pieces (150 silver pieces)** to spend on any common items from this chapter. Items with an uncommon rarity can be purchased only if you have special access from abilities you selected during character creation or your GM gives you permission to purchase them. Quick equipment packages for each class appear on page 268.\n\nOnce you've purchased your starting items, there are three main ways to gain new items and equipment: you can find them during an adventure, make them using the [Crafting](characteristic:skill/crafting) skill, or purchase them from a merchant.\n\n**Quick Equipment Packages**\n\nIf you want to quickly decide how to spend your starting money on what your class needs, start with one of these batches of starting gear. An adventurer’s pack, which is included in each kit, contains a backpack, a bedroll, 10 pieces of chalk, flint and steel, 50 feet of rope, 2 weeks’ rations, soap, 5 torches, and a waterskin. The Options section lists items that aren’t in the base package but that many characters of the class might like to buy.",
  },
})

export const CoinsAndCurrencySection = Content.defineSection('equipment/coins-and-currency', {
  parent: EquipmentSection,
  content: {
    name: 'Coins and Currency',
    description:
      'Though you might be able to barter valuable items in some areas, currency is the most versatile way to make transactions when you head to market. The most common currency is coins. There are four common types of coins, each standardized in weight and value.\n\n- The **copper piece (cp)** is worth one-tenth of a silver piece.\n\n- The **silver piece (sp)** is the standard unit of currency. Each silver piece is a standard weight of silver and is typically accepted by any merchant or kingdom no matter where it was minted.\n\n- The **gold piece (gp)** is often used for purchasing magic items and other expensive items, as 1 gold piece is worth 10 silver pieces or 100 copper pieces.\n\n- The **platinum piece (pp)** is used for the purchase of very expensive items or as a way to easily transport large sums of currency. A platinum piece is worth 10 gold pieces, 100 silver pieces, or 1,000 copper pieces.',
  },
})

export const OtherCurrencySection = Content.defineSection('equipment/other-currency', {
  parent: CoinsAndCurrencySection,
  content: {
    name: 'Other Currency',
    description:
      'Art objects, gems, and raw materials (such as those used for the [Craft](content:skills/craft) activity) can be used much like currency: you can sell them for the same Price you can buy them.',
  },
})

export const PriceSection = Content.defineSection('equipment/price', {
  parent: EquipmentSection,
  content: {
    name: 'Price',
    description:
      'Most items in the following tables have a Price, which is the amount of currency it typically takes to purchase that item. An item with a Price of “—“ can’t be purchased. An item with a Price of 0 is normally free, but its value could be higher based on the materials used to create it. Most items can be sold for half their Price, but coins, gems, art objects, and raw materials (such as components for the [Craft](content:skills/craft) activity) can be exchanged for their full Price.',
  },
})

export const ItemLevelSection = Content.defineSection('equipment/item-level', {
  parent: EquipmentSection,
  content: {
    name: 'Item Level',
    description:
      'Each item has an item level, which represents the item’s complexity and any magic used in its construction. Simpler items with a lower level are easier to construct, and you can’t [Craft](content:skills/craft) items that have a higher level than your own (page 236). If an item’s level isn’t listed, its level is 0. While characters can use items of any level, GMs should keep in mind that allowing characters access to items far above their current level may have a negative impact on the game.',
  },
})

export const CarryingItemsSection = Content.defineSection('equipment/carrying-items', {
  parent: EquipmentSection,
  content: {
    name: 'Carrying Items',
    description:
      'A character carries items in three ways: held, worn, and stowed. **Held items** are in your hands; a character typically has two hands, allowing them to hold an item in each hand or a single two-handed item using both hands. **Worn items** are tucked into pockets, belt pouches, bandoliers, weapon sheaths, and so forth, and they can be retrieved and returned relatively quickly. **Stowed items** are in a backpack or a similar container, and they are more difficult to access.',
  },
})

export const WieldingItemsSection = Content.defineSection('equipment/wielding-items', {
  parent: CarryingItemsSection,
  content: {
    name: 'Wielding Items',
    description:
      'Some abilities require you to wield an item, typically a weapon. You’re wielding an item any time you’re holding it in the number of hands needed to use it effectively. When wielding an item, you’re not just carrying it around—you’re ready to use it. Other abilities might require you to be wearing the item, to be holding it, or simply to have it.',
  },
})

export const DrawingAndStowingItemsSection = Content.defineSection('equipment/drawing-and-stowing-items', {
  parent: CarryingItemsSection,
  content: {
    name: 'Drawing and Stowing Items',
    description:
      "Drawing a worn item or changing how you're carrying an item usually requires you to use an [Interact](content:playing-the-game/interact) action (or sometimes the [Release](content:playing-the-game/release) action). Many ways of using items require you to spend multiple actions. For example, drinking a potion worn at your belt requires using an Interact action to draw it and then using a second action to drink it as described in its Activate entry.\n\nThe number of hands you need to Interact is usually clear, and if it changes during the action the action takes the maximum number of hands needed during it. The GM decides if it's unclear. You can draw, pick up, or hold an item that needs two hands using only one hand, but you need to subsequently change your grip to hold it in two hands if you want to wield or use it.",
  },
})

export const InteractSection = Content.defineSection('equipment/interact', {
  parent: DrawingAndStowingItemsSection,
  content: {
    name: 'Interact',
    description:
      "You can use the [Interact](content:playing-the-game/interact) action to:\n\n- **Draw, put away, or swap** an item. You must be holding the item to put it away or wearing it to draw it. Swapping allows you to put away one item and draw another in the same action (such as putting away a dagger and drawing a mace). Abilities that specify what you do when you Interact only allow this if they say so; the Quick Draw feat lets a rogue Interact to draw a weapon, but doesn't allow them to stow one as well. Swapping lets you swap only one item for another; if you were wielding two weapons, you could put away one of them and draw a different item, but you would need to put away the second weapon separately.\n\n- **Pick up** an item from the ground.\n\n- **Pass off or take** a held item from a willing creature. The creature you're passing to must have a hand free. You can also attempt to throw an item to someone. You typically need to succeed at a DC 15 ranged attack with a 10-foot range increment to do so.\n\n- **Detach a shield** or other item from you using one hand.\n\n- **Change your grip** by adding a hand to an item.\n\n- **Retrieve a stowed item** from a backpack, pouch, or similar container (or put one away). You'll often need to Interact to open or close the backpack or container.",
  },
})

export const ReleaseSection = Content.defineSection('equipment/release', {
  parent: DrawingAndStowingItemsSection,
  content: {
    name: 'Release',
    description:
      'You can use the [Release](content:playing-the-game/release) free action to:\n\n- **Drop** an item to the ground.\n\n- **Change your grip** by removing a hand from an item.',
  },
})

export const BulkSection = Content.defineSection('equipment/bulk', {
  parent: EquipmentSection,
  content: {
    name: 'Bulk',
    description:
      'Carrying especially heavy or unwieldy items can make it more difficult for you to move, as can overloading yourself with too much gear. The Bulk value of an item reflects how difficult the item is to handle, representing its size, weight, and general awkwardness. If you have a high [Strength modifier](characteristic:strength), you usually don’t need to worry about Bulk unless you’re carrying numerous substantial items.',
  },
})

export const BulkLimitsSection = Content.defineSection('equipment/bulk-limits', {
  parent: BulkSection,
  content: {
    name: 'Bulk Limits',
    description:
      'You can carry an amount of Bulk equal to 5 plus your [Strength modifier](characteristic:strength) without penalty; if you carry more, you gain the [encumbered](content:conditions/encumbered) condition. You can’t hold or carry more Bulk than 10 plus your Strength modifier.\n\n**Encumbered**\n\nYou are carrying more weight than you can manage. While you’re encumbered, you’re [clumsy](content:conditions/clumsy) 1 and take a –10-foot penalty to all your Speeds. As with all penalties to your [Speed](characteristic:speed), this can’t reduce your Speed below 5 feet.',
  },
})

export const BulkValuesSection = Content.defineSection('equipment/bulk-values', {
  parent: BulkSection,
  content: {
    name: 'Bulk Values',
    description:
      'Items can have a number to indicate their Bulk value, or they can be light (indicated by an L) or negligible (indicated by a —) for the purpose of determining Bulk. For instance, full plate armor is 4 Bulk, a longsword is 1 Bulk, a dagger or scroll is light, and a piece of chalk is negligible. Ten light items count as 1 Bulk, and you round down fractions (so 9 light items count as 0 Bulk, and 11 light items count as 1 Bulk). Items of negligible Bulk don’t count toward Bulk unless you try to carry vast numbers of them, as determined by the GM.',
  },
})

export const EstimatingAnItemsBulkSection = Content.defineSection('equipment/estimating-an-items-bulk', {
  parent: BulkSection,
  content: {
    name: 'Estimating an Item’s Bulk',
    description:
      'Generally, an item that weighs 5 to 10 pounds is 1 Bulk, an item weighing less than a few ounces is negligible, and anything in between is light. Particularly unwieldy items might have higher Bulk values. For example, a 10-foot pole isn’t heavy, but its length makes it awkward to manage, so its Bulk is 1. Items made for larger or smaller creatures have greater or lesser Bulk, as described on page 270.',
  },
})

export const BulkOfCoinsSection = Content.defineSection('equipment/bulk-of-coins', {
  parent: BulkSection,
  content: {
    name: 'Bulk of Coins',
    description:
      'Coins are a popular means of exchange due to their portability, but they can still add up. A thousand coins of any denomination or combination of denominations count as 1 Bulk. It’s not usually necessary to determine the Bulk of coins in fractions of 1,000; simply round down fractions of 1,000. In other words, 100 coins don’t count as a light item, and 1,999 coins are 1 Bulk, not 2.',
  },
})

export const BulkOfCreaturesSection = Content.defineSection('equipment/bulk-of-creatures', {
  parent: BulkSection,
  content: {
    name: 'Bulk of Creatures',
    description:
      'You might need to know the Bulk of a creature, especially if you need to carry someone. This table lists the typical Bulk of a creature, but the GM might adjust this number.\n\n## Creature Bulk\n\n| **Size of Creature** | **Bulk** |\n|---|---|\n| Tiny | 1 |\n| Small | 3 |\n| Medium | 6 |\n| Large | 12 |\n| Huge | 24 |\n| Gargantuan | 48 |',
  },
})

export const DraggingSection = Content.defineSection('equipment/dragging', {
  parent: BulkSection,
  content: {
    name: 'Dragging',
    description:
      'In some situations, you might drag an object or creature rather than carry it. If you’re dragging something, treat its Bulk as half. Typically, you can drag one thing at a time, you must use both hands to do so, and you drag slowly— roughly 50 feet per minute. Use the total Bulk of what you’re dragging, for instance, if you’re dragging a sack filled with treasure, total the Bulk of everything inside.',
  },
})

export const ItemDamageSection = Content.defineSection('equipment/item-damage', {
  parent: EquipmentSection,
  content: {
    name: 'Item Damage',
    description:
      "An item can be broken or destroyed if it takes enough damage. Every item has a Hardness value. Each time an item takes damage, reduce any damage the item takes by its Hardness. The rest of the damage reduces the item's [Hit Points](characteristic:hit-points). Normally an item takes damage only when a creature is directly attacking it—commonly targeted items include doors and traps. A creature that attacks you doesn't normally damage your armor or other gear, even if it hits you. However, the Shield Block reaction can cause your shield to take damage as you use it to prevent damage to yourself, and some monsters have exceptional abilities that can damage your items.\n\nAn item that takes damage can become **broken** and eventually destroyed. It becomes broken when its Hit Points are equal to or lower than its **Broken Threshold (BT);** once its Hit Points are reduced to 0, it is **destroyed.** A broken item has the broken condition until Repaired above its Broken Threshold. Anything that automatically makes an item broken immediately reduces its Hit Points to its Broken Threshold if the item had more Hit Points than that when the effect occurred. If an item has no Broken Threshold, then it has no relevant changes to its function due to being broken, but it's still destroyed at 0 Hit Points. A destroyed item can't be Repaired.\n\nAn item's Hardness, Hit Points, and Broken Threshold usually depend on the material the item is made of. Information on materials appears in GM Core.\n\n**Broken**\n\nBroken is a condition that affects objects. An object is broken when damage has reduced its Hit Points below its Broken Threshold. A broken object can't be used for its normal function, nor does it grant bonuses—with the exception of armor. Broken armor still grants its item bonus to [AC](characteristic:armor-class), but it also imparts a status penalty to AC depending on its category: –1 for broken light armor, –2 for broken medium armor, or –3 for broken heavy armor.\n\nA broken item still imposes penalties and limitations normally incurred by carrying, holding, or wearing it. For example, broken armor would still impose its [Dexterity modifier](characteristic:dexterity) cap, check penalty, and so forth.\n\nIf an effect makes an item broken automatically and the item has more HP than its Broken Threshold, that effect also reduces the item's current HP to the Broken Threshold.",
  },
})

export const ObjectImmunitiesSection = Content.defineSection('equipment/object-immunities', {
  parent: ItemDamageSection,
  content: {
    name: 'Object Immunities',
    description:
      'Inanimate objects and hazards are immune to bleed, death effects, disease, healing, mental effects, nonlethal attacks, poison, spirit, vitality, void, as well as the [doomed](content:conditions/doomed), [drained](content:conditions/drained), [fatigued](content:conditions/fatigued), [paralyzed](content:conditions/paralyzed), [sickened](content:conditions/sickened), and [unconscious](content:conditions/unconscious) conditions. Conscious, thinking items are not immune to mental effects. Many objects are immune to other conditions, at the GM’s discretion. For instance, a sword can’t move, so it can’t take a penalty to its [Speed](characteristic:speed), but a spinning blade trap might be affected.',
  },
})

export const ShoddyItemsSection = Content.defineSection('equipment/shoddy-items', {
  parent: EquipmentSection,
  content: {
    name: 'Shoddy Items',
    description:
      "Improvised or of dubious make, shoddy items are never available for purchase except for in the most desperate of communities. When available, a shoddy item usually costs half the Price of a standard item, though you can never sell one.\n\nAttacks and checks involving a shoddy item take a –2 item penalty. This penalty also applies to any DCs that a shoddy item applies to (such as the [AC](characteristic:armor-class) provided when wearing shoddy armor, or the DC to break out of shoddy manacles). A shoddy suit of armor also worsens the armor's check penalty by 2. A shoddy item's [Hit Points](characteristic:hit-points) and Broken Threshold are each half that of a normal item of its type.",
  },
})

export const ItemsAndSizesSection = Content.defineSection('equipment/items-and-sizes', {
  parent: EquipmentSection,
  content: {
    name: 'Items and Sizes',
    description:
      "The Bulk rules in this chapter are for Small and Medium creatures, as most ancestries are these sizes; however, other uncommon or rare ancestries might be larger or smaller and require items specially made for creatures of those sizes. Large creatures can carry more, and smaller creatures can carry less, as noted on the Bulk Conversions table.\n\nThese rules for Bulk limits come up most often when a group tries to load up a mount or animal companion. The rules for items of different sizes tend to come into play when the characters defeat a big creature that has gear, since usually the only creatures of other sizes are creatures under the GM's control.\n\nIn most cases, Small or Medium creatures can wield a Large weapon, though it's unwieldy, giving them the [clumsy](content:conditions/clumsy) 1 condition, and the larger size is canceled by the difficulty of swinging the weapon, so it grants no special benefit. Large armor is simply too large for Small and Medium creatures.",
  },
})

export const BulkConversionsForDifferentSizesSection = Content.defineSection('equipment/bulk-conversions-for-different-sizes', {
  parent: ItemsAndSizesSection,
  content: {
    name: 'Bulk Conversions for Different Sizes',
    description:
      'As shown in the Bulk Conversions table, Large or larger creatures are less [encumbered](content:conditions/encumbered) by bulky items than Small or Medium creatures, while Tiny creatures become overburdened more quickly. A Large creature treats 10 items of 1 Bulk as 1 Bulk, a Huge creature treats 10 items of 2 Bulk as 1 Bulk, and so on. A Tiny creature treats 10 items of negligible Bulk as 1 Bulk. Negligible items work in a similar way—a Huge creature treats items of 1 Bulk as negligible, so it can carry any number of items of 1 Bulk. A Tiny creature doesn’t treat any items as having negligible Bulk.\n\n## Table 6-19: Bulk Conversions\n\n| **Creature Size** | **Bulk Limit** | **Treats as Light** | **Treats as Negligible** |\n|---|---|---|---|\n| Tiny | Half | \\- | none |\n| Small or Med. | Standard | L | \\- |\n| Large | x2 | 1 Bulk | L |\n| Huge | x4 | 2 Bulk | 1 Bulk |\n| Gargantuan | x8 | 4 Bulk | 2 Bulk |',
  },
})

export const ItemsOfDifferentSizesSection = Content.defineSection('equipment/items-of-different-sizes', {
  parent: ItemsAndSizesSection,
  content: {
    name: 'Items of Different Sizes',
    description:
      "Creatures of sizes other than Small or Medium need items appropriate to their size. These items have different Bulk and possibly a different Price. The Differently Sized Items table provides the Price and Bulk conversion for such items.\n\nFor example, a morningstar sized for a Medium creature has a Price of 1 gp and 1 Bulk, so one made for a Huge creature is 4 gp and 4 Bulk. One made for a Tiny creature still costs 1 gp (due to its intricacy) and has 1/2 Bulk (rounding down to light Bulk). Because the way that a creature treats Bulk and the Bulk of gear sized for it scale the same way, Tiny or Large (or larger) creatures can usually wear and carry about the same amount of gear as a Medium creature.\n\nHigher-level magic items that cost significantly more than 8 times the cost of a mundane item use their listed Price regardless of size. Precious materials, however, have a Price based on the Bulk of the item, so multiply the Bulk value as described on the Differently Sized Items table, then use the formula in the material's entry to determine the item's Price. See more information on materials here.\n\n## Table 6-20: Differently Sized Objects\n\n| **Creature Size** | **Price** | **Bulk** | **Light Becomes** | **Negligible Becomes** |\n|---|---|---|---|---|\n| Tiny | Standard | Half* | — | — |\n| Small or Med. | Standard | Standard | L | — |\n| Large | x2 | x2 | 1 Bulk | L |\n| Huge | x4 | x4 | 2 Bulk | 1 Bulk |\n| Gargantuan | x8 | x8 | 4 Bulk | 2 Bulk |\n\n* An item that would have its Bulk reduced below 1 has light Bulk.",
  },
})

export const ArmorSection = Content.defineSection('equipment/armor', {
  parent: EquipmentSection,
  content: {
    name: 'Armor',
    description:
      'Armor increases your character’s defenses, but some medium or heavy armor can hamper movement. If you want to increase your character’s defense beyond the protection your armor provides, they can use a shield. Armor protects your character only while they’re wearing it.',
  },
})

export const ArmorClassSection = Content.defineSection('equipment/armor-class', {
  parent: ArmorSection,
  content: {
    name: 'Armor Class',
    description:
      "Your [Armor Class](characteristic:armor-class) (AC) measures how well you can defend against attacks. When a creature attacks you, your Armor Class is the DC for that attack roll.\n\n**Armor Class = 10 + Dexterity modifier (up to your armor's Dex Cap) + proficiency bonus + armor's item bonus to AC + other bonuses + penalties** Use your proficiency bonus for the category (light, medium, or heavy) or for the specific type of armor you're wearing. If you're not wearing armor, use your proficiency in unarmored defense.",
  },
})

export const DonningAndRemovingArmorSection = Content.defineSection('equipment/donning-and-removing-armor', {
  parent: ArmorSection,
  content: {
    name: 'Donning and Removing Armor',
    description:
      'Getting in and out of armor is time consuming—so make sure you’re wearing it when you need it! Donning and removing armor are both activities involving many [Interact](content:playing-the-game/interact) actions. It takes 1 minute to don light armor, 5 minutes to don medium or heavy armor, and 1 minute to remove any armor.',
  },
})

export const ArmorStatisticsSection = Content.defineSection('equipment/armor-statistics', {
  parent: ArmorSection,
  content: {
    name: 'Armor Statistics',
    description:
      "The Unarmored Defense table (page 273) provides the statistics for the various forms of protection without wearing armor. The Armor table (page 273) provides the statistics for suits of armor that can be purchased and worn, organized by category. The columns in both tables provide the following statistics.\n\n**Damaging Armor**\n\nYour armor’s statistics are based on the material it’s predominantly made from. It’s not likely your armor will take damage, as explained in Item Damage on page 269.\n\n## Damaging Armor\n\n| **Material** | **Hardness** | **HP** | **BT** | **Armors** |\n|---|---|---|---|---|\n| Cloth | 1 | 4 | 2 | Explorer’s clothing, padded armor |\n| Leather | 4 | 16 | 8 | Hide, leather, studded leather |\n| Metal | 9 | 36 | 18 | Breastplate, chain mail, chain shirt, full plate, half plate, scale mail, splint mail |\n| |\n\n**Materials**\n\nMost suits of armor and weapons are made from ordinary, commonly available materials like iron, leather, steel, and wood. If you're not sure what a suit of armor is made of, the GM determines the details.\n\nSome armor, shields, and weapons are instead made of precious materials. These often have inherent supernatural properties. Cold iron, for example, harms fey, and silver can damage werecreatures. These materials are detailed in GM Core beginning on page 252.",
  },
})

export const CategorySection = Content.defineSection('equipment/category', {
  parent: ArmorStatisticsSection,
  content: {
    name: 'Category',
    description:
      'The armor’s category—unarmored, light armor, medium armor, or heavy armor—indicates which proficiency bonus you use while wearing the armor.',
  },
})

export const UnarmoredDefenseSection = Content.linkEntity(CategorySection, Characteristic.UnarmoredDefense)

export const LightArmorSection = Content.linkEntity(CategorySection, Characteristic.LightArmor)

export const MediumArmorSection = Content.linkEntity(CategorySection, Characteristic.MediumArmor)

export const HeavyArmorSection = Content.linkEntity(CategorySection, Characteristic.HeavyArmor)

export const ACBonusSection = Content.defineSection('equipment/ac-bonus', {
  parent: ArmorStatisticsSection,
  content: {
    name: 'AC Bonus',
    description: 'This number is the item bonus you add for the armor when determining [Armor Class](characteristic:armor-class).',
  },
})

export const DexterityModifierCapDexCapSection = Content.defineSection('equipment/dexterity-modifier-cap-dex-cap', {
  parent: ArmorStatisticsSection,
  content: {
    name: 'Dexterity Modifier Cap (Dex Cap)',
    description:
      'This number is the maximum amount of your [Dexterity modifier](characteristic:dexterity) that can apply to your [AC](characteristic:armor-class) while you are wearing a given suit of armor. For example, if you have a Dexterity modifier of +4 and you are wearing a suit of half plate, you apply only a +1 bonus from your Dexterity modifier to your AC while wearing that armor.',
  },
})

export const CheckPenaltySection = Content.defineSection('equipment/check-penalty', {
  parent: ArmorStatisticsSection,
  content: {
    name: 'Check Penalty',
    description:
      'While wearing your armor, you take this penalty to Strength- and Dexterity-based skill checks, except for those that have the attack trait. If you meet the armor’s Strength threshold (see Strength below), you don’t take this penalty.',
  },
})

export const SpeedPenaltySection = Content.defineSection('equipment/speed-penalty', {
  parent: ArmorStatisticsSection,
  content: {
    name: 'Speed Penalty',
    description:
      'While wearing a suit of armor, you take the penalty listed in this entry to your [Speed](characteristic:speed), as well as to any other movement types you have, such as a climb Speed or swim Speed, to a minimum Speed of 5 feet. If you meet the armor’s Strength threshold (see below), you reduce the penalty by 5 feet.',
  },
})

export const StrengthSection = Content.defineSection('equipment/strength', {
  parent: ArmorStatisticsSection,
  content: {
    name: 'Strength',
    description:
      'This entry indicates the [Strength modifier](characteristic:strength) at which you are strong enough to overcome some of the armor’s penalties. If your Strength modifier is equal to or greater than this value, you no longer take the armor’s check penalty, and you decrease the [Speed](characteristic:speed) penalty by 5 feet (to no penalty if the penalty was –5 feet, or to a –5-foot penalty if the penalty was –10 feet).',
  },
})

export const ArmorStatisticsBulkSection = Content.defineSection('equipment/armor-statistics/bulk', {
  parent: ArmorStatisticsSection,
  content: {
    name: 'Bulk',
    description:
      'This entry gives the armor’s Bulk, assuming you’re wearing the armor and distributing its weight across your body. A suit of armor that’s carried usually has 1 more Bulk than what’s listed here (or 1 Bulk total for armor of light Bulk). An armor’s Bulk is increased or decreased if it’s sized for creatures that aren’t Small or Medium in size, following the rules on page 270.',
  },
})

export const GroupSection = Content.defineSection('equipment/group', {
  parent: ArmorStatisticsSection,
  content: {
    name: 'Group',
    description:
      'Each type of clothing and armor belongs to an armor group, which classifies it with similar types of armor. Some abilities reference armor groups, typically to grant armor specialization effects, which are described on page 272.',
  },
})

export const ArmorTraitsSection = Content.defineSection('equipment/armor-traits', {
  parent: ArmorStatisticsSection,
  content: { name: 'Armor Traits', description: 'The traits for each suit of armor presented in this book appear in this entry.' },
})

export const ArmorSpecializationEffectsSection = Content.defineSection('equipment/armor-specialization-effects', {
  parent: ArmorSection,
  content: {
    name: 'Armor Specialization Effects',
    description:
      'Certain class features can grant you additional benefits with certain armors. This is called an armor specialization effect. The exact effect depends on which armor group your armor belongs to, as listed here.',
  },
})

export const ExplorersClothingSection = Content.linkEntity(ArmorSection, Armor.ExplorersClothing)

export const PaddedArmorSection = Content.linkEntity(ArmorSection, Armor.PaddedArmor)

export const LeatherArmorSection = Content.linkEntity(ArmorSection, Armor.LeatherArmor)

export const StuddedLeatherArmorSection = Content.linkEntity(ArmorSection, Armor.StuddedLeatherArmor)

export const ChainShirtSection = Content.linkEntity(ArmorSection, Armor.ChainShirt)

export const HideArmorSection = Content.linkEntity(ArmorSection, Armor.HideArmor)

export const ScaleMailSection = Content.linkEntity(ArmorSection, Armor.ScaleMail)

export const ChainMailSection = Content.linkEntity(ArmorSection, Armor.ChainMail)

export const BreastplateSection = Content.linkEntity(ArmorSection, Armor.Breastplate)

export const SplintMailSection = Content.linkEntity(ArmorSection, Armor.SplintMail)

export const HalfPlateSection = Content.linkEntity(ArmorSection, Armor.HalfPlate)

export const FullPlateSection = Content.linkEntity(ArmorSection, Armor.FullPlate)

export const ShieldsSection = Content.defineSection('equipment/shields', {
  parent: EquipmentSection,
  content: {
    name: 'Shields',
    description:
      "A shield can increase your character's defense beyond the protection their armor provides. Your character must be wielding a shield in one hand to make use of it, and it grants its bonus to [AC](characteristic:armor-class) only if they use an action to Raise a Shield. This action grants the shield's bonus to AC as a circumstance bonus until their next turn starts. A shield's [Speed](characteristic:speed) penalty applies whenever your character is holding the shield, whether they have raised it or not.\n\n[Raise a Shield](content:playing-the-game/raise-a-shield) is the action most commonly used with shields. All shields, unless specifically noted or described otherwise, must be strapped to your arm and held in one hand, so you can't hold anything with that hand and Raise a Shield, and you lose the shield's benefits if that hand is no longer free. A buckler, however, doesn't take up your hand, so you can Raise a Shield with a buckler if the hand is free (or, at the GM's discretion, if it's holding a simple, lightweight object that's not a weapon).\n\nWhen you have a tower shield raised, you can use the [Take Cover](content:playing-the-game/take-cover) action to increase the circumstance bonus to AC to +4. This lasts until the shield is no longer raised, or until any of the normal conditions that end Take Cover, whichever comes first. If you would provide lesser cover against an attack, having your tower shield raised provides standard cover against it (and other creatures can Take Cover as normal using the cover from your shield).\n\nIf you have access to the Shield Block reaction (from your class or from a feat), you can use it while Raising your Shield to reduce the damage you take by an amount equal to the shield's Hardness. Both you and the shield then take any remaining damage.",
  },
})

export const ShieldStatisticsSection = Content.defineSection('equipment/shield-statistics', {
  parent: ShieldsSection,
  content: {
    name: 'Shield Statistics',
    description:
      'Shields have statistics that follow the same rules as armor: Price, [Speed](characteristic:speed) Penalty, and Bulk. See [armor](content:equipment/armor) for the rules for those statistics. Their other statistics are described here.',
  },
})

export const ShieldStatisticsACBonusSection = Content.defineSection('equipment/shield-statistics/ac-bonus', {
  parent: ShieldStatisticsSection,
  content: {
    name: 'AC Bonus',
    description:
      'A shield grants a circumstance bonus to [AC](characteristic:armor-class), but only when the shield is raised. This requires using the [Raise a Shield](content:playing-the-game/raise-a-shield) action.',
  },
})

export const HardnessSection = Content.defineSection('equipment/hardness', {
  parent: ShieldStatisticsSection,
  content: {
    name: 'Hardness',
    description:
      'Whenever a shield takes damage, the amount of damage it takes is reduced by this amount. This number is particularly relevant for shields because of the [Shield Block](trait:feat/shield-block) feat . The rules for Hardness appear [here](content:equipment/item-damage).',
  },
})

export const HPBTSection = Content.defineSection('equipment/hp-bt', {
  parent: ShieldStatisticsSection,
  content: {
    name: 'HP (BT)',
    description:
      'This column lists the shield’s [Hit Points](characteristic:hit-points) (HP) and Broken Threshold (BT). These measure how much damage the shield can take before it’s destroyed (its total HP) and how much it can take before being broken and unusable (its BT). These matter primarily for the Shield Block reaction.',
  },
})

export const AttackingWithAShieldSection = Content.defineSection('equipment/attacking-with-a-shield', {
  parent: ShieldsSection,
  content: {
    name: 'Attacking with a Shield',
    description:
      "A shield can be used as a martial weapon for attacks, using the statistics listed for a shield bash on the Martial Melee Weapons table. The shield bash is an option only for shields that weren't designed to be used as weapons. A shield can't have runes added to it. You can also buy and attach a shield boss or shield spikes to a shield to make it a more practical weapon. These can also be found on the Martial Melee Weapons table. These work like other weapons and can even be etched with runes.",
  },
})

export const BucklerSection = Content.linkEntity(ShieldsSection, Armor.Buckler)

export const WoodenShieldSection = Content.linkEntity(ShieldsSection, Armor.WoodenShield)

export const SteelShieldSection = Content.linkEntity(ShieldsSection, Armor.SteelShield)

export const TowerShieldSection = Content.linkEntity(ShieldsSection, Armor.TowerShield)

export const WeaponsSection = Content.defineSection('equipment/weapons', {
  parent: EquipmentSection,
  content: {
    name: 'Weapons',
    description:
      'Most characters in Pathfinder carry weapons, ranging from mighty warhammers to graceful bows to even simple clubs. Full details on how you calculate the bonuses, modifiers, and penalties for attack rolls and damage rolls are given on pages 400–403 and 406–407, but they’re summarized here, followed by the rules for weapons and dozens of weapon choices.',
  },
})

export const AttackRollsSection = Content.defineSection('equipment/attack-rolls', {
  parent: WeaponsSection,
  content: {
    name: 'Attack Rolls',
    description:
      "When making an attack roll, determine the result by rolling 1d20 and adding your attack modifier for the weapon or unarmed attack you're using. Modifiers for melee and ranged attacks are calculated differently—see page 402 for full details.\n\n**Melee attack roll result = d20 roll + Strength modifier (or optionally Dexterity modifier for a finesse weapon) + proficiency bonus + other bonuses + penalties**\n\n**Ranged attack roll result = d20 roll + Dexterity modifier + proficiency bonus + other bonuses + penalties**",
  },
})

export const MultipleAttackPenaltySection = Content.defineSection('equipment/multiple-attack-penalty', {
  parent: AttackRollsSection,
  content: {
    name: 'Multiple Attack Penalty',
    description:
      "If you use an action with the attack trait more than once on the same turn, your attacks after the first take a penalty called a multiple attack penalty. Your second attack takes a –5 penalty, and any subsequent attacks take a –10 penalty.\n\nThe multiple attack penalty doesn't apply to attacks you make when it isn't your turn (such as attacks made as part of a reaction, like Reactive [Strike](content:playing-the-game/strike)). You can use a weapon with the [agile](content:traits/agile) trait (page 282) to reduce your multiple attack penalty.",
  },
})

export const DamageRollsSection = Content.defineSection('equipment/damage-rolls', {
  parent: WeaponsSection,
  content: {
    name: 'Damage Rolls',
    description:
      "When the result of your attack roll with a weapon or unarmed attack equals or exceeds your target's [AC](characteristic:armor-class), you hit your target! Roll the weapon or unarmed attack's damage die and add the relevant modifiers, bonuses, and penalties to determine the amount of damage you deal. Calculate a damage roll as follows (full details are on page 406).\n\n**Melee damage roll = damage die of weapon or unarmed attack + Strength modifier + bonuses + penalties**\n\n**Ranged damage roll = damage die of weapon (+ Strength modifier for a thrown weapon or half Strength modifier for a propulsive weapon) + bonuses + penalties** Ranged weapons don't normally add an attribute modifier to the damage roll, though weapons with the [propulsive](content:traits/propulsive) trait (page 282) add half your [Strength modifier](characteristic:strength) (or your full modifier if it is a negative number), and thrown weapons add your full Strength modifier.\n\nMagic weapons with striking, greater striking, or major striking runes add one or more weapon damage dice to your damage roll. These extra dice are the same die size as the weapon's damage die. At higher levels, most characters also gain extra damage from weapon specialization.",
  },
})

export const CriticalHitsSection = Content.defineSection('equipment/critical-hits', {
  parent: WeaponsSection,
  content: {
    name: 'Critical Hits',
    description:
      'When you make a [Strike](content:playing-the-game/strike) with a weapon or unarmed attack and succeed with a natural 20 (the number on the die is 20), or if the result of your attack exceeds the target’s [AC](characteristic:armor-class) by 10, you achieve a critical success (also known as a critical hit). If you critically succeed at a Strike (page 418), your attack deals double damage.',
  },
})

export const UnarmedAttacksSection = Content.defineSection('equipment/unarmed-attacks', {
  parent: WeaponsSection,
  content: {
    name: 'Unarmed Attacks',
    description:
      "Almost all characters start out trained in unarmed attacks. You can [Strike](content:playing-the-game/strike) with your fist or another body part, calculating your attack and damage rolls in the same way you would with a weapon. Unarmed attacks can belong to a weapon group (page 276), and they might have weapon traits (page 276). However, unarmed attacks aren't weapons, and effects and abilities that work with weapons never work with unarmed attacks unless they specifically say so.\n\nThe Unarmed Attacks table (page 277) lists the statistics for an unarmed attack with a fist, though you'll usually use the same statistics for attacks made with any other parts of your body. Certain ancestry feats, class features, and spells give access to special, more powerful unarmed attacks. For instance, goblins with the razortooth heritage can attack with their sharp jaws. While most unarmed attacks are melee, some, especially those from certain ancestries, might even be ranged, like the leshy's ability to launch hard seedpods. Details for those unarmed attacks are provided in the abilities that grant them.",
  },
})

export const ImprovisedWeaponsSection = Content.defineSection('equipment/improvised-weapons', {
  parent: WeaponsSection,
  content: {
    name: 'Improvised Weapons',
    description:
      'If you attack with something that wasn’t built to be a weapon, such as a chair or a vase, you’re making an attack with an improvised weapon. Improvised weapons are simple weapons. You take a –2 item penalty to attack rolls with an improvised weapon. The GM determines the amount and type of damage the attack deals, if any, as well as any weapon traits that the improvised weapon should have.',
  },
})

export const WeaponStatisticsSection = Content.defineSection('equipment/weapon-statistics', {
  parent: WeaponsSection,
  content: {
    name: 'Weapon Statistics',
    description:
      'The tables on pages 277–281 list the statistics for various melee and ranged weapons that you can purchase, as well as the statistics for striking with a fist (or another basic unarmed attack). The tables present the following statistics. All weapons listed in this chapter have an item level of 0.',
  },
})

export const DamageSection = Content.defineSection('equipment/damage', {
  parent: WeaponStatisticsSection,
  content: {
    name: 'Damage',
    description:
      "This entry lists the weapon’s damage die and the type of damage it deals: B for bludgeoning, P for piercing, or S for slashing.\n\n**Damage Dice**\n\nEach weapon lists the damage die used for its damage roll. A standard weapon deals one die of damage, but a magical striking rune can increase the number of dice rolled, as can some special actions and spells. These additional dice use the same die size as the weapon or unarmed attack's normal damage die.\n\n**Counting Damage Dice**\n\nEffects based on a weapon's number of damage dice include only the weapon's damage die plus any extra dice from a striking rune. They don't count extra dice from abilities, critical specialization effects, property runes, weapon traits, or the like.\n\n**Increasing Die Size**\n\nWhen an effect calls on you to increase the size of your weapon damage dice, instead of using its normal weapon damage dice, use the next larger die, as listed below (so if you were using a d4, you'd use a d6, and so on). If you are already using a d12, the size is already at its maximum. You can't increase your weapon damage die size more than once.\n\n**1d4 » 1d6 » 1d8 » 1d10 » 1d12**",
  },
})

export const RangeSection = Content.defineSection('equipment/range', {
  parent: DamageSection,
  content: {
    name: 'Range',
    description:
      "Ranged and thrown weapons have a range increment. Attacks with these weapons work normally up to that distance. Attack rolls beyond a weapon's range increment take a –2 penalty for each additional multiple of that increment between you and the target. Attacks beyond the sixth range increment are impossible.\n\nFor example, a shortbow takes no penalty against a target up to 60 feet away, a –2 penalty against a target beyond 60 feet but up to 120 feet away, and a –4 penalty against a target beyond 120 feet but up to 180 feet away, and so on, up to 360 feet.",
  },
})

export const ReloadSection = Content.defineSection('equipment/reload', {
  parent: DamageSection,
  content: {
    name: 'Reload',
    description:
      'While all weapons need some amount of time to get into position, many ranged weapons also need to be loaded and reloaded. This entry indicates how many [Interact](content:playing-the-game/interact) actions it takes to reload such weapons or draw certain thrown weapons, like shuriken. This can be 0 if drawing ammunition and firing or throwing the weapon are part of the same action. If an item takes 2 or more actions to reload, the GM determines whether they must be performed together as an activity, or you can spend some of those actions during one turn and the rest during your next turn.\n\nAn item with an entry of “—” must be drawn to be thrown, which usually takes an Interact action just like drawing any other weapon. Reloading a ranged weapon and drawing a thrown weapon both require a free hand. Switching your grip to free a hand and then to place your hands in the grip necessary to wield the weapon are both included in the actions you spend to reload a weapon.',
  },
})

export const DamageBulkSection = Content.defineSection('equipment/damage/bulk', {
  parent: DamageSection,
  content: {
    name: 'Bulk',
    description:
      'This entry gives the weapon’s Bulk. A weapon’s Bulk is increased or decreased if it’s sized for creatures that aren’t Small or Medium size, following the rules on page 270.',
  },
})

export const HandsSection = Content.defineSection('equipment/hands', {
  parent: DamageSection,
  content: {
    name: 'Hands',
    description:
      "Some weapons require one hand to wield, and others require two. A few items, such as a longbow, list 1+ for its Hands entry. You can hold a weapon with a 1+ entry in one hand, but the process of shooting it requires using a second to retrieve, nock, and loose an arrow. This means you can do things with your free hand while holding the bow without changing your grip, but the other hand must be free when you shoot. To properly wield a 1+ weapon, you must hold it in one hand and also have a hand free.\n\nWeapons requiring two hands typically deal more damage. Some one-handed weapons have the two-hand trait, causing them to deal a different size of weapon damage die when used in two hands. In addition, some abilities require you to wield a weapon in two hands. You meet this requirement while holding the weapon in two hands, even if it doesn't require two hands or have the two-hand trait.\n\nIf an action or other ability requires you to use a “two-handed weapon,” it applies for any weapon you wield in two hands. Any permanent adjustments to the weapon, such as a rune that can be added to a “one-handed weapon,” uses the Hands entry in the weapon table exactly (1+ counts as one-handed for this purpose).",
  },
})

export const DamageGroupSection = Content.defineSection('equipment/damage/group', {
  parent: DamageSection,
  content: {
    name: 'Group',
    description:
      'A weapon or unarmed attack’s group classifies it with similar weapons. Groups affect some abilities and what the weapon does on a critical hit if you have the critical specialization benefits for that weapon or unarmed attack; for full details, see page 283.',
  },
})

export const WeaponTraitsSection = Content.defineSection('equipment/weapon-traits', {
  parent: DamageSection,
  content: {
    name: 'Weapon Traits',
    description:
      'The traits a weapon or unarmed attack has are listed in this entry. Any trait that refers to a “weapon” can also apply to an unarmed attack that has that trait. Traits are described on page 282.',
  },
})

export const AmmunitionSection = Content.defineSection('equipment/ammunition', {
  parent: DamageSection,
  content: {
    name: 'Ammunition',
    description:
      'Some entries in the ranged weapons tables are followed by an entry for the type of ammunition that weapon launches. The damage die is determined by the weapon, not the ammunition. Because that and other relevant statistics vary by weapon, ammunition entries list only the name, quantity, Price, and Bulk. Using ammunition destroys it.',
  },
})

export const WeaponsWeaponTraitsSection = Content.defineSection('equipment/weapons/weapon-traits', {
  parent: WeaponsSection,
  content: {
    name: 'Weapon Traits',
    description:
      'Weapons and unarmed attacks can have these traits. Weapons crafted and used by a given ancestry (such as the elven curve blade) often have the trait for that ancestry.',
  },
})

export const CriticalSpecializationSection = Content.defineSection('equipment/critical-specialization', {
  parent: WeaponsSection,
  content: {
    name: 'Critical Specialization',
    description:
      'Certain effects can grant you benefits when you make a [Strike](content:playing-the-game/strike) with certain weapons and get a critical success. This is called a critical specialization effect. The exact effect depends on which weapon group your weapon belongs to, as listed below. You can always decide not to add the critical specialization effect of your weapon.',
  },
})

export const WeaponsUnarmedAttacksSection = Content.linkEntity(WeaponsSection, Characteristic.UnarmedAttacks)

export const SimpleWeaponsSection = Content.linkEntity(WeaponsSection, Characteristic.SimpleWeapons)

export const MartialWeaponsSection = Content.linkEntity(WeaponsSection, Characteristic.MartialWeapons)

export const AdvancedWeaponsSection = Content.linkEntity(WeaponsSection, Characteristic.AdvancedWeapons)

export const GearSection = Content.defineSection('equipment/gear', {
  parent: EquipmentSection,
  content: {
    name: 'Gear',
    description:
      'Your character needs all sorts of items both while exploring and in downtime, ranging from rations to climbing gear to fancy clothing, depending on the situation.',
  },
})

export const GearStatisticsSection = Content.defineSection('equipment/gear-statistics', {
  parent: GearSection,
  content: {
    name: 'Gear Statistics',
    description:
      'The table on page 291 lists Price and Bulk entries for a wide variety of gear. Any item with a number after it in parentheses indicates that the item’s Price is for the indicated quantity, though the Bulk entry for such an item is the value for only one such item. All items in this chapter are level 0 unless the item name is followed by a higher item level in parentheses.',
  },
})

export const GearStatisticsHandsSection = Content.defineSection('equipment/gear-statistics/hands', {
  parent: GearStatisticsSection,
  content: {
    name: 'Hands',
    description:
      'This lists how many hands it takes to use the item effectively. Most items that require two hands can be carried in only one hand, but you must spend an [Interact](content:playing-the-game/interact) action to change your grip in order to use the item. The GM may determine that an item is too big to carry in one hand (or even two hands, for particularly large items).',
  },
})

export const WearingToolkitsSection = Content.defineSection('equipment/wearing-toolkits', {
  parent: GearStatisticsSection,
  content: {
    name: 'Wearing Toolkits',
    description:
      "You can make a toolkit (such as an alchemist's toolkit or healer's toolkit) easier to use by wearing it. This easy access allows you to draw and replace the tools within as part of the action that uses them, rather than needing to [Interact](content:playing-the-game/interact) to draw them. You can wear up to 2 Bulk of toolkits in this manner; any beyond this limit must be stowed or drawn with an Interact action to use.\n\nYou can use a toolkit with 1 hand if you're wearing it or 2 if you're holding it.",
  },
})

export const AdventuringGearSection = Content.defineSection('equipment/adventuring-gear', {
  parent: GearSection,
  content: { name: 'Adventuring Gear', description: 'These items follow special rules or require more detail.' },
})

export const AlchemicalGearSection = Content.defineSection('equipment/alchemical-gear', {
  parent: GearSection,
  content: {
    name: 'Alchemical Gear',
    description:
      'The items listed on the Alchemical Gear table are the most widely available alchemical items on Golarion, which a 1st-level character could likely access. Each item’s full entry appears in GM Core. Your GM might allow you to start with other alchemical items from there on a case-by-case basis.',
  },
})

export const AlchemicalBombsSection = Content.defineSection('equipment/alchemical-bombs', {
  parent: AlchemicalGearSection,
  content: {
    name: 'Alchemical Bombs',
    description:
      "Alchemical bombs are consumable weapons that deal damage or produce special effects, and they sometimes deal splash damage. A bomb is a martial thrown weapon with a range increment of 20 feet. It can't benefit from runes, and it doesn't add your [Strength modifier](characteristic:strength) to damage despite being a thrown weapon.\n\nA bomb deals any listed splash damage to the target on a failure, success, or critical success, and to all other creatures within 5 feet of the target on a success or critical success. Add the damage together before applying resistance or weakness, and don't multiply splash damage on a critical hit.",
  },
})

export const ElixirsSection = Content.defineSection('equipment/elixirs', {
  parent: AlchemicalGearSection,
  content: {
    name: 'Elixirs',
    description: 'Elixirs are alchemical items you drink with a single action that has the manipulate trait, gaining the listed benefit.',
  },
})

export const AlchemicalToolsSection = Content.defineSection('equipment/alchemical-tools', {
  parent: AlchemicalGearSection,
  content: {
    name: 'Alchemical Tools',
    description:
      'Alchemical tools are a type of alchemical item you use, rather than drink or throw. They all have the alchemical and consumable traits.',
  },
})

export const AssistiveItemsSection = Content.defineSection('equipment/assistive-items', {
  parent: GearSection,
  content: {
    name: 'Assistive Items',
    description:
      "Included in this section are assistive items for a variety of disabilities. If a character has been disabled from birth or for a significant period of time before setting out on their adventure, they should begin with any basic assistive items they require as part of their backstory. These items don’t count against their starting money (page 25), and any item granted in this way likewise has no value when sold.\n\n**Wheelchair Rules**\n\nEach wheelchair operates in the following ways.\n\n**Adjustable Seat Belts:** These belts strap around your waist, knees, and shins to keep you in the chair if it's thrown, knocked, or handled roughly. You can open and release your belts with an [Interact](content:playing-the-game/interact) action.\n\n**Bulk Limit:** A wheelchair is strong enough to support you and any amount of Bulk you could typically hold or carry. Your total carried Bulk includes all the items you are wearing, carrying, and stowing on your wheelchair. You take the usual effects when there's too much Bulk on you and your wheelchair: if you're carrying an amount of Bulk equal to 5 + your [Strength modifier](characteristic:strength), you're [encumbered](content:conditions/encumbered), and you and your wheelchair can't hold or carry more than 10 + your Strength modifier. The wheelchair's own Bulk doesn't count against your Bulk limit while riding in the wheelchair; it's listed in case you need to carry the wheelchair separately.\n\n**Frame:** A wheelchair is typically made from common materials like wood, but they can also be made from steel, other metals, or even rarer materials like dawnsilver. The wheelchairs presented here are made from durable wood. Magic: The wheelchair is considered an extension of yourself. Spells or abilities that change your bodily form also apply to the chair, and it transforms with you so long as you're using it. You can choose what appearance this has.\n\n**Movement:** While using a wheelchair, you [Stride](content:playing-the-game/stride) at your normal [Speed](characteristic:speed) (listed in your ancestry, with any additional bonuses, penalties, and adjustments applied). You propel a wheelchair by using the hand rims. You can propel the wheelchair even while holding something in your hands, but not if you're [restrained](content:conditions/restrained) or otherwise unable to move your hands freely. You're still affected by difficult terrain and other terrain features. Any effect that would immobilize you, give a penalty to your Speeds, or similar by entangling or hindering your legs applies to the chair as well. You can use all of your actions while in a wheelchair.\n\n**Quick-Righting:** If the chair is tipped or you're knocked [prone](content:conditions/prone) while in the chair, you can right yourself using the Stand action, though in this case you are righting the wheelchair instead. An ally can use an Interact action to help right you, allowing you to Stand as a free action triggered by their Interact action.",
  },
})

export const FormulasSection = Content.defineSection('equipment/formulas', {
  parent: GearSection,
  content: {
    name: 'Formulas',
    description:
      "Formulas are formalized instructions for making items. Their primary purpose is to reduce the time it takes you to start the [Craft](content:skills/craft) activity, which is helpful for items you'll make frequently. You can usually read a formula as long as you can read the language it's written in, even if you lack the skill to Craft the item. Often, alchemists and crafting guilds use obscure languages or create codes to protect their formulas. If you obtain a formula for an uncommon or rarer item, you have access to that item so you can Craft it. These formulas can be significantly more valuable—if you can find them at all!\n\nFor the Price listed on the table, you can buy a common formula or pay an NPC to let you copy their formula. A purchased formula is typically a schematic on rolled-up parchment of light Bulk. You can copy a formula into your formula book in 1 hour.\n\nIf you have a formula, you can Craft a copy of it using the [Crafting](characteristic:skill/crafting) skill. You can also Craft a formula by reverse-engineering it from an item you possess. Use the formula's Price and the item's Craft DC. You must meet any requirements to Craft the item, except you don't need to have access to the item or meet any special Craft Requirements listed in the item's stat block unless the GM determines otherwise.\n\n## Table 6-13: Formulas\n\n| **Item Level** | **Formula Price** |\n|---|---|\n| 0* | 5 sp |\n| 1 | 1 gp |\n| 2 | 2 gp |\n| 3 | 3 gp |\n| 4 | 5 gp |\n| 5 | 8 gp |\n| 6 | 13 gp |\n| 7 | 18 gp |\n| 8 | 25 gp |\n| 9 | 35 gp |\n| 10 | 50 gp |\n| 11 | 70 gp |\n| 12 | 100 gp |\n| 13 | 150 gp |\n| 14 | 225 gp |\n| 15 | 325 gp |\n| 16 | 500 gp |\n| 17 | 750 gp |\n| 18 | 1,200 gp |\n| 19 | 2,000 gp |\n| 20 | 3,500 gp |\n\n*Formulas for all 0-level common items from this chapter can be purchased collectively in a basic crafter's book.",
  },
})

export const ServicesSection = Content.defineSection('equipment/services', {
  parent: GearSection,
  content: {
    name: 'Services',
    description:
      'The services listed on Basic Services and Cuisine describe expenditures that can come up during travels and time spent in settlements.',
  },
})

export const TransportationSection = Content.defineSection('equipment/transportation', {
  parent: ServicesSection,
  content: {
    name: 'Transportation',
    description:
      'The cost to hire transportation includes standard travel with no amenities. Most transit services provide basic sleeping arrangements, and some provide meals at the rates listed on the table. Arranging transportation into dangerous lands can be more expensive or impossible.',
  },
})

export const SpellcastingSection = Content.defineSection('equipment/spellcasting', {
  parent: ServicesSection,
  content: {
    name: 'Spellcasting',
    description:
      'Spellcasting services are uncommon. Having a spell cast for you requires finding a spellcaster who knows and is willing to cast it. It’s hard to find someone who can cast higher-rank spells, and uncommon spells typically cost at least 100% more, if you can find someone who knows them at all. Spells that take a long time to cast (over 1 minute) usually cost 25% more. You must pay any cost listed in the spell in addition to the Price on the table.\n\n## Spellcasting Services\n\n| **Spell Rank** | **Price*** |\n|---|---|\n| 1st | 3 gp |\n| 2nd | 7 gp |\n| 3rd | 18 gp |\n| 4th | 40 gp |\n| 5th | 80 gp |\n| 6th | 160 gp |\n| 7th | 360 gp |\n| 8th | 720 gp |\n| 9th | 1,800 gp |\n| |\n\n* Plus any cost required to cast the specific spell.',
  },
})

export const CostOfLivingSection = Content.defineSection('equipment/cost-of-living', {
  parent: GearSection,
  content: {
    name: 'Cost of Living',
    description:
      'Cost of living provides a total cost to covers room and board, dues, taxes, and other fees. You typically need to track and pay for your cost of living only during downtime.\n\n## Table 6-16: Cost of Living\n\n| **Standard of Living** | **Week** | **Month** | **Year** |\n|---|---|---|---|\n| Subsistence* | 4 sp | 2 gp | 24 gp |\n| Comfortable | 1 gp | 4 gp | 52 gp |\n| Fine | 30 gp | 130 gp | 1,600 gp |\n| Extravagant | 100 gp | 430 gp | 5,200 gp |\n\n* You can attempt to [Subsist](content:skills/subsist) using [Society](characteristic:skill/society) or [Survival](characteristic:skill/survival) for free.',
  },
})

export const AnimalsSection = Content.defineSection('equipment/animals', {
  parent: GearSection,
  content: {
    name: 'Animals',
    description:
      "The Prices for animals are listed both for renting and for purchasing them outright. You usually need to pay for animal rentals up front, and if the vendor believes the animal might be put in danger, they typically require a deposit equal to the purchase Price.\n\nMost animals panic in battle unless specifically trained otherwise. When combat begins, they become [frightened](content:conditions/frightened) 4 and [fleeing](content:conditions/fleeing) as long as they're frightened. If you successfully [Command an Animal](content:skills/command-an-animal) using [Nature](characteristic:skill/nature), you can keep it from fleeing, though this doesn't remove its frightened condition. If the animal is attacked or damaged, it returns to frightened 4 and fleeing, with the same exceptions.\n\nWarhorses and warponies are combat trained. They don't become frightened or fleeing during encounters in this way.\n\nStatistics for the animals appear in Monster Core.\n\n## Animals\n\n| **Animal** | **Specific Animal** | **Rental Price* (Per Day)** | **Purchase Price** |\n|---|---|---|---|\n| Bird | Messenger raven | 8 cp per day | 4 gp |\n| Hunting eagle | 8 sp per day | 8 gp |\n| Dog | Guard dog | 1 cp per day | 2 sp |\n| Service dog | 6 cp per day | 4 gp |\n| Riding dog | 6 cp per day | 4 gp |\n| Horse | Riding horse | 1 sp per day | 8 gp |\n| Warhorse | 1 gp per day | 30 gp (level 2) |\n| Pack animal | 2 cp per day | 2 gp |\n| Pony | Riding pony | 8 cp per day | 7 gp |\n| Warpony | 8 sp per day | 24 gp (level 2) |\n| |",
  },
})

export const BardingSection = Content.defineSection('equipment/barding', {
  parent: AnimalsSection,
  content: {
    name: 'Barding',
    description:
      'You can purchase special armor for animals, called barding (shown on the Barding table). All animals have a trained proficiency rank in light barding, and combattrained animals are trained in heavy barding. Barding uses the same rules as armor except for the following. The Price and Bulk of barding depend on the animal’s size (use the statistics for Small barding for creatures below Small size). Barding can’t be etched with magic runes, though special magical barding might be available.\n\n## Table 6-18: Barding\n\n| **Size** | **Barding** | **Price** | **AC Bonus** | **Dex Cap** | **Check Penalty** | **Speed Penalty** | **Bulk** | **Strength** |\n|---|---|---|---|---|---|---|---|---|\n| Light | Small or Medium | 10 gp | +1 | +5 | -1 | -5 ft. | 2 | +3 |\n| Large | 20 gp | +1 | +5 | -1 | -5 ft. | 4 | +3 |\n| Heavy | Small or Medium (Level 2) | 25 gp | +3 | +3 | -3 | -10 ft. | 4 | +5 |\n| Large (Level 3) | 50 gp | +3 | +3 | -3 | -10 ft. | 8 | +5 |',
  },
})

export const QuickEquipmentPackagesSection = Content.defineSection('equipment/quick-equipment-packages', {
  parent: GearSection,
  content: {
    name: 'Quick Equipment Packages',
    description:
      "_Nethys Note: This page combines Player Core 1 and 2's quick equipment packages._\n\nIf you want to quickly decide how to spend your starting money when playing a class from this book, start with one of these kits. The Armor, Weapons, and Gear entries include the basics, and the Options entries suggest additional items you might purchase with your leftover money to fit your character. Note that an adventurer’s pack, which is included in each kit, is 1 Bulk and contains a backpack, bedroll, 10 pieces of chalk, flint and steel, 50 feet of rope, 2 weeks’ rations, soap, 5 torches, and a waterskin.",
  },
})

export const EquipmentContent = [
  EquipmentSection,
  CoinsAndCurrencySection,
  OtherCurrencySection,
  PriceSection,
  ItemLevelSection,
  CarryingItemsSection,
  WieldingItemsSection,
  DrawingAndStowingItemsSection,
  InteractSection,
  ReleaseSection,
  BulkSection,
  BulkLimitsSection,
  BulkValuesSection,
  EstimatingAnItemsBulkSection,
  BulkOfCoinsSection,
  BulkOfCreaturesSection,
  DraggingSection,
  ItemDamageSection,
  ObjectImmunitiesSection,
  ShoddyItemsSection,
  ItemsAndSizesSection,
  BulkConversionsForDifferentSizesSection,
  ItemsOfDifferentSizesSection,
  ArmorSection,
  ArmorClassSection,
  DonningAndRemovingArmorSection,
  ArmorStatisticsSection,
  CategorySection,
  UnarmoredDefenseSection,
  LightArmorSection,
  MediumArmorSection,
  HeavyArmorSection,
  ACBonusSection,
  DexterityModifierCapDexCapSection,
  CheckPenaltySection,
  SpeedPenaltySection,
  StrengthSection,
  ArmorStatisticsBulkSection,
  GroupSection,
  ArmorTraitsSection,
  ArmorSpecializationEffectsSection,
  ExplorersClothingSection,
  PaddedArmorSection,
  LeatherArmorSection,
  StuddedLeatherArmorSection,
  ChainShirtSection,
  HideArmorSection,
  ScaleMailSection,
  ChainMailSection,
  BreastplateSection,
  SplintMailSection,
  HalfPlateSection,
  FullPlateSection,
  ShieldsSection,
  ShieldStatisticsSection,
  ShieldStatisticsACBonusSection,
  HardnessSection,
  HPBTSection,
  AttackingWithAShieldSection,
  BucklerSection,
  WoodenShieldSection,
  SteelShieldSection,
  TowerShieldSection,
  WeaponsSection,
  AttackRollsSection,
  MultipleAttackPenaltySection,
  DamageRollsSection,
  CriticalHitsSection,
  UnarmedAttacksSection,
  ImprovisedWeaponsSection,
  WeaponStatisticsSection,
  DamageSection,
  RangeSection,
  ReloadSection,
  DamageBulkSection,
  HandsSection,
  DamageGroupSection,
  WeaponTraitsSection,
  AmmunitionSection,
  WeaponsWeaponTraitsSection,
  CriticalSpecializationSection,
  WeaponsUnarmedAttacksSection,
  SimpleWeaponsSection,
  MartialWeaponsSection,
  AdvancedWeaponsSection,
  GearSection,
  GearStatisticsSection,
  GearStatisticsHandsSection,
  WearingToolkitsSection,
  AdventuringGearSection,
  AlchemicalGearSection,
  AlchemicalBombsSection,
  ElixirsSection,
  AlchemicalToolsSection,
  AssistiveItemsSection,
  FormulasSection,
  ServicesSection,
  TransportationSection,
  SpellcastingSection,
  CostOfLivingSection,
  AnimalsSection,
  BardingSection,
  QuickEquipmentPackagesSection,
]
