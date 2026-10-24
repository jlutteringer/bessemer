import { Tags, Attributes, CharacterOptions, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions } from '@bessemer/cornerstone/expression'
import { ResourcePool } from '@simulacrum/ruleset/resource-pool'
import { ClassFeat, DruidFeat, Feat, FeatLevel2, FeatLevel4 } from '@simulacrum/ruleset-pf2e/tag'
import { TrainedAcrobatics, TrainedAthletics, TrainedDiplomacy, TrainedIntimidation } from '@simulacrum/ruleset-pf2e/skill'
import { FocusPoints } from '@simulacrum/ruleset-pf2e/spellcasting'
import {
  AnimalCompanion,
  AnimalOrderMembership,
  LeafOrderMembership,
  LeshyFamiliar,
  StormBorn,
  StormOrderMembership,
  UntamedForm,
  UntamedOrderMembership,
} from '@simulacrum/ruleset-pf2e/class/druid-feat'
import * as DruidFocusSpells from '@simulacrum/ruleset-pf2e/class/druid-focus-spell'

export const DruidicOrder = Tags.defineTraitTag('druid/druidic-order', { name: 'Druidic Order' })

export const AnimalOrder = Traits.defineTrait('druid/druidic-order/animal', {
  name: 'Animal Order',
  description:
    'You have a strong connection to beasts, always feeling like you understood them (and they you) better than your own people. You stand for the animals of nature, a powerful animal companion at your side.\n\n**Order Skill** Athletics\n\n**Druid Feat** Animal Companion\n\n**Order Spell** _heal animal_\n\n**Anathema** Commit wanton cruelty to animals or kill animals unnecessarily. (This doesn’t prevent you from defending yourself against animals or killing them cleanly for food).',
  tags: [DruidicOrder],
  effects: [
    Effects.gainTrait(AnimalOrderMembership),
    Effects.gainTrait(TrainedAthletics),
    Effects.gainTrait(AnimalCompanion),
    Effects.gainAbility(DruidFocusSpells.HealAnimal),
    Effects.gainResourcePool(FocusPoints),
  ],
})

export const LeafOrder = Traits.defineTrait('druid/druidic-order/leaf', {
  name: 'Leaf Order',
  description:
    'You revere the bounty of nature, acting as both a gardener and warden for the wilderness. With your leshy familiar at your side, you help areas regrow after disasters or negligent expansion and turn flora against those who would abuse them.\n\n**Order Skill** Diplomacy\n\n**Druid Feat** Leshy Familiar\n\n**Order Spell** _cornucopia_\n\n**Anathema** Commit wanton cruelty to plants or fungi or kill them unnecessarily. (This doesn’t prevent you from defending yourself or harvesting them for survival.)',
  tags: [DruidicOrder],
  effects: [
    Effects.gainTrait(LeafOrderMembership),
    Effects.gainTrait(TrainedDiplomacy),
    Effects.gainTrait(LeshyFamiliar),
    Effects.gainAbility(DruidFocusSpells.Cornucopia),
    Effects.gainResourcePool(FocusPoints),
  ],
})

export const StormOrder = Traits.defineTrait('druid/druidic-order/storm', {
  name: 'Storm Order',
  description:
    'Whether you were born under a tempest or survived a bolt of lightning from a clear blue sky, you now carry the fury of the storm in your heart, channeling thunder to terrifying destructive effect and riding the winds through the air.\n\n**Order Skill** Acrobatics\n\n**Druid Feat** Storm Born\n\n**Order Spell** _tempest surge_\n\n**Anathema** Pollute the air, allow those who cause major air pollution or climate shifts to go unpunished. (This doesn’t force you to take action against merely potential environmental harm or to sacrifice yourself against an obviously superior foe.)',
  tags: [DruidicOrder],
  effects: [
    Effects.gainTrait(StormOrderMembership),
    Effects.gainTrait(TrainedAcrobatics),
    Effects.gainTrait(StormBorn),
    Effects.gainAbility(DruidFocusSpells.TempestSurge),
    Effects.gainResourcePool(FocusPoints),
  ],
})

export const UntamedOrder = Traits.defineTrait('druid/druidic-order/untamed', {
  name: 'Untamed Order',
  description:
    'The uncontrollable call of the natural world courses through your body. You might have been raised by a wild animal, or you might have come to reject the artifices of cities after growing up in one. Now, primal magic grants you the ability to wear the form of an untamed creature.\n\n**Order Skill** Intimidation\n\n**Druid Feat** Untamed Form\n\n**Order Spell** _untamed shift_\n\n**Anathema** Become fully domesticated by the temptations of civilization. (This doesn’t prevent you from buying and using processed goods or staying in a city for an adventure, but you can never come to rely on these conveniences or truly call such a place your permanent home.)',
  tags: [DruidicOrder],
  effects: [
    Effects.gainTrait(UntamedOrderMembership),
    Effects.gainTrait(TrainedIntimidation),
    Effects.gainTrait(UntamedForm),
    Effects.gainAbility(DruidFocusSpells.UntamedShift),
    Effects.gainResourcePool(FocusPoints),
  ],
})

export const SelectDruidicOrder = CharacterOptions.selectTraitOption('druid/select-druidic-order', {
  name: 'Druidic Order',
  filter: { tags: [DruidicOrder] },
})

export const OrderExplorerAnimal = Traits.defineTrait('feat/order-explorer/animal', {
  name: 'Order Explorer (Animal)',
  description: 'You become a member of the animal order for the purpose of meeting feat prerequisites and gain the Animal Companion feat.',
  prerequisites: [Expressions.not(Traits.traitPrerequisite(AnimalOrder))],
  effects: [Effects.gainTrait(AnimalOrderMembership), Effects.gainTrait(AnimalCompanion)],
})

