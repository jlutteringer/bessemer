import { Abilities, Tags, Attributes, Effects, Traits } from '@simulacrum/ruleset'
import { ArmorLoadout } from '@simulacrum/ruleset-khydrian-drift/loadout'
import { Patches } from '@bessemer/cornerstone'
import { NumericExpressions } from '@bessemer/cornerstone/expression'
import { ArmorClass, ProficiencyBonus } from '@simulacrum/ruleset-khydrian-drift/characteristic'
import { HeavyArmorProficiency, LightArmorProficiency, MediumArmorProficiency } from '@simulacrum/ruleset-khydrian-drift/archetype/archetype-combat'

export const Armor = Tags.defineAbilityTag('armor', { name: 'Armor' })

export const NoArmor = Abilities.defineAbility('armor/none', {
  name: 'No Armor',
  tags: [Armor],
  loadout: ArmorLoadout,
})

export const LightArmor = Abilities.defineAbility('armor/light', {
  name: 'Light Armor',
  tags: [Armor],
  loadout: ArmorLoadout,
  prerequisites: [Traits.traitPrerequisite(LightArmorProficiency)],
  effects: [Effects.modifyCharacteristic(ArmorClass, Attributes.modifier(Patches.sum(3)))],
})

export const MediumArmor = Abilities.defineAbility('armor/medium', {
  name: 'Medium Armor',
  tags: [Armor],
  loadout: ArmorLoadout,
  prerequisites: [Traits.traitPrerequisite(MediumArmorProficiency)],
  effects: [Effects.modifyCharacteristic(ArmorClass, Attributes.modifier(Patches.sum(6)))],
})

export const HeavyArmor = Abilities.defineAbility('armor/heavy', {
  name: 'Heavy Armor',
  tags: [Armor],
  loadout: ArmorLoadout,
  prerequisites: [Traits.traitPrerequisite(HeavyArmorProficiency)],
  effects: [
    Effects.modifyCharacteristic(
      ArmorClass,
      Attributes.modifier(Patches.set(NumericExpressions.sum([12, NumericExpressions.multiply([2, ProficiencyBonus.variable])])))
    ),
  ],
})

export const AllArmor = [NoArmor, LightArmor, MediumArmor, HeavyArmor]
