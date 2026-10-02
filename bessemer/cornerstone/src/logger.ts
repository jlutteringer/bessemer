import * as GlobalVariables from '@bessemer/cornerstone/global-variable'
import * as Lazy from '@bessemer/cornerstone/lazy'
import { LazyValue } from '@bessemer/cornerstone/lazy'
import { UnknownRecord } from 'type-fest'
import * as Objects from '@bessemer/cornerstone/object'

export enum LogLevel {
  Trace = 'trace',
  Debug = 'debug',
  Info = 'info',
  Warn = 'warn',
  Error = 'error',
  Fatal = 'fatal',
}

const LogLevelSeverity: Record<LogLevel, number> = {
  [LogLevel.Trace]: 1,
  [LogLevel.Debug]: 2,
  [LogLevel.Info]: 3,
  [LogLevel.Warn]: 4,
  [LogLevel.Error]: 5,
  [LogLevel.Fatal]: 6,
}

export type LogPayload = {
  level: LogLevel
  name: string | null
  message: string
  context: UnknownRecord
  error?: unknown
}

// Writes log payloads to a logging backend (e.g. pino). The backend owns level filtering, so its level configuration decides what
// gets logged. Messages are only built for levels the backend reports as enabled.
export type LoggerImpl = {
  isLevelEnabled: (level: LogLevel) => boolean
  log: (payload: LogPayload) => void
}

export type LoggerOptions = {
  impl?: LoggerImpl
}

type LogOptions = { error?: unknown; context?: UnknownRecord }
type LogFunction = (message: LazyValue<string>, options?: LogOptions) => void

export class ConsoleLogger implements LoggerImpl {
  constructor(readonly level: LogLevel = LogLevel.Info) {}

  private static readonly Methods: Record<LogLevel, (...data: Array<unknown>) => void> = {
    [LogLevel.Trace]: console.debug,
    [LogLevel.Debug]: console.debug,
    [LogLevel.Info]: console.info,
    [LogLevel.Warn]: console.warn,
    [LogLevel.Error]: console.error,
    [LogLevel.Fatal]: console.error,
  }

  isLevelEnabled(level: LogLevel): boolean {
    return LogLevelSeverity[level] >= LogLevelSeverity[this.level]
  }

  log({ level, name, message, context, error }: LogPayload): void {
    const extras = [Objects.isEmpty(context) ? undefined : context, error].filter((it) => !Objects.isUndefined(it))
    const prefix = name === null ? `[${level.toUpperCase()}]` : `[${level.toUpperCase()}] ${name} -`
    ConsoleLogger.Methods[level](`${prefix} ${message}`, ...extras)
  }
}

const GlobalLoggerImpl = GlobalVariables.createGlobalVariable<LoggerImpl>('GlobalLogger', () => new ConsoleLogger())

export const initialize = (options?: LoggerOptions): void => {
  if (options?.impl) {
    GlobalLoggerImpl.setValue(options.impl)
  }
}

export class Logger {
  constructor(readonly name: string | null = null, readonly context: UnknownRecord = {}) {}

  child = (name: string | null, context: UnknownRecord = {}): Logger => {
    return new Logger(joinNames(this.name, name), { ...this.context, ...context })
  }

  private write = (level: LogLevel, message: LazyValue<string>, options?: LogOptions): void => {
    const impl = GlobalLoggerImpl.getValue()
    if (!impl.isLevelEnabled(level)) {
      return
    }

    impl.log({
      level,
      name: this.name,
      message: Lazy.evaluate(message),
      context: { ...this.context, ...options?.context },
      error: options?.error,
    })
  }

  trace: LogFunction = (message, options) => this.write(LogLevel.Trace, message, options)
  debug: LogFunction = (message, options) => this.write(LogLevel.Debug, message, options)
  info: LogFunction = (message, options) => this.write(LogLevel.Info, message, options)
  warn: LogFunction = (message, options) => this.write(LogLevel.Warn, message, options)
  error: LogFunction = (message, options) => this.write(LogLevel.Error, message, options)
  fatal: LogFunction = (message, options) => this.write(LogLevel.Fatal, message, options)
}

const joinNames = (parent: string | null, child: string | null): string | null => {
  return parent === null ? child : child === null ? parent : `${parent}/${child}`
}

export const logger = (name: string | null = null, context: UnknownRecord = {}): Logger => {
  return new Logger(name, context)
}
