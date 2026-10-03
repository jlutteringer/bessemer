import 'server-only'
import { PropertyRecord } from '@bessemer/cornerstone/property'
import { Content, Properties } from '@bessemer/cornerstone'
import { ConsoleLogger, LogLevel } from '@bessemer/cornerstone/logger'
import { ApplicationContext, ApplicationOptions } from '@simulacrum/application'
import { TextContentNormalizer } from '@bessemer/core/codex/normalizer'
import { CoreRouteErrorHandler } from '@bessemer/core/route'
import { ApplicationContent } from '@simulacrum/application/content'

const contentProvider = Content.staticProvider<ApplicationContext>(ApplicationContent, [TextContentNormalizer])

// JOHN
export const ApplicationProperties: PropertyRecord<ApplicationOptions> = Properties.properties({
  logger: {
    impl: new ConsoleLogger(LogLevel.Trace),
  },
  route: {
    errorHandler: CoreRouteErrorHandler,
  },
  codex: {
    provider: contentProvider,
  },
  public: { test: 'hello' },
  // FUTURE enable for redis
  // redis: {
  //   connectionUrl: 'localhost:6379',
  // },
} as any)
