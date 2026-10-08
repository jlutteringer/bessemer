import { Dnd5e } from '@simulacrum/ruleset-dnd5e'
import { CharacterRecord } from '@simulacrum/engine/character/character'
import { ProgressionTables } from '@simulacrum/engine'
import { ApplicationContext } from '@simulacrum/application'
import { Ulids } from '@bessemer/cornerstone'

// TODO
export const buildTestContext = (): ApplicationContext => {
  return {
    id: '',
    global: {
      cache: null!,
      advisoryLockProvider: null!,
      buildId: '123',
      instanceId: Ulids.generate(),
    },
    tiptapExtensions: [],
    route: {
      errorHandler: null!,
    },
    serverOnlyTest: () => 'asdasd',
    client: {
      correlationId: '123',
      rulesets: [Dnd5e],
      rulesetExtensions: [],
      tags: [],
      environment: 'test',
      runtime: { test: () => 'hello', codex: { renderers: [] } },
    },
  }
}

export const CommonerLevel1: CharacterRecord = {
  ruleset: { id: Dnd5e.id, extensions: [] },
  name: 'Bob the Commoner',
  level: 1,
  initialValues: {
    strength: 16,
    dexterity: 14,
    constitution: 15,
    wisdom: 11,
    intelligence: 12,
    charisma: 8,
  },
  selections: ProgressionTables.empty(1),
  selectedAbilities: [],
}

export const CommonerLevel3: CharacterRecord = {
  ruleset: { id: Dnd5e.id, extensions: [] },
  name: 'Bob the Commoner',
  level: 3,
  initialValues: {
    strength: 16,
    dexterity: 14,
    constitution: 15,
    wisdom: 11,
    intelligence: 12,
    charisma: 8,
  },
  selections: ProgressionTables.empty(3),
  selectedAbilities: [],
}

export const FighterLevel2: CharacterRecord = {
  ruleset: { id: Dnd5e.id, extensions: [] },
  name: 'Bob the Fighter',
  level: 2,
  initialValues: {
    strength: 16,
    dexterity: 14,
    constitution: 15,
    wisdom: 11,
    intelligence: 12,
    charisma: 8,
  },
  selections: [],
  selectedAbilities: [],
}
