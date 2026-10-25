import { Config } from '@simulacrum/api/config'
import { prisma } from '@simulacrum/api/db'
import { createApp } from '@simulacrum/api/app'

const server = createApp().listen(Config.PORT, () => {
  console.log(`Simulacrum API listening on http://localhost:${Config.PORT}`)
})

const shutdown = () => {
  server.close(async () => {
    await prisma.$disconnect()
    process.exit(0)
  })
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)