export const OrderExplorerLeaf = Traits.defineTrait('feat/order-explorer/leaf', {
  name: 'Order Explorer (Leaf)',
  description: 'You become a member of the leaf order for the purpose of meeting feat prerequisites and gain the Leshy Familiar feat.',
  prerequisites: [Expressions.not(Traits.traitPrerequisite(LeafOrder))],
  effects: [Effects.gainTrait(LeafOrderMembership), Effects.gainTrait(LeshyFamiliar)],
})

export const OrderExplorerStorm = Traits.defineTrait('feat/order-explorer/storm', {
  name: 'Order Explorer (Storm)',
  description: 'You become a member of the storm order for the purpose of meeting feat prerequisites and gain the Storm Born feat.',
  prerequisites: [Expressions.not(Traits.traitPrerequisite(StormOrder))],
  effects: [Effects.gainTrait(StormOrderMembership), Effects.gainTrait(StormBorn)],
})

export const OrderExplorerUntamed = Traits.defineTrait('feat/order-explorer/untamed', {
  name: 'Order Explorer (Untamed)',
  description: 'You become a member of the untamed order for the purpose of meeting feat prerequisites and gain the Untamed Form feat.',
  prerequisites: [Expressions.not(Traits.traitPrerequisite(UntamedOrder))],
  effects: [Effects.gainTrait(UntamedOrderMembership), Effects.gainTrait(UntamedForm)],
})

export const SelectOrderExplorer = CharacterOptions.selectTraitOption('feat/order-explorer/select', {
  name: 'Order Explorer',
  filter: { specificOptions: [OrderExplorerAnimal, OrderExplorerLeaf, OrderExplorerStorm, OrderExplorerUntamed] },
})

export const OrderExplorer = Traits.defineTrait('feat/order-explorer', {
  name: 'Order Explorer',
  description:
    '*Druid*\n\nYou have learned the secrets of another druidic order, passing whatever rites of initiation that order requires and gaining access to its secrets. Choose an order other than your own. You gain a 1st-level feat that lists that order as a prerequisite, and you are now a member of that order for the purpose of meeting feat prerequisites. If you commit acts anathema to your new order, you lose all feats and abilities requiring that order but retain your other druid feats and abilities. You don’t gain any of the other benefits of the order you chose.\n\n**Special** You can take this feat multiple times. Each time you do, you must choose a different order other than your own.',
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel2],
  repeatable: true,
  effects: [Effects.gainCharacterOption(SelectOrderExplorer)],
})

export const OrderMagicAnimal = Traits.defineTrait('feat/order-magic/animal', {
  name: 'Order Magic (Animal)',
  description: 'You gain the animal order spell, _heal animal_.',
  prerequisites: [Traits.traitPrerequisite(OrderExplorerAnimal)],
  effects: [
    Effects.gainAbility(DruidFocusSpells.HealAnimal),
    Effects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
  ],
})

export const OrderMagicLeaf = Traits.defineTrait('feat/order-magic/leaf', {
  name: 'Order Magic (Leaf)',
  description: 'You gain the leaf order spell, _cornucopia_.',
  prerequisites: [Traits.traitPrerequisite(OrderExplorerLeaf)],
  effects: [
    Effects.gainAbility(DruidFocusSpells.Cornucopia),
    Effects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
  ],
})

export const OrderMagicStorm = Traits.defineTrait('feat/order-magic/storm', {
  name: 'Order Magic (Storm)',
  description: 'You gain the storm order spell, _tempest surge_.',
  prerequisites: [Traits.traitPrerequisite(OrderExplorerStorm)],
  effects: [
    Effects.gainAbility(DruidFocusSpells.TempestSurge),
    Effects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
  ],
})

export const OrderMagicUntamed = Traits.defineTrait('feat/order-magic/untamed', {
  name: 'Order Magic (Untamed)',
  description: 'You gain the untamed order spell, _untamed shift_.',
  prerequisites: [Traits.traitPrerequisite(OrderExplorerUntamed)],
  effects: [
    Effects.gainAbility(DruidFocusSpells.UntamedShift),
    Effects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
  ],
})

export const SelectOrderMagic = CharacterOptions.selectTraitOption('feat/order-magic/select', {
  name: 'Order Magic',
  filter: { specificOptions: [OrderMagicAnimal, OrderMagicLeaf, OrderMagicStorm, OrderMagicUntamed] },
})

export const OrderMagic = Traits.defineTrait('feat/order-magic', {
  name: 'Order Magic',
  description:
    '*Druid*\n\n**Prerequisites** [Order Explorer](trait:feat/order-explorer)\n\nYou have delved deeper into the teaching of a new order, gaining access to a coveted order spell. Choose an order you have selected with Order Explorer. You gain the initial order spell from that order.\n\n**Special** You can take this feat multiple times. Each time you do, you must choose a different order you have selected with Order Explorer.',
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(OrderExplorer)],
  repeatable: true,
  effects: [Effects.gainCharacterOption(SelectOrderMagic)],
})

export const AllDruidOrderEntities = [
  DruidicOrder,
  AnimalOrder,
  LeafOrder,
  StormOrder,
  UntamedOrder,
  SelectDruidicOrder,
  OrderExplorerAnimal,
  OrderExplorerLeaf,
  OrderExplorerStorm,
  OrderExplorerUntamed,
  SelectOrderExplorer,
  OrderExplorer,
  OrderMagicAnimal,
  OrderMagicLeaf,
  OrderMagicStorm,
  OrderMagicUntamed,
  SelectOrderMagic,
  OrderMagic,
]
