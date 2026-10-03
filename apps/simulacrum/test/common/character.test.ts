import { TestHarness } from '@simulacrum/test/test-harness'
import { CharacterOptions, Characters } from '@simulacrum/common/character'
import { Dnd5e, SelectClassLevel } from '@simulacrum/rulesets/dnd-5e'
import * as Fighter from '@simulacrum/rulesets/dnd-5e/class/class-fighter'
import { Archery, SelectFightingStyle } from '@simulacrum/rulesets/dnd-5e/archetype/fighting-style'
import { HitPointResourcePool } from '@simulacrum/rulesets/dnd-5e/resource-pool'

// Abilities that take a loadout slot (e.g. weapon masteries) are left out of the counts, since a Fighter has access to all of them
test('Test Character Choices and Selections', () => {
  const ruleset = Dnd5e
  let character = Characters.buildCharacterDefinition(TestHarness.CommonerLevel3, ruleset)

  // We should have class, background, and species choices at level one, with 12 options for the 12 classes
  expect(character.choices[1]!.length).toBe(3)
  expect(character.choices[1]![0]!.values.length).toBe(12)

  expect(character.characteristics.strength!.value).toBe(16)
  expect(character.characteristics.strengthModifier!.value).toBe(3)

  expect(character.characteristics.dexterity!.value).toBe(14)
  expect(character.characteristics.dexterityModifier!.value).toBe(2)

  expect(character.characteristics.constitution!.value).toBe(15)
  expect(character.characteristics.constitutionModifier!.value).toBe(2)

  expect(character.characteristics.wisdom!.value).toBe(11)
  expect(character.characteristics.wisdomModifier!.value).toBe(0)

  expect(character.characteristics.intelligence!.value).toBe(12)
  expect(character.characteristics.intelligenceModifier!.value).toBe(1)

  expect(character.characteristics.charisma!.value).toBe(8)
  expect(character.characteristics.charismaModifier!.value).toBe(-1)

  expect(character.characteristics.movementSpeed!.value).toBe(30)
  expect(character.characteristics.initiative!.value).toBe(2)

  expect(character.abilities.filter((it) => it.loadout === null).length).toBe(4)

  character = Characters.selectOption(character, CharacterOptions.buildSelection(SelectClassLevel, Fighter.Level1), ruleset)
  expect(CharacterOptions.isSelected(character.selections, SelectClassLevel, Fighter.Level1)).toBe(true)

  expect(character.abilities.filter((it) => it.loadout === null).length).toBe(5)

  character = Characters.selectOption(character, CharacterOptions.buildSelection(SelectFightingStyle, Archery), ruleset)
  expect(CharacterOptions.isSelected(character.selections, SelectFightingStyle, Archery)).toBe(true)

  character = Characters.selectOption(character, CharacterOptions.buildSelection(SelectClassLevel, Fighter.Level2), ruleset)
  expect(CharacterOptions.isSelected(character.selections, SelectClassLevel, Fighter.Level2)).toBe(true)

  // Fighter (2) grants Action Surge
  expect(character.abilities.filter((it) => it.loadout === null).length).toBe(6)

  character = Characters.selectOption(character, CharacterOptions.buildSelection(SelectClassLevel, Fighter.Level3), ruleset)
  expect(CharacterOptions.isSelected(character.selections, SelectClassLevel, Fighter.Level3)).toBe(true)

  expect(character.characteristics.hitPoints!.value).toBe(28)
  expect(character.resources[HitPointResourcePool.id]!.value).toBe(28)
})
