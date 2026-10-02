import * as Loggers from '@bessemer/cornerstone/logger'
import { ConsoleLogger, LogLevel, LogPayload } from '@bessemer/cornerstone/logger'

const capture = (isLevelEnabled: (level: LogLevel) => boolean = () => true) => {
  const payloads: Array<LogPayload> = []
  Loggers.initialize({ impl: { isLevelEnabled, log: (payload) => payloads.push(payload) } })
  return payloads
}

test('child loggers are named after their parent', () => {
  const payloads = capture()
  Loggers.logger('Bessemer')
    .child('Cache')
    .info(() => 'Hello')

  expect(payloads[0]!.name).toEqual('Bessemer/Cache')
})

test('loggers can have no name', () => {
  const payloads = capture()
  Loggers.logger().info(() => 'Hello')
  Loggers.logger()
    .child('Cache')
    .info(() => 'Hello')
  Loggers.logger('Bessemer')
    .child(null)
    .info(() => 'Hello')

  expect(payloads.map((it) => it.name)).toEqual([null, 'Cache', 'Bessemer'])
})

test('messages are only built for levels the implementation has enabled', () => {
  const payloads = capture((level) => level !== LogLevel.Debug)
  const buildMessage = jest.fn(() => 'Hello')
  Loggers.logger('Bessemer').debug(buildMessage)
  Loggers.logger('Bessemer').info(() => 'Hello')

  expect(buildMessage).not.toHaveBeenCalled()
  expect(payloads.map((it) => it.level)).toEqual([LogLevel.Info])
})

test('the console logger enables its level and above', () => {
  const logger = new ConsoleLogger(LogLevel.Warn)

  expect([LogLevel.Info, LogLevel.Warn, LogLevel.Error].map((it) => logger.isLevelEnabled(it))).toEqual([false, true, true])
})
