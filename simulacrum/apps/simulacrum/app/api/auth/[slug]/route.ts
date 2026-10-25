import { createAuthRouteHandlers } from '@simulacrum/application/auth/amplify'

// Handles /api/auth/sign-in, sign-up, sign-in-callback, sign-out and sign-out-callback
export const GET = createAuthRouteHandlers()
