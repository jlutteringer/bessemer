import 'server-only'
import { cookies } from 'next/headers'
import { fetchAuthSession } from 'aws-amplify/auth/server'
import { runWithAmplifyServerContext } from '@simulacrum/application/auth/amplify'

export type SessionUser = {
  sub: string
  email: string
  name: string | null
}

export type Session = {
  user: SessionUser
  accessToken: string
}

export const getSession = async (): Promise<Session | null> => {
  const { tokens } = await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    operation: (context) => fetchAuthSession(context),
  })
  if (!tokens?.idToken) {
    return null
  }

  const { sub, email, given_name, family_name } = tokens.idToken.payload
  return {
    user: {
      sub: String(sub),
      email: String(email),
      name: [given_name, family_name].filter((it) => typeof it === 'string').join(' ') || null,
    },
    accessToken: tokens.accessToken.toString(),
  }
}
