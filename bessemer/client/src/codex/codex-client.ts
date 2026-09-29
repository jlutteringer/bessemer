import { ContentData, ContentDataSchema, ContentKey, ContentSector, ContentType } from '@bessemer/cornerstone/content'
import { CodexClientContext, FetchContentOptions } from '@bessemer/client/codex/types'
import { Zotch } from '@bessemer/zotch'
import { Results, Urls } from '@bessemer/cornerstone'
import Zod from 'zod'

const CodexApi = Zotch.api({
  fetchContentByKey: {
    method: 'get',
    path: '/codex/key/:key',
    response: ContentDataSchema,
    queries: {
      type: Zod.string().optional(),
      tags: Zod.string().optional(),
    },
    errors: [
      {
        status: 404,
        schema: Zod.unknown(),
      },
    ],
  },
})

const client = Zotch.client(CodexApi, { baseUrl: '/api' })

// FUTURE fully implement me
export const fetchContentByKey = async <Type extends ContentType>(
  key: ContentKey,
  context: CodexClientContext,
  options?: FetchContentOptions<Type>
): Promise<ContentData<Type> | null> => {
  const result = await client.fetchContentByKey({ params: { key } })
  if (Results.isSuccess(result)) {
    // FUTURE ContentDataSchema doesn't include `id`, which ContentData requires, so this cast papers over the gap
    return result as unknown as ContentData<Type>
  }

  if (Zotch.isStructuredError(result.value) && result.value.status === 404) {
    return null
  }

  throw new Error(`Codex fetchContentByKey failed: ${result.value.type}`, { cause: result.value })

  const response = await fetch(
    Urls.toLiteral({
      location: {
        path: `/api/codex/key/${key}`,
        parameters: {
          ...(options?.type && { type: options?.type }),
          tags: JSON.stringify(options?.tags ?? []),
        },
      },
    })
  )

  if (response.status === 404) {
    return null
  }
  if (response.status !== 200) {
    throw new Error('oh noes')
  }

  const data = (await response.json()) as ContentData<Type>
  return data
}

export const fetchContentBySector = async <Type extends ContentType>(
  sector: ContentSector,
  context: CodexClientContext,
  options?: FetchContentOptions<Type>
): Promise<Array<ContentData<Type>>> => {
  const response = await fetch(
    Urls.toLiteral({
      location: {
        path: `/api/codex/sector/${sector}`,
        parameters: {
          ...(options?.type && { type: options?.type }),
          tags: JSON.stringify(options?.tags ?? []),
        },
      },
    })
  )

  if (response.status === 404) {
    return []
  }
  if (response.status !== 200) {
    throw new Error('oh noes')
  }

  const data = (await response.json()) as Array<ContentData<Type>>
  return data
}
