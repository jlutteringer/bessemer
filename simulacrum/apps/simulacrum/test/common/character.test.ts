import { TestHarness } from '@simulacrum/test/test-harness'
import { Dnd5e, SelectClassLevel } from '@simulacrum/ruleset-dnd5e'
import * as Fighter from '@simulacrum/ruleset-dnd5e/class/class-fighter'
import { Archery, SelectFightingStyle } from '@simulacrum/ruleset-dnd5e/tag/fighting-style'
import { HitPointResourcePool } from '@simulacrum/ruleset-dnd5e/resource-pool'
import { CharacterOptions, Characters } from '@simulacrum/common/engine/engine'
import { CharacterSheet } from '@simulacrum/common/engine/character/character'
import { RulesetEntities } from '@simulacrum/ruleset'
import { RulesetEntityType } from '@simulacrum/ruleset/ruleset-entity'

const characteristicValue = (character: CharacterSheet, reference: string): number | undefined => {
  return character.characteristics[RulesetEntities.buildReference(RulesetEntityType.Characteristic, reference)]?.value
}

// Abilities that take a loadout slot (e.g. weapon masteries) are left out of the counts, since a Fighter has access to all of them
test('Test Character Choices and Selections', () => {
  const ruleset = Dnd5e
  let character = Characters.buildCharacterDefinition(TestHarness.CommonerLevel3, ruleset)

  // We should have class, background, and species choices at level one, with 12 options for the 12 classes
  expect(character.choices[1]!.length).toBe(3)
  expect(character.choices[1]![0]!.values.length).toBe(12)

  expect(characteristicValue(character, 'strength')).toBe(16)
  expect(characteristicValue(character, 'strength-modifier')).toBe(3)

  expect(characteristicValue(character, 'dexterity')).toBe(14)
  expect(characteristicValue(character, 'dexterity-modifier')).toBe(2)

  expect(characteristicValue(character, 'constitution')).toBe(15)
  expect(characteristicValue(character, 'constitution-modifier')).toBe(2)

  expect(characteristicValue(character, 'wisdom')).toBe(11)
  expect(characteristicValue(character, 'wisdom-modifier')).toBe(0)

  expect(characteristicValue(character, 'intelligence')).toBe(12)
  expect(characteristicValue(character, 'intelligence-modifier')).toBe(1)

  expect(characteristicValue(character, 'charisma')).toBe(8)
  expect(characteristicValue(character, 'charisma-modifier')).toBe(-1)

  expect(characteristicValue(character, 'movement-speed')).toBe(30)
  expect(characteristicValue(character, 'initiative')).toBe(2)

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

  expect(characteristicValue(character, 'hit-points')).toBe(28)
  expect(character.resources[HitPointResourcePool.id]!.value).toBe(28)
})
