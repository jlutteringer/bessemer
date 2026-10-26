import { Prisma } from '@simulacrum/api/generated/prisma/client'
import { CharacterRecord } from '@simulacrum/common/engine/character/character'
import { UserInclude } from '@simulacrum/api/user/user-entity'

export const CharacterInclude = { owner: { include: UserInclude } } as const satisfies Prisma.CharacterInclude

export type CharacterEntity = Prisma.CharacterGetPayload<{ include: typeof CharacterInclude }>

export type StoredCharacterRecord = Omit<CharacterRecord, 'name' | 'level'>
