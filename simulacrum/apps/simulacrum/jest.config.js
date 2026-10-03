/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    // Mirrors the paths in tsconfig.json, which point at each package's src
    '^@simulacrum/(ruleset-dnd5e|ruleset-khydrian-drift|ruleset|common)/(.*)$': '<rootDir>/../../packages/$1/src/$2',
    '^@simulacrum/(ruleset-dnd5e|ruleset-khydrian-drift|ruleset|common)$': '<rootDir>/../../packages/$1/src',
    '^@simulacrum/(.*)$': '<rootDir>/$1',
    '^@bessemer/([^/]+)/(.*)$': '<rootDir>/../../../bessemer/$1/src/$2',
    '^@bessemer/([^/]+)$': '<rootDir>/../../../bessemer/$1/src',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: ['/node_modules/(?!lodash-es/.*)'],
}
