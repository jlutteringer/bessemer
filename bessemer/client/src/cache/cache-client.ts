import {
  CacheClientContext,
  CacheDetail,
  CacheDetailSchema,
  CacheEvictRequest,
  CacheEvictRequestSchema,
  CacheSummary,
  CacheSummarySchema,
  CacheWriteRequest,
  CacheWriteRequestSchema,
} from '@bessemer/client/cache/types'
import { Zotch } from '@bessemer/zotch'
import { Results } from '@bessemer/cornerstone'
import { Result } from '@bessemer/cornerstone/result'
import { ZotchError } from '@bessemer/zotch/zotch-error'
import Zod from 'zod'

const CacheApi = Zotch.api({
  fetchCaches: {
    method: 'get',
    path: '/cache',
    response: Zod.array(CacheSummarySchema),
  },
  fetchCacheDetail: {
    method: 'get',
    path: '/cache/:name',
    response: CacheDetailSchema,
    errors: [
      {
        status: 404,
        schema: Zod.unknown(),
      },
    ],
  },
  evictValues: {
    method: 'post',
    path: '/cache/evict',
    response: Zod.unknown(),
    body: CacheEvictRequestSchema,
  },
  writeValues: {
    method: 'post',
    path: '/cache/write',
    response: Zod.unknown(),
    body: CacheWriteRequestSchema,
  },
})

const client = Zotch.client(CacheApi, { baseUrl: '/api' })

// Zotch returns failures as values rather than throwing; this client's callers expect a thrown Error instead
const getOrThrow = <T>(operation: string, result: Result<T, ZotchError>): T => {
  if (Results.isSuccess(result)) {
    return result
  }

  throw new Error(`Cache ${operation} failed: ${result.value.type}`, { cause: result.value })
}

export const fetchCaches = async (context: CacheClientContext): Promise<Array<CacheSummary>> => {
  return getOrThrow('fetchCaches', await client.fetchCaches({}))
}

export const fetchCacheDetail = async (name: string, context: CacheClientContext): Promise<CacheDetail | null> => {
  const result = await client.fetchCacheDetail({ params: { name } })
  if (Results.isFailure(result) && Zotch.isStructuredError(result.value) && result.value.status === 404) {
    return null
  }

  return getOrThrow('fetchCacheDetail', result)
}

export const evictValues = async (request: CacheEvictRequest, context: CacheClientContext): Promise<void> => {
  getOrThrow('evictValues', await client.evictValues({ body: request }))
}

export const writeValues = async (request: CacheWriteRequest, context: CacheClientContext): Promise<void> => {
  getOrThrow('writeValues', await client.writeValues({ body: request }))
}
