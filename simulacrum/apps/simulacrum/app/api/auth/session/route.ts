import { NextResponse } from 'next/server'
import { getSession } from '@simulacrum/application/auth/session'

export const GET = async () => {
  const session = await getSession()
  return NextResponse.json({ user: session?.user ?? null })
}
