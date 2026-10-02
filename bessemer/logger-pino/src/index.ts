import { Logger as Pino, pino } from 'pino'
import { LoggerImpl, LogLevel, LogPayload } from '@bessemer/cornerstone/logger'
import { Objects } from '@bessemer/cornerstone'

export class PinoLogger implements LoggerImpl {
  constructor(readonly pino: Pino = createDefaultPino()) {}

  isLevelEnabled(level: LogLevel): boolean {
    return this.pino.isLevelEnabled(level)
  }

  log({ level, name, message, context, error }: LogPayload): void {
    this.pino[level]({ ...(name === null ? {} : { name }), ...context, ...(Objects.isUndefined(error) ? {} : { err: error }) }, message)
  }
}

const createDefaultPino = (): Pino => {
  return pino()
}
