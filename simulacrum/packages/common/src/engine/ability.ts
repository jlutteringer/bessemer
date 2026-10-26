export * from '@simulacrum/ruleset/ability'
import { Ability, AbilityReference } from '@simulacrum/ruleset/ability'
import { LoadoutTypeReference } from '@simulacrum/common/engine/loadout'
import { EvaluateExpression } from '@bessemer/cornerstone/expression'
import { Patch } from '@bessemer/cornerstone/patch'
import * as Attributes from '@simulacrum/common/engine/attribute'
import { Modifier } from '@simulacrum/common/engine/attribute'
import { Patches } from '@bessemer/cornerstone'
import { Ruleset } from '@simulacrum/common/engine/ruleset'
import { AbilityFilter } from '@simulacrum/ruleset/ability'
import * as Tags from '@simulacrum/common/engine/tag'
import { Arrays } from '@bessemer/cornerstone'
import * as Rulesets from '@simulacrum/common/engine/ruleset'
import { RulesetEntities } from '@simulacrum/ruleset'

export type AbilityState = {
  ability: Ability
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
  return { ability: applyModifiers(getAbilityById(ability, ruleset), modifiers, evaluate), loadout }
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
