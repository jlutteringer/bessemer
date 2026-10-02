import { createLogger, format } from 'winston'
import Transport from 'winston-transport'
import { WinstonLogger } from '@bessemer/logger-winston'
import { LogLevel } from '@bessemer/cornerstone/logger'

const capture = () => {
  const lines: Array<Record<string, unknown>> = []
  const transport = new (class extends Transport {
    log(info: Record<string, unknown>, callback: () => void) {
      lines.push(info)
      callback()
    }
  })()
  return { lines, logger: new WinstonLogger(createLogger({ level: 'debug', format: format.json(), transports: [transport] })) }
}

test('writes the level, name, message, and context', () => {
  const { lines, logger } = capture()
  logger.log({ level: LogLevel.Warn, name: 'Bessemer/Cache', message: 'Cache miss', context: { key: 'abc' } })

  expect(lines).toHaveLength(1)
  expect(lines[0]).toMatchObject({ level: 'warn', name: 'Bessemer/Cache', message: 'Cache miss', key: 'abc' })
})

test('maps trace and fatal onto winston levels', () => {
  const { lines, logger } = capture()
  logger.log({ level: LogLevel.Trace, name: 'Bessemer', message: 'Trace', context: {} })
  logger.log({ level: LogLevel.Fatal, name: 'Bessemer', message: 'Fatal', context: {} })

  expect(lines.map((it) => it.level)).toEqual(['debug', 'error'])
})

test('serializes errors', () => {
  const { lines, logger } = capture()
  logger.log({ level: LogLevel.Error, name: 'Bessemer', message: 'Failed', context: {}, error: new Error('Boom') })

  expect(lines[0]).toMatchObject({ error: { name: 'Error', message: 'Boom' } })
})

test('leaves out the name for loggers without one', () => {
  const { lines, logger } = capture()
  logger.log({ level: LogLevel.Info, name: null, message: 'Started', context: {} })

  expect(lines[0]).not.toHaveProperty('name')
})

test('uses winston’s level configuration', () => {
  const logger = new WinstonLogger(createLogger({ level: 'warn' }))

  expect([LogLevel.Info, LogLevel.Warn, LogLevel.Fatal].map((it) => logger.isLevelEnabled(it))).toEqual([false, true, true])
})
