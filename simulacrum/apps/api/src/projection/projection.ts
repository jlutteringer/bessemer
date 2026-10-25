import { Arrays, Assertions, Maps } from '@bessemer/cornerstone'
import { EntityId } from '@simulacrum/common/entity/entity'
import { ApplicationContext } from '@simulacrum/api/context'

export type ProjectionEntity = {
  id: string
}

export type ProjectionTarget = {
  id: EntityId
}

export type Projector<EntityType extends ProjectionEntity, ProjectionType extends ProjectionTarget> = (
  entities: Array<EntityType>,
  context: ApplicationContext
) => Promise<Array<ProjectionType>>

export const projector = <EntityType extends ProjectionEntity, ProjectionType extends ProjectionTarget>(
  mapper: (entities: Array<EntityType>, context: ApplicationContext) => Promise<Array<ProjectionType>>
): Projector<EntityType, ProjectionType> => {
  return async (entities, context) => mapper(entities, context)
}

export const mappingProjector = <EntityType extends ProjectionEntity, ProjectionType extends ProjectionTarget>(
  mapper: (entity: EntityType) => ProjectionType
): Projector<EntityType, ProjectionType> => {
  return projector(async (entities) => entities.map(mapper))
}

export type MapProjectionOptions = {
  dedupe: boolean
}

export const mapProjection = async <EntityType extends ProjectionEntity, ProjectionType extends ProjectionTarget>(
  entities: Array<EntityType>,
  projector: Projector<EntityType, ProjectionType>,
  context: ApplicationContext,
  options?: MapProjectionOptions
): Promise<Map<EntityType, ProjectionType>> => {
  if (Arrays.isEmpty(entities)) {
    return new Map()
  }

  const projectedEntities = options?.dedupe ?? true ? Arrays.dedupeBy(entities, (it) => it.id) : entities
  const projectedResults = await projector(projectedEntities, context)

  return Maps.collectValues(entities, (entity) => {
    const result = projectedResults.find((it) => it.id === entity.id)
    Assertions.assertPresent(result)
    return result
  })
}

export const projectOne = async <EntityType extends ProjectionEntity, ProjectionType extends ProjectionTarget>(
  entity: EntityType,
  projector: Projector<EntityType, ProjectionType>,
  context: ApplicationContext
): Promise<ProjectionType> => {
  const [result] = await projector([entity], context)
  Assertions.assertPresent(result)
  return result
}
