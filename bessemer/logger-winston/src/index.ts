import { createLogger, format, Logger as Winston, transports } from 'winston'
import { LoggerImpl, LogLevel, LogPayload } from '@bessemer/cornerstone/logger'
import { Objects } from '@bessemer/cornerstone'

const WinstonLevels: Record<LogLevel, string> = {
  [LogLevel.Trace]: 'debug',
  [LogLevel.Debug]: 'debug',
  [LogLevel.Info]: 'info',
  [LogLevel.Warn]: 'warn',
  [LogLevel.Error]: 'error',
  [LogLevel.Fatal]: 'error',
}

export class WinstonLogger implements LoggerImpl {
  constructor(readonly winston: Winston = createDefaultWinston()) {}

  isLevelEnabled(level: LogLevel): boolean {
    return this.winston.isLevelEnabled(WinstonLevels[level])
  }

  log({ level, name, message, context, error }: LogPayload): void {
    this.winston.log({
      level: WinstonLevels[level],
      message,
      ...(name === null ? {} : { name }),
      ...context,
      ...(Objects.isUndefined(error) ? {} : { error: serializeError(error) }),
    })
  }
}

const serializeError = (error: unknown): unknown => {
  return error instanceof Error ? { name: error.name, message: error.message, stack: error.stack } : error
}

const createDefaultWinston = (): Winston => {
  return createLogger({
    level: 'info',
    format: format.combine(format.timestamp(), format.json()),
    transports: [new transports.Console()],
  })
}
