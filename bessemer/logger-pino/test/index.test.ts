import { pino } from 'pino'
import { Writable } from 'stream'
import { PinoLogger } from '@bessemer/logger-pino'
import { LogLevel } from '@bessemer/cornerstone/logger'

const capture = () => {
  const lines: Array<Record<string, unknown>> = []
  const stream = new Writable({
    write(chunk, _, callback) {
      lines.push(JSON.parse(chunk.toString()))
      callback()
    },
  })
  return { lines, logger: new PinoLogger(pino({ level: 'trace' }, stream)) }
}

test('writes the level, name, message, and context', () => {
  const { lines, logger } = capture()
  logger.log({ level: LogLevel.Warn, name: 'Bessemer/Cache', message: 'Cache miss', context: { key: 'abc' } })

  expect(lines).toHaveLength(1)
  expect(lines[0]).toMatchObject({ level: 40, name: 'Bessemer/Cache', msg: 'Cache miss', key: 'abc' })
})

test('writes errors with pino’s error serializer', () => {
  const { lines, logger } = capture()
  logger.log({ level: LogLevel.Error, name: 'Bessemer', message: 'Failed', context: {}, error: new Error('Boom') })

  expect(lines[0]).toMatchObject({ level: 50, err: { message: 'Boom' } })
})

test('leaves out the name for loggers without one', () => {
  const { lines, logger } = capture()
  logger.log({ level: LogLevel.Info, name: null, message: 'Started', context: {} })

  expect(lines[0]).not.toHaveProperty('name')
})

test('uses pino’s level configuration', () => {
  const logger = new PinoLogger(pino({ level: 'warn' }))

  expect([LogLevel.Info, LogLevel.Warn, LogLevel.Fatal].map((it) => logger.isLevelEnabled(it))).toEqual([false, true, true])
})
