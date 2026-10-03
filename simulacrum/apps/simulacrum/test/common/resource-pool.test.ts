import { TestHarness } from '@simulacrum/test/test-harness'
import { CharacterOptions, Characters } from '@simulacrum/engine/character'
import { Abilities, Attributes, ResourcePools } from '@simulacrum/engine'
import { ActionType } from '@simulacrum/engine/ability'
import { ResourcePool } from '@simulacrum/engine/resource-pool'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import { Dnd5e, SelectClassLevel } from '@simulacrum/ruleset-dnd5e'
import * as Barbarian from '@simulacrum/ruleset-dnd5e/class/class-barbarian'
import * as Fighter from '@simulacrum/ruleset-dnd5e/class/class-fighter'
import { SuperiorityDice } from '@simulacrum/ruleset-dnd5e/archetype/maneuver'
import { Expressions } from '@bessemer/cornerstone/expression'
import { Patches } from '@bessemer/cornerstone'

const Pool: ResourcePool = { size: 2, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] }

test('modifiers patch a resource pool in order', () => {
  const evaluate = Expressions.defaultEvaluator()
  const pool = ResourcePools.applyModifiers(
    Pool,
    [
      Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) })),
      Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.multiply(2) })),
      Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(100) }), { condition: Expressions.value(false) }),
    ],
    evaluate
  )

  expect(pool.size).toBe(6)
})

test('Barbarian levels add Rage uses', () => {
  const ruleset = Dnd5e
  const levels = [Barbarian.Level1, Barbarian.Level2, Barbarian.Level3]
  const barbarian = (level: number) =>
    Characters.buildCharacterDefinition(
      {
        ...TestHarness.CommonerLevel3,
        level,
        selections: Object.fromEntries(
          levels.slice(0, level).map((it, index) => [index + 1, [CharacterOptions.buildSelection(SelectClassLevel, it)]])
        ),
      },
      ruleset
    )

  expect(barbarian(2).resources[Barbarian.Rage.resource.id]!.value).toBe(2)
  expect(barbarian(3).resources[Barbarian.Rage.resource.id]!.value).toBe(3)
})

test('Fighter levels add Second Wind uses', () => {
  const ruleset = Dnd5e
  const levels = [Fighter.Level1, Fighter.Level2, Fighter.Level3, Fighter.Level4]
  const fighter = (level: number) =>
    Characters.buildCharacterDefinition(
      {
        ...TestHarness.CommonerLevel3,
        level,
        selections: Object.fromEntries(
          levels.slice(0, level).map((it, index) => [index + 1, [CharacterOptions.buildSelection(SelectClassLevel, it)]])
        ),
      },
      ruleset
    )

  expect(fighter(3).resources[Fighter.SecondWind.resource.id]!.value).toBe(2)
  expect(fighter(4).resources[Fighter.SecondWind.resource.id]!.value).toBe(3)
})

test('actions inherit the ability costs unless they set their own', () => {
  const ability = Abilities.defineAbility('test/ability', {
    name: 'Test Ability',
    description: '',
    resource: Pool,
    costs: [{ cost: 1 }],
    actions: [
      { name: 'Inherits', action: ActionType.Bonus },
      { name: 'Overrides', action: ActionType.Standard, costs: [{ cost: 2 }, { cost: 1, resource: SuperiorityDice }] },
    ],
  })

  expect(ability.actions[0]!.costs).toEqual([{ cost: 1 }])
  expect(ability.actions[1]!.costs).toEqual([{ cost: 2 }, { cost: 1, resource: SuperiorityDice.id }])
})
