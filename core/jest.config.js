module.exports = {
  collectCoverageFrom: [
    'src/components/**/*.(ts|tsx|js|jsx)',
    'src/**/{!(stories),}.(ts|tsx|js|jsx)'
  ],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(spec).ts?(x)'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '^test-utils/(.*)': '<rootDir>/test-utils/$1'
  }
};
