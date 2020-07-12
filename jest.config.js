module.exports = {
  verbose: true,
  modulePaths: [
    'src'
  ],
  moduleDirectories: [
    'node_modules'
  ],
  moduleNameMapper: {
    '^@services(.*)$': '<rootDir>/src/app/services$1',
    '^@amcharts/amcharts4(.*)$': '<rootDir>/src/tests/amcharts4$1',
    '^@agm(.*)$': '<rootDir>/src/tests/@agm$1'
  },
  testPathIgnorePatterns: [
    "/node_modules/",
    '<rootDir>/src/tests'
  ]
};
