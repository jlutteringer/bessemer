import { Ruleset } from '@simulacrum/common/ruleset'
import { Dnd5e } from '@simulacrum/rulesets/dnd-5e'
import { KhydrianDrift } from '@simulacrum/rulesets/khydrian-drift'
import { Objects, Tags, Urls } from '@bessemer/cornerstone'
import { serverOnlyTest } from '@simulacrum/common/server-only-test'
import { BessemerModule, ClientContextType } from '@bessemer/framework'
import { headers } from 'next/headers'
import { FoundryApplicationContext, FoundryApplicationModule, FoundryClientContext, FoundryOptions } from '@bessemer/foundry/application'
import { RedisApplicationContext, RedisApplicationModule, RedisOptions } from '@bessemer/redis/application'
import { DEPRECATEDDeepPartial } from '@bessemer/cornerstone/types'

export type ApplicationOptions = FoundryOptions &
  RedisOptions & {
    public: {
      test: string
    }
  }

export type ApplicationContext = FoundryApplicationContext &
  RedisApplicationContext & {
    serverOnlyTest: () => string
    client: {
      runtime: {
        test: () => string
      }
      rulesets: Array<Ruleset>
    }
  }

export type ClientContext = ClientContextType<ApplicationContext> & FoundryClientContext & {}

export const ApplicationModule: BessemerModule<ApplicationContext, ApplicationOptions> = {
  tags: async (tags) => {
    // TODO this is all janky test code
    const headersList = await headers()
    const urlString = headersList.get('x-url')

    if (Objects.isNil(urlString)) {
      return tags
    }

    const url = Urls.from(urlString)
    if (url.location.path === '/subscription') {
      return [...tags, Tags.tag('Tenant', 'subscription')]
    }

    return tags
  },
  configure: async (options) => {
    // FUTURE concerning cast here...
    const application: DEPRECATEDDeepPartial<ApplicationContext> = {
      serverOnlyTest,
      client: { rulesets: [Dnd5e, KhydrianDrift] as Array<DEPRECATEDDeepPartial<Ruleset>> },
    }
    return application
  },
  dependencies: [FoundryApplicationModule, RedisApplicationModule],
}
