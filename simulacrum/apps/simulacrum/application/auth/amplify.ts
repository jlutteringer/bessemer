import { createServerRunner, NextServer } from '@aws-amplify/adapter-nextjs'

const origin = process.env.AMPLIFY_APP_ORIGIN ?? ''

const runner: NextServer.CreateServerRunnerOutput = createServerRunner({
  config: {
    Auth: {
      Cognito: {
        userPoolId: process.env.COGNITO_USER_POOL_ID ?? '',
        userPoolClientId: process.env.COGNITO_CLIENT_ID ?? '',
        loginWith: {
          oauth: {
            domain: process.env.COGNITO_DOMAIN?.replace(/^https:\/\//, '') ?? '',
            scopes: ['openid', 'email', 'profile'],
            redirectSignIn: [`${origin}/api/auth/sign-in-callback`],
            redirectSignOut: [`${origin}/api/auth/sign-out-callback`],
            responseType: 'code',
          },
        },
      },
    },
  },
  runtimeOptions: {
    cookies: {
      sameSite: 'lax',
      maxAge: 30 * 24 * 60 * 60,
    },
  },
})

export const runWithAmplifyServerContext: NextServer.RunOperationWithContext = runner.runWithAmplifyServerContext
export const createAuthRouteHandlers: NextServer.CreateServerRunnerOutput['createAuthRouteHandlers'] = runner.createAuthRouteHandlers
