/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
  rootDir: '.',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testMatch: ['<rootDir>/src/**/!(*integration.*).spec.ts'],
};

export default config;
