export * from '@simulacrum/ruleset/ruleset'
import {
  Ruleset,
  RulesetConfiguration,
  RulesetEntityTypes,
  RulesetExtension,
  RulesetExtensionReference,
  RulesetReference,
} from '@simulacrum/ruleset/ruleset'
import * as ProgressionTables from '@simulacrum/common/engine/progression-table'
import { Assertions, Objects, Results, Uris } from '@bessemer/cornerstone'
import { RulesetEntity, RulesetEntityReference, RulesetEntityType } from '@simulacrum/ruleset/ruleset-entity'
import { Content, RulesetEntities } from '@simulacrum/ruleset'
import { ContentSection } from '@simulacrum/ruleset/content'

export const getRulesetById = (reference: RulesetReference, rulesets: Array<Ruleset>): Ruleset => {
  const ruleset = rulesets.find((it) => it.id === reference)
  Assertions.assertPresent(ruleset, () => `Unable to find Ruleset for Reference: ${reference}`)
  return ruleset
}

export const getEntityType = (reference: RulesetEntityReference): RulesetEntityType => {
  const uri = Uris.parseString(reference)
  const scheme = Results.isFailure(uri) ? null : uri.scheme
  if (Objects.isNil(scheme) || !RulesetEntities.isRulesetEntityType(scheme)) {
    throw new Error(`Unable to find RulesetEntityType for Reference: ${reference}`)
  }

  return scheme
}

export const isEntityType = <T extends RulesetEntityType>(entity: RulesetEntity, type: T): entity is RulesetEntityTypes[T] => {
  return getEntityType(entity.id) === type
}

type EntityIndex = {
  byId: Map<RulesetEntityReference, RulesetEntity>
  byType: Map<RulesetEntityType, Array<RulesetEntity>>
}

const EntityIndexes = new WeakMap<Ruleset, EntityIndex>()

const getEntityIndex = (ruleset: Ruleset): EntityIndex => {
  const existing = EntityIndexes.get(ruleset)
  if (Objects.isPresent(existing)) {
    return existing
  }

  const index: EntityIndex = { byId: new Map(), byType: new Map() }
  const add = (entity: RulesetEntity) => {
    const type = getEntityType(entity.id)
    index.byId.set(entity.id, entity)
    index.byType.set(type, [...(index.byType.get(type) ?? []), entity])
  }

  ruleset.entities.forEach((entity) => {
    add(entity)

    if (isEntityType(entity, RulesetEntities.RulesetEntityType.Ability) && Objects.isPresent(entity.resource)) {
      add(entity.resource)
    }
  })

  ruleset.content.forEach((section) => {
    if (Content.isEmbedded(section)) {
      add({ id: section.id, ...section.content })
    }
  })

  EntityIndexes.set(ruleset, index)
  return index
}

export const getEntities = <T extends RulesetEntityType>(ruleset: Ruleset, type: T): Array<RulesetEntityTypes[T]> => {
  return (getEntityIndex(ruleset).byType.get(type) ?? []) as Array<RulesetEntityTypes[T]>
}

export const findEntityById = <T extends RulesetEntityType>(reference: RulesetEntityReference<T>, ruleset: Ruleset): RulesetEntityTypes[T] | null => {
  return (getEntityIndex(ruleset).byId.get(reference) ?? null) as RulesetEntityTypes[T] | null
}

export const getEntityById = <T extends RulesetEntityType>(reference: RulesetEntityReference<T>, ruleset: Ruleset): RulesetEntityTypes[T] => {
  const entity = findEntityById(reference, ruleset)
  Assertions.assertPresent(entity, () => `Unable to find RulesetEntity for Reference: ${reference}`)
  return entity
}

export const findContentSectionById = (id: RulesetEntityReference, ruleset: Ruleset): ContentSection | null => {
  return ruleset.content.find((it) => it.id === id) ?? null
}

export const getRulesetExtensionById = (reference: RulesetExtensionReference, extensions: Array<RulesetExtension>): RulesetExtension => {
  const extension = extensions.find((it) => it.id === reference)
  Assertions.assertPresent(extension, () => `Unable to find RulesetExtension for Reference: ${reference}`)
  return extension
}

export const getAvailableExtensions = (ruleset: Ruleset, extensions: Array<RulesetExtension>): Array<RulesetExtension> => {
  return extensions.filter((it) => it.ruleset === ruleset.id)
}

export const resolveRuleset = (configuration: RulesetConfiguration, rulesets: Array<Ruleset>, extensions: Array<RulesetExtension>): Ruleset => {
  const ruleset = getRulesetById(configuration.id, rulesets)
  return configuration.extensions.map((it) => getRulesetExtensionById(it, extensions)).reduce(applyExtension, ruleset)
}

const applyExtension = (ruleset: Ruleset, extension: RulesetExtension): Ruleset => {
  Assertions.assert(
    extension.ruleset === ruleset.id,
    () => `RulesetExtension: ${extension.id} extends Ruleset: ${extension.ruleset}, not Ruleset: ${ruleset.id}`
  )

  const merge = <T>(base: Array<T>, additions: Array<T>, getId: (value: T) => string): Array<T> => {
    const duplicate = additions.find((it) => base.some((existing) => getId(existing) === getId(it)))
    Assertions.assert(duplicate === undefined, () => `RulesetExtension: ${extension.id} redefines: ${duplicate && getId(duplicate)}`)
    return [...base, ...additions]
  }

  return {
    ...ruleset,
    entities: merge(ruleset.entities, extension.entities, (it) => it.id),
    progressionTable: ProgressionTables.merge(ruleset.progressionTable, extension.progressionTable),
    content: merge(ruleset.content, extension.content, (it) => it.id),
  }
}

export const isSameConfiguration = (first: RulesetConfiguration, second: RulesetConfiguration): boolean => {
  return (
    first.id === second.id && first.extensions.length === second.extensions.length && first.extensions.every((it) => second.extensions.includes(it))
  )
}
