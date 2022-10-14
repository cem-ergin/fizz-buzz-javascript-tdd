module.exports = {
    preset: "@vue/cli-plugin-unit-jest",
    testMatch: ["**/tests/*.spec.js"],
    transformIgnorePatterns: [
      "node_modules/(?!(@gitlab/(ui|svgs)" + "|bootstrap-vue" + ")/)",
    ],
    moduleNameMapper: {
      "~(.*)$": "<rootDir>/src/$1",
    },
  };
  