import Zod from 'zod'
import { Instants } from '@bessemer/cornerstone'
import { InstantLiteral } from '@bessemer/cornerstone/temporal/instant'
import * as UuidV7 from '@bessemer/cornerstone/uuid/uuid-v7'
import { UuidV7 as UuidV7Type } from '@bessemer/cornerstone/uuid/uuid-v7'

export type EntityId = UuidV7Type

export type BaseEntityDto = {
  id: EntityId
  createdAt: InstantLiteral
  updatedAt: InstantLiteral
}

export const BaseEntityShape = {
  id: UuidV7.Schema,
  createdAt: Instants.SchemaLiteral,
  updatedAt: Instants.SchemaLiteral,
}

export const BaseEntitySchema: Zod.ZodType<BaseEntityDto> = Zod.object(BaseEntityShape)
