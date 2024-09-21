import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testMatch: ['**/src/test/**/*.test.ts']
}

export default config
