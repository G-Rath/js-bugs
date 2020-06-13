/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  globals1: {
    'ts-jest': {
      isolatedModules: true
    }
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx', 'node'],
  resetMocks: true,
  restoreMocks: true,
  setupFilesAfterEnv: ['./test/setupExpectEachTestHasAssertions.ts'],
  testEnvironment: 'node',
  transform: {
    '\\.tsx?': 'ts-jest'
  }
};

module.exports = config;
