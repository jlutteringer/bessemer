import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { fetchAuthSession } from 'aws-amplify/auth/server'
import { runWithAmplifyServerContext } from '@simulacrum/application/auth/amplify'

export async function proxy(request: NextRequest) {
  const response = NextResponse.next()
  response.headers.set('x-url', request.url)

  await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: (context) => fetchAuthSession(context),
  })

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - /api (API routes) other than the session endpoint, which needs refreshed tokens
     * - /_next (Next.js internals)
     * - /_static (static files)
     * - /_vercel (Vercel internals)
     * - /favicon.ico, /sitemap.xml (static files)
     */
    '/((?!api|_next|_static|_vercel|favicon.ico|sitemap.xml).*)',
    '/api/auth/session',
  ],
}
