import 'server-only'
import { ApiContext } from '@simulacrum/common/api/api'
import { getSession } from '@simulacrum/application/auth/session'

export const getApiContext = async (): Promise<ApiContext> => {
  const baseUrl = process.env.NEXT_PUBLIC_SIMULACRUM_API_URL
  if (!baseUrl) {
    throw new Error('NEXT_PUBLIC_SIMULACRUM_API_URL is not set')
  }

  const session = await getSession()
  return { baseUrl, accessToken: session?.accessToken ?? null }
}
