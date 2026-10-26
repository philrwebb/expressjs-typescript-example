export default {
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],
    extensionsToTreatAsEsm: ['.ts'],
    transform: {
        '^.+\\.ts$': 'babel-jest',
    },
};