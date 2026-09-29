import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  typescript:
    process.env.NODE_ENV === 'production'
      ? {
          tsconfigPath: './tsconfig.build.json',
        }
      : {},

  serverExternalPackages: ['pino'],

  generateBuildId: async () => {
    const timestamp = Date.now()
    const random = Math.random().toString(36).substring(2, 8)
    return `${timestamp}-${random}`
  },
}

export default nextConfig
