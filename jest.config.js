/* eslint-env node */

module.exports = async () => {
  return {
    verbose: true,
    preset: 'ts-jest',
    setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
    testEnvironment: 'jsdom',
  };
};
