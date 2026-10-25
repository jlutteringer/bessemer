import { Abilities, Tags, Attributes, CharacterOptions, CharacterValues, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions } from '@bessemer/cornerstone/expression'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import { ResourcePool } from '@simulacrum/ruleset/resource-pool'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import {
  Fortitude,
  LightArmor,
  MartialWeapons,
  MediumArmor,
  SimpleWeapons,
  SpellAttack,
  SpellDC,
  UnarmedAttacks,
} from '@simulacrum/ruleset-pf2e/characteristic'
import { Proficiency } from '@simulacrum/ruleset-pf2e/bonus-type'
import { Expert, Trained } from '@simulacrum/ruleset-pf2e/proficiency'
import { ShieldBlock } from '@simulacrum/ruleset-pf2e/feat/general-feat'
import { DomainInitiate } from '@simulacrum/ruleset-pf2e/class/cleric-domain'

export const ClericDoctrine = Tags.defineTraitTag('cleric/doctrine', { name: 'Doctrine' })

export const ClericDivineFont = Tags.defineTraitTag('cleric/divine-font', { name: 'Divine Font' })

export const ClericSanctification = Tags.defineTraitTag('cleric/sanctification', { name: 'Sanctification' })

export const CloisteredCleric = Traits.defineTrait('cleric/doctrine/cloistered-cleric', {
  name: 'Cloistered Cleric',
  description:
    "You are a cleric of the cloth, focusing on divine magic and your connection to your deity’s domains.\n\n- **First Doctrine (1st)** You gain the [Domain Initiate](trait:feat/domain-initiate) cleric feat.\n- **Second Doctrine (3rd)** Your proficiency rank for [Fortitude](characteristic:fortitude) saves increases to expert.\n- **Third Doctrine (7th)** Your proficiency ranks for the [spell attack modifier](characteristic:spell-attack) and [spell DC](characteristic:spell-dc) statistics increase to expert.\n- **Fourth Doctrine (11th)** You gain expert proficiency with your deity's favored weapon, simple weapons, and unarmed attacks. When you critically succeed at an attack roll using your deity's favored weapon, you apply the weapon's [critical specialization](content:equipment/critical-specialization) effect; use your spell DC in place of your [class DC](characteristic:class-dc).\n- **Fifth Doctrine (15th)** Your proficiency ranks for the spell attack modifier and spell DC statistics increase to master.\n- **Final Doctrine (19th)** Your proficiency ranks for the spell attack modifier and spell DC statistics increase to legendary.",
  tags: [ClericDoctrine],
  effects: [
    Effects.gainTrait(DomainInitiate),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [
      Effects.modifyCharacteristic(Fortitude, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 7), [
      Effects.modifyCharacteristic(SpellAttack, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
      Effects.modifyCharacteristic(SpellDC, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    ]),
  ],
})

export const Warpriest = Traits.defineTrait('cleric/doctrine/warpriest', {
  name: 'Warpriest',
  description:
    "You have trained in the more militant doctrine of your church, focusing on both spells and battle.\n\n- **First Doctrine (1st)** You’re trained in light and medium armor, and you have expert proficiency in [Fortitude](characteristic:fortitude) saves. You gain the [Shield Block](trait:feat/shield-block) general feat, a reaction to reduce damage with a shield. If your deity’s weapon is a simple weapon or an unarmed attack, you gain the [Deadly Simplicity](trait:feat/deadly-simplicity) cleric feat. At 13th level, if you gain the divine defense class feature, you also gain expert proficiency in light and medium armor.\n- **Second Doctrine (3rd)** You’re trained in martial weapons.\n- **Third Doctrine (7th)** You gain expert proficiency with your deity's favored weapon, martial weapons, simple weapons, and [unarmed](content:traits/unarmed) attacks. When you critically succeed at an attack roll using your deity's favored weapon, you apply the weapon's [critical specialization](content:equipment/critical-specialization) effect; You can use your [spell DC](characteristic:spell-dc) in place of your [class DC](characteristic:class-dc).\n- **Fourth Doctrine (11th)** Your proficiency ranks for the [spell attack modifier](characteristic:spell-attack) and spell DC statistics increase to expert.\n- **Fifth Doctrine (15th)** Your proficiency rank for Fortitude saves increases to master. When you roll a success at a Fortitude save, you get a critical success instead.\n- **Final Doctrine (19th)** You gain master proficiency with your deity's favored weapon, spell attack modifier, and spell DC.",
  tags: [ClericDoctrine],
  effects: [
    Effects.modifyCharacteristic(LightArmor, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(MediumArmor, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    Effects.modifyCharacteristic(Fortitude, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    Effects.gainTrait(ShieldBlock),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 3), [
      Effects.modifyCharacteristic(MartialWeapons, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency })),
    ]),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 7), [
      Effects.modifyCharacteristic(SimpleWeapons, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
      Effects.modifyCharacteristic(MartialWeapons, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
      Effects.modifyCharacteristic(UnarmedAttacks, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency })),
    ]),
  ],
})

