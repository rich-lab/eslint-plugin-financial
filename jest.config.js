module.exports = {
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  },
  testMatch: [
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testPathIgnorePatterns: [],
  coveragePathIgnorePatterns: [],
  collectCoverageFrom: [
    'src/**/*.ts'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
