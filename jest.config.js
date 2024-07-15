// jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^test(.*)$': '<rootDir>/__test__/$1'
    },
    setupFilesAfterEnv: ['./src/setupTests.ts']
};