export const SelectClericDoctrine = CharacterOptions.selectTraitOption('cleric/select-doctrine', {
  name: 'Doctrine',
  filter: { tags: [ClericDoctrine] },
})

export const HealingFontHeal = Abilities.defineAbility('cleric/healing-font/heal', {
  name: 'Healing Font',
  description:
    'You gain 4 additional spell slots each day at your highest rank of cleric spell slots. You can prepare only [_heal_](ability:spell/heal) spells in these slots. At 5th level, the number of additional slots increases to 5, and at 15th level, the total number of additional slots increases to 6. Each of these slots holds a _heal_ spell heightened to your highest rank of cleric spell slots.',
  resource: { size: 4, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
  universal: false,
  actions: [{ name: 'Heal', action: ActionTypes.VariableActions }],
})

export const HarmfulFontHarm = Abilities.defineAbility('cleric/harmful-font/harm', {
  name: 'Harmful Font',
  description:
    'You gain 4 additional spell slots each day at your highest rank of cleric spell slots. You can prepare only [_harm_](ability:spell/harm) spells in these slots. At 5th level, the number of additional slots increases to 5, and at 15th level, the total number of additional slots increases to 6. Each of these slots holds a _harm_ spell heightened to your highest rank of cleric spell slots.',
  resource: { size: 4, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
  universal: false,
  actions: [{ name: 'Harm', action: ActionTypes.VariableActions }],
})

export const HealingFont = Traits.defineTrait('cleric/divine-font/healing-font', {
  name: 'Healing Font',
  description:
    'You gain 4 additional spell slots each day at your highest rank of cleric spell slots. You can prepare only [_heal_](ability:spell/heal) spells in these slots. At 5th level, the number of additional slots increases to 5, and at 15th level, the total number of additional slots increases to 6.',
  tags: [ClericDivineFont],
  effects: [
    Effects.gainAbility(HealingFontHeal),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [
      Effects.modifyResourcePool(HealingFontHeal.resource, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
    ]),
  ],
})

export const HarmfulFont = Traits.defineTrait('cleric/divine-font/harmful-font', {
  name: 'Harmful Font',
  description:
    'You gain 4 additional spell slots each day at your highest rank of cleric spell slots. You can prepare only [_harm_](ability:spell/harm) spells in these slots. At 5th level, the number of additional slots increases to 5, and at 15th level, the total number of additional slots increases to 6.',
  tags: [ClericDivineFont],
  effects: [
    Effects.gainAbility(HarmfulFontHarm),
    Effects.conditional(Expressions.greaterThanOrEqual(CharacterValues.Level, 5), [
      Effects.modifyResourcePool(HarmfulFontHarm.resource, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
    ]),
  ],
})

export const SelectClericDivineFont = CharacterOptions.selectTraitOption('cleric/select-divine-font', {
  name: 'Divine Font',
  filter: { tags: [ClericDivineFont] },
})

export const Holy = Traits.defineTrait('cleric/sanctification/holy', {
  name: 'Holy',
  description:
    "Your deity's sanctification makes you holy. Your sanctified actions and spells gain the holy trait.\n\nEffects with the holy trait are tied to powerful magical forces of benevolence and virtue. They often have stronger effects on unholy creatures. Creatures with this trait are strongly devoted to holy causes and often have weakness to [unholy](content:traits/unholy). If a creature with weakness to holy uses a holy item or effect, it takes damage from its weakness.",
  tags: [ClericSanctification],
  effects: [],
})

export const Unholy = Traits.defineTrait('cleric/sanctification/unholy', {
  name: 'Unholy',
  description:
    "Your deity's sanctification makes you unholy. Your sanctified actions and spells gain the unholy trait.\n\nEffects with the unholy trait are tied to powerful magical forces of cruelty and sin. They often have stronger effects on holy creatures. Creatures with this trait are strongly devoted to unholy causes, and often have weakness to [holy](content:traits/holy). If a creature with weakness to unholy uses an unholy item or effect, it takes damage from its weakness.",
  tags: [ClericSanctification],
  effects: [],
})

export const NoSanctification = Traits.defineTrait('cleric/sanctification/none', {
  name: 'No Sanctification',
  description: "Your deity doesn't allow sanctification, or you chose not to be sanctified. You are neither holy nor unholy.",
  tags: [ClericSanctification],
  effects: [],
})

export const SelectClericSanctification = CharacterOptions.selectTraitOption('cleric/select-sanctification', {
  name: 'Sanctification',
  filter: { tags: [ClericSanctification] },
})

export const AllClericDoctrineEntities = [
  ClericDoctrine,
  ClericDivineFont,
  ClericSanctification,
  CloisteredCleric,
  Warpriest,
  HealingFontHeal,
  HarmfulFontHarm,
  HealingFont,
  HarmfulFont,
  Holy,
  Unholy,
  NoSanctification,
]
