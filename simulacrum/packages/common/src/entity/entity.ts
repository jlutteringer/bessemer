import Zod from 'zod'
import { Instants, Uuid7 } from '@bessemer/cornerstone'
import { InstantLiteral } from '@bessemer/cornerstone/temporal/instant'
import { UuidV7 } from '@bessemer/cornerstone/uuid/uuid-v7'

export type BaseEntityDto = {
  id: UuidV7
  createdAt: InstantLiteral
  updatedAt: InstantLiteral
}

export const BaseEntityShape = {
  id: Uuid7.Schema,
  createdAt: Instants.SchemaLiteral,
  updatedAt: Instants.SchemaLiteral,
}

export const BaseEntitySchema: Zod.ZodType<BaseEntityDto> = Zod.object(BaseEntityShape)
