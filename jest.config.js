global.fetch = require('jest-fetch-mock');

module.exports = {
  "testEnvironment": "node",
  "setupFilesAfterEnv": ["<rootDir>/client/src/tests/enzymeSetup.js"],
  "transformIgnorePatterns": ['<rootDir>/node_modules/']
}
