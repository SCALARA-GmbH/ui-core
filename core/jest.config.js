module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(spec).ts?(x)'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '^test-utils/(.*)': '<rootDir>/test-utils/$1'
  }
};
