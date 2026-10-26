export * from '@simulacrum/ruleset/ability'
import { Ability, AbilityAction, AbilityReference } from '@simulacrum/ruleset/ability'
import { ActionEffect } from '@simulacrum/ruleset/action-effect'
import { ActionTest } from '@simulacrum/ruleset/action-test'
import { LoadoutTypeReference } from '@simulacrum/common/engine/loadout'
import { ExpressionEvaluator } from '@bessemer/cornerstone/expression/expression-evaluator'
import { Patch } from '@bessemer/cornerstone/patch'
import * as Attributes from '@simulacrum/common/engine/attribute'
import { Attribute, AttributeValue, Modifier, ModifierValue } from '@simulacrum/common/engine/attribute'
import { Patches } from '@bessemer/cornerstone'
import { Ruleset } from '@simulacrum/common/engine/ruleset'
import { AbilityFilter } from '@simulacrum/ruleset/ability'
import * as Tags from '@simulacrum/common/engine/tag'
import { Arrays, Objects } from '@bessemer/cornerstone'
import * as Rulesets from '@simulacrum/common/engine/ruleset'
import { RulesetEntities } from '@simulacrum/ruleset'
import { ActionEffectValue } from '@simulacrum/common/engine/action-effect'
import { ActionEffects } from '@simulacrum/common/engine/engine'

export interface ActionTestValue extends ActionTest {
  success: Array<ActionEffectValue>
  failure: Array<ActionEffectValue>
}

export interface ActionValue extends AbilityAction {
  effects: Array<ActionEffectValue>
  test: ActionTestValue | null
  potency: number | null
}

export interface AbilityValue extends Ability {
  actions: Array<ActionValue>
  activeModifiers: Array<ModifierValue<Ability>>
  inactiveModifiers: Array<Modifier<Ability>>
}

export type AbilityState = {
  ability: AbilityValue
  loadout: LoadoutTypeReference | null
}

export const getAbilities = (ruleset: Ruleset): Array<Ability> => {
  return Rulesets.getEntities(ruleset, RulesetEntities.RulesetEntityType.Ability)
}

export const getAbilityById = (reference: AbilityReference, ruleset: Ruleset): Ability => {
  return Rulesets.getEntityById(reference, ruleset)
}

export const getAbilitiesByIds = (abilities: Array<AbilityReference>, ruleset: Ruleset): Array<Ability> => {
  return abilities.map((it) => getAbilityById(it, ruleset))
}

const buildAttribute = (ability: Ability): Attribute<Ability> => {
  return Attributes.attribute(ability)
}

export const evaluateModifiers = (ability: Ability, modifiers: Array<Modifier<Ability>>, evaluator: ExpressionEvaluator): AttributeValue<Ability> => {
  return Attributes.evaluateAttribute(buildAttribute(ability), modifiers, evaluator)
}

export const mapActionEffects = (
  ability: AttributeValue<Ability>,
  map: (effect: ActionEffect, action: AbilityAction) => ActionEffectValue,
  getPotency: (action: AbilityAction) => number | null = () => null
): AbilityValue => {
  const actions = ability.value.actions.map((action) => ({
    ...action,
    potency: getPotency(action),
    effects: action.effects.map((it) => map(it.value, action)),
    test: Objects.isNil(action.test)
      ? null
      : {
          ...action.test,
          success: action.test.success.map((it) => map(it.value, action)),
          failure: action.test.failure.map((it) => map(it.value, action)),
        },
  }))

  return { ...ability.value, actions, activeModifiers: ability.activeModifiers, inactiveModifiers: ability.inactiveModifiers }
}

export const isValue = (ability: Ability): ability is AbilityValue => {
  return 'activeModifiers' in ability
}

export const buildDefaultValue = (ability: Ability): AbilityValue => {
  return mapActionEffects(Attributes.simpleAttributeValue(ability, buildAttribute(ability)), ActionEffects.buildSimpleValue)
}

export const applyFilter = (abilities: Array<Ability>, filter: AbilityFilter): Array<Ability> => {
  let filteredAbilities = abilities
  if (!Arrays.isEmpty(filter.tags)) {
    filteredAbilities = filteredAbilities.filter((it) => Tags.matchesFilter(filter.tags, it.tags))
  }
  if (!Arrays.isEmpty(filter.specificOptions)) {
    filteredAbilities = filteredAbilities.filter((it) => Arrays.contains(filter.specificOptions, it.id))
  }

  return filteredAbilities
}
