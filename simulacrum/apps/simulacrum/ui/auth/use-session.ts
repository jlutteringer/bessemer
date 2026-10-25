'use client'

import { useQuery } from '@tanstack/react-query'

export type SessionUser = {
  sub: string
  email: string
  name: string | null
}

export const useSessionUser = () => {
  const { data, isPending } = useQuery({
    queryKey: ['session'],
    queryFn: async (): Promise<SessionUser | null> => {
      const response = await fetch('/api/auth/session')
      const body = await response.json()
      return body.user
    },
  })
  return { user: data ?? null, isPending }
}
