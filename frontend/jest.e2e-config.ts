import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  rootDir: './e2e-tests/',
  testRegex: '.test.ts$',
};

export default config;
