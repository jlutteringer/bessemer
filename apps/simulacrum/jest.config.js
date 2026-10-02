/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@simulacrum/(.*)$': '<rootDir>/$1',
    // Mirrors the @bessemer paths in tsconfig.json, which point at each package's src
    '^@bessemer/([^/]+)/(.*)$': '<rootDir>/../../bessemer/$1/src/$2',
    '^@bessemer/([^/]+)$': '<rootDir>/../../bessemer/$1/src',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: ['/node_modules/(?!lodash-es/.*)'],
}
