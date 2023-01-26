/** @type {import('ts-jest').JestConfigWithTsJest} */

const { defaults } = require('jest-config');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)?$': "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleFileExtensions: [
    'tsx',
    ...defaults.moduleFileExtensions
 ],
 testPathIgnorePatterns: ["/node_modules/"],
 moduleNameMapper: {
  "\\.(css|scss)$": "identity-obj-proxy"
},
globals: {
  __DEV__: true
},
automock:true,
moduleDirectories: ["node_modules", "src"],
 transformIgnorePatterns: [
  "node_modules/(?!(jest-)?react-native|react-native|@react-native-community|@react-native|@react-navigation)"]
};