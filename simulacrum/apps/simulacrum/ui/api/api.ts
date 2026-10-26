import { ApiContext } from '@simulacrum/common/api/api'

export const getClientApiContext = (): ApiContext => {
  const baseUrl = process.env.NEXT_PUBLIC_SIMULACRUM_API_URL
  if (!baseUrl) {
    throw new Error('NEXT_PUBLIC_SIMULACRUM_API_URL is not set')
  }

  return { baseUrl, accessToken: null }
}
