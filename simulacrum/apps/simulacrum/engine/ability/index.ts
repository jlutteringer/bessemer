export * from '@simulacrum/ruleset/ability'
import { Ability, AbilityReference } from '@simulacrum/ruleset/ability'
import { LoadoutTypeReference } from '@simulacrum/engine/loadout'
import { EvaluateExpression } from '@bessemer/cornerstone/expression'
import { Patch } from '@bessemer/cornerstone/patch'
import * as Attributes from '@simulacrum/engine/attribute'
import { Modifier } from '@simulacrum/engine/attribute'
import { Assertions, Patches } from '@bessemer/cornerstone'
import { Ruleset } from '@simulacrum/engine/ruleset'

export type AbilityState = {
  ability: Ability
  loadout: LoadoutTypeReference | null
}

export const getAbility = (reference: AbilityReference, ruleset: Ruleset): Ability => {
  const ability = ruleset.abilities.find((it) => it.id === reference)
  Assertions.assertPresent(ability)
  return ability
}

export const getAbilities = (abilities: Array<AbilityReference>, ruleset: Ruleset): Array<Ability> => {
  return abilities.map((it) => getAbility(it, ruleset))
}

export const applyModifiers = (ability: Ability, modifiers: Array<Modifier<unknown>>, evaluate: EvaluateExpression): Ability => {
  const { activeModifiers } = Attributes.evaluateModifiers(modifiers, evaluate)
  return Patches.resolve(
    ability,
    activeModifiers.map((it) => it.value as Patch<Ability>),
    evaluate
  )
}

export const buildInitialState = (
  ability: AbilityReference,
  loadout: LoadoutTypeReference | null,
  modifiers: Array<Modifier<unknown>>,
  evaluate: EvaluateExpression,
  ruleset: Ruleset
): AbilityState => {
  return { ability: applyModifiers(getAbility(ability, ruleset), modifiers, evaluate), loadout }
}
