export default {
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],
    testMatch: ['**/*.test.mjs'],
    verbose: true,
    collectCoverage: true,
    coverageReporters: ['text', 'lcov'],
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1'
    },
}